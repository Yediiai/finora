"use client";

import React, { useState } from "react";
import { 
  TrendingUp, TrendingDown, DollarSign, CreditCard, ArrowUpRight, 
  ArrowDownRight, CheckCircle2, Filter, Download, Calendar, Layers, Shield
} from "lucide-react";

export function FinoraDashboardMockup() {
  const [activeTab, setActiveTab] = useState<"overview" | "expenses" | "runway">("overview");

  const recentTransactions = [
    { id: "tx-1", merchant: "Amazon Web Services", category: "Cloud Hosting", amount: "-$3,842.20", date: "Today, 14:20", status: "Auto-Reconciled", badge: "Card •• 8912" },
    { id: "tx-2", merchant: "Stripe Billing Payout", category: "Revenue Deposit", amount: "+$28,450.00", date: "Today, 09:12", status: "Settled", badge: "ACH Direct" },
    { id: "tx-3", merchant: "Figma Enterprise Plan", category: "Design Tools", amount: "-$1,200.00", date: "Yesterday", status: "Auto-Reconciled", badge: "Card •• 3411" },
    { id: "tx-4", merchant: "Google Cloud Workspace", category: "Productivity", amount: "-$540.00", date: "Oct 28", status: "Auto-Reconciled", badge: "Card •• 8912" },
    { id: "tx-5", merchant: "Delta Air Lines", category: "Executive Travel", amount: "-$842.10", date: "Oct 27", status: "Pending Approval", badge: "Card •• 7720" },
  ];

  return (
    <div className="w-full bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden text-white font-sans">
      {/* Top Bar */}
      <div className="bg-slate-950/80 px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
          <span className="font-semibold text-sm text-slate-200">
            Acme Growth Corp — Primary Operating Account
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Live Feed (Sample)
          </span>
        </div>

        <div className="flex items-center gap-2">
          {[
            { id: "overview", label: "Financial Pulse" },
            { id: "expenses", label: "Card Transactions" },
            { id: "runway", label: "Runway Forecast" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                activeTab === tab.id
                  ? "bg-emerald-600 text-white font-semibold"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Dashboard Body */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* KPI Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <span className="text-xs text-slate-400 block mb-1">Total Available Cash</span>
            <div className="text-2xl font-bold font-mono text-white">$1,428,500</div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+$142,300 (+11.4%) this mo</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <span className="text-xs text-slate-400 block mb-1">Annual Recurring (ARR)</span>
            <div className="text-2xl font-bold font-mono text-white">$2,410,000</div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+18.2% YoY Growth</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <span className="text-xs text-slate-400 block mb-1">Net Monthly Burn</span>
            <div className="text-2xl font-bold font-mono text-rose-400">-$62,400</div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-300">
              <ArrowDownRight className="w-3.5 h-3.5 text-emerald-400" />
              <span>Reduced burn by 8.5%</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <span className="text-xs text-slate-400 block mb-1">Estimated Cash Runway</span>
            <div className="text-2xl font-bold font-mono text-emerald-400">22.8 Months</div>
            <div className="mt-2 text-xs text-slate-400">
              Target: &gt; 18 months buffer
            </div>
          </div>
        </div>

        {/* Tab Content 1: Overview Chart & Ledger */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Visual Cash Flow Chart */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/80 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-sm text-slate-200">
                    Net Cash Flow (Past 6 Months)
                  </h4>
                  <p className="text-xs text-slate-400">Inflows vs Outflows in USD thousands</p>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Inflows
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-500" /> Outflows
                  </span>
                </div>
              </div>

              {/* CSS Bar Chart Simulation */}
              <div className="h-44 flex items-end justify-between gap-3 pt-6 pb-2 px-2 border-b border-slate-700">
                {[
                  { month: "May", in: 180, out: 140 },
                  { month: "Jun", in: 210, out: 155 },
                  { month: "Jul", in: 240, out: 160 },
                  { month: "Aug", in: 275, out: 175 },
                  { month: "Sep", in: 310, out: 180 },
                  { month: "Oct", in: 345, out: 195 },
                ].map((bar) => (
                  <div key={bar.month} className="flex-1 flex flex-col items-center gap-1 group">
                    <div className="w-full flex items-end justify-center gap-1.5 h-36">
                      <div
                        style={{ height: `${(bar.in / 350) * 100}%` }}
                        className="w-1/2 bg-emerald-500 rounded-t-sm group-hover:bg-emerald-400 transition"
                        title={`Inflow: $${bar.in}k`}
                      />
                      <div
                        style={{ height: `${(bar.out / 350) * 100}%` }}
                        className="w-1/2 bg-slate-600 rounded-t-sm group-hover:bg-slate-500 transition"
                        title={`Outflow: $${bar.out}k`}
                      />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 mt-2">{bar.month}</span>
                  </div>
                ))}
              </div>
              <div className="text-[11px] text-slate-400 pt-3 flex justify-between">
                <span>Revenue pacing: +24% vs baseline</span>
                <span className="text-emerald-400 font-medium">Net positive cash flow</span>
              </div>
            </div>

            {/* Quick Virtual Cards Widget */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-emerald-950/70 to-slate-900 border border-emerald-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    Finora Corporate Visa
                  </span>
                  <CreditCard className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-tr from-slate-950 to-slate-800 border border-slate-700/80 shadow-lg mb-4">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs text-slate-400">Marketing & Growth</span>
                    <span className="text-xs font-mono text-emerald-400">ACTIVE</span>
                  </div>
                  <div className="font-mono text-lg text-slate-200 tracking-widest mb-3">
                    •••• •••• •••• 8912
                  </div>
                  <div className="flex justify-between items-end text-xs">
                    <div>
                      <span className="text-slate-500 text-[10px] block">CARDHOLDER</span>
                      <span className="font-medium text-slate-300">JORDAN VANCE</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block">EXP</span>
                      <span className="font-medium text-slate-300">08/29</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Monthly Spend Limit:</span>
                  <span className="font-mono text-white">$15,000.00</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[38%]" />
                </div>
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Spent: $5,582.20</span>
                  <span className="text-emerald-400 font-mono">$9,417.80 left</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Live Expense Ledger */}
        {(activeTab === "expenses" || activeTab === "overview") && (
          <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/80">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-semibold text-sm text-slate-200">
                  Real-Time Expense Activity
                </h4>
                <p className="text-xs text-slate-400">
                  Automated OCR receipt matching and general ledger categorization
                </p>
              </div>
              <button
                onClick={() => alert("Simulated CSV exported")}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-700/80 pb-2">
                    <th className="py-2.5 font-medium">Merchant & Description</th>
                    <th className="py-2.5 font-medium">Category</th>
                    <th className="py-2.5 font-medium">Method</th>
                    <th className="py-2.5 font-medium">Status</th>
                    <th className="py-2.5 font-medium text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {recentTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-800/50 transition">
                      <td className="py-3 font-medium text-white flex items-center gap-2">
                        <span>{tx.merchant}</span>
                        <span className="text-[10px] text-slate-400">({tx.date})</span>
                      </td>
                      <td className="py-3 text-slate-300">{tx.category}</td>
                      <td className="py-3">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                          {tx.badge}
                        </span>
                      </td>
                      <td className="py-3">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${
                            tx.status === "Auto-Reconciled"
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : tx.status === "Settled"
                              ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                              : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          }`}
                        >
                          <CheckCircle2 className="w-3 h-3" /> {tx.status}
                        </span>
                      </td>
                      <td
                        className={`py-3 text-right font-mono font-bold ${
                          tx.amount.startsWith("+") ? "text-emerald-400" : "text-white"
                        }`}
                      >
                        {tx.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content 3: Runway Forecast */}
        {activeTab === "runway" && (
          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-4">
            <h4 className="font-semibold text-sm text-slate-200">
              Interactive Runway Scenario Simulator
            </h4>
            <p className="text-xs text-slate-400">
              Finora models headcount expansions, marketing scale-ups, and customer churn impact in real-time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-700">
                <span className="text-xs text-slate-400">Conservative Plan</span>
                <div className="text-xl font-bold font-mono text-emerald-400 mt-1">26.2 Months</div>
                <p className="text-[11px] text-slate-400 mt-1">At $54k monthly net burn</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 ring-1 ring-emerald-500/40">
                <span className="text-xs text-slate-400">Current Run-rate</span>
                <div className="text-xl font-bold font-mono text-white mt-1">22.8 Months</div>
                <p className="text-[11px] text-slate-400 mt-1">At $62.4k monthly net burn</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-700">
                <span className="text-xs text-slate-400">Aggressive Hiring (+6 Devs)</span>
                <div className="text-xl font-bold font-mono text-amber-400 mt-1">16.4 Months</div>
                <p className="text-[11px] text-slate-400 mt-1">At $87k monthly net burn</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
