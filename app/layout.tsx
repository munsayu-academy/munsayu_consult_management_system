import type { Metadata } from "next";
import {
  Montserrat,
  Noto_Sans_KR,
  Gowun_Batang,
  IBM_Plex_Sans_KR,
} from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
  adjustFontFallback: false,
});
const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
  adjustFontFallback: false,
});
const gowun = Gowun_Batang({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-gowun",
  adjustFontFallback: false,
});
const ibm = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm",
  adjustFontFallback: false,
});

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      className={`${montserrat.variable} ${noto.variable} ${gowun.variable} ${ibm.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
