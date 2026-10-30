"use client";

import React, { useState } from "react";
import { 
  Receipt, TrendingUp, BarChart3, CreditCard, ShieldCheck, 
  Layers, CheckCircle2, Sliders, Bell, ArrowRight, Zap, Filter
} from "lucide-react";
import Link from "next/link";
import { FinoraDashboardMockup } from "@/components/FinoraDashboardMockup";

export default function FeaturesPage() {
  const [selectedBudgetDept, setSelectedBudgetDept] = useState<string>("Engineering");

  const departmentBudgets = [
    { name: "Engineering", allocated: "$45,000", spent: "$32,150", percent: 71, lead: "David K.", cards: 18 },
    { name: "Marketing & Growth", allocated: "$30,000", spent: "$26,800", percent: 89, lead: "Sarah M.", cards: 8 },
    { name: "Sales & Travel", allocated: "$20,000", spent: "$11,400", percent: 57, lead: "Marcus B.", cards: 12 },
    { name: "Operations & HR", allocated: "$15,000", spent: "$9,200", percent: 61, lead: "Elena R.", cards: 6 },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-4">
          <Sliders className="w-3.5 h-3.5" />
          <span>Intelligent Corporate Financial Operating System</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Every Financial Workflow In One Place
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          From the moment an employee swipes a corporate card to final general ledger reconciliation, Finora automates your entire spend lifecycle.
        </p>
      </div>

      {/* Feature 1: Expense Management with OCR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Receipt className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Automated OCR Expense Scanning & Auto-Match
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Eliminate manual data entry. Employees snap a photo of any receipt, and our deep learning vision engine extracts the vendor name, line-item tax, amount, and currency with 99.4% accuracy.
            </p>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Instant matching to card transactions within 1.4 seconds</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Automatic currency conversion across 135+ foreign denominations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Smart flagging of duplicate claims and out-of-policy purchases</span>
              </div>
            </div>
          </div>

          {/* Visual Expense Card Mockup */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Live Receipt Parsing
              </span>
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                Verified Match
              </span>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-14 h-16 rounded-xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center text-[10px] text-slate-500 font-mono">
                <span>RECEIPT</span>
                <span>IMG_904</span>
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between font-bold text-slate-900 text-base">
                  <span>Delta Air Lines Inc.</span>
                  <span className="text-emerald-700 font-mono">$842.10</span>
                </div>
                <div className="text-xs text-slate-500">Flight JFK → SFO (Business Travel)</div>
                <div className="text-[11px] text-slate-400 font-mono">Tax: $64.20 • Auth: 893120 • Card •• 7720</div>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-slate-600">Auto-mapped to:</span>
              <span className="font-semibold text-slate-900 font-mono">GL 6320 - Travel & Lodging</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Interactive Department Budget Manager */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-semibold">
              Proactive Spend Control
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
              Departmental Budgets with Hard Spend Guardrails
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Empower team leads while protecting total company cash runway. Set flexible monthly budgets that auto-pause cards when ceilings are reached.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departmentBudgets.map((dept) => (
              <div
                key={dept.name}
                onClick={() => setSelectedBudgetDept(dept.name)}
                className={`p-6 rounded-2xl border cursor-pointer transition ${
                  selectedBudgetDept === dept.name
                    ? "bg-emerald-50/50 border-emerald-400 ring-2 ring-emerald-500/20 shadow-md"
                    : "bg-slate-50/50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-slate-900 text-sm">{dept.name}</h4>
                  <span className="text-xs font-mono text-slate-500">{dept.cards} cards</span>
                </div>
                <div className="text-xl font-bold font-mono text-slate-900 mb-2">
                  {dept.spent}{" "}
                  <span className="text-xs font-normal text-slate-500 font-sans">
                    / {dept.allocated}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden mb-2">
                  <div
                    style={{ width: `${dept.percent}%` }}
                    className={`h-full rounded-full ${
                      dept.percent > 85 ? "bg-amber-500" : "bg-emerald-600"
                    }`}
                  />
                </div>
                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span>Lead: {dept.lead}</span>
                  <span className="font-semibold">{dept.percent}% used</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Interactive Mockup in Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Interactive Financial Intelligence Suite
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Switch between the Financial Pulse, Card Ledger, and Runway Simulator below.
          </p>
        </div>

        <FinoraDashboardMockup />
      </section>

      {/* Feature 3: Smart Categorization Rules & Reporting */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <BarChart3 className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-lg mb-2">One-Click Financial Reporting</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Generate audited P&amp;L statements, balance sheet summaries, and cash flow reports in seconds. Export to Excel, PDF, or sync directly to your tax advisor.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <Zap className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-lg mb-2">Rule-Based Categorization</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Build custom boolean rules (e.g. &ldquo;If merchant contains AWS and amount &gt; $500, tag as R&amp;D Cloud and assign to Engineering Lead&rdquo;).
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-lg mb-2">Audit-Ready Compliance Trail</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every card swipe, manual edit, approval timestamp, and tax document attachment is permanently recorded in an immutable ledger for stress-free audits.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
