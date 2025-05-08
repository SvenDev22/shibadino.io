"use client";
import Image, { StaticImageData } from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

import ImgNtf1 from "@/../public/images/nfts/11.gif";
import ImgNtf2 from "@/../public/images/nfts/26.gif";
import ImgNtf3 from "@/../public/images/nfts/36.gif";
import ImgNtf4 from "@/../public/images/nfts/46.gif";
import ImgNtf5 from "@/../public/images/nfts/79.gif";
import ImgNtf6 from "@/../public/images/nfts/92.gif";
import ImgNtf7 from "@/../public/images/nfts/gif2.gif";
import ImgNtf8 from "@/../public/images/nfts/122.gif";
import ImgNtf9 from "@/../public/images/nfts/3.gif";
import ImgNtf10 from "@/../public/images/nfts/37.gif";
import ImgNtf11 from "@/../public/images/nfts/55.gif";
import ImgNtf12 from "@/../public/images/nfts/81.gif";
import ImgNtf13 from "@/../public/images/nfts/gif1.gif";
import ImgNtfMain from "@/../public/images/nfts/gif3.gif";
import { useRef } from "react";
import NftCards from "./04-nft-cards";

export default function NftsGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScroll({
    target: scrollRef,
    offset: ["start end", "0 0"],
  });

  return (
    <div className="flex h-fit w-full flex-col items-center justify-start">
      <div className="sticky top-0 flex h-[100svh] w-full max-w-[1360px] items-center justify-center overflow-hidden py-[25px]">
        <div className="from-sd-blue-900 to-sd-blue-900 absolute top-0 left-0 z-5 h-full w-full bg-gradient-to-r via-transparent" />
        <div className="from-sd-blue-900 absolute top-0 left-0 z-5 h-full w-full bg-gradient-to-t to-transparent to-50%" />
        <div
          className="user-select-none pointer-events-none relative z-1 grid h-[854px] w-[1440px] scale-[0.7] grid-cols-[repeat(5,200px)] grid-rows-[repeat(3,200px)] justify-center gap-[100px] overflow-visible px-10 md:scale-100"
          style={{
            gridAutoRows: "200px",
          }}
        >
          <AnimatedNftCell
            src={ImgNtf1}
            alt="NFT 1"
            scrollYProgress={scrollYProgress.scrollYProgress}
            scaleFrom={0.5}
            xFrom={300}
            yFrom={150}
            opacityFrom={0}
          />
          <AnimatedNftCell
            src={ImgNtf2}
            alt="NFT 2"
            scrollYProgress={scrollYProgress.scrollYProgress}
            scaleFrom={0.6}
            xFrom={124}
            yFrom={90}
            opacityFrom={0}
          />
          <AnimatedNftCell
            src={ImgNtf3}
            alt="NFT 3"
            scrollYProgress={scrollYProgress.scrollYProgress}
            scaleFrom={0.7}
            xFrom={0}
            yFrom={40}
            opacityFrom={0}
          />
          <AnimatedNftCell
            src={ImgNtf4}
            alt="NFT 4"
            scrollYProgress={scrollYProgress.scrollYProgress}
            scaleFrom={0.6}
            xFrom={-124}
            yFrom={90}
            opacityFrom={0}
          />
          <AnimatedNftCell
            src={ImgNtf5}
            alt="NFT 5"
            scrollYProgress={scrollYProgress.scrollYProgress}
            scaleFrom={0.5}
            xFrom={-300}
            yFrom={150}
            opacityFrom={0}
          />
          <AnimatedNftCell
            src={ImgNtf6}
            alt="NFT 6"
            scrollYProgress={scrollYProgress.scrollYProgress}
            scaleFrom={0.5}
            xFrom={270}
            yFrom={0}
            opacityFrom={0}
          />
          <AnimatedNftCell
            src={ImgNtf7}
            alt="NFT 7"
            scrollYProgress={scrollYProgress.scrollYProgress}
            scaleFrom={0.6}
            xFrom={94}
            yFrom={0}
            opacityFrom={0}
          />
          <AnimatedNftCell
            src={ImgNtfMain}
            alt="NFT 14"
            scrollYProgress={scrollYProgress.scrollYProgress}
            scaleFrom={2}
            xFrom={0}
            yFrom={0}
            opacityFrom={1}
            zIndex={10}
          />
          <AnimatedNftCell
            src={ImgNtf8}
            alt="NFT 8"
            scrollYProgress={scrollYProgress.scrollYProgress}
            scaleFrom={0.6}
            xFrom={-94}
            yFrom={0}
            opacityFrom={0}
          />
          <AnimatedNftCell
            src={ImgNtf9}
            alt="NFT 9"
            scrollYProgress={scrollYProgress.scrollYProgress}
            scaleFrom={0.6}
            xFrom={-270}
            yFrom={0}
            opacityFrom={0}
          />
          <AnimatedNftCell
            src={ImgNtf10}
            alt="NFT 10"
            scrollYProgress={scrollYProgress.scrollYProgress}
            scaleFrom={0.5}
            xFrom={300}
            yFrom={-150}
            opacityFrom={0}
          />
          <AnimatedNftCell
            src={ImgNtf11}
            alt="NFT 11"
            scrollYProgress={scrollYProgress.scrollYProgress}
            scaleFrom={0.6}
            xFrom={124}
            yFrom={-90}
            opacityFrom={0}
          />
          <AnimatedNftCell
            src={ImgNtf12}
            alt="NFT 12"
            scrollYProgress={scrollYProgress.scrollYProgress}
            scaleFrom={0.7}
            xFrom={0}
            yFrom={-40}
            opacityFrom={0}
          />
          <AnimatedNftCell
            src={ImgNtf13}
            alt="NFT 13"
            scrollYProgress={scrollYProgress.scrollYProgress}
            scaleFrom={0.6}
            xFrom={-124}
            yFrom={-90}
            opacityFrom={0}
          />
          <AnimatedNftCell
            src={ImgNtf1}
            alt="NFT 14"
            scrollYProgress={scrollYProgress.scrollYProgress}
            scaleFrom={0.5}
            xFrom={-300}
            yFrom={-150}
            opacityFrom={0}
          />
        </div>
      </div>
      <div ref={scrollRef} className="z-3 w-full max-w-[1040px]">
        <NftCards />
      </div>
    </div>
  );
}

interface AnimatedNftCellProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  scrollYProgress: MotionValue<number>;
  scaleFrom: number;
  xFrom: number;
  yFrom: number;
  opacityFrom: number;
  zIndex?: number;
}

function AnimatedNftCell(props: AnimatedNftCellProps) {
  const scale = useTransform(
    props.scrollYProgress,
    [0, 1],
    [props.scaleFrom, 1],
  );
  const opacity = useTransform(
    props.scrollYProgress,
    [0, 1],
    [props.opacityFrom, 1],
  );
  const x = useTransform(props.scrollYProgress, [0, 1], [props.xFrom, 0]);
  const y = useTransform(props.scrollYProgress, [0, 1], [props.yFrom, 0]);
  return (
    <motion.div
      style={{ scale, opacity, x, y, zIndex: props.zIndex }}
      className="relative h-[252px] w-[200px] min-w-[50px] overflow-hidden rounded-[20px]"
    >
      <Image src={props.src} alt={props.alt} fill className="object-cover" />
    </motion.div>
  );
}
