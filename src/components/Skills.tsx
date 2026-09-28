"use client";

import React from "react";
import {
  Code,
  Globe,
  Layers,
  Database,
  Wrench,
  Workflow,
  Sparkles,
  Users2,
  Languages,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Programming Languages": <Code className="w-4 h-4 text-cyan-400" />,
  "Web Technologies": <Globe className="w-4 h-4 text-indigo-400" />,
  "Frameworks & Libraries": <Layers className="w-4 h-4 text-violet-400" />,
  "Database & Backend Services": <Database className="w-4 h-4 text-emerald-400" />,
  "Developer Tools": <Wrench className="w-4 h-4 text-amber-400" />,
  "Development Workflow": <Workflow className="w-4 h-4 text-rose-400" />,
  "Soft Skills": <Users2 className="w-4 h-4 text-cyan-400" />,
  "Languages": <Languages className="w-4 h-4 text-indigo-400" />,
};

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            02 // Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Skills &amp; Technologies
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-xl">
            A transparent overview of the languages, tools, and workflows I work with as an aspiring developer. Categorized by familiarity without exaggerated percentage bars.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)] mb-8 p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] max-w-xl">
          <span className="text-[var(--text-secondary)] font-medium">Proficiency Guide:</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Working Knowledge</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Familiar</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <span>Currently Learning</span>
          </div>
        </div>

        {/* Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="glass-panel rounded-2xl p-6 border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-[var(--border-subtle)]">
                  <div className="p-2 rounded-lg bg-white/5 border border-[var(--border-subtle)]">
                    {CATEGORY_ICONS[category.title] || <Code className="w-4 h-4 text-indigo-400" />}
                  </div>
                  <h3 className="font-semibold text-sm text-[var(--text-primary)] tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isWorking = skill.level === "Working Knowledge";
                    const isFamiliar = skill.level === "Familiar";

                    return (
                      <div
                        key={skill.name}
                        className="group relative flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-colors"
                      >
                        <span className="text-xs font-medium text-[var(--text-primary)]">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isWorking
                                ? "bg-emerald-400"
                                : isFamiliar
                                ? "bg-cyan-400"
                                : "bg-indigo-400"
                            }`}
                            title={skill.level}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)]/50 flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                <span>{category.skills.length} competencies</span>
                <span className="capitalize text-[10px]">project-tested</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
