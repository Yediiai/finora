import React from "react";
import Link from "next/link";
import { 
  TrendingUp, ShieldCheck, Zap, CreditCard, ArrowRight, CheckCircle2, 
  Layers, Lock, Sparkles, Building2, BarChart3, Receipt, Check
} from "lucide-react";
import { FinoraDashboardMockup } from "@/components/FinoraDashboardMockup";

export default function HomePage() {
  const integrations = [
    { name: "QuickBooks Online", type: "Two-way Sync", logo: "QB" },
    { name: "Xero Accounting", type: "Real-time Feed", logo: "XR" },
    { name: "NetSuite ERP", type: "Enterprise Ledger", logo: "NS" },
    { name: "Stripe Payments", type: "Revenue Intake", logo: "ST" },
    { name: "Gusto Payroll", type: "Automated Journal", logo: "GU" },
    { name: "Slack Alerts", type: "Spend Approvals", logo: "SL" },
  ];

  const benefits = [
    {
      icon: <Receipt className="w-6 h-6 text-emerald-600" />,
      title: "Zero Receipt Chasing",
      description: "Employees snap receipts via smartphone. Finora's vision engine instantly matches receipts with card transactions in 1.4 seconds.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      title: "Real-Time Cash Flow Forecasting",
      description: "Replace stale end-of-month spreadsheets with dynamic rolling forecasts that update after every card swipe and invoice payout.",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-emerald-600" />,
      title: "Smart Corporate Cards with Limits",
      description: "Issue physical or unlimited virtual cards with vendor-specific budgets, category blocks, and pre-set expiry dates.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
      title: "Automated General Ledger Sync",
      description: "Transactions auto-categorize and map to your exact chart of accounts. Close monthly books in 2 days instead of 3 weeks.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Enterprise Multi-Tier Approvals",
      description: "Route high-ticket purchases above custom thresholds to department heads or finance directors automatically via Slack and email.",
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-600" />,
      title: "Bank-Grade 256-bit AES Protection",
      description: "SOC 1 & SOC 2 Type II certified infrastructure. Read-only tokenized banking connections ensure credentials never touch our servers.",
    },
  ];

  const testimonials = [
    {
      quote: "Finora transformed our monthly close. What used to take our accounting team 14 stressful days now takes less than 48 hours with 99.4% auto-reconciliation.",
      author: "Rachel Sterling",
      role: "CFO at HyperMetric Software",
      stats: "Reduced close time by 80%",
    },
    {
      quote: "The cash-flow runway simulator helped us steer through our Series A extension with total confidence. We caught $35k in redundant SaaS subscriptions in week one.",
      author: "David Zhao",
      role: "Co-Founder & CEO at Orbit Payments",
      stats: "$35,000 saved immediately",
    },
    {
      quote: "Virtual cards with automatic spending limits stopped team budget overruns dead in their tracks. It is the most elegant finance software I have ever used.",
      author: "Camille Laurent",
      role: "Head of Finance at Velo Logistics",
      stats: "180+ active cards deployed",
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 pb-12 overflow-hidden fintech-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Finora 3.0 Operating System Now Live</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
            Make Every Financial Decision <span className="text-emerald-600">Count</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Unified corporate cards, real-time cash flow forecasting, and automated expense reconciliation for modern growth companies.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/25 transition flex items-center gap-2"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/features"
              className="px-8 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold rounded-xl shadow-sm transition"
            >
              Explore Financial Features
            </Link>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" /> Setup in under 5 minutes
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" /> SOC2 Type II Certified
            </span>
          </div>

          {/* Interactive Financial Dashboard Mockup Preview */}
          <div className="mt-14 max-w-6xl mx-auto">
            <FinoraDashboardMockup />
          </div>
        </div>
      </section>

      {/* Core Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-semibold">
            Unified Financial OS
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for Modern Finance Teams
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Stop stitching together disconnected bank portals, expense apps, and spreadsheets. Finora combines every financial workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-emerald-200 hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Native Integrations Showcase */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
            Seamless Connectivity
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Syncs Directly With Your Existing Accounting Stack
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Finora connects to over 11,000 global financial institutions and seamlessly reconciles transactions with your ERP.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {integrations.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col items-center justify-center text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 font-bold font-mono text-sm flex items-center justify-center mb-3 border border-slate-700">
                  {item.logo}
                </div>
                <div className="font-semibold text-xs text-white">{item.name}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{item.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-semibold">
            Customer Impact
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
            Trusted by Fast-Growing Companies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-slate-900">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {t.stats}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trial CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-emerald-700 to-emerald-600 text-white shadow-xl shadow-emerald-700/20">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Take Control of Your Company&apos;s Financial Future
          </h3>
          <p className="mt-3 text-sm sm:text-base text-emerald-100 max-w-xl mx-auto">
            Join over 1,400 high-growth businesses saving an average of $38,000 annually with Finora.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="px-8 py-3.5 rounded-xl bg-white text-emerald-700 font-bold text-sm hover:bg-emerald-50 transition shadow-md"
            >
              Start Free 14-Day Trial
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm transition"
            >
              Schedule CFO Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
