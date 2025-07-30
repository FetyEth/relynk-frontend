"use client";

import { useAccount, useBalance, useEnsName } from "wagmi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, Wallet } from "lucide-react";
import { useState } from "react";

export function WalletInfo() {
  const { address, isConnected, chain } = useAccount();
  const { data: balance } = useBalance({ address });
  const { data: ensName } = useEnsName({ address });
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const openInExplorer = () => {
    if (address && chain) {
      const explorerUrl = chain.blockExplorers?.default?.url;
      if (explorerUrl) {
        window.open(`${explorerUrl}/address/${address}`, "_blank");
      }
    }
  };

  if (!isConnected || !address) {
    return null;
  }

  return (
    <Card className="glow-hover">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="h-5 w-5 text-main" />
          Wallet Information 💳
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground/60">Status</span>
          <Badge className="bg-green-100 text-green-800 border-green-200">
            Connected ✅
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground/60">Network</span>
          <Badge variant="outline" className="text-main border-main/20">
            {chain?.name || "Unknown"} 🌐
          </Badge>
        </div>

        {ensName && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground/60">ENS Name</span>
            <span className="text-sm font-base text-foreground">{ensName}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground/60">Address</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono text-foreground">
              {address.substring(0, 6)}...{address.substring(address.length - 4)}
            </span>
            <Button
              size="sm"
              variant="neutral"
              onClick={copyAddress}
              className="h-6 w-6 p-0"
            >
              <Copy className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {balance && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground/60">Balance</span>
            <span className="text-sm font-base text-foreground">
              {parseFloat(balance.formatted).toFixed(4)} {balance.symbol} 💰
            </span>
          </div>
        )}

        <div className="flex gap-2 pt-2">
          <Button
            size="sm"
            variant="neutral"
            onClick={copyAddress}
            className="flex-1 hover:scale-105 transition-all duration-300"
          >
            <Copy className="h-4 w-4 mr-2" />
            {copied ? "Copied! ✨" : "Copy Address"}
          </Button>
          <Button
            size="sm"
            variant="neutral"
            onClick={openInExplorer}
            className="hover:scale-105 transition-all duration-300"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}