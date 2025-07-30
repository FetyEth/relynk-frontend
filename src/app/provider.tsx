"use client";

import { Config, cookieStorage, createStorage, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { XellarKitProvider, defaultConfig, darkTheme } from "@xellar/kit";
import { liskSepolia } from "viem/chains";
import { SessionProvider } from "next-auth/react";

const config = defaultConfig({
  appName: "Xellar",
  // Required for WalletConnect
  walletConnectProjectId: "c0fa3bb10e007826b7f104092be2cf57",

  // Required for Xellar Passport
  xellarAppId: "429fe521-3fe4-4649-b90a-f09df8d41350",
  xellarEnv: "sandbox",
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  chains: [liskSepolia],
}) as Config;

const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <XellarKitProvider theme={darkTheme}>{children}</XellarKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </SessionProvider>
  );
}
