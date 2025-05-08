import ImgPattern from "@/../public/images/pattern-1.webp";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function BgPattern({
  className,
  classNameInner,
  opacity = 0.1,
}: {
  className?: string;
  classNameInner?: string;
  opacity?: number;
}) {
  return (
    <div className={cn("absolute h-full w-full", className)}>
      <div className={cn("relative h-full w-full", classNameInner)}>
        <Image
          src={ImgPattern}
          alt="Pattern"
          fill
          className="object-cover"
          style={{
            opacity: opacity,
          }}
        />
      </div>
    </div>
  );
}
