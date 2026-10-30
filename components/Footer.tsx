import React from "react";
import Link from "next/link";
import { TrendingUp, ShieldCheck, Lock, Globe, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold">
                <TrendingUp className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Fin<span className="text-emerald-400">ora</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Intelligent financial operating system for modern business. Corporate cards, real-time cash flow forecasting, and automated expense accounting in one unified platform.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-slate-400">
                SOC 1 & SOC 2 Type II Certified • 256-bit AES Encryption
              </span>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal">
              *Disclaimer: Finora is a financial technology software platform, not a chartered bank. Banking services provided by partner financial institutions. Sample data shown for illustration.
            </p>
          </div>

          {/* Links Column 1: Platform */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition">
                  Expense Management
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition">
                  Cash Flow Modeling
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition">
                  Corporate Smart Cards
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition">
                  Automated Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition">
                  Department Budgets
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Pricing & Plans */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Pricing & ROI
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/pricing" className="hover:text-emerald-400 transition">
                  Starter Plan ($0)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-emerald-400 transition">
                  Professional ($49/mo)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-emerald-400 transition">
                  Business Scale ($149/mo)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-emerald-400 transition">
                  ROI Savings Calculator
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-emerald-400 transition">
                  Billing FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Trust & Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">
                  Financial Transparency
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">
                  Security Architecture
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">
                  Contact Sales Desk
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">
                  Compliance Documents
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Finora Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Cardholder Agreement</span>
            <span className="hover:text-white cursor-pointer transition">Security Whitepaper</span>
            <span className="hover:text-white cursor-pointer transition">Status</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
