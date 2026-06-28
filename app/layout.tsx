import type { Metadata } from "next";
import {Raleway} from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prepview",
  description: "An AI-Powered tool to help you with mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${raleway.variable} font-raleway antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
