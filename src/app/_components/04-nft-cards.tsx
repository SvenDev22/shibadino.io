import BgPattern from "@/components/bg-pattern";
import { cn } from "@/lib/utils";

export default function NftCards() {
  return (
    <div className="flex h-fit w-full max-w-[1040px] flex-col items-center justify-center gap-5 overflow-hidden px-5 pt-5 pb-[200px]">
      <Card1 />
      <Card2 />
    </div>
  );
}

function Card1() {
  return (
    <div className="border-sd-green-400 relative flex h-fit w-full max-w-[440px] flex-col items-start justify-start gap-[24px] overflow-hidden rounded-[50px] border-4 bg-[#0A3A3D]">
      <BgPattern className="top-0 left-0" />
      <div className="relative flex h-fit w-full flex-col items-start justify-start gap-[24px] overflow-hidden p-8 md:gap-[32px] md:p-12">
        <h3 className="font-heading text-sd-green-400 text-[48px] leading-[48px] text-balance md:text-[60px] md:leading-[60px]">
          who gets an nft?
        </h3>

        <CardRow
          title="20 NFTs"
          text="Reserved for the team."
          textColor="light"
        />
        <CardRow
          title="20 NFTs"
          text="Gifted to top Telegram contributors based on engagement."
          textColor="light"
        />
        <CardRow
          title="100 NFTs"
          text="For early believers who invested 20+ SOL in the presale."
          textColor="light"
        />
        <CardRow
          title="82 NFTs"
          text="Reserved for future events and initiatives."
          textColor="light"
        />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="border-sd-green-400 bg-sd-green-400 relative flex h-fit w-full max-w-[440px] flex-col items-start justify-start gap-[24px] overflow-hidden rounded-[50px] border-4">
      <BgPattern />
      <div className="relative flex h-fit w-full flex-col items-start justify-start gap-[24px] overflow-hidden p-8 md:gap-[32px] md:p-12">
        <h3 className="font-heading text-sd-green-800 text-[48px] leading-[48px] text-balance md:text-[60px] md:leading-[60px]">
          what are the benefits?
        </h3>

        <CardRow
          title="future airdrops"
          text="Guaranteed rewards from the ShibaDino ecosystem."
          textColor="dark"
        />
        <CardRow
          title="private discord access"
          text="Get into the Inner Circle, where the real alpha drops."
          textColor="dark"
        />
        <CardRow
          title="rare in-game cosmetic"
          text="A unique customization item in our upcoming mobile game (TBA)."
          textColor="dark"
        />
      </div>
    </div>
  );
}

function CardRow({
  title,
  text,
  textColor,
}: {
  title: string;
  text: string;
  textColor: "light" | "dark";
}) {
  return (
    <div className="flex w-full max-w-[304px] flex-col items-start justify-center gap-1">
      <p
        className={cn(
          "font-heading text-[24px] leading-[24px] md:text-[32px] md:leading-[32px]",
          textColor === "light" ? "text-sd-green-200" : "text-sd-green-800",
        )}
      >
        {title}
      </p>
      <p
        className={cn(
          "text-[18px] leading-[1.4em] font-medium",
          textColor === "light" ? "text-sd-green-200" : "text-sd-green-800",
        )}
      >
        {text}
      </p>
    </div>
  );
}
