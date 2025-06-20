import "./globals.css";

import { headingFont, primaryFont } from "@/lib/fonts/fonts";

import type { Metadata } from "next";
import Noise from "@/components/noise";
import TopNav from "@/components/top-nav";
import WalletContextProvider from "@/lib/walletConnectProvider";

export const metadata: Metadata = {
  title: "ShibaDino - Solana's #1 ICO Memecoin",
  description: "Shibadino",
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
        <title>ShibaDino - Solana's #1 ICO Memecoin</title>
        <link rel="icon" type="image/svg+xml" href="images/logo.png" />
        <link rel="icon" type="image/x-icon" href="images/favicon.ico" />
        <meta
          name="google-site-verification"
          content="PkBCAztGPEeqXICytcqATpqf4729RV3bHq_JOhmX0aM"
        />
        <meta
          name="google-site-verification"
          content="R-UCCl3tfS91gqXQOUGvbmZ6qlpC8IJTzgolYKUetyo"
        />
      </head>
      <body className={"relative h-fit w-full overscroll-none"}>
        <WalletContextProvider>
          <Noise opacity={0.05} backgroundSize={64} borderRadius={0} />
          <TopNav />
          {children}
        </WalletContextProvider>
      </body>
    </html>
  );
}
