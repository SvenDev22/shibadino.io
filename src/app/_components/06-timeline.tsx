"use client";

import Image, { StaticImageData } from "next/image";
import { RefObject } from "react";
import ImgQ1 from "@/../public/images/roadmap1.webp";
import ImgQ2 from "@/../public/images/roadmap2.webp";
import ImgQ3 from "@/../public/images/roadmap3.webp";
import ImgQ4 from "@/../public/images/roadmap4.webp";
import ImgQ5 from "@/../public/images/roadmap5.webp";
import { cn } from "@/lib/utils";

export default function Timeline({
  q4RefDesktop,
  q4RefMobile,
}: {
  q4RefDesktop: RefObject<HTMLDivElement>;
  q4RefMobile: RefObject<HTMLDivElement>;
}) {
  return (
    <div className="flex w-full items-center justify-center px-5">
      <TimelineDesktop q4Ref={q4RefDesktop} />
      <TimelineMobile q4Ref={q4RefMobile} />
    </div>
  );
}

// ------------------------------------------------------- //
// MOBILE TIMELINE
// ------------------------------------------------------- //

function TimelineMobile({ q4Ref }: { q4Ref: RefObject<HTMLDivElement> }) {
  return (
    <div className="relative flex w-full max-w-[1000px] flex-col items-start justify-center gap-10 pb-[120px] md:hidden">
      <DividerMobile />
      <TimelineMobileContent q4Ref={q4Ref} />
    </div>
  );
}

function TimelineMobileContent({
  q4Ref,
}: {
  q4Ref: RefObject<HTMLDivElement>;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-[16px] pt-[80px]">
      <QuarterContent
        image={ImgQ1}
        title="Q1"
        subtitle="events, listings & community engagement"
        bullets={[
          "Launching V2",
          "Community Engagement",
          "Lore Expansion",
          "DEX Listings & NFTs",
        ]}
        side="right"
      />
      <QuarterContent
        image={ImgQ2}
        title="Q2"
        subtitle="entering the global stage"
        bullets={[
          "Tier 1 CEX Listing #1",
          "Tier 1 CEX Listing #2",
          "Community Engagement #2",
          "Marketing Expansion",
        ]}
        side="right"
      />
      <QuarterContent
        image={ImgQ3}
        title="Q3"
        subtitle="making shibadino more-real use cases"
        bullets={["Own Blockchain", "Growing the Ecosystem", "Binance Listing"]}
        side="right"
      />

      <QuarterContent
        image={ImgQ5}
        title="Q4"
        subtitle="establishing & manifesting"
        bullets={[
          "Launching Own Game",
          "Shibadino Merchandise",
          "Real-World Partnerships",
        ]}
        side="right"
      />
      <QuarterContent
        ref={q4Ref}
        image={ImgQ4}
        title="Q1-Q4"
        subtitle="expansion and new opportunities"
        bullets={[
          "Airdrops on Solana",
          "Access for NFT Holders",
          "Further Expansion",
        ]}
        side="right"
      />
    </div>
  );
}

// ------------------------------------------------------- //
// MOBILE TIMELINE
// ------------------------------------------------------- //

function TimelineDesktop({ q4Ref }: { q4Ref: RefObject<HTMLDivElement> }) {
  return (
    <div className="relative hidden w-full max-w-[1000px] flex-row items-start justify-center gap-0 md:flex">
      <Left q4Ref={q4Ref} />
      <Divider />
      <Right />
    </div>
  );
}

function Left({ q4Ref }: { q4Ref: RefObject<HTMLDivElement> }) {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-[200px] pt-[100px]">
      <QuarterContent
        image={ImgQ1}
        title="Q1"
        subtitle="events, listings & community engagement"
        bullets={[
          "Launching V2",
          "Community Engagement",
          "Lore Expansion",
          "DEX Listings & NFTs",
        ]}
        side="left"
      />
      <QuarterContent
        image={ImgQ3}
        title="Q3"
        subtitle="making shibadino more-real use cases"
        bullets={["Own Blockchain", "Growing the Ecosystem", "Binance Listing"]}
        side="left"
      />
      <QuarterContent
        ref={q4Ref}
        image={ImgQ4}
        title="Q1-Q4"
        subtitle="expansion and new opportunities"
        bullets={[
          "Airdrops on Solana",
          "Access for NFT Holders",
          "Further Expansion",
        ]}
        isLast
        side="left"
      />
    </div>
  );
}

function Right() {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-[200px] pt-[380px]">
      <QuarterContent
        image={ImgQ2}
        title="Q2"
        subtitle="entering the global stage"
        bullets={[
          "Tier 1 CEX Listing #1",
          "Tier 1 CEX Listing #2",
          "Community Engagement #2",
          "Marketing Expansion",
        ]}
        side="right"
      />
      <QuarterContent
        image={ImgQ5}
        title="Q4"
        subtitle="establishing & manifesting"
        bullets={[
          "Launching Own Game",
          "Shibadino Merchandise",
          "Real-World Partnerships",
        ]}
        side="right"
      />
    </div>
  );
}

// ------------------------------------------------------- //
// SUB COMPONENTS
// ------------------------------------------------------- //

function Divider() {
  return (
    <div className="bg-sd-green-800 absolute top-0 left-1/2 h-full w-[2px] -translate-x-1/2" />
  );
}

function DividerMobile() {
  return (
    <div className="bg-sd-green-800 absolute top-0 left-0 h-full w-[2px] -translate-x-1/2" />
  );
}

interface QuarterContentProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
  bullets: string[];
  side: "left" | "right";
  ref?: RefObject<HTMLDivElement> | null;
  isLast?: boolean;
}

function QuarterContent(props: QuarterContentProps) {
  return (
    <div
      ref={props.ref}
      className={cn(
        "relative flex w-full items-start justify-start",
        props.side === "right" && "flex-row-reverse",
        props.isLast && "pb-[120px]",
      )}
    >
      <Image
        src={props.image}
        alt="Quarter 1"
        height={160}
        width={160}
        className="border-sd-green-800 hidden size-[100px] rounded-full border md:block lg:size-[160px]"
      />
      <div className="flex w-full flex-col items-center justify-center gap-0 pt-[30px] md:gap-3 lg:pt-[60px]">
        {/* Connector & Title */}
        <div className="relative flex w-full items-center justify-start gap-2">
          <div className="border-sd-green-800 h-[1px] w-[16px] border border-dashed md:w-[12px] lg:w-[24px]" />
          <p className="font-heading text-sd-green-800 text-[48px] leading-[48px] whitespace-nowrap">
            {props.title}
          </p>
          <div className="border-sd-green-800 h-[1px] w-full border border-dashed" />
          <Image
            src={props.image}
            alt="Quarter 1"
            height={160}
            width={160}
            className="border-sd-green-800 size-[100px] rounded-full border md:hidden lg:size-[160px]"
          />
          <div
            className={cn(
              "bg-sd-green-800 absolute right-[-10px] size-5 rounded-full",
              props.side === "right" ? "left-[-10px]" : "right-[-10px]",
            )}
          />
        </div>
        {/* Subtitle & bullets */}
        <div className="-mt-3 flex w-full flex-col items-start justify-start gap-4 px-5 md:mt-0 lg:px-8">
          <p
            className={cn(
              "text-sd-green-800 font-heading max-w-full text-[30px] leading-[30px] text-balance md:max-w-[250px] md:text-[27px] md:leading-[27px] lg:max-w-full lg:text-[30px] lg:leading-[30px]",
              props.title === "Q4" && "max-w-[250px]",
              props.title === "Q2" && "max-w-[250px]",
            )}
          >
            {props.subtitle}
          </p>
          <ul className="flex w-full flex-col items-center justify-center gap-2">
            {props.bullets.map((bullet, index) => (
              <li
                key={index}
                className="bg-sd-green-200 border-sd-green-800 text-sd-green-800 left-left flex w-full items-start justify-start rounded-full border py-2 pr-3 pl-4 leading-[1.2em] font-bold md:leading-[1.3em] lg:text-[16px]"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
