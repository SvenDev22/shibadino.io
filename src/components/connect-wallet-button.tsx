import { useEffect, useState } from "react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useWallet } from "@solana/wallet-adapter-react";

export default function ConnectWalletButton({
  className,
}: {
  className?: string;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { publicKey } = useWallet();

  const styles = {
    height: "42px",
    borderRadius: "100px",
    fontWeight: "400",
    fontFamily: "var(--font-heading)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(to left, rgb(159, 255, 170), rgb(184, 245, 191))",
    padding: "12px",
    fontSize: "18px",
    lineHeight: "18px",
    color: "#052426",
    width: "100%",
  };

  if (!isClient) return null;

  return (
    <WalletMultiButton
      style={{
        ...styles,
      }}
    >
      <motion.span
        className={cn(className)}
        whileHover="hover"
        initial="initial"
      >
        <motion.span
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.1 },
          }}
        >
          {publicKey
            ? publicKey?.toString().slice(0, 4) +
              "..." +
              publicKey?.toString().slice(-4)
            : "CONNECT WALLET"}
        </motion.span>
      </motion.span>
    </WalletMultiButton>
  );
}
