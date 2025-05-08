import HeroSection from "./_sections/01-hero";
import PresaleSection from "./_sections/02-presale";
import AboutSection from "./_sections/03-about";
import NftsSection from "./_sections/04-nfts";
import TokenomicsSection from "./_sections/05-tokenomics";
import RoadmapSection from "./_sections/06-roadmap";
import FaqSection from "./_sections/07-faq";
import FooterSection from "./_sections/08-footer";
import DisclaimerSection from "./_sections/09-disclaimer";
import WinPrizePopup from "@/components/win-prize-popup";
import Loader from "@/components/loader";
export default function Home() {
  return (
    <main className="font-primary bg-sd-blue-900">
      <Loader />
      <HeroSection />
      <PresaleSection className="mt-[-200px] pb-28 md:mt-[-160px] md:pb-[160px] lg:mt-[-100px] lg:pb-[100px]" />
      <AboutSection />
      <NftsSection />
      <TokenomicsSection />
      <RoadmapSection />
      <FaqSection />
      <FooterSection />
      <DisclaimerSection />
      <WinPrizePopup />
    </main>
  );
}
