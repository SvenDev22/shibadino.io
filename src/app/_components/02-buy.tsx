/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import CoinDropdown from "./02-coin-dropdown";
import Image from "next/image";
import ImgDino from "@/../public/images/shibadino footer logo.webp";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
const NoSSRConnectWalletButton = dynamic(
  () => import("@/components/connect-wallet-button"),
  { ssr: false },
);

export default function BuyDino({
  publicKey,
  presaleData,
  loading,
  userData,
  handleInputChange,
  toToken,
  setTokenType,
  buyHandler,
  claimHandler,
}: any) {
  return (
    <div className="bg-sd-green-800 relative flex h-fit w-full max-w-[600px] flex-col items-center justify-center gap-[20px] rounded-[40px] px-5 pt-[32px] pb-[40px] md:px-[32px]">
      <div className="absolute top-0 left-1/2 h-[1px] w-[90%] -translate-x-1/2 -translate-y-1/2 border border-t border-dashed border-[#0B1522]" />
      <YourPurchasedDino totalTokens={userData?.totalTokens} />
      <Swap
        publicKey={publicKey}
        presaleData={presaleData}
        loading={loading}
        handleInputChange={handleInputChange}
        toToken={toToken}
        setTokenType={setTokenType}
        buyHandler={buyHandler}
        claimHandler={claimHandler}
      />
      <CurentPrice />
    </div>
  );
}

function YourPurchasedDino({ totalTokens }: { totalTokens: number }) {
  return (
    <div className="font-heading text-sd-green-300 flex w-full flex-col items-center justify-start gap-6 text-[24px] leading-[24px]">
      <div className="flex w-full items-center justify-between">
        <p className="hidden md:block">Your purchased dino</p>
        <p className="block md:hidden">Your dino</p>
        <p> {totalTokens ?? 0.0}</p>
      </div>
    </div>
  );
}

enum FromTo {
  FROM = "from",
  TO = "to",
}

function SwapCard({
  title,
  fromTo,
  handleInputChange,
  setTokenType,
  toToken,
}: {
  title: string;
  fromTo: FromTo;
  handleInputChange?: any;
  toToken?: string;
  setTokenType?: any;
}) {
  return (
    <div className="flex h-fit w-full flex-col items-start justify-start gap-[60px] rounded-[20px] border border-[#052426] bg-[#062426] p-[20px]">
      <p className="text-sd-green-300">{title}</p>
      <div className="flex w-full items-center justify-between">
        {fromTo === FromTo.FROM ? (
          <input
            type="number"
            placeholder="0"
            className="text-sd-green-300 w-20 [appearance:textfield] text-[32px] leading-[32px] font-bold focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            onChange={handleInputChange}
          />
        ) : (
          <input
            type="number"
            placeholder="0"
            className="text-sd-green-300 w-20 [appearance:textfield] text-[32px] leading-[32px] font-bold focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            value={
              Number(toToken) > 0 ? parseFloat(toToken ?? "0")?.toFixed(0) : 0
            }
          />
        )}

        {fromTo === FromTo.FROM ? (
          <CoinDropdown setTokenType={setTokenType} />
        ) : (
          <DinoCoin />
        )}
      </div>
    </div>
  );
}

function Swap({
  publicKey,
  presaleData,
  loading,
  handleInputChange,
  toToken,
  userData,
  setTokenType,
  buyHandler,
  claimHandler,
}: any) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[10px]">
      <div className="flex w-full flex-col items-center justify-between gap-[10px] md:flex-row md:gap-3">
        <SwapCard
          title="You Pay"
          fromTo={FromTo.FROM}
          handleInputChange={handleInputChange}
          setTokenType={setTokenType}
        />
        <SwapCard title="You Receive" fromTo={FromTo.TO} toToken={toToken} />
      </div>
      <div className="flex w-full gap-x-3">
        {!publicKey ? (
          <NoSSRConnectWalletButton className="w-full text-[24px] leading-[24px]" />
        ) : (
          <motion.button
            className={`font-heading flex flex-1 cursor-pointer items-center justify-center rounded-[100px] bg-gradient-to-l from-[rgb(159_255_170)] to-[rgb(184_245_191)] p-3 text-[18px] leading-[18px] text-[#052426]`}
            whileHover="hover"
            initial="initial"
            onClick={buyHandler}
          >
            <motion.span
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.1 },
              }}
            >
              {presaleData?.activeStage === presaleData?.stages?.length
                ? "Presale Ended"
                : loading
                  ? "Processing"
                  : "Buy Now"}
            </motion.span>
          </motion.button>
        )}
        {publicKey && (
          <motion.button
            className={`font-heading flex flex-1 cursor-pointer items-center justify-center rounded-[100px] bg-gradient-to-l from-[rgb(159_255_170)] to-[rgb(184_245_191)] p-3 text-[18px] leading-[18px] text-[#052426]`}
            whileHover="hover"
            initial="initial"
            onClick={claimHandler}
            disabled={
              userData?.totalTokens === 0 || Number(presaleData?.vesting) === 0
            }
          >
            <motion.span
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.1 },
              }}
            >
              {userData?.totalTokens > 0 && Number(presaleData?.vesting) === 1
                ? "Claim Tokens"
                : loading
                  ? "Processing"
                  : userData?.totalTokens === 0
                    ? "Claimed"
                    : "Claiming Not Started"}
            </motion.span>
          </motion.button>
        )}
      </div>
    </div>
  );
}

function DinoCoin() {
  return (
    <div className="bg-sd-green-800 flex h-fit w-fit items-center justify-center gap-[6px] rounded-[20px] py-1 pr-2 pl-1">
      <div className="flex size-[24px] items-center justify-center rounded-[20px] bg-[#062426]">
        <Image
          src={ImgDino}
          alt="Dino"
          width={14}
          height={14}
          className="rounded-[20px]"
        />
      </div>
      <p className="text-sd-green-300 text-[14px] leading-[14px] uppercase">
        Dino
      </p>
    </div>
  );
}

function CurentPrice() {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-3 md:flex-row md:gap-0">
      <p className="text-sd-green-300 text-[16px] leading-[16px] uppercase md:text-[18px] md:leading-[18px]">
        1 DINO = 0.0039 USDT
      </p>
      <p className="text-sd-green-300 text-[16px] leading-[16px] uppercase md:text-[18px] md:leading-[18px]">
        LISTING PRICE = 0.005 USDT
      </p>
    </div>
  );
}
