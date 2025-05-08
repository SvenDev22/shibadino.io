"use client";

import AnimatedTextInView from "@/components/animated-text-in-view";
import CopyTokenAddressButton from "@/components/copy-token-address-button";
import Image from "next/image";
import ImgEgg1 from "@/../public/images/egg1.webp";
import ImgEgg2 from "@/../public/images/egg2.webp";
import ImgEgg3 from "@/../public/images/egg3.webp";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

export default function HowToBuy() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-[56px] overflow-hidden bg-gradient-to-b from-[rgb(10_58_61)] to-[rgb(11_21_34)] px-5 pt-[120px] pb-20">
      <Eggs activeStep={activeStep} />
      <div className="to-sd-green-800 absolute bottom-0 left-0 h-[240px] w-full bg-gradient-to-b from-transparent" />
      <AnimatedTextInView
        text="how to buy?"
        duration={0.5}
        splitTo="letters"
        className="font-heading text-sd-green-400 z-[2] text-[64px] leading-[64px] md:text-[80px] md:leading-[80px]"
        tag="h2"
      />

      {STEPS_CONTENT.map((step, index) => (
        <StepContent
          key={step.number}
          step={step}
          active={index === activeStep}
        />
      ))}

      <div className="flex w-full items-center justify-center gap-[32px] md:gap-[64px]">
        {STEPS_CONTENT.map((step, index) => (
          <Step
            key={step.number}
            number={step.number}
            active={index === activeStep}
            onClick={() => setActiveStep(index)}
          />
        ))}
      </div>
      <CopyTokenAddressButton />
    </div>
  );
}

function Eggs({ activeStep }: { activeStep: number }) {
  const currentStep = STEPS_CONTENT[activeStep];

  return (
    <div className="absolute top-[229px] h-[800px] w-full max-w-[1200px]">
      <motion.div
        className="absolute right-0 bottom-0 h-[800px] w-[67%] max-w-[800px] min-w-[500px] translate-x-1/4 will-change-transform md:translate-x-0"
        style={{
          transform: "translateZ(0)", // Hardware acceleration
        }}
        animate={{
          filter: `brightness(${currentStep.egg3Brightness})`,
        }}
        transition={{
          filter: { duration: 0.3 },
        }}
      >
        <Image
          src={ImgEgg3}
          alt="egg3"
          fill
          className={cn(
            "object-contain",
            "motion-safe:animate-float-slow transform-gpu",
          )}
        />
      </motion.div>
      <motion.div
        className="absolute top-0 left-1/2 h-[800px] w-[67%] max-w-[800px] min-w-[500px] -translate-x-1/2 will-change-transform"
        style={{
          transform: "translateZ(0)", // Hardware acceleration
        }}
        animate={{
          filter: `brightness(${currentStep.egg2Brightness})`,
        }}
        transition={{
          filter: { duration: 0.3 },
        }}
      >
        <Image
          src={ImgEgg2}
          alt="egg2"
          fill
          className={cn(
            "object-contain",
            "motion-safe:animate-float-medium transform-gpu",
          )}
        />
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 h-[800px] w-[67%] max-w-[800px] min-w-[500px] -translate-x-1/4 will-change-transform md:translate-x-0"
        style={{
          transform: "translateZ(0)", // Hardware acceleration
        }}
        animate={{
          filter: `brightness(${currentStep.egg1Brightness})`,
        }}
        transition={{
          filter: { duration: 0.3 },
        }}
      >
        <Image
          src={ImgEgg1}
          alt="egg1"
          fill
          className={cn(
            "object-contain",
            "motion-safe:animate-float-fast transform-gpu",
          )}
        />
      </motion.div>
    </div>
  );
}

interface StepProps {
  number: number;
  active: boolean;
  onClick: () => void;
}

function Step(props: StepProps) {
  return (
    <button
      onClick={props.onClick}
      className="z-[2] flex w-fit cursor-pointer flex-col items-center justify-center gap-[10px]"
    >
      <p
        className={cn(
          "font-heading text-[56px] leading-[56px] md:text-[100px] md:leading-[100px]",
          props.active ? "text-sd-green-400" : "text-sd-green-200",
        )}
      >
        {props.number}
      </p>
      <div
        className={cn(
          "h-2 w-[64px] rounded-[4px]",
          props.active ? "bg-sd-green-400" : "bg-sd-green-200",
        )}
      />
    </button>
  );
}

interface StepContentProps {
  step: (typeof STEPS_CONTENT)[0];
  active: boolean;
}

function StepContent({ step, active }: StepContentProps) {
  if (!active) return null;

  return (
    <div className="z-[2] flex flex-col items-center justify-center gap-[24px]">
      <p className="font-heading text-sd-green-400 text-center text-[32px] leading-[32px] md:text-[40px] md:leading-[40px]">
        {step.title}
      </p>
      <p className="text-sd-green-200 max-w-[320px] text-center text-[18px] leading-[1.4em] font-bold md:text-[20px] md:leading-[1.4em]">
        {step.description}
      </p>
    </div>
  );
}

interface Step {
  number: number;
  title: string;
  description: string;
  egg1Brightness: number;
  egg2Brightness: number;
  egg3Brightness: number;
}

const STEPS_CONTENT: Step[] = [
  {
    number: 1,
    title: "connect your wallet",
    description:
      "Go to the wallet connect button on the website and connect your wallet to the presale panel",
    egg1Brightness: 0.8,
    egg2Brightness: 0.4,
    egg3Brightness: 0.2,
  },
  {
    number: 2,
    title: "select the amount",
    description:
      "Select the currency you want to use to pay, enter the amount you want to spend.",
    egg1Brightness: 0.4,
    egg2Brightness: 0.8,
    egg3Brightness: 0.2,
  },
  {
    number: 3,
    title: "confirm and go",
    description:
      "Click on the confirm button and approve. Congrats you have now purchased $DINO!",
    egg1Brightness: 0.2,
    egg2Brightness: 0.4,
    egg3Brightness: 0.8,
  },
];
