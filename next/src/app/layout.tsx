import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import thumbnail from "kritesh-timsina.jpg";

export const metadata: Metadata = {
  title: "Kritesh Timsina",
  description:
    "A highly motivated computer science enthusiast with a passion for problem-solving and software development.",
  openGraph: {
    title: "Kritesh Timsina | Software Developer",
    siteName: "Kritesh Timsina",
    url: "https://kriteshtimsina.com.np",
    description:
      "A highly motivated computer science enthusiast with a passion for problem-solving and software development.",
    type: "website",
    images: {
      url: "https://kriteshtimsina.com.np/assets/kritesh-057690bd.jpg",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
