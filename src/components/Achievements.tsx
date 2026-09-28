"use client";

import React from "react";
import { Award, Trophy, Star, ShieldCheck } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/portfolioData";

export function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            07 // Distinctions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Verified Achievements
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-xl">
            Authentic recognitions earned through academic rigor, hackathon qualification, and military camp training.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-subtle)]">
                  <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    {idx === 0 || idx === 1 ? (
                      <Star className="w-4 h-4 text-amber-400" />
                    ) : idx === 2 ? (
                      <Trophy className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    )}
                  </span>
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    {item.dateOrYear}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                  {item.category}
                </div>
                <h3 className="font-bold text-base text-[var(--text-primary)] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  Verified Record
                </span>
                <span className="text-[11px] font-medium text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
