import type { Metadata } from "next";
import { JetBrains_Mono, Rubik, Silkscreen } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import TransitionEffect from "@/components/ui/TransitionEffect";

export const jetbrainsmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-rubik",
});

export const silkScreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkScreen",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Jesus.It.Dev Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={jetbrainsmono.variable}> */}
      <body className={rubik.variable}>
        {/* <body className={silkScreen.variable}> */}
        <div className="font-secondary">
          <Header />
          <TransitionEffect />
          <PageTransition>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}
