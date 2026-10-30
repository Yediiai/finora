"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  ShieldCheck, Lock, TrendingUp, Mail, Building2, MapPin, 
  CheckCircle2, AlertCircle, Send, Loader2, Sparkles, HeartHandshake
} from "lucide-react";

const finoraContactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  workEmail: z.string().email("Please provide a valid company work email"),
  companyName: z.string().min(2, "Company name is required"),
  monthlySpend: z.enum(["under-25k", "25k-100k", "100k-500k", "over-500k"], {
    errorMap: () => ({ message: "Please select estimated monthly spend" }),
  }),
  inquiryType: z.enum(["sales", "cfo-demo", "partnership", "security-audit"]),
  message: z.string().min(10, "Please provide at least 10 characters describing your request"),
});

type FinoraContactData = z.infer<typeof finoraContactSchema>;

export default function AboutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FinoraContactData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FinoraContactData>({
    resolver: zodResolver(finoraContactSchema),
    defaultValues: {
      monthlySpend: "25k-100k",
      inquiryType: "cfo-demo",
    },
  });

  const onSubmit = async (data: FinoraContactData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 850));
    setIsSubmitting(false);
    setSubmittedData(data);
    reset();
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-4">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Our Mission & Financial Principles</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Democratizing Enterprise Financial Intelligence
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          We believe high-growth businesses shouldn&apos;t have to hire a 10-person accounting firm just to know their accurate cash runway and stop expense leaks.
        </p>
      </div>

      {/* Financial Transparency Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Zero Data Monetization</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your financial transactions and vendor contracts belong solely to your company. We never sell aggregated spend insights or transaction data to hedge funds or advertisers.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Hidden FX Markups</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Legacy corporate card providers bury 2.5% to 3.5% foreign currency surcharges. Finora charges exact wholesale interbank rates with complete transparency.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Bank-Grade Zero Trust</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              SOC 1, SOC 2 Type II, and PCI-DSS Level 1 compliance. All data encrypted in transit with TLS 1.3 and at rest with hardware-backed AES-256 keys.
            </p>
          </div>
        </div>
      </section>

      {/* Security Architecture Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Security & Compliance Architecture
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold">
              Institutional-Grade Protection for Every Dollar
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Our infrastructure is verified by independent third-party cybersecurity auditors and conforms to highest regulatory standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <div className="text-emerald-400 font-bold mb-1">SOC 2 Type II</div>
              <div className="text-slate-400">Continuous annual auditing across all 5 Trust Services Criteria</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <div className="text-emerald-400 font-bold mb-1">PCI-DSS Level 1</div>
              <div className="text-slate-400">Highest certification tier for payment card data security</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <div className="text-emerald-400 font-bold mb-1">Tokenized Plaid API</div>
              <div className="text-slate-400">Read-only cryptographic tokens. No banking credentials stored</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <div className="text-emerald-400 font-bold mb-1">SAML 2.0 / Okta SSO</div>
              <div className="text-slate-400">Enterprise identity federation with mandatory WebAuthn MFA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales & Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-semibold">
                Direct Financial Concierge
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
                Connect With Our Finance Solutions Team
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Whether you need a custom multi-entity ERP migration or want to schedule a 20-minute tailored demo with a former corporate controller, we&apos;re here to help.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <Mail className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Direct Enterprise Desk</h4>
                  <p className="text-xs text-slate-600 font-mono">solutions@finora.io</p>
                  <p className="text-xs text-slate-400 mt-0.5">Average reply in under 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <Building2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Finance Innovation Center</h4>
                  <p className="text-xs text-slate-600">One Financial Plaza, 32nd Floor</p>
                  <p className="text-xs text-slate-500">New York, NY 10005</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Validated Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            {submittedData ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Demo & Consultation Request Confirmed!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{submittedData.fullName}</strong>. A dedicated Finora financial architect has been assigned to <strong>{submittedData.companyName}</strong>.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 max-w-sm mx-auto text-left">
                  <div>Work Email: {submittedData.workEmail}</div>
                  <div>Estimated Spend: {submittedData.monthlySpend}</div>
                  <div>Request: {submittedData.inquiryType}</div>
                </div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                <div className="border-b border-slate-100 pb-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-900">Request Financial Consultation</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the form below and an executive advisor will contact you within 2 business hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="Marcus Vance"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.fullName ? "border-rose-300" : "border-slate-200 focus:border-emerald-500"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("workEmail")}
                      placeholder="marcus@company.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.workEmail ? "border-rose-300" : "border-slate-200 focus:border-emerald-500"
                      }`}
                    />
                    {errors.workEmail && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.workEmail.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("companyName")}
                      placeholder="Acme Growth Inc."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.companyName ? "border-rose-300" : "border-slate-200 focus:border-emerald-500"
                      }`}
                    />
                    {errors.companyName && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.companyName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Monthly Spend Range <span className="text-rose-500">*</span>
                    </label>
                    <select
                      {...register("monthlySpend")}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-emerald-500 transition"
                    >
                      <option value="under-25k">&lt; $25,000 / month</option>
                      <option value="25k-100k">$25,000 - $100,000 / month</option>
                      <option value="100k-500k">$100,000 - $500,000 / month</option>
                      <option value="over-500k">&gt; $500,000 / month</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Inquiry Objective
                  </label>
                  <select
                    {...register("inquiryType")}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-emerald-500 transition"
                  >
                    <option value="cfo-demo">Schedule Live CFO Demo & Runway Model</option>
                    <option value="sales">Corporate Card & Expense Migration</option>
                    <option value="partnership">Bank / Accounting Partnership</option>
                    <option value="security-audit">Request SOC2 / Security Audit Packet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Challenges & Notes <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Tell us about your current ERP, number of cards needed, or timeline..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                      errors.message ? "border-rose-300" : "border-slate-200 focus:border-emerald-500"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Scheduling Consultation...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request CFO Demonstration</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
