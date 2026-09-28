"use client";

import React from "react";
import { GraduationCap, Award, Calendar, School } from "lucide-react";
import { EDUCATION_LIST } from "@/data/portfolioData";

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5" />
            06 // Academics
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Education
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-xl">
            Formal computer applications degree coursework combined with strong continuous academic performance.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* Compact Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-subtle)]">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    {idx === 0 ? (
                      <GraduationCap className="w-4 h-4" />
                    ) : (
                      <School className="w-4 h-4" />
                    )}
                  </div>
                  <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {edu.period}
                  </span>
                </div>

                <h3 className="font-bold text-base text-[var(--text-primary)]">
                  {edu.degree}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                  {edu.institution}
                </p>

                {edu.details && (
                  <p className="text-xs text-[var(--text-muted)] mt-2.5 leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] block">
                    {edu.scoreLabel}
                  </span>
                  <span className="text-lg font-mono font-bold text-cyan-400">
                    {edu.score}
                  </span>
                </div>

                {edu.honors && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                    <Award className="w-3 h-3 text-amber-400" />
                    {edu.honors}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
