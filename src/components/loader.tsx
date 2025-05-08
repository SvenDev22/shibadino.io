"use client";
import { useEffect, useState } from "react";
import BgPattern from "./bg-pattern";
import ImgEgg from "@/../public/images/egg1.webp";
import Image from "next/image";
import { motion } from "motion/react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure we restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <div className="user-select-none pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Text */}
      <div className="z-1 flex h-full w-full items-center justify-center">
        <div className="relative flex flex-col items-center justify-center gap-2 overflow-visible">
          <div className="flex items-center justify-center overflow-hidden">
            <AnimatedTitle
              title="SHI"
              delayIn={0}
              delayOut={0.2}
              isLoading={isLoading}
            />
            <AnimatedTitle
              title="BA"
              delayIn={0.1}
              delayOut={0.1}
              isLoading={isLoading}
            />
            <AnimatedTitle
              title="DINO"
              delayIn={0.2}
              delayOut={0}
              isLoading={isLoading}
            />
          </div>
          {/* Line */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isLoading ? 1 : 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              bounce: 0,
              delay: 0.5,
            }}
            className="relative h-1 w-full overflow-visible bg-[#B7EDBD20]"
          >
            <motion.div
              initial={{ width: "5%", opacity: 1 }}
              animate={{ width: "100%", opacity: isLoading ? 1 : 0 }}
              transition={{
                duration: 1,
                type: "spring",
                bounce: 0,
                delay: 0.5,
              }}
              onAnimationComplete={() => setIsLoading(false)}
              className="bg-sd-green-300 absolute top-1/2 left-0 h-0.5 -translate-y-1/2"
            />
            <motion.div
              initial={{ x: "5%", opacity: 1 }}
              animate={{ x: "100%", opacity: isLoading ? 1 : 0 }}
              transition={{
                duration: 1,
                type: "spring",
                bounce: 0,
                delay: 0.5,
              }}
              className="absolute top-1/2 left-0 w-full -translate-y-1/2"
            >
              <Image
                src={ImgEgg}
                alt="egg"
                height={32}
                width={32}
                className="size-[32px] -translate-x-[calc(100%-4px)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* BG */}
      <motion.div
        initial={{ y: 1 }}
        animate={{ y: isLoading ? "0%" : "-100%" }}
        transition={{ duration: 0.5, type: "spring", bounce: 0, delay: 0.75 }}
        className="absolute inset-0 h-full w-full bg-gradient-to-b from-[rgb(183_237_189)] to-[rgb(10_58_61)]"
      >
        <BgPattern />
      </motion.div>
    </div>
  );
}

function AnimatedTitle({
  title,
  delayIn,
  delayOut,
  isLoading,
}: {
  title: string;
  delayIn: number;
  delayOut: number;
  isLoading: boolean;
}) {
  return (
    <motion.p
      className="font-heading text-sd-green-200 text-[71px] leading-[1.2em]"
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: isLoading ? 1 : 0,
        y: isLoading ? 0 : -100,
      }}
      transition={{
        delay: isLoading ? 0.5 + delayIn : 0.5 + delayOut,
        bounce: 0.3,
        duration: 0.8,
        type: "spring",
      }}
    >
      {title}
    </motion.p>
  );
}
