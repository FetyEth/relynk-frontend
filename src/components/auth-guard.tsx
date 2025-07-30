"use client";

import { useRequireAuth } from "@/hooks/use-auth";
import { Card, CardContent } from "@/components/ui/card";
import ConnectWallet from "@/components/ui/connect-wallet";

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { isConnected, isConnecting } = useRequireAuth();

  // Show loading state while connecting
  if (isConnecting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary-background/30">
        <Card className="w-full max-w-md mx-4 glow-soft">
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-main mx-auto mb-4"></div>
            <h2 className="text-xl font-heading text-foreground mb-2">
              Connecting Wallet... ✨
            </h2>
            <p className="text-foreground/60">
              Please wait while we connect to your wallet 💕
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show connect wallet prompt if not connected
  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary-background/30">
        <Card className="w-full max-w-md mx-4 glow-soft float-animation">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-6">🔐</div>
            <h2 className="text-2xl font-heading text-foreground mb-4">
              Wallet Required 💖
            </h2>
            <p className="text-foreground/60 mb-6">
              Please connect your wallet to access the dashboard~ ✨
            </p>
            <ConnectWallet className="w-full glow-hover hover:scale-105 transition-all duration-300" />
            <p className="text-sm text-foreground/40 mt-4">
              We support MetaMask, WalletConnect, and more! 🌸
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Render children if authenticated
  return <>{children}</>;
}