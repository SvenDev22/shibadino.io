"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import AnimatedTextInView from "@/components/animated-text-in-view";

import ImgEggCracked from "@/../public/images/shibadino egg cracked.webp";
import ImgEggOpen from "@/../public/images/shibadino egg open.webp";
import ImgEggReveal from "@/../public/images/shibadino egg reveal.webp";

export default function AboutSwitcher() {
  const [activeSection, setActiveSection] = React.useState<string>(
    aboutSections[0].id,
  );

  return (
    <section className="flex h-fit flex-col gap-8 md:h-[560px] md:flex-row md:gap-10 lg:gap-16">
      {/* Left side - Navigation buttons */}
      <div className="relative flex w-full flex-col md:w-[48%] lg:w-1/3">
        <div className="flex w-full flex-col gap-5">
          {aboutSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={cn(
                "font-heading cursor-pointer text-left text-[44px] leading-[44px] transition-colors duration-300",
                activeSection === section.id
                  ? "text-sd-green-200"
                  : "text-sd-green-200/20",
              )}
            >
              {/* {section.title} */}
              <AnimatedTextInView
                text={section.title}
                duration={0.5}
                splitTo="words"
                // className="text-sd-green-200"
                tag="p"
              />
            </button>
          ))}
        </div>
        <div className="absolute bottom-[-28px] left-0 hidden w-full flex-col md:flex">
          {aboutSections.map((section) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeSection === section.id ? 1 : 0 }}
              // transition={{ duration: 0.5, ease: "easeInOut" }}
              className={cn(
                "pointer-events-none absolute top-0 left-0 -translate-y-full",
              )}
            >
              <Image
                src={section.image}
                alt={`Egg ${section.id}`}
                width={320}
                height={320}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right side - Content */}
      <div className="relative w-full md:w-[60%] lg:w-2/3">
        <AnimatePresence mode="popLayout">
          {aboutSections.map(
            (section) =>
              activeSection === section.id && (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  // transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-sd-green-200 flex flex-col gap-5 text-[20px] leading-[1.4em] font-medium"
                >
                  {section.content.map((content) => (
                    <p key={content}>{content}</p>
                  ))}
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      {/* Mobile - eggs */}
      <div className="relative flex h-[320px] w-full flex-col md:hidden">
        {aboutSections.map((section) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeSection === section.id ? 1 : 0 }}
            // transition={{ duration: 0.5, ease: "easeInOut" }}
            className={cn("pointer-events-none absolute bottom-0 left-0")}
          >
            <Image
              src={section.image}
              alt={`Egg ${section.id}`}
              width={320}
              height={320}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

type AboutSection = {
  id: string;
  title: string;
  content: string[];
  image: StaticImageData;
};

const aboutSections: AboutSection[] = [
  {
    id: "story",
    title: "the story",
    content: [
      "In a hidden jungle world, a glowing egg hatched ShibaDino—a playful, magical creature who loved to hide enchanted eggs. These shimmering eggs were said to bring fortune, success, and rare gifts to anyone lucky enough to find them. Word of their power spread quickly, drawing adventurers and treasure hunters from far and wide.",
      "With each egg discovered, a new ShibaDino was born, and the finder was rewarded with great wonder and wealth. As more eggs appeared, so did more ShibaDinos, each one guarding the jungle's growing mystery. Deep within that wild world, ancient eggs still lie hidden, their secrets waiting to be revealed.",
    ],
    image: ImgEggCracked,
  },
  {
    id: "what",
    title: "what is shibadino?",
    content: [
      "ShibaDino is more than just a token. It is a community, a meme and a movement. Inspired by explosive popularity of Shiba Inu in 2021, ShibaDino brings a playful twists by combining the classic Shiba Inu dog with a dinosaur mask.",
      "Immerse yourself in the fascinating world of ShibaDino, the new Solana token that combines the best of the past and the future.",
      "The result is a charming and irresistible combination that will appeal to NFT collectors and investors alike.",
    ],
    image: ImgEggOpen,
  },
  {
    id: "why",
    title: "why shibadino?",
    content: [
      "ShibaDino is released on the Solana blockchain, which is known for its fast transactions and low fees. This ensures that your investment is efficient and cost-effective.",
      "Our NFT collection consists of 222 unique ShibaDinos designed in a trendy pixel design. Each NFT is a unique work of art and a coveted collector's item.",
      "At ShibaDino, we rely on the strength of our community by reaching important milestones together. As soon as these milestones are reached, we reward our community members with token airdrops. This way you benefit directly from the success of the project.",
    ],
    image: ImgEggReveal,
  },
];
