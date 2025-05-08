"use client";

import { useEffect, useState } from "react";

import { motion } from "motion/react";

const TOKEN_ADDRESS = "EgoQYRxgKhkzUdK9pcXg2WHi7ZcBA2X3NXY3JUH3odKm";

export default function CopyTokenAddressButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyTokenAddress = async () => {
    if (typeof window !== "undefined") {
      try {
        await navigator.clipboard.writeText(TOKEN_ADDRESS);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      <motion.button
        className="flex w-fit cursor-pointer items-center justify-center gap-[10px] rounded-[100px] bg-gradient-to-l from-[rgb(159_255_170)] to-[rgb(184_245_191)] px-4 py-3"
        whileHover={{ boxShadow: "0px 0px 10px 0px #9EFFA9" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCopyTokenAddress}
        layout
        transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
      >
        <motion.span
          className="font-heading w-fit text-[24px] leading-[24px] text-[#052426]"
          // layout
        >
          {isCopied ? "address copied!" : "copy token address"}
        </motion.span>
      </motion.button>
      {/* click to copy */}
      <motion.div
        className="bg-sd-green-800 absolute bottom-[-10px] left-1/2 flex -translate-x-1/2 translate-y-full items-center justify-center rounded-full px-[10px] py-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <span className="text-sd-green-400 text-[14px] leading-[1.2em] font-bold whitespace-nowrap">
          click to copy
        </span>
      </motion.div>
    </div>
  );
}
