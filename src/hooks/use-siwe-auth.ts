"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useAccount, useSignMessage, useDisconnect } from "wagmi";
import { SiweMessage } from "siwe";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useSiweAuth() {
  const { data: session, status } = useSession();
  const { address, isConnected, chainId } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { disconnect } = useDisconnect();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const isAuthenticated = !!session?.address;
  const isConnecting = status === "loading";

  // Debug logging
  useEffect(() => {
    console.log("SIWE Auth State:", {
      session,
      status,
      address,
      isConnected,
      isAuthenticated,
      sessionAddress: session?.address
    });
  }, [session, status, address, isConnected, isAuthenticated]);

  const signInWithEthereum = async () => {
    try {
      setIsLoading(true);
      
      if (!address || !isConnected) {
        throw new Error("Wallet not connected");
      }

      // Create SIWE message
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: "Sign in with Ethereum to Paylynk",
        uri: window.location.origin,
        version: "1",
        chainId: chainId || 1,
        nonce: generateNonce(),
      });

      const messageString = message.prepareMessage();
      
      // Sign the message
      const signature = await signMessageAsync({
        message: messageString,
      });

      // Sign in with NextAuth
      const result = await signIn("credentials", {
        message: JSON.stringify(message),
        signature,
        redirect: false,
      });

      console.log("Sign in result:", result);

      if (result?.ok) {
        router.push("/dashboard");
      } else {
        throw new Error("Authentication failed");
      }
    } catch (error) {
      console.error("SIWE sign in failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    // Sign out from NextAuth session
    await signOut({ redirect: false });
    
    // Disconnect the wallet
    disconnect();
    
    // Redirect to home page
    router.push("/");
  };

  return {
    session,
    isAuthenticated,
    isConnecting: isConnecting || isLoading,
    isLoading,
    signInWithEthereum,
    logout,
    address: session?.address || address,
  };
}

export function useRequireSiweAuth() {
  const { isAuthenticated, isConnecting } = useSiweAuth();
  
  // Don't redirect here - let the auth guard handle the authentication flow
  // The auth guard will show the sign-in UI instead of redirecting
  
  return { isAuthenticated, isConnecting };
}

// Helper function to generate a random nonce
function generateNonce(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}