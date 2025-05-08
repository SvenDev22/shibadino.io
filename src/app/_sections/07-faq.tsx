import HowToBuy from "../_components/07-how-to-buy";
import OtherFaq from "../_components/07-other-faq";
export default function FaqSection() {
  return (
    <section className="flex min-h-screen w-full scroll-mt-[80px] flex-col items-center justify-center">
      <HowToBuy />

      <OtherFaq />
    </section>
  );
}
