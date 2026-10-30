"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TrendingUp, Menu, X, ArrowRight, ShieldCheck, Wallet } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About & Security", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Finora Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition transform">
              <TrendingUp className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Fin<span className="text-emerald-600">ora</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition ${
                    isActive
                      ? "text-emerald-700 bg-emerald-50/80 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/pricing"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2"
            >
              Sign In
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm shadow-emerald-600/20 transition"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                pathname === link.href
                  ? "bg-emerald-50 text-emerald-700 font-semibold"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-xl"
            >
              Sign In
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-xl"
            >
              Start Free Trial (14 Days)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
