"use client";

import { AnimatePresence, motion } from "motion/react";

import AnimatedTextInView from "@/components/animated-text-in-view";
import BgPattern from "@/components/bg-pattern";
import Image from "next/image";
import ImgShibadinoRocket from "@/../public/images/shibadino faq.webp";
import React from "react";
import { cn } from "@/lib/utils";

export default function OtherFaq() {
  return (
    <div className="bg-sd-green-800 relative flex w-full items-center justify-center px-5 pt-5">
      <Image
        src={ImgShibadinoRocket}
        alt="shibadino rocket"
        className="pointer-events-none absolute top-[-160px] z-1 h-[325px] w-full max-w-[1200px] object-contain md:top-[-170px]"
      />
      <div
        className="relative flex w-full items-center justify-center"
        id="faq"
      >
        <FaqSwitcher />
      </div>
    </div>
  );
}

function FaqSwitcher() {
  return (
    <motion.section className="bg-sd-green-300 relative flex w-[1000px] max-w-[1000px] flex-col items-start justify-start gap-5 rounded-b-[20px] border-[5px] border-[#9EFFA950] px-4 pt-[42px] pb-8 md:gap-10 md:rounded-b-[40px] md:px-[40px] md:pt-[90px] md:pb-[40px] lg:px-[64px] lg:pt-[100px] lg:pb-[64px]">
      <BgPattern
        className="pointer-events-none absolute top-0 left-0 z-[0] object-cover"
        opacity={0.05}
      />
      <AnimatedTextInView
        text="got any other faq?"
        duration={0.9}
        splitTo="letters"
        className="font-heading text-sd-green-800 max-w-[200px] text-[48px] leading-[48px] md:max-w-[400px] md:text-[80px] md:leading-[80px]"
        tag="h2"
      />
      <FaqMobile />
      <FaqDesktop />
    </motion.section>
  );
}

function FaqMobile() {
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="flex w-full flex-col gap-5 md:hidden">
      {FAQS.map((faq) => (
        <div key={faq.id} className="w-full">
          <button
            onClick={() => handleToggle(faq.id)}
            className={cn(
              "flex w-full items-start justify-start gap-1.5 text-left text-[20px] leading-[20px] font-bold",
              activeSection === faq.id
                ? "text-sd-green-800"
                : "text-sd-green-800/80",
            )}
            aria-expanded={activeSection === faq.id}
            aria-controls={`content-${faq.id}`}
          >
            <span className="">{faq.title}</span>
            <span
              className={cn(
                "font-heading transition-transform duration-300",
                activeSection === faq.id
                  ? "text-sd-green-800 rotate-45"
                  : "text-sd-green-800/80 rotate-0",
              )}
            >
              +
            </span>
          </button>

          <div
            className="relative overflow-hidden"
            style={{
              contentVisibility: "auto",
              containIntrinsicSize: "0 500px",
            }}
          >
            <AnimatePresence initial={false}>
              {activeSection === faq.id && (
                <motion.div
                  id={`content-${faq.id}`}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      opacity: { duration: 0.15 },
                      scale: { duration: 0.15 },
                      y: { duration: 0.15 },
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    y: -10,
                    transition: {
                      opacity: { duration: 0.1 },
                      scale: { duration: 0.1 },
                      y: { duration: 0.1 },
                    },
                  }}
                  className="origin-top will-change-transform"
                  style={{
                    position: "relative",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    WebkitFontSmoothing: "subpixel-antialiased",
                  }}
                >
                  <p className="text-sd-green-800 pt-3 text-[16px] leading-[1.4em] font-medium text-pretty">
                    {faq.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
}

function FaqDesktop() {
  const [activeSection, setActiveSection] = React.useState<string>(FAQS[0].id);
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);
  return (
    <div className="hidden flex-col gap-8 md:flex md:flex-row md:gap-10 lg:gap-16">
      {/* Left side - Navigation buttons */}
      <div className="relative flex w-fit flex-col flex-nowrap">
        <div className="flex w-full flex-col gap-6">
          {FAQS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={cn(
                "font-heading cursor-pointer text-left text-[36px] leading-[36px] text-nowrap transition-colors duration-300",
                activeSection === section.id
                  ? "text-sd-green-800"
                  : "text-sd-green-800/40",
              )}
              onMouseEnter={() => setHoveredId(section.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {section.title}
              <motion.div
                className="ml-2 inline-flex items-center justify-center"
                style={{ transformOrigin: "center center" }}
                animate={{
                  rotate: hoveredId === section.id ? 180 : 0,
                  color: hoveredId === section.id ? "#0a3a3d" : "#0a3a3d40",
                  opacity: activeSection === section.id ? 0 : 1,
                }}
                transition={{ duration: 0.25 }}
              >
                +
              </motion.div>
            </button>
          ))}
        </div>
      </div>

      {/* Right side - Content */}
      <motion.div className="relative w-full overflow-hidden" initial={false}>
        <AnimatePresence mode="wait">
          {FAQS.map(
            (section) =>
              activeSection === section.id && (
                <motion.div
                  key={section.id}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      },
                      opacity: { duration: 0.25 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      },
                      opacity: { duration: 0.25 },
                    },
                  }}
                  className="text-sd-green-800 overflow-hidden"
                >
                  <div className="flex flex-col gap-5 py-1 leading-[1.4em] font-medium">
                    <p>{section.content}</p>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

type FAQs = {
  id: string;
  title: string;
  content: string;
};

const FAQS: FAQs[] = [
  {
    id: "what-is",
    title: "what is shibadino?",
    content:
      "The ShibaDino is an ancient creature that comes from the depths of the jungle and hides eggs all over the world. Due to the rarity and peculiarity of these eggs, many adventurers have gone in search of them, but mostly without success. The few who have actually managed to find one of these precious eggs have been generously rewarded by the ShibaDino that hatches from it. ShibaDino is a Solana-based memecoin that ventures into the vast world of play-to-earn and metaverse and attracts investors with its aura of pure nostalgia mixed with the thrill of the crypto world. The full story of the legendary ShibaDino can be found in the whitepaper.",
  },
  {
    id: "why-shibadino",
    title: "why shibadino?",
    content:
      "With its offbeat theme that combines the reach of the legendary Shiba Inu coin and the pure nostalgia of the dragon dinosaur, ShibaDino aims to reach a maximum range of investors to create a community that stands out from the crowd of other memecoins. With the advantages of the Solana blockchain and the vision of shaping the play-to-earn world with an innovative video game, ShibaDino is one of the most attractive projects of today.",
  },
  {
    id: "nft",
    title: "how can i get an nft?",
    content:
      "For diligent investors who have invested 20 SOL or more, there is an opportunity to qualify for one of our 222 unique Pixel ShibaDino NFTs. These will be available on OpenSea, which is the largest marketplace for NFTs.",
  },
  {
    id: "how-get",
    title: "how do i get shibadino?",
    content:
      "You can only buy $DINO on the official ShibaDino website. After the presale you will be able to claim and trade your purchased tokens. Important: You can currently only buy $DINO on shibadino.io. All other providers are scam. Never send money directly to the contract address, always buy via the presale panel on the website.",
  },
  {
    id: "contact",
    title: "who do I contact?",
    content:
      "You can ask questions at any time in our ShibaDino Community group and we recommend that you join so that you are always up to date. If you have any direct questions, please send us an email: contact@shibadino.io.",
  },
];
