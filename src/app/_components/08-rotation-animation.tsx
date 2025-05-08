"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";

import Image from "next/image";
import ImgAudit from "@/../public/images/shibadino audit.webp";
import ImgBottomOverlay from "@/../public/images/shibadino shader 2.webp";
import ImgFollow from "@/../public/images/shibadino follow.webp";
import ImgShibadinoFooter from "@/../public/images/shibadino footer.webp";
import ImgWhitepaper from "@/../public/images/shibadino whitepaper.webp";
import Link from "next/link";
import { useRef } from "react";

export default function RotatingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "0.85 end"],
  });

  // ROTATION IMAGES
  const rotate1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -180]), {
    bounce: 0,
  });
  const rotate2 = useSpring(useTransform(scrollYProgress, [0, 1], [90, -90]), {
    bounce: 0,
  });

  // TEXT Y
  const whitepaperY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    {
      bounce: 0,
    },
  );
  const auditY = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), {
    bounce: 0,
  });
  const followY = useSpring(useTransform(scrollYProgress, [0, 1], [200, 0]), {
    bounce: 0,
  });

  // TEXT OPACITY
  const whitepaperOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]),
    {
      bounce: 0,
    },
  );
  const auditOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]),
    {
      bounce: 0,
    },
  );
  const followOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]),
    {
      bounce: 0,
    },
  );

  const whitepaperPointerEvents = useTransform(whitepaperOpacity, (latest) =>
    latest > 0.5 ? "auto" : "none",
  );

  const auditPointerEvents = useTransform(auditOpacity, (latest) =>
    latest > 0.5 ? "auto" : "none",
  );

  const followPointerEvents = useTransform(followOpacity, (latest) =>
    latest > 0.5 ? "auto" : "none",
  );

  return (
    <>
      <div className="sticky top-0 z-10 flex h-[100vh] w-full flex-col items-center justify-start gap-[10px] overflow-hidden">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-[rgb(10_58_61)] to-[rgb(11_21_34)]"></div>
        <div id="buffer" className="h-[30svh] w-full" />
        <div className="@container/footer absolute right-0 bottom-0 left-1/2 z-1 flex h-[70svh] w-full -translate-x-1/2 items-start justify-center px-6 pt-[180px]">
          {/* texts */}
          <div className="relative z-50 h-[160px] w-full max-w-[490px]">
            <Link href="/Whitepaper_V2.pdf" target="_blank">
              <motion.p
                style={{
                  y: whitepaperY,
                  opacity: whitepaperOpacity,
                  pointerEvents: whitepaperPointerEvents,
                }}
                className="font-heading text-sd-green-800 absolute top-[1px] left-1/2 w-full -translate-x-1/2 text-center text-[40px] leading-[1.3em] tracking-[-0.03em]"
              >
                CHECK THE WHITEPAPER
              </motion.p>
            </Link>

            <Link href="/Audit-ShibaDino.pdf" target="_blank">
              <motion.p
                style={{
                  y: auditY,
                  opacity: auditOpacity,
                  pointerEvents: auditPointerEvents,
                }}
                className="font-heading text-sd-green-800 absolute top-[1px] left-1/2 w-full -translate-x-1/2 text-center text-[40px] leading-[1.3em] tracking-[-0.03em]"
              >
                SEE THE AUDIT
              </motion.p>
            </Link>
            <Link href="https://x.com/ShibaDinoCoin">
              <motion.p
                style={{
                  y: followY,
                  opacity: followOpacity,
                  pointerEvents: followPointerEvents,
                }}
                className="font-heading text-sd-green-800 absolute top-[1px] left-1/2 w-full -translate-x-1/2 text-center text-[40px] leading-[1.3em] tracking-[-0.03em]"
              >
                FOLLOW SHIBADINO
              </motion.p>
            </Link>
          </div>
          <Image
            src={ImgShibadinoFooter}
            alt="shibadino footer"
            className="pointer-events-none absolute bottom-0 left-1/2 z-[4] h-[300px] min-w-[300px] -translate-x-1/2 object-contain md:h-[405px] md:w-[50%] md:max-w-[500px] lg:h-[360px] lg:w-[30%] lg:max-w-[400px]"
          />
          <Image
            className="absolute bottom-[-20px] left-0 z-[4] h-[200px] w-full object-cover md:h-auto"
            src={ImgBottomOverlay}
            alt="Bottom overlay"
            height={200}
            style={{
              filter: "brightness(1.95)",
            }}
          />
          <h2 className="font-heading text-sd-green-300 absolute bottom-[-6px] left-1/2 z-0 hidden -translate-x-1/2 text-[28.2cqi] leading-[28.2cqi] tracking-[-0.07px] md:block">
            shibadino
          </h2>
          <h2 className="font-heading text-sd-green-300 absolute bottom-[-6px] left-1/2 z-0 -translate-x-1/2 text-center text-[56cqi] leading-[45cqi] tracking-[-0.07px] md:hidden">
            shiba
            <br />
            dino
          </h2>
        </div>
        {/* ROTATION */}
        <div className="relative h-[1800px] w-[150%] translate-y-[20%] rounded-[50%]">
          {/* CIRCLE */}
          <div
            className="bg-sd-green-200 absolute top-0 left-1/2 z-0 size-[1800px] -translate-x-1/2 rounded-[50%]"
            style={{
              boxShadow:
                "0 -.7226247621292714px 3.613123810646357px -.6666666666666666px #cff8d469,0 -2.7462399638921484px 13.731199819460743px -1.3333333333333333px #cff8d473,0 -12px 60px -2px #cff8d499",
            }}
          />
          {/* Col 1 */}
          <motion.div
            style={{
              rotate: rotate1,
            }}
            className="absolute top-[-80px] bottom-[-80px] left-1/2 z-[2] flex h-[2020px] w-[240px] -translate-x-1/2 flex-col items-center justify-between md:top-[-110px] md:bottom-[-110px]"
          >
            <Image
              src={ImgWhitepaper}
              alt="whitepaper"
              className="size-[180px] md:h-[240px] md:w-full"
            />
            <Image
              src={ImgFollow}
              alt="follow"
              className="size-[180px] rotate-180 md:h-[240px] md:w-full"
            />
          </motion.div>
          {/* Col 2 */}
          <motion.div
            style={{
              rotate: rotate2,
            }}
            className="absolute top-[-80px] bottom-[-80px] left-1/2 z-[2] flex h-[2020px] w-[240px] -translate-x-1/2 flex-col items-center justify-between md:top-[-110px] md:bottom-[-110px]"
          >
            <Image
              src={ImgAudit}
              alt="audit"
              className="size-[180px] md:h-[240px] md:w-full"
            />
          </motion.div>
        </div>
      </div>
      <div ref={scrollRef} id="triggerfull" className="z-0 h-[1850px] w-full" />
    </>
  );
}
