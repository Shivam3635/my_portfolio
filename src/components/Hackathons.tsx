"use client";

import React from "react";
import {
  Trophy,
  Users,
  Presentation,
  Calendar,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { HACKATHONS } from "@/data/portfolioData";

export function Hackathons() {
  return (
    <section id="hackathons" className="py-16 sm:py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5" />
            04 // Competitions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Hackathons &amp; Challenges
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-xl">
            Collaborating in high-pressure collegiate problem-solving environments to design practical technical solutions.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HACKATHONS.map((hackathon, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header row: Year & Status Pill */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Trophy className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {hackathon.year}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* Hackathon Name & Organizer */}
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  {hackathon.name}
                </h3>
                {hackathon.organizer && (
                  <p className="text-xs text-indigo-400 font-medium mt-0.5">
                    {hackathon.organizer}
                  </p>
                )}

                {/* Project Brief */}
                <div className="mt-3 p-3 rounded-xl bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)] space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-muted)] font-mono">Project:</span>
                    <span className="font-semibold text-cyan-400">{hackathon.project}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-muted)] font-mono">Problem:</span>
                    <span className="text-[var(--text-secondary)] font-medium text-right">
                      {hackathon.problem}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">
                  {hackathon.description}
                </p>

                {/* Role and Contribution Details */}
                <dl className="mt-4 space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <dt className="text-[var(--text-muted)] font-mono w-24 shrink-0 flex items-center gap-1">
                      <Users className="w-3 h-3" /> Team &amp; Role:
                    </dt>
                    <dd className="text-[var(--text-primary)] font-medium">
                      {hackathon.team} • {hackathon.role}
                    </dd>
                  </div>

                  <div className="flex items-start gap-2">
                    <dt className="text-[var(--text-muted)] font-mono w-24 shrink-0 flex items-center gap-1">
                      <Presentation className="w-3 h-3" /> Contribution:
                    </dt>
                    <dd className="text-[var(--text-secondary)]">
                      {hackathon.contribution}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Result Footer */}
              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between bg-white/[0.02] -mx-6 -mb-6 p-4 px-6 rounded-b-2xl">
                <span className="text-xs font-mono text-[var(--text-muted)]">Result:</span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {hackathon.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
