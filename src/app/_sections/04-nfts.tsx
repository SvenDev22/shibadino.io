import NftsGrid from "../_components/04-nfts-grid";
import AnimatedTextInView from "@/components/animated-text-in-view";
export default function NftsSection() {
  return (
    <section
      className="flex h-fit min-h-screen w-full scroll-mt-[80px] flex-col items-center justify-start"
      id="nfts"
    >
      <TitleSubtitle />
      <NftsGrid />
    </section>
  );
}

function TitleSubtitle() {
  return (
    <div className="h-fit w-full max-w-[1000px] gap-5 space-y-5 px-5 pt-20">
      <div className="flex w-full items-center justify-center gap-5">
        <div className="h-[2px] w-full bg-gradient-to-r from-[rgb(11_21_34)] to-[rgb(158_255_169)]" />

        <AnimatedTextInView
          text="our nft collection"
          duration={0.5}
          splitTo="letters"
          className="font-heading text-sd-green-400 w-full text-[36px] leading-[1.2em] whitespace-nowrap uppercase md:text-[80px]"
          tag="h2"
        />
        <div className="h-[2px] w-full bg-gradient-to-l from-[rgb(11_21_34)] to-[rgb(158_255_169)]" />
      </div>
      <AnimatedTextInView
        content={
          <p className="text-sd-green-200 mx-auto max-w-[560px] text-center text-[18px] leading-[1.4em]">
            Only <span className="text-sd-green-400">222</span> ShibaDino NFTs
            will ever exist. Holding one means you&apos;re part of an elite
            group with access to special perks.
          </p>
        }
        duration={1}
        splitTo="none"
      />
    </div>
  );
}
