import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Invicta-Tech | Site Maintenance",
  description: "Invicta-Tech's site is being rebuilt. Check back soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={anton.variable}>
      <body>{children}</body>
    </html>
  );
}
