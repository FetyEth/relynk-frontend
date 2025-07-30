import { Button } from "./button";
import { ConnectButton } from "@xellar/kit";

export default function ConnectWallet({ className }: { className?: string }) {
  return (
    <ConnectButton.Custom>
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
    </ConnectButton.Custom>
  );
}
