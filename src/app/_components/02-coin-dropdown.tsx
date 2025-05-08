/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { AnimatePresence, motion } from "motion/react";

import ChevronDownSvg from "@/components/svgs/chevron-down";
import Image from "next/image";
import ImgSolana from "@/../public/images/Solana_logo.png";
import ImgUsdt from "@/../public/images/tether.svg";
import { useState } from "react";

interface Coin {
  symbol: string;
  name: string;
  icon: React.ReactNode;
}

export default function CoinDropdown({ setTokenType }: any) {
  const [selectedCoin, setSelectedCoin] = useState<Coin>(COINS[1]);
  const [isHovered, setIsHovered] = useState(false);

  const handleCoinSelect = (coin: Coin) => {
    setSelectedCoin(coin);
    setIsHovered(false);
    if (coin.symbol === "SOL") {
      setTokenType(1);
    } else {
      setTokenType(2);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-sd-green-800 flex h-fit w-fit cursor-pointer items-center justify-center gap-[6px] rounded-[20px] py-1 pr-2 pl-1">
        {selectedCoin.icon}
        <p className="text-sd-green-300 text-[14px] leading-[14px]">
          {selectedCoin.symbol}
        </p>
        <motion.div
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDownSvg className="h-[12px] w-[8px]" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[100%] right-0 z-50 w-[112px] bg-transparent"
          >
            <div className="bg-sd-green-800 mt-1 min-w-full overflow-hidden rounded-xl p-[6px]">
              {COINS.map((coin) => (
                <div
                  key={coin.symbol}
                  className={`flex cursor-pointer items-center gap-[6px] rounded-[12px] px-2 py-1.5 transition-all duration-300 hover:bg-[#145E63]`}
                  onClick={() => handleCoinSelect(coin)}
                >
                  {coin.icon}
                  <span className="text-sd-green-300 text-[14px] leading-[14px]">
                    {coin.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const COINS: Coin[] = [
  {
    symbol: "SOL",
    name: "Solana",
    icon: (
      <Image
        src={ImgSolana}
        alt="SOL"
        width={24}
        height={24}
        className="rounded-[20px]"
      />
    ),
  },
  {
    symbol: "USDT",
    name: "USDT",
    icon: (
      <Image
        src={ImgUsdt}
        alt="USDT"
        width={24}
        height={24}
        className="rounded-[20px]"
      />
    ),
  },
];
