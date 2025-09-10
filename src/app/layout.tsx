import "./globals.css";

import { headingFont, primaryFont } from "@/lib/fonts/fonts";

import type { Metadata } from "next";
import Noise from "@/components/noise";

export const metadata: Metadata = {
  title: "ShibaDino - Back to Our Roots",
  description: "ShibaDino has returned to its origins, embracing simplicity and authenticity.",
  icons: {
    icon: "images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${primaryFont.variable} ${headingFont.variable} scroll-smooth antialiased`}
    >
      <head>
        <title>ShibaDino - Back to Our Roots</title>
        <link rel="icon" type="image/svg+xml" href="images/logo.png" />
        <link rel="icon" type="image/x-icon" href="images/favicon.ico" />
      </head>
      <body className={"relative h-fit w-full overscroll-none"}>
        <Noise opacity={0.05} backgroundSize={64} borderRadius={0} />
        {children}
      </body>
    </html>
  );
}
