import "./globals.css";

import { headingFont, primaryFont } from "@/lib/fonts/fonts";

import type { Metadata } from "next";
import Noise from "@/components/noise";
import TopNav from "@/components/top-nav";
import WalletContextProvider from "@/lib/walletConnectProvider";

export const metadata: Metadata = {
  title: "Shibadino",
  description: "Shibadino",
  icons: {
    icon: "/favicon.ico",
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
