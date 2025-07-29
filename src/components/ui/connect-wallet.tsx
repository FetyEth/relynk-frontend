"use client";

import { ConnectButton } from "@xellar/kit";
import { Button } from "./button";

export default function ConnectWallet() {
  return (
    <ConnectButton.Custom>
      {({ isConnected, account, openConnectModal, openProfileModal }) => (
        <div>
          {isConnected ? (
            <Button onClick={openProfileModal}>
              {account?.address.substring(0, 6)}...
              {account?.address.substring(account?.address.length - 4)}
            </Button>
          ) : (
            <Button onClick={openConnectModal}>Connect Wallet</Button>
          )}
        </div>
      )}
    </ConnectButton.Custom>
  );
}
