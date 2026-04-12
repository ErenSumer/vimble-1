import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vimble AI — Create Videos with AI",
  description:
    "Generate stunning videos using cutting-edge AI models. Transform text, images, and ideas into captivating video content with Vimble AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
