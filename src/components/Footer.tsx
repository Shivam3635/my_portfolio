"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity & Subtitle */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-bold text-base text-[var(--text-primary)]">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              {PERSONAL_INFO.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-indigo-400 transition-colors flex items-center gap-1.5 p-1"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-[var(--text-muted)]">•</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-indigo-400 transition-colors flex items-center gap-1.5 p-1"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <span className="text-[var(--text-muted)]">•</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[var(--text-secondary)] hover:text-indigo-400 transition-colors flex items-center gap-1.5 p-1"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-[var(--text-muted)]">
              &copy; 2026 {PERSONAL_INFO.name}
            </span>
            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded-lg border border-[var(--border-subtle)] hover:border-indigo-500/40 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
