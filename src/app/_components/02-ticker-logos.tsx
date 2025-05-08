import SimpleMarquee from "@/components/marquee";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { cn } from "@/lib/utils";

import ImgTickerLogo1 from "@/../public/images/ticker logo1.webp";
import ImgTickerLogo2 from "@/../public/images/ticker logo2.webp";
import ImgTickerLogo3 from "@/../public/images/ticker logo3.webp";
import ImgTickerLogo4 from "@/../public/images/ticker logo4.webp";
import ImgTickerLogo5 from "@/../public/images/ticker logo5.webp";
import ImgTickerLogo6 from "@/../public/images/ticker logo6.webp";
import ImgTickerLogo7 from "@/../public/images/ticker logo7.webp";
import ImgTickerLogo8 from "@/../public/images/ticker logo8.webp";
import ImgTickerLogo9 from "@/../public/images/ticker logo9.webp";

const logos = [
  ImgTickerLogo1,
  ImgTickerLogo2,
  ImgTickerLogo3,
  ImgTickerLogo4,
  ImgTickerLogo5,
  ImgTickerLogo6,
  ImgTickerLogo7,
  ImgTickerLogo8,
  ImgTickerLogo9,
];

export default function TickerLogos({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-fit w-full overflow-hidden", className)}>
      <SimpleMarquee direction="left" baseVelocity={4}>
        <div className="flex w-full items-center justify-center gap-10 pl-10">
          {logos.map((logo) => (
            <LogoWithUnderline key={logo.src} image={logo} />
          ))}
        </div>
      </SimpleMarquee>
      {/* Left fade out */}
      <div className="from-sd-blue-900 absolute top-0 left-0 h-[150%] w-20 bg-gradient-to-r to-transparent md:w-40"></div>
      {/* Right fade out */}
      <div className="from-sd-blue-900 absolute top-0 right-0 h-[150%] w-20 bg-gradient-to-l to-transparent md:w-40"></div>
    </div>
  );
}

function LogoWithUnderline({ image }: { image: StaticImageData }) {
  return (
    <div className="border-sd-green-400 flex h-[107px] w-[160px] items-center justify-center border-b">
      <Image src={image} alt="logo" width={160} height={107} />
    </div>
  );
}
