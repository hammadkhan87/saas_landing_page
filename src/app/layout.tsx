import type { Metadata } from "next";
import { DM_Sans} from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge"

const dmSans = DM_Sans({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "light_saas_landing",
  description: "Created By hammad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(dmSans.className,"antialiased bg-[#EAEEFE]")}
      >
        {children}
      </body>
    </html>
  );
}
