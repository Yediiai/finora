import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Finora — Intelligent Business Finance & Expense Management",
  description:
    "Make every financial decision count. Unified corporate cards, real-time cash flow forecasting, and automated expense accounting for modern growth companies.",
  keywords: ["fintech", "expense management", "corporate card", "cash flow forecasting", "business finance"],
  openGraph: {
    title: "Finora — Modern Corporate Finance & Expense Platform",
    description: "Automate expense reconciliation and forecast cash flow with bank-grade security.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 antialiased font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
