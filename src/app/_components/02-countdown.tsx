"use client";

import { useEffect, useState } from "react";

export default function Countdown({ time }: { time: number }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(time * 1000); // Convert Unix timestamp to milliseconds

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "days" },
    { value: timeLeft.hours, label: "hours" },
    { value: timeLeft.minutes, label: "minutes" },
    { value: timeLeft.seconds, label: "seconds" },
  ];

  return (
    <div className="flex w-full justify-between gap-2 md:gap-3">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="flex w-full flex-1 flex-col items-center gap-2"
        >
          <div className="flex aspect-square h-auto w-full items-center justify-center rounded-[12px] bg-gradient-to-b from-[rgb(194_237_199)] to-[rgb(158_255_169)] md:h-[125px] md:rounded-2xl">
            <span className="font-heading text-sd-blue-900 text-[42px] md:text-[75px]">
              {unit.value}
            </span>
          </div>
          <div className="flex h-fit w-full items-center justify-center rounded-[20px] bg-[#9FC9A430] p-1.5 md:p-2">
            <span className="text-sd-green-400 font-heading text-[14px] leading-[14px] md:text-[16px] md:leading-[16px]">
              {unit.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
