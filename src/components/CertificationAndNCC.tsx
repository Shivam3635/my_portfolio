"use client";

import React from "react";
import {
  Award,
  Shield,
  CheckCircle2,
  Calendar,
  Medal,
} from "lucide-react";
import { CERTIFICATIONS, NCC_INFO } from "@/data/portfolioData";

export function CertificationAndNCC() {
  const cert = CERTIFICATIONS[0];

  return (
    <section className="py-16 sm:py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Certification Column */}
          <div id="certification" className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex flex-col items-start mb-6">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  08 // Certification
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                  Professional Certification
                </h2>
                <div className="w-10 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-2" />
              </div>

              <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-indigo-500/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[var(--border-subtle)]">
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase">
                      {cert.provider}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mt-0.5">
                      {cert.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-[var(--text-muted)] bg-white/5 px-2.5 py-1 rounded-md border border-[var(--border-subtle)] shrink-0">
                    <Calendar className="w-3 h-3 text-indigo-400" />
                    {cert.issueDate}
                  </span>
                </div>

                <p className="text-xs text-[var(--text-secondary)] mb-4">
                  {cert.credentialNote}
                </p>

                <div>
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-2">
                    Key Modules &amp; Competencies:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-secondary)]">
                    {cert.topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NCC & Extracurricular Column (Kept compact as instructed) */}
          <div id="ncc" className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex flex-col items-start mb-6">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  09 // Discipline &amp; Leadership
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                  NCC &amp; Extracurricular
                </h2>
                <div className="w-10 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-2" />
              </div>

              <div className="glass-panel rounded-2xl p-6 border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-indigo-500/40 transition-all">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Medal className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="font-bold text-base text-[var(--text-primary)]">
                        {NCC_INFO.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] font-mono">
                        Rank: <span className="text-indigo-400 font-semibold">{NCC_INFO.rank}</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                    {NCC_INFO.certificate}
                  </span>
                </div>

                {/* Drill Achievement highlight */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-3">
                  <div className="flex items-center gap-2">
                    <Medal className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs font-bold text-amber-300">
                      {NCC_INFO.achievement}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] mt-1 ml-6">
                    {NCC_INFO.event} • {NCC_INFO.date}
                  </p>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {NCC_INFO.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
