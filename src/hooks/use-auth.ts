"use client";

import { useAccount, useDisconnect } from "wagmi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useAuth() {
  const { address, isConnected, isConnecting } = useAccount();
  const { disconnect } = useDisconnect();
  const router = useRouter();

  const logout = () => {
    disconnect();
    router.push("/");
  };

  return {
    address,
    isConnected,
    isConnecting,
    logout,
    isAuthenticated: isConnected && !!address,
  };
}

export function useRequireAuth() {
  const { isConnected, isConnecting } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Don't redirect while still connecting
    if (isConnecting) return;

    // If not connected, redirect to home
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected, isConnecting, router]);

  return { isConnected, isConnecting };
}