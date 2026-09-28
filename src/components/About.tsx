"use client";

import React from "react";
import {
  GraduationCap,
  MapPin,
  Compass,
  Briefcase,
  TerminalSquare,
  Sparkles,
} from "lucide-react";
import { ABOUT_DETAILS, PERSONAL_INFO } from "@/data/portfolioData";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
            <TerminalSquare className="w-3.5 h-3.5" />
            01 // Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-4 text-base text-[var(--text-secondary)] leading-relaxed">
            {ABOUT_DETAILS.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="tracking-normal">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex items-center gap-3 text-xs text-[var(--text-muted)] font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400" />
              <span>Belief: Building and deploying is the fastest way to understand modern web software.</span>
            </div>
          </div>

          {/* Quick Info Grid Panel */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 shadow-sm border border-[var(--border-subtle)] bg-[var(--bg-card)]">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
                <span className="text-xs font-mono font-medium text-[var(--text-muted)] uppercase tracking-wider">
                  Quick Information
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-indigo-400">
                  <Sparkles className="w-3 h-3" />
                  Verified
                </span>
              </div>

              <dl className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <dt className="text-xs font-mono text-[var(--text-muted)]">
                      Education
                    </dt>
                    <dd className="font-medium text-[var(--text-primary)]">
                      BCA — {PERSONAL_INFO.college}
                    </dd>
                    <dd className="text-xs text-[var(--text-secondary)]">
                      2024 – 2027 (CGPA: {PERSONAL_INFO.cgpa})
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <dt className="text-xs font-mono text-[var(--text-muted)]">
                      Location
                    </dt>
                    <dd className="font-medium text-[var(--text-primary)]">
                      {PERSONAL_INFO.location}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 shrink-0 mt-0.5">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <dt className="text-xs font-mono text-[var(--text-muted)]">
                      Current Focus
                    </dt>
                    <dd className="font-medium text-[var(--text-primary)]">
                      Web Development &amp; AI-assisted Workflows
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <dt className="text-xs font-mono text-[var(--text-muted)]">
                      Availability
                    </dt>
                    <dd className="font-medium text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {PERSONAL_INFO.availability}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
