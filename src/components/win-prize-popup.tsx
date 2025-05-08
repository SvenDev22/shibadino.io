"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";

import BgPattern from "./bg-pattern";
import CloseSvg from "./svgs/close";
import Image from "next/image";
import ImgBoom from "@/../public/images/roadmap4.webp";
import Link from "next/link";

export default function WinPrizePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure we restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="fixed top-1/2 right-[-27px] z-50 -translate-y-1/2 rotate-90 md:right-[-30px] lg:right-[-36px]">
        <button
          onClick={handleOpen}
          className="hover:shadow-sd-orange-500 flex cursor-pointer items-center justify-center rounded-b-[8px] bg-[#ff6200] p-3 transition-all duration-200 ease-out hover:shadow-md"
          aria-label="Open prize popup"
        >
          <p className="font-heading text-sd-green-200 text-[18px] leading-[18px] md:text-[20px] md:leading-[20px] lg:text-[24px] lg:leading-[24px]">
            win $8,000
          </p>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.75, y: 20 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              className="fixed top-1/2 left-1/2 z-50 w-full max-w-[350px] -translate-x-1/2 -translate-y-1/2 md:max-w-[400px]"
            >
              <div className="border-sd-green-400 bg-sd-green-400 relative flex h-fit w-full flex-col items-start justify-start gap-[24px] rounded-[40px] border-4 p-8 md:gap-[32px] md:p-10">
                <BgPattern className="top-0 left-0 z-0" opacity={0.1} />
                <div className="relative z-1 flex h-fit w-full flex-col items-start justify-center gap-5">
                  <div className="flex items-center justify-center gap-4">
                    <h2 className="font-heading text-sd-green-800 text-[50px] leading-[50px] md:text-[60px] md:leading-[60px]">
                      Win $8,000
                    </h2>
                    <Image
                      src={ImgBoom}
                      alt="Boom"
                      className="border-sd-green-800 size-[100px] rounded-full border md:size-[112px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <p className="font-heading text-sd-green-800 text-[32px] leading-[32px] text-balance">
                      do you have what it takes to go viral?
                    </p>
                    <p className="text-sd-green-800 text-[16px] leading-[1.4em] font-medium md:text-[18px]">
                      Show off your skills by creating fun, exciting, or
                      downright epic short clips about ShibaDino!
                    </p>
                    <p className="text-sd-green-800 text-[16px] leading-[1.4em] font-bold md:text-[18px]">
                      Hit a certain number of likes, and you could snag your
                      share of an incredible $8.000 prize pool!
                    </p>
                  </div>
                  <Link href="https://www.shibadino.social/" target="_blank">
                    <button className="group bg-sd-green-800 flex cursor-pointer items-center justify-center rounded-full px-4 py-3 shadow-[0_1px_2px_0_rgba(0,0,0,0.25)]">
                      <span className="font-heading text-sd-green-400 text-[18px] leading-[18px] transition-all duration-200 ease-out group-hover:scale-110">
                        join the contest
                      </span>
                    </button>
                  </Link>

                  {/* Xbutton */}
                </div>
                <button
                  onClick={handleClose}
                  className="absolute top-5 right-5 cursor-pointer"
                >
                  <CloseSvg className="text-sd-green-800 size-[28px]" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
