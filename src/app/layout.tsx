import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// The elegant serif for your big headings
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair" 
});

// The clean sans-serif for body text and navbar
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat" 
});

export const metadata: Metadata = {
  title: "Lumen Designs | Architecture Studio",
  description: "Premium architectural and interior design solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Inject the CSS variables into the HTML tag so globals.css can see them
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}