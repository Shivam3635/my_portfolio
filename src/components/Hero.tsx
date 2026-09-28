"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Terminal,
  Copy,
  Check,
  Sparkles,
  Send,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO, CODE_SNIPPET } from "@/data/portfolioData";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_SNIPPET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      {/* Background Glow Accents */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-tr from-indigo-600/15 to-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-10 w-72 h-72 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs text-indigo-300 dark:text-indigo-300 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-medium">Open to Web Developer Internships</span>
              <span className="text-[var(--text-muted)]">•</span>
              <span className="text-xs text-[var(--text-muted)]">2026</span>
            </div>

            {/* Introduction greeting */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm sm:text-base font-mono text-cyan-400">
                Hi, I&apos;m
              </span>
              <span className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">
                {PERSONAL_INFO.name}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15] mb-6">
              Building my path into{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
                Web Development.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
              BCA student at the{" "}
              <span className="text-[var(--text-primary)] font-medium">
                University of Allahabad
              </span>
              , exploring web development through real projects, hackathons, and
              AI-assisted development.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium text-sm shadow-md hover:shadow-indigo-500/25 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 active:scale-98"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] font-medium text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 active:scale-98"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Let&apos;s Connect</span>
              </a>
            </div>

            {/* Social Links & Honest Note */}
            <div className="flex items-center gap-4 pt-2 border-t border-[var(--border-subtle)] w-full max-w-md">
              <span className="text-xs font-mono text-[var(--text-muted)]">
                Profiles:
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-indigo-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-[var(--text-muted)]">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-indigo-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Code/Terminal Visual Panel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md code-window rounded-2xl shadow-2xl overflow-hidden border border-white/10 transition-transform duration-300 hover:border-indigo-500/30">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0c101c] border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    developer.ts
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  type="button"
                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400"
                  aria-label="Copy code snippet"
                  title="Copy snippet"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Code Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed bg-[#080c16] text-slate-300">
                <div className="text-slate-500 text-xs mb-3 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  <span>{"// Developer Profile Definition"}</span>
                </div>
                <div className="space-y-1">
                  <div>
                    <span className="text-indigo-400">const</span>{" "}
                    <span className="text-cyan-300">shivam</span> = {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">education:</span>{" "}
                    <span className="text-emerald-400">&quot;BCA&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">focus:</span>{" "}
                    <span className="text-emerald-400">
                      &quot;Web Development&quot;
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">learning:</span> [
                    <span className="text-amber-300">&quot;Python&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;JavaScript&quot;</span>
                    , <span className="text-amber-300">&quot;Web&quot;</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">building:</span>{" "}
                    <span className="text-cyan-400">true</span>
                  </div>
                  <div>{"};"}</div>
                </div>

                {/* Simulated runtime status */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    status: ready to deploy &amp; learn
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    BCA 2024-2027
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
