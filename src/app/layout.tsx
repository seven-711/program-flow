import type { Metadata } from "next";
import { Inter, Outfit, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-body' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-heading' });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: '--font-vibes' });
const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: "Christmas Party Program",
  description: "Interactive flow for our Christmas Celebration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${greatVibes.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
