import localFont from "next/font/local";

const primaryFont = localFont({
  src: [
    {
      path: "./BricolageGrotesque-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./BricolageGrotesque-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./BricolageGrotesque-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./BricolageGrotesque-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./BricolageGrotesque-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./BricolageGrotesque-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./BricolageGrotesque-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-primary",
});

const headingFont = localFont({
  src: [
    {
      path: "./Tanker-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-heading",
});

export { primaryFont, headingFont };
