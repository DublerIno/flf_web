import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio Base",
  description: "A polished Next.js and Tailwind starter website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
