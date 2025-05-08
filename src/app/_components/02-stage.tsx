/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
export default function Stage({ presaleData }: any) {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-[12px]">
      <div className="flex h-[36px] w-full items-center justify-between gap-[10px] px-1 md:px-4">
        {[
          { stage: 1, percent: 0 },
          { stage: 2, percent: 13.333 },
          { stage: 3, percent: 26.666 },
          { stage: 4, percent: 36.2 },
          { stage: 5, percent: 46.3 },
          { stage: 6, percent: 56.4 },
          { stage: 7, percent: 66.5 },
          { stage: 8, percent: 72.9 },
          { stage: 9, percent: 79.6 },
          { stage: 10, percent: 86.3 },
          { stage: 11, percent: 93.1 },
        ].map((stage, key) => {
          return (
            <StageStep
              key={key}
              number={stage.stage}
              active={Number(presaleData?.percentage) >= stage.percent}
            />
          );
        })}
      </div>
      <StageProgress percent={Number(presaleData?.percentage ?? 0)} />
    </div>
  );
}

function StageStep({ number, active }: { number: number; active: boolean }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-[12px]">
      <p
        className={cn(
          "text-[15px] leading-[15px]",
          active ? "text-[#B7EDBD]" : "text-[#052426]",
        )}
      >
        {number}
      </p>
      <div
        className={cn(
          "h-full w-[2px] rounded-[2px] bg-[#B7EDBD]",
          active ? "bg-[#B7EDBD]" : "bg-[#052426]",
        )}
      />
    </div>
  );
}

function StageProgress({ percent }: { percent: number }) {
  return (
    <div className="relative h-10 w-full rounded-[100px] bg-[#062426] md:h-[44px]">
      <div
        style={{
          width: `${percent}%`,
        }}
        className={`absolute top-0 left-0 flex h-full items-center justify-start rounded-[100px] bg-gradient-to-l from-[rgb(159_255_170)] to-[rgb(184_245_191)] pl-4`}
      >
        <span className="font-heading text-[24px] leading-[24px] text-[#052426]">
          STAGE
        </span>
      </div>
    </div>
  );
}
