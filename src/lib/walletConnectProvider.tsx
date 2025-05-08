"use client"; // Required for client-side rendering in Next.js App Router

// Import wallet adapter styles
import "@solana/wallet-adapter-react-ui/styles.css";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { useMemo } from "react";

const endpoint =
  // "https://mainnet.helius-rpc.com/?api-key=c0a4fe90-1fc3-4351-a8e9-1ae5fdcc9163";

  // Backup RPC just in case (500K Credits)
  "https://mainnet.helius-rpc.com/?api-key=c0a4fe90-1fc3-4351-a8e9-1ae5fdcc9163";

export default function WalletContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Memoize wallet adapters to avoid re-renders
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    [],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
