"use client";

import { AnimatePresence, motion } from "motion/react";

import ConnectWalletButton from "./connect-wallet-button";
import Image from "next/image";
import ImgPattern1 from "@/../public/images/pattern-1.webp";
import Link from "next/link";
import MediumSvg from "./svgs/medium";
import TelegramSvg from "./svgs/telegram";
import TwitterSvg from "./svgs/twitter";
import { useIsMobile } from "@/lib/use-is-mobile";
import { useState } from "react";

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 z-50 flex h-fit w-full items-center justify-center">
      <div className="flex w-[1200px] items-center justify-center md:px-[20px] md:py-3">
        <div className="flex h-fit w-full max-w-[1000px] flex-col items-center justify-center">
          <UpperPart onToggleMenu={handleToggleMenu} isMenuOpen={isMenuOpen} />
          <AnimatePresence>{isMenuOpen && <LowerPart />}</AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------ //
// MAIN PARTS
// ------------------------------------------------------------ //

function UpperPart({
  onToggleMenu,
  isMenuOpen,
}: {
  onToggleMenu: () => void;
  isMenuOpen: boolean;
}) {
  return (
    <div className="border-sd-green-800 relative z-10 flex h-fit w-full items-center justify-between border bg-[#174141]/90 px-3 py-2 backdrop-blur-sm md:rounded-[100px] md:p-[8px]">
      <Image
        src={ImgPattern1}
        alt="pattern-1"
        fill
        className="pointer-events-none z-0 object-cover opacity-10"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:relative md:top-0 md:left-0 md:-translate-x-0 md:-translate-y-0">
        <MenuButton onClick={onToggleMenu} isOpen={isMenuOpen} />
      </div>
      <Link
        href="/#hero"
        className="font-heading text-sd-green-400 relative text-[32px] md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:text-[40px]"
      >
        shibadino
      </Link>

      <RightSection />
    </div>
  );
}

function LowerPart() {
  const isMobile = useIsMobile();
  return (
    <motion.div
      initial={{ y: isMobile ? "-100%" : -50, opacity: 0 }}
      animate={{ y: isMobile ? "0%" : 0, opacity: 1 }}
      exit={{ y: isMobile ? "-100%" : -50, opacity: 0 }}
      transition={{ bounce: isMobile ? 0 : 0.3, type: "spring" }}
      className="relative z-[9] flex h-screen w-full flex-col items-center justify-start gap-[28px] bg-gradient-to-r from-[rgb(158_255_169)] to-[rgb(212_255_217)] p-10 md:mt-3 md:h-fit md:flex-row md:gap-[32px] md:rounded-[100px] md:px-[24px] md:py-[16px]"
    >
      <NavLink href="/#presale" title="Presale" />
      <NavLink href="/#about" title="About" />
      <NavLink href="/#nfts" title="Nfts" />
      <NavLink href="/#tokenomics" title="Tokenomics" />
      <NavLink href="/#roadmap" title="Roadmap" />
      <NavLink href="/#faq" title="FAQ" />
      <div className="flex items-center gap-6 md:hidden">
        <Link href="https://medium.com/@shibadino" target="_blank">
          <MediumSvg className="text-sd-green-800 size-[34px]" />
        </Link>
        <Link href="https://x.com/ShibaDinoCoin" target="_blank">
          <TwitterSvg className="text-sd-green-800 size-[30px]" />
        </Link>
        <Link href="https://t.me/shibadino" target="_blank">
          <TelegramSvg className="text-sd-green-800 size-[30px]" />
        </Link>
      </div>
    </motion.div>
  );
}

// ------------------------------------------------------------ //
// SUB COMPONENTS
// ------------------------------------------------------------ //
function NavLink({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="text-sd-green-800 font-heading text-[32px] leading-[32px] md:text-[24px] md:leading-[24px]"
    >
      {title}
    </Link>
  );
}

function RightSection() {
  return (
    <div className="z-1 flex items-center gap-5">
      <div className="hidden items-center gap-4 md:flex">
        <Link href="https://medium.com/@shibadino" target="_blank">
          <MediumSvg className="text-sd-green-400 size-[22px]" />
        </Link>
        <Link href="https://x.com/ShibaDinoCoin" target="_blank">
          <TwitterSvg className="text-sd-green-400 size-[18px]" />{" "}
        </Link>
        <Link href="https://t.me/shibadino" target="_blank">
          <TelegramSvg className="text-sd-green-400 size-[20px]" />{" "}
        </Link>
      </div>
      <ConnectWalletButton className="text-[16px] leading-[16px] md:text-[18px] md:leading-[18px]" />
    </div>
  );
}

function MenuButton({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-sd-green-800 text-sd-green-400 font-heading relative z-[1000] flex size-[40px] cursor-pointer items-center justify-center gap-2 rounded-[100px] p-3 text-[18px] leading-[18px] md:size-fit"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <Burger isOpen={isOpen} />
      <span className="hidden text-[18px] leading-[18px] md:block">menu</span>
    </button>
  );
}

function Burger({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex h-[14px] w-[20px] flex-col justify-between md:w-[24px]">
      <motion.div
        className="bg-sd-green-400 h-[3px] w-[20px] origin-center rounded-[1px] md:w-[24px]"
        animate={{
          rotate: isOpen ? 30 : 0,
          y: isOpen ? 5.5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="bg-sd-green-400 h-[3px] w-[20px] rounded-[1px] md:w-[24px]"
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="bg-sd-green-400 h-[3px] w-[20px] origin-center rounded-[1px] md:w-[24px]"
        animate={{
          rotate: isOpen ? -30 : 0,
          y: isOpen ? -5.5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
