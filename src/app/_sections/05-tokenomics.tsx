import Image from "next/image";

import ImgJungle from "@/../public/images/tokenomics-jungle.webp";
import ImgGrass from "@/../public/images/tokenomics-grass.webp";
import Chart from "../_components/05-chart";
import BgPattern from "@/components/bg-pattern";
import AnimatedTextInView from "@/components/animated-text-in-view";

export default function TokenomicsSection() {
  return (
    <section
      className="relative flex h-fit w-full items-end justify-center bg-gradient-to-b from-[rgb(158_255_169)] to-[rgb(252_116_30)]"
      id="tokenomics"
    >
      <Overlays />
      <div className="z-1 flex h-fit w-full max-w-[1000px] flex-col items-start justify-center gap-[160px] px-2 pt-[64px] md:gap-0 md:gap-4 md:px-0 md:pt-[160px] lg:gap-6">
        <Title />
        <Chart />
      </div>
    </section>
  );
}

function Overlays() {
  return (
    <>
      <BgPattern className="top-0 left-0 z-0" />
      <div className="absolute bottom-0 left-0 h-[360px] w-full md:h-[700px] lg:h-[900px]">
        <div className="relative h-full w-full">
          <Image className="object-cover" src={ImgJungle} alt="Jungle" fill />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-[30%] w-full">
        <div className="relative h-full w-full">
          <Image className="object-cover" src={ImgGrass} alt="Grass" fill />
        </div>
      </div>
    </>
  );
}

function Title() {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center md:max-w-[770px] md:items-start md:pl-[72px] lg:max-w-full lg:pl-20">
      <AnimatedTextInView
        text="tokenomics"
        duration={0.8}
        splitTo="letters"
        className="font-heading text-sd-green-800 text-[64px] leading-[64px] uppercase md:text-[88px] md:leading-[88px] lg:text-[120px] lg:leading-[120px]"
        tag="h2"
      />
      <p className="text-sd-green-800 text-[20px] leading-[1.4em] font-bold md:pl-[10px] lg:pl-[14px]">
        TOTAL SUPPLY: 2.222.222.222
      </p>
    </div>
  );
}
