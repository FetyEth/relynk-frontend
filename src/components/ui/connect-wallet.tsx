"use client";

import dynamic from "next/dynamic";
import { Button } from "./button";

const ConnectButton = dynamic(
  () => import("@xellar/kit").then((mod) => mod.ConnectButton.Custom),
  {
    ssr: false,
    loading: () => <Button variant="neutral">Loading...</Button>,
  }
);

export default function ConnectWallet({ className }: { className?: string }) {
  return (
    <ConnectButton>
      {({ isConnected, account, openConnectModal, openProfileModal }) => (
        <div>
          {isConnected ? (
            <Button onClick={openProfileModal} className={className}>
              {account?.address.substring(0, 6)}...
              {account?.address.substring(account?.address.length - 4)}
            </Button>
          ) : (
            <Button onClick={openConnectModal} className={className}>
              Connect Wallet
            </Button>
          )}
        </div>
      )}
    </ConnectButton>
  );
}
