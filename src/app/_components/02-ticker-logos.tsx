import Image from "next/image";
import ImgTickerLogo1 from "@/../public/images/ticker logo1.webp";
import ImgTickerLogo2 from "@/../public/images/ticker logo2.webp";
import ImgTickerLogo3 from "@/../public/images/ticker logo3.webp";
import ImgTickerLogo4 from "@/../public/images/ticker logo4.webp";
import ImgTickerLogo5 from "@/../public/images/ticker logo5.webp";
import ImgTickerLogo6 from "@/../public/images/ticker logo6.webp";
import ImgTickerLogo7 from "@/../public/images/ticker logo7.webp";
import ImgTickerLogo8 from "@/../public/images/ticker logo8.webp";
import ImgTickerLogo9 from "@/../public/images/ticker logo9.webp";
import Link from "next/link";
import SimpleMarquee from "@/components/marquee";
import { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

const logos = [
  {
    src: ImgTickerLogo1,
    link: "https://crypto.news/the-future-of-memecoins-shibadino-is-leading-the-charge",
  },
  {
    src: ImgTickerLogo2,
    link: "https://www.tradingview.com/news/reuters.com,2025-03-20:newsml_GNXc754CV:0-shibadino-introduces-purpose-utility-to-the-meme-coin-space",
  },
  {
    src: ImgTickerLogo3,
    link: "https://coinmarketcap.com/community/articles/67d53b431f4d1e1fc104d7ce",
  },
  {
    src: ImgTickerLogo4,
    link: "https://www.marketwatch.com/press-release/shibadino-introduces-purpose-utility-to-the-meme-coin-space-b17fe396?mod=search_headline",
  },
  {
    src: ImgTickerLogo5,
    link: "https://moneycheck.com/shibadino-a-new-era-for-memecoins-begins",
  },
  {
    src: ImgTickerLogo6,
    link: "https://www.cryptowisser.com/press-releases/shibadino-is-more-than-just-a-token",
  },
  {
    src: ImgTickerLogo7,
    link: "https://cryptodaily.co.uk/2025/03/shibadino-the-crypto-project-thats-changing-the-game",
  },
  {
    src: ImgTickerLogo8,
    link: "https://coincu.com/326622-shibadino-a-new-era-for-memecoins-begins",
  },
  {
    src: ImgTickerLogo9,
    link: "https://www.binance.com/en/square/post/21573608368922",
  },
];

export default function TickerLogos({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-fit w-full overflow-hidden", className)}>
      <SimpleMarquee direction="left" baseVelocity={4}>
        <div className="flex w-full items-center justify-center gap-10 pl-10">
          {logos.map((logo, key) => (
            <Link key={key} href={logo.link}>
              <LogoWithUnderline image={logo.src} />
            </Link>
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
