import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
// --- ADD THIS IMPORT LINE BELOW ---
import CustomCursor from "./Components/CustomCursor"; 

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chef Marvv | Private Dining & Artisan Bakery",
  description: "Bespoke culinary experiences and handcrafted pastries by Chef Marvv.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-[#FDFCF8] text-[#1C1C1C]`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}