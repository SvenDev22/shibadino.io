"use client";
import BgPattern from "@/components/bg-pattern";
import Timeline from "../_components/06-timeline";
import { useRef, useState } from "react";
import AnimatedTextInView from "@/components/animated-text-in-view";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useIsMobile } from "@/lib/use-is-mobile";

export default function RoadmapSection() {
  const containerRef = useRef<HTMLElement>(null);
  const q4RefDesktop = useRef<HTMLDivElement>(null);
  const q4RefMobile = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress: scrollYProgressDesktop } = useScroll({
    target: q4RefDesktop,
    offset: ["start end", "start start"],
  });

  const { scrollYProgress: scrollYProgressMobile } = useScroll({
    target: q4RefMobile,
    offset: ["start end", "start start"],
  });

  const [year, setYear] = useState(2025);

  useMotionValueEvent(scrollYProgressDesktop, "change", (latest) => {
    if (isMobile) return;
    if (latest > 0.5) {
      setYear(2026);
    } else {
      setYear(2025);
    }
  });

  useMotionValueEvent(scrollYProgressMobile, "change", (latest) => {
    if (!isMobile) return;
    if (latest > 0.5) {
      setYear(2026);
    } else {
      setYear(2025);
    }
  });

  return (
    <section
      ref={containerRef}
      className="bg-sd-green-300 relative flex min-h-screen w-full scroll-mt-[80px] flex-col items-center justify-start overflow-visible"
      id="roadmap"
    >
      <BgPattern className="top-0 left-0 z-0" opacity={0.03} />
      <Headline />
      <StickyYear year={year} />
      {/* @ts-expect-error Type 'HTMLDivElement | null' is not assignable to type 'HTMLDivElement' */}
      <Timeline q4RefDesktop={q4RefDesktop} q4RefMobile={q4RefMobile} />
    </section>
  );
}

function Headline() {
  return (
    <div className="bg-sd-green-300 z-1 flex h-fit w-full flex-col items-center justify-center gap-5 px-5 pt-20">
      <div className="flex w-full max-w-[1000px] items-center justify-start gap-10 md:justify-center">
        <div className="hidden h-[2px] w-full bg-gradient-to-l from-[rgb(11_21_34)] to-[rgb(158_255_169)] md:block" />
        {/* <h1 className="font-heading text-sd-green-800 text-[80px] leading-[1.2em] uppercase">
          Roadmap
        </h1> */}
        <AnimatedTextInView
          text="Roadmap"
          duration={0.5}
          splitTo="letters"
          className="font-heading text-sd-green-800 text-[64px] leading-[1.2em] whitespace-nowrap uppercase md:text-[80px]"
          tag="h1"
        />
        <div className="hidden h-[2px] w-full bg-gradient-to-r from-[rgb(11_21_34)] to-[rgb(158_255_169)] md:block" />
      </div>
      <AnimatedTextInView
        content={
          <p className="text-sd-blue-900 max-w-[560px] text-left text-[18px] leading-[1.4em] font-medium md:text-center">
            It started deep in the jungle with a single glow… now the hunt
            begins as hidden eggs awaken something greater.
          </p>
        }
        duration={1}
        splitTo="none"
      />
    </div>
  );
}

function StickyYear({ year }: { year: number }) {
  return (
    <div
      className="bg-sd-green-300 sticky top-0 z-[2] w-full"
      style={{
        boxShadow: "0 20px 20px #0b152233",
      }}
    >
      <div className="flex w-full flex-col items-start justify-center px-5 pt-20 pb-4 md:items-center">
        <div className="bg-sd-green-800 flex h-fit w-fit items-center justify-center rounded-r-full px-5 py-[10px] md:rounded-full">
          <p className="font-heading text-sd-green-400 text-[24px] leading-[24px]">
            {year}
          </p>
        </div>
      </div>
    </div>
  );
}
