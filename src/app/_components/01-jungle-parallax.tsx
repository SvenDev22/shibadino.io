"use client";

import {
  motion,
  MotionValue,
  useMotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRef } from "react";

import ImgJungle1 from "@/../public/images/jungle1.webp";
import ImgJungle2 from "@/../public/images/jungle2.webp";
import ImgJungle3 from "@/../public/images/jungle3.webp";
import ImgJungle4 from "@/../public/images/jungle4.webp";
import ImgJungle5 from "@/../public/images/jungle5.webp";
import ImgJungle6 from "@/../public/images/jungle6.webp";
import ImgJungle7 from "@/../public/images/jungle7.webp";
import ImgJungle8 from "@/../public/images/jungle8.webp";
import { useIsMobile } from "@/lib/use-is-mobile";

export default function JungleParallax() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const mobileScrollYProgress = useMotionValue(0);
  const finalScrollYProgress = isMobile
    ? mobileScrollYProgress
    : scrollYProgress;
  return (
    <div ref={ref} className="relative h-full w-full">
      <ParallaxImage
        src={ImgJungle1}
        alt="jungle 1"
        speed={1}
        className="absolute right-0 bottom-0 left-0 z-[8] flex h-[800px] min-h-[100svh] w-full items-center justify-center"
        scrollYProgress={finalScrollYProgress}
      />
      <ParallaxImage
        src={ImgJungle2}
        alt="jungle 2"
        speed={0.8}
        className="absolute top-[0px] right-0 bottom-0 left-0 z-[7] flex h-[800px] min-h-[100svh] w-full items-center justify-center"
        scrollYProgress={finalScrollYProgress}
      />
      <ParallaxImage
        src={ImgJungle3}
        alt="jungle 3"
        speed={0.65}
        className="absolute top-[0px] right-0 bottom-0 left-0 z-[6] flex h-[800px] min-h-[100svh] w-full items-center justify-center"
        scrollYProgress={finalScrollYProgress}
      />
      <ParallaxImage
        src={ImgJungle4}
        alt="jungle 4"
        speed={0.5}
        className="absolute top-[0px] right-0 bottom-0 left-0 z-[5] flex h-[800px] min-h-[100svh] w-full items-center justify-center"
        scrollYProgress={finalScrollYProgress}
      />
      <ParallaxImage
        src={ImgJungle5}
        alt="jungle 5"
        speed={0.35}
        className="absolute top-[0px] right-0 bottom-[20px] left-0 z-[4] flex h-[800px] min-h-[100svh] w-full items-center justify-center"
        scrollYProgress={finalScrollYProgress}
      />
      <ParallaxImage
        src={ImgJungle6}
        alt="jungle 6"
        speed={0.25}
        className="absolute top-[0px] right-0 bottom-[0px] left-0 z-[3] flex h-[800px] min-h-[100svh] w-full items-center justify-center"
        scrollYProgress={finalScrollYProgress}
        withTitle
      />
      <ParallaxImage
        src={ImgJungle7}
        alt="jungle 7"
        speed={0.2}
        className="absolute top-[0px] right-0 bottom-[0px] left-0 z-[2] flex h-[800px] min-h-[100svh] w-full items-center justify-center"
        scrollYProgress={finalScrollYProgress}
      />
      <ParallaxImage
        src={ImgJungle8}
        alt="jungle 8"
        speed={0.5}
        className="absolute top-[0px] right-0 bottom-[20px] left-0 z-[1] flex h-[800px] min-h-[100svh] w-full items-center justify-center"
        scrollYProgress={finalScrollYProgress}
      />
    </div>
  );
}

interface ParallaxImageProps {
  src: StaticImageData;
  alt: string;
  speed?: number;
  className?: string;
  scrollYProgress: MotionValue<number>;
  withTitle?: boolean;
}

export const ParallaxImage = ({
  src,
  alt,
  speed = 1,
  className = "",
  scrollYProgress,
  withTitle = false,
}: ParallaxImageProps) => {
  const finalSpeed = 1 - speed;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${finalSpeed * 100}%`],
  );

  return (
    <motion.div
      className={className}
      style={{
        y,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`h-full w-full object-cover ${className}`}
        draggable={false}
      />
      {withTitle && (
        <div className="@container/hero absolute top-[108px] left-1/2 z-[3] flex h-fit w-[35%] min-w-[300px] -translate-x-1/2 flex-col items-center justify-center gap-[5px]">
          <h1 className="font-heading bg-gradient-to-b from-[#133E40] to-[#7EAD61] to-[164%] bg-clip-text text-[27.2cqi] leading-none tracking-[-0.07px] text-transparent uppercase">
            shibadino
          </h1>
          <p className="font-heading text-[7.6cqi] leading-none tracking-[-0.07px] text-[#4D7952] md:text-[5.6cqi]">
            AIMING FOR #1 ON SOLANA
          </p>
        </div>
      )}
    </motion.div>
  );
};
