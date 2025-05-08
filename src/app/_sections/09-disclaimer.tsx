import Image from "next/image";
import ImgShibaLogo from "@/../public/images/shibadino footer logo.webp";
import Link from "next/link";
export default function DisclaimerSection() {
  return (
    <section
      className="flex w-full flex-col items-center justify-start gap-3 bg-[#142B41] px-5 pt-5 pb-10"
      id="disclaimer"
    >
      <Image
        src={ImgShibaLogo}
        alt="shibadino footer logo"
        height={40}
        width={40}
      />
      <div className="flex w-full flex-wrap items-center justify-center gap-[10px]">
        <Link
          className="text-sd-green-200 font-heading text-center text-[16px] leading-[120%] tracking-[-0.03em] md:text-[20px] md:leading-[1.3em]"
          href="/ShibaDino_Whitepaper.pdf"
        >
          Whitepaper
        </Link>
        <p className="text-sd-green-200 font-heading text-center text-[16px] leading-[120%] tracking-[-0.03em] md:text-[20px] md:leading-[1.3em]">
          |
        </p>
        <Link
          className="text-sd-green-200 font-heading text-center text-[16px] leading-[120%] tracking-[-0.03em] md:text-[20px] md:leading-[1.3em]"
          href="/Audit-ShibaDino.pdf"
        >
          Audit
        </Link>
        <p className="text-sd-green-200 font-heading text-center text-[16px] leading-[120%] tracking-[-0.03em] md:text-[20px] md:leading-[1.3em]">
          |
        </p>
        <Link
          className="text-sd-green-200 font-heading text-center text-[16px] leading-[120%] tracking-[-0.03em] md:text-[20px] md:leading-[1.3em]"
          href="/cookies.pdf"
        >
          Cookies Policy
        </Link>
        <p className="text-sd-green-200 font-heading text-center text-[16px] leading-[120%] tracking-[-0.03em] md:text-[20px] md:leading-[1.3em]">
          |
        </p>
        <Link
          className="text-sd-green-200 font-heading text-center text-[16px] leading-[120%] tracking-[-0.03em] md:text-[20px] md:leading-[1.3em]"
          href="/privacy-policy.pdf"
        >
          Privacy Policy
        </Link>
        <p className="text-sd-green-200 font-heading text-center text-[16px] leading-[120%] tracking-[-0.03em] md:text-[20px] md:leading-[1.3em]">
          |
        </p>
        <Link
          className="text-sd-green-200 font-heading text-center text-[16px] leading-[120%] tracking-[-0.03em] md:text-[20px] md:leading-[1.3em]"
          href="/ShibaDino_Terms and Condition.pdf"
        >
          Terms of Use
        </Link>
      </div>
      <p className="text-sd-green-400 font-heading text-center text-[16px] leading-[120%] tracking-[-0.03em] md:text-[20px] md:leading-[1.3em]">
        &copy; 2025 ShibaDino. All Rights Reserved. designed by hoffe
      </p>
      <p className="text-sd-green-200 max-w-[600px] text-center text-[10px] leading-[10px]">
        Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The
        value of cryptocurrencies may go down as well as up. Profits may be
        subject to capital gains or other taxes applicable in your jurisdiction.
      </p>
    </section>
  );
}
