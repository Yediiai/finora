"use client";

import React, { useState } from "react";
import { Check, HelpCircle, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: "Starter",
      description: "For early-stage startups and small agencies wanting clean expense tracking.",
      monthlyPrice: "$0",
      annualPrice: "$0",
      cadence: "Free forever",
      popular: false,
      features: [
        "Up to 5 virtual corporate cards",
        "Automated OCR receipt scanning (50/mo)",
        "QuickBooks & Xero basic sync",
        "Single-tier spend approval flows",
        "Standard email support",
      ],
      cta: "Get Started Free",
    },
    {
      name: "Professional",
      description: "For scaling growth companies needing unified cards and cash forecasting.",
      monthlyPrice: "$59",
      annualPrice: "$47",
      cadence: "per company / month",
      popular: true,
      features: [
        "Unlimited virtual & physical smart cards",
        "Unlimited OCR receipt scanning",
        "Real-time cash flow & runway simulator",
        "Automated two-way GL accounting sync",
        "Departmental budget controls & slack alerts",
        "Multi-tier approval workflows",
        "Priority 24/7 financial concierge",
      ],
      cta: "Start 14-Day Free Trial",
    },
    {
      name: "Business Scale",
      description: "For multi-entity businesses requiring custom ERP connections and audit trails.",
      monthlyPrice: "$179",
      annualPrice: "$143",
      cadence: "per company / month",
      popular: false,
      features: [
        "Everything in Professional",
        "Multi-entity & international subsidiary sync",
        "NetSuite & SAP ERP deep integration",
        "Custom chart of accounts mapping engine",
        "Dedicated account manager & CFO onboarding",
        "Custom approval logic & SAML SSO",
        "99.99% uptime financial SLA",
      ],
      cta: "Start 14-Day Free Trial",
    },
  ];

  const comparisonCategories = [
    {
      title: "Corporate Cards & Controls",
      features: [
        { name: "Virtual Cards", starter: "Up to 5", pro: "Unlimited", business: "Unlimited" },
        { name: "Physical Metal Cards", starter: "—", pro: "Included", business: "Included" },
        { name: "Vendor-Specific Spend Limits", starter: "Basic", pro: "Advanced", business: "Custom Matrix" },
        { name: "Automatic Card Pausing", starter: "Manual", pro: "Automated", business: "Automated" },
      ],
    },
    {
      title: "Cash Flow & Forecasting",
      features: [
        { name: "Real-Time Runway Simulator", starter: "—", pro: "Included", business: "Included" },
        { name: "Rolling Inflow/Outflow Forecast", starter: "30-day", pro: "12-month", business: "36-month" },
        { name: "Scenario Modeling (Hiring/Burn)", starter: "—", pro: "Included", business: "Included" },
      ],
    },
    {
      title: "Accounting & Sync",
      features: [
        { name: "OCR Receipt Extraction", starter: "50 / mo", pro: "Unlimited", business: "Unlimited" },
        { name: "QuickBooks & Xero Sync", starter: "Daily", pro: "Real-time", business: "Real-time" },
        { name: "NetSuite & Custom ERP", starter: "—", pro: "—", business: "Included" },
        { name: "Audit Trail Logging", starter: "30-day", pro: "Unlimited", business: "Unlimited" },
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-4">
          <Zap className="w-3.5 h-3.5" />
          <span>Simple, Transparent Pricing • No Hidden FX Fees</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Invest in Financial Clarity
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Start with our free starter plan or scale your business with enterprise-grade financial forecasting. Every paid tier includes a 14-day zero-risk trial.
        </p>

        {/* Annual / Monthly Toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={`text-sm font-medium ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>
            Billed Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-8 rounded-full bg-slate-900 p-1 relative transition"
            aria-label="Toggle annual billing"
          >
            <div
              className={`w-6 h-6 rounded-full bg-emerald-500 transition-transform ${
                isAnnual ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <div className="flex items-center gap-1.5">
            <span className={`text-sm font-medium ${isAnnual ? "text-slate-900" : "text-slate-500"}`}>
              Billed Annually
            </span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.name}
                className={`p-8 rounded-3xl transition-all duration-200 flex flex-col justify-between ${
                  plan.popular
                    ? "bg-white border-2 border-emerald-500 shadow-xl shadow-emerald-600/10 relative"
                    : "bg-white border border-slate-200 shadow-sm hover:border-slate-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold tracking-wider uppercase">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.description}</p>

                  <div className="mt-6 mb-6">
                    <span className="text-4xl font-extrabold text-slate-900 font-mono">{price}</span>
                    <span className="text-xs text-slate-500 ml-2 font-sans">{plan.cadence}</span>
                    {isAnnual && plan.monthlyPrice !== "$0" && (
                      <div className="text-xs text-emerald-600 font-medium mt-1">
                        Billed annually (Save 20%)
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setSelectedPlan(plan.name);
                      alert(`Trial initialized for Finora ${plan.name} plan!`);
                    }}
                    className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feature Comparison Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Compare Plan Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Detailed breakdown of limits, integrations, and accounting controls.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-4 px-6 font-semibold text-slate-700">Capabilities</th>
                  <th className="py-4 px-6 font-semibold text-slate-700">Starter</th>
                  <th className="py-4 px-6 font-semibold text-emerald-700">Professional</th>
                  <th className="py-4 px-6 font-semibold text-slate-700">Business Scale</th>
                </tr>
              </thead>
              <tbody>
                {comparisonCategories.map((cat, idx) => (
                  <React.Fragment key={idx}>
                    <tr className="bg-slate-100/60 font-semibold text-slate-900 text-xs">
                      <td colSpan={4} className="py-2.5 px-6 font-mono uppercase tracking-wider">
                        {cat.title}
                      </td>
                    </tr>
                    {cat.features.map((feat, fIdx) => (
                      <tr key={fIdx} className="border-b border-slate-100 hover:bg-slate-50/50">
                        <td className="py-3.5 px-6 font-medium text-slate-800">{feat.name}</td>
                        <td className="py-3.5 px-6 text-slate-600">{feat.starter}</td>
                        <td className="py-3.5 px-6 text-emerald-700 font-semibold">{feat.pro}</td>
                        <td className="py-3.5 px-6 text-slate-800">{feat.business}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pricing FAQs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
          Billing & Subscription Questions
        </h3>
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-slate-900 text-sm mb-1">
              Do you charge per employee or card seat?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              No. Unlike legacy expense vendors that charge $10 to $20 per user each month, Finora charges a flat company tier. You can invite your entire team without paying per seat.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-slate-900 text-sm mb-1">
              How does the 14-day free trial work?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              You get immediate access to all Professional or Business features. No credit card is required to start, and you will not be charged if you decide not to continue.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-slate-900 text-sm mb-1">
              Are there hidden fees on foreign exchange (FX) card spend?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Zero markup. International card transactions convert at the wholesale Visa interbank rate with no additional percentage surcharges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
