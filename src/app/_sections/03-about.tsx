import Image from "next/image";

import ImgTopOverlay from "@/../public/images/shibadino shader 1.webp";
import ImgBottomOverlay from "@/../public/images/shibadino shader 2.webp";
import TrailerWithPopup from "../_components/03-trailer-with-popup";
import AboutSwitcher from "../_components/03-about-switcher";
import BgPattern from "@/components/bg-pattern";
import AnimatedTextInView from "@/components/animated-text-in-view";

export default function AboutSection() {
  return (
    <section
      className="bg-sd-green-800 relative flex h-fit w-full items-center justify-center overflow-hidden"
      id="about"
    >
      <Overlays />
      <div className="z-1 flex h-fit w-full items-center justify-center px-5 pt-[200px]">
        <div className="flex h-fit w-full max-w-[1000px] flex-col items-center justify-center gap-[44px]">
          <TitleWithTrailer />
          <AboutSwitcher />
        </div>
      </div>
    </section>
  );
}

function Overlays() {
  return (
    <>
      <Image
        className="pointer-events-none absolute top-0 left-0 z-[1] h-[200px] w-full object-cover md:h-auto"
        src={ImgTopOverlay}
        alt="Top overlay"
        height={200}
      />
      <BgPattern className="pointer-events-none bottom-0 left-0 z-[0]" />
      <Image
        className="pointer-events-none absolute bottom-[-1px] left-0 z-[5] h-[200px] w-full object-cover md:h-auto"
        src={ImgBottomOverlay}
        alt="Bottom overlay"
        height={200}
      />
    </>
  );
}

function TitleWithTrailer() {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-7 md:flex-row md:items-end md:gap-0">
      <AnimatedTextInView
        text="about shibadino"
        duration={0.5}
        splitTo="words"
        className="font-heading text-sd-green-400 max-w-[300px] text-[64px] leading-[64px] md:text-[80px] md:leading-[80px]"
        tag="h2"
      />
      <TrailerWithPopup />
    </div>
  );
}
