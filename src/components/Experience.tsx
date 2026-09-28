"use client";

import React from "react";
import {
  Briefcase,
  Calendar,
  CheckCircle,
  Users2,
} from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5" />
            05 // Community &amp; Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Experience &amp; Volunteer Work
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-xl">
            Contributing to on-campus collegiate software culture and coordinating technical community activities.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* Experience Timeline / Cards */}
        <div className="space-y-6">
          {EXPERIENCES.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-indigo-500/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-5 border-b border-[var(--border-subtle)]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Users2 className="w-4 h-4" />
                    </span>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      {item.role}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-cyan-400">
                    {item.organization}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    {item.department}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] bg-white/5 px-2.5 py-1 rounded-md border border-[var(--border-subtle)]">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {item.status} Role
                  </span>
                </div>
              </div>

              <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                {item.summary} Supported{" "}
                <span className="text-[var(--text-primary)] font-semibold">
                  3–4 technical hackathons and coding contests
                </span>{" "}
                hosted at the university department.
              </p>

              {/* Responsibilities list */}
              <div className="space-y-2 mt-4">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                  Core Responsibilities:
                </span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
