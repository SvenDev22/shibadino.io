"use client";
import { motion } from "motion/react";
import React from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

type AnimatedTextInViewProps = {
  text?: string;
  content?: React.ReactNode;
  duration?: number;
  splitTo?: "letters" | "words" | "none";
  className?: string;
  tag?: HeadingTag;
};

export default function AnimatedTextInView({
  text,
  content,
  duration = 0.5,
  splitTo = "letters",
  className = "",
  tag = "p",
}: AnimatedTextInViewProps) {
  const items = React.useMemo(() => {
    if (!text || splitTo === "none") return [];

    if (splitTo === "letters") {
      // Split into words first, then letters, to preserve word boundaries
      return text.split(" ").map((word) => ({
        word: true,
        letters: word.split("").map((char) => ({
          char,
          space: false,
        })),
      }));
    }

    return text
      .split(/(\s+)/)
      .map((word) => (word.trim() === "" ? "\u00A0" : word));
  }, [text, splitTo]);

  const MotionTag = motion[tag];

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: duration * 0.1,
        delayChildren: duration * 0.1 * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        bounce: 0.1,
      },
    },
  };

  if (splitTo === "none") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          bounce: 0.1,
          duration: duration,
        }}
        className={className}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <MotionTag
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {splitTo === "letters" ? (
        <>
          {items.map((wordObj, wordIndex) => (
            <React.Fragment key={wordIndex}>
              <span className="inline-block whitespace-nowrap">
                {/* @ts-expect-error - properties are not typed */}
                {wordObj.letters.map((letter, letterIndex) => (
                  <motion.span
                    variants={child}
                    key={`${wordIndex}-${letterIndex}`}
                    className="inline-block"
                  >
                    {letter.char}
                  </motion.span>
                ))}
              </span>
              {/* Add space between words */}
              {wordIndex < items.length - 1 && (
                <motion.span
                  variants={child}
                  key={`space-${wordIndex}`}
                  className="inline-block"
                >
                  &nbsp;
                </motion.span>
              )}
            </React.Fragment>
          ))}
        </>
      ) : (
        items.map((item, index) => (
          <motion.span variants={child} key={index} className="inline-block">
            {/* @ts-expect-error - properties are not typed */}
            {item}
          </motion.span>
        ))
      )}
    </MotionTag>
  );
}
