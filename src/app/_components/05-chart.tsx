"use client";
import ImgShibadinoTokenomics from "@/../public/images/shibadino tokenomics.webp";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Chart() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div className="relative flex h-[400px] w-full max-w-[400px] items-center justify-center rounded-t-[38px] bg-[#0B152270] px-1 pt-1 backdrop-blur-sm md:mx-auto md:h-[640px] md:max-w-[770px] md:max-w-full md:rounded-t-[100px] md:px-5 md:pt-5 lg:max-w-full lg:rounded-t-[120px]">
      <div className="absolute top-[-153px] right-[79px] z-[2] size-[217px] md:top-[-153px] md:right-[44px] lg:top-[-212px] lg:right-[44px] lg:size-[300px]">
        <Image src={ImgShibadinoTokenomics} alt="Shibadino Tokenomics" fill />
      </div>
      <div
        ref={ref}
        className="bg-sd-green-800 flex h-full w-full items-center justify-center gap-1 rounded-t-[38px] px-1 pt-1 md:gap-5 md:rounded-t-[100px] md:px-5 md:pt-5"
      >
        <Bar
          label="presale"
          value={67.5}
          isInView={isInView}
          animationHeight={100}
        />
        <Bar
          label="liquidity"
          value={20}
          isInView={isInView}
          animationHeight={55}
        />
        <Bar
          label="marketing"
          value={8}
          isInView={isInView}
          animationHeight={30}
        />
        <Bar
          label="team"
          value={2.5}
          isInView={isInView}
          animationHeight={20}
        />
        <Bar
          label="bonus events"
          value={2}
          isInView={isInView}
          animationHeight={18}
        />
      </div>
    </div>
  );
}

interface BarProps {
  label: string;
  value: number;
  isInView: boolean;
  animationHeight: number;
}
function Bar({ label, value, isInView, animationHeight }: BarProps) {
  return (
    <div className="bg-sd-green-300 relative flex h-full w-full flex-col items-center justify-end gap-[10px] rounded-t-[100px]">
      <p className="font-heading text-sd-green-800 absolute top-[32px] text-[16px] leading-[16px] md:top-[64px] md:text-[32px] md:leading-[32px] lg:text-[36px] lg:leading-[36px]">
        {value}%
      </p>
      <BarLoading isInView={isInView} animationHeight={animationHeight} />
      <p className="font-heading text-sd-green-800 absolute bottom-[8px] max-w-[90%] text-center text-[13px] leading-[13px] md:bottom-[20px] md:max-w-full md:text-[20px] md:leading-[20px] lg:text-[24px] lg:leading-[24px]">
        {label}
      </p>
    </div>
  );
}

interface BarLoadingProps {
  isInView: boolean;
  animationHeight: number;
}

function BarLoading({ isInView, animationHeight }: BarLoadingProps) {
  return (
    <div className="flex h-[80%] w-full items-end justify-center">
      <motion.div
        className="w-full rounded-t-[1000px] bg-gradient-to-b from-[rgb(252_116_30)] to-[rgb(252_187_135)]"
        initial={{ height: "1%" }}
        animate={{ height: isInView ? `${animationHeight}%` : "1%" }}
        transition={{ duration: 2 }}
      ></motion.div>
    </div>
  );
}
