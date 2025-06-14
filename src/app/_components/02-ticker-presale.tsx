/* eslint-disable @typescript-eslint/no-explicit-any */

import SimpleMarquee from "@/components/marquee";

export default function TickerPresale({ currenStage }: any) {
  return (
    <div className="relative h-fit w-full overflow-hidden">
      <SimpleMarquee direction="left" baseVelocity={8}>
        <div className="font-heading text-sd-green-200 flex h-fit w-fit items-center justify-center gap-5 text-[40px] leading-[40px] uppercase">
          <p>$Dino presale is now live!</p>
          <p>-</p>
          <p>stage 8/11</p>
          <p className="pr-5">-</p>
        </div>
      </SimpleMarquee>
      {/* Left fade out */}
      <div className="from-sd-green-800 absolute top-0 left-0 h-full w-20 bg-gradient-to-r to-transparent"></div>
      {/* Right fade out */}
      <div className="from-sd-green-800 absolute top-0 right-0 h-full w-20 bg-gradient-to-l to-transparent"></div>
    </div>
  );
}
