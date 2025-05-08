"use client";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import ImgVideoThumbnail from "@/../public/images/video-thumbnail-new.webp";
import Image from "next/image";
import PlaySvg from "@/components/svgs/play";

export default function TrailerWithPopup() {
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
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleOpen}
        className="flex w-fit cursor-pointer flex-row-reverse items-center justify-between gap-4 rounded-[12px] bg-gradient-to-b from-[rgb(183_237_189)] to-[rgb(158_255_169)] py-2 pr-4 pl-2 md:flex-row md:pr-2 md:pl-4"
        role="button"
        tabIndex={0}
        aria-label="Open video trailer"
        onKeyDown={(e) => e.key === "Enter" && handleOpen()}
      >
        <div className="flex items-center justify-between gap-[6px]">
          <PlaySvg className="text-sd-blue-900 h-[24px] w-[24px]" />
          <p className="font-heading text-sd-blue-900 text-[20px] leading-[20px]">
            Watch the trailer
          </p>
        </div>
        <div className="bg-sd-blue-900 flex h-[60px] w-[100px] items-center justify-center overflow-hidden rounded-[12px]">
          <Image
            src={ImgVideoThumbnail}
            alt="Video thumbnail"
            width={100}
            height={60}
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed top-1/2 left-1/2 z-50 w-full max-w-[800px] -translate-x-1/2 -translate-y-1/2 px-4"
            >
              <div className="bg-sd-blue-900 relative aspect-video w-full rounded-2xl shadow-2xl">
                {/* Video Placeholder */}
                <VideoPlayer />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="relative h-full w-full overflow-visible">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 h-full w-full cursor-pointer object-cover"
        preload="metadata"
        playsInline
        poster={ImgVideoThumbnail.src}
        onClick={handlePlayPause}
        onEnded={() => setIsPlaying(false)}
      >
        <source
          src={
            "https://video.gumlet.io/67530864948718dd94284dfc/6808a70a656e8f9b9434cc6e/download.mp4"
          }
          type="video/mp4"
        />
      </video>
      {!isPlaying && (
        <button
          onClick={handlePlayPause}
          className="text-primary bg-sd-green-200 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full p-2 transition-transform duration-200 hover:scale-105 md:p-3"
          aria-label="Play video"
        >
          <svg
            className="size-8 md:size-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </div>
  );
}
