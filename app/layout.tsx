import type { Metadata } from "next";
import { Anton, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Container from "@/layout/Container";
import Navbar from "@/layout/Navbar";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "WebDevDojo",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${anton.variable} ${jetbrainsMono.variable} antialiased bg-backgroundLight `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex justify-center min-h-screen p-12 bg-dojo-grid ">
            <Container>{children}</Container>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
