import JungleParallax from "@/app/_components/01-jungle-parallax";

export default function HeroSection() {
  return (
    <section
      className="relative z-0 flex h-[820px] min-h-[100svh] w-full items-center justify-center overflow-hidden"
      id="hero"
    >
      <JungleParallax />
    </section>
  );
}
