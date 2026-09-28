"use client";

import React from "react";
import {
  ExternalLink,
  Layers,
  Bot,
  MapPin,
  Calendar,
  Bell,
  FileCheck2,
  Database,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PROJECTS } from "@/data/portfolioData";
import { ProjectItem } from "@/types";

function ProjectPreviewMockup({ project }: { project: ProjectItem }) {
  if (project.mockupType === "academ-iq") {
    return (
      <div className="w-full h-48 sm:h-56 bg-[#070b14] p-4 flex flex-col justify-between select-none overflow-hidden relative font-mono text-xs">
        {/* Browser Topbar */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[10px] text-slate-400 ml-2 font-sans">
              academ-iq.vercel.app
            </span>
          </div>
          <span className="text-[10px] text-cyan-400 flex items-center gap-1 font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Live Hub
          </span>
        </div>

        {/* Mock Academic Dashboard Content */}
        <div className="grid grid-cols-12 gap-2 mt-2">
          {/* Notice Board column */}
          <div className="col-span-7 bg-[#0d1424] rounded-lg p-2.5 border border-white/5 space-y-2">
            <div className="flex items-center justify-between text-[11px] text-slate-300 font-sans font-semibold">
              <span className="flex items-center gap-1 text-indigo-400">
                <Bell className="w-3 h-3" /> Campus Notices
              </span>
              <span className="text-[9px] bg-indigo-500/20 text-indigo-300 px-1 rounded">
                Realtime
              </span>
            </div>
            <div className="bg-[#121c33] p-1.5 rounded text-[10px] text-slate-300 border-l-2 border-indigo-400 font-sans">
              Mid-term examinations schedule published by Department
            </div>
            <div className="bg-[#121c33] p-1.5 rounded text-[10px] text-slate-300 border-l-2 border-cyan-400 font-sans">
              Central Library access extended for semester reading
            </div>
          </div>

          {/* Calendar Widget column */}
          <div className="col-span-5 bg-[#0d1424] rounded-lg p-2.5 border border-white/5 flex flex-col justify-between">
            <div className="flex items-center gap-1 text-[11px] text-slate-300 font-sans font-semibold">
              <Calendar className="w-3 h-3 text-cyan-400" /> Academic Term
            </div>
            <div className="grid grid-cols-4 gap-1 text-center text-[9px] text-slate-400 my-1">
              <span className="p-1 rounded bg-indigo-500/20 text-indigo-300">M</span>
              <span className="p-1 rounded bg-indigo-500/20 text-indigo-300">T</span>
              <span className="p-1 rounded bg-emerald-500/20 text-emerald-300">W</span>
              <span className="p-1 rounded bg-indigo-500/20 text-indigo-300">T</span>
            </div>
            <div className="text-[9px] text-emerald-400 font-sans text-center bg-emerald-950/40 py-1 rounded border border-emerald-500/20">
              Firebase Auth Active
            </div>
          </div>
        </div>

        {/* Footer indicator */}
        <div className="pt-2 flex items-center justify-between text-[10px] text-slate-500 font-sans">
          <span>Student Portal UI</span>
          <span className="text-indigo-400">Next.js + Firestore</span>
        </div>
      </div>
    );
  }

  if (project.mockupType === "jansetu") {
    return (
      <div className="w-full h-48 sm:h-56 bg-[#080d1a] p-4 flex flex-col justify-between select-none overflow-hidden relative font-mono text-xs">
        {/* Browser Topbar */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[10px] text-slate-400 ml-2 font-sans">
              jan-setu-ai.vercel.app
            </span>
          </div>
          <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            GDG Hackathon 2026
          </span>
        </div>

        {/* Mock JanSetu Content */}
        <div className="space-y-2 mt-2">
          {/* Simulated multilingual input badge */}
          <div className="bg-[#0f172a] rounded-lg p-2.5 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-sans font-semibold">
                हिन्दी / ENG
              </span>
              <span className="text-[10px] text-slate-300 font-sans">
                Multilingual Voice &amp; Text NLU
              </span>
            </div>
            <span className="text-[9px] text-cyan-400 font-sans">Gemini AI</span>
          </div>

          {/* Hotspot & Clustering visualization simulation */}
          <div className="bg-[#0f172a] rounded-lg p-2.5 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <div className="font-sans text-[10px]">
                <div className="text-slate-200 font-medium">Grievance Clustering</div>
                <div className="text-slate-400 text-[9px]">Roads &amp; Drainage Hotspot #4</div>
              </div>
            </div>
            <span className="text-[9px] bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded font-sans">
              Priority: High
            </span>
          </div>
        </div>

        {/* Footer indicator */}
        <div className="pt-2 flex items-center justify-between text-[10px] text-slate-500 font-sans">
          <span>Digital Public Good Prototype</span>
          <span className="text-cyan-400">Google Maps + Flask</span>
        </div>
      </div>
    );
  }

  // Bhoomi Intel
  return (
    <div className="w-full h-48 sm:h-56 bg-[#080d18] p-4 flex flex-col justify-between select-none overflow-hidden relative font-mono text-xs">
      {/* Browser Topbar */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-[10px] text-slate-400 ml-2 font-sans">
            bhoomi-intel.vercel.app
          </span>
        </div>
        <span className="text-[10px] text-indigo-400 flex items-center gap-1 font-sans">
          <Database className="w-3 h-3" />
          DoLR / SIH Architecture
        </span>
      </div>

      {/* Mock Bhoomi Intel Interface */}
      <div className="space-y-2 mt-2">
        <div className="bg-[#0e1629] p-2.5 rounded-lg border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-indigo-500/20 text-indigo-300">
              <FileCheck2 className="w-3 h-3" />
            </span>
            <span className="text-[10px] text-slate-200 font-sans font-medium">
              100% Provenance &amp; Traceability
            </span>
          </div>
          <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1 rounded font-sans">
            Verified Source
          </span>
        </div>

        <div className="bg-[#0e1629] p-2 rounded-lg border border-white/5 flex items-center justify-between font-sans text-[10px] text-slate-300">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>GIS Cadastral Overlay</span>
          </div>
          <span className="text-slate-400 text-[9px]">PostGIS / Leaflet</span>
        </div>
      </div>

      {/* Footer indicator */}
      <div className="pt-2 flex items-center justify-between text-[10px] text-slate-500 font-sans">
        <span>Evidence Intelligence Layer</span>
        <span className="text-indigo-400">FastAPI + Next.js 16</span>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            03 // Featured Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Featured Projects
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-2xl">
            Real deployed applications created to solve tangible challenges in campus organization, civic feedback, and spatial evidence governance.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group glass-panel rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Upper Portion: Mockup + Info */}
              <div>
                {/* Visual Preview Header */}
                <div className="border-b border-[var(--border-subtle)] overflow-hidden">
                  <ProjectPreviewMockup project={project} />
                </div>

                <div className="p-6">
                  {/* Category Pill & AI Workflow Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-medium text-cyan-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-[10px] font-mono text-[var(--text-muted)] bg-white/5 border border-[var(--border-subtle)] px-2 py-0.5 rounded-full"
                      title="Developed through an AI-assisted development workflow"
                    >
                      <Bot className="w-3 h-3 text-indigo-400" />
                      AI-assisted
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mt-2.5">
                    {project.description}
                  </p>

                  {/* Workflow Note / Disclosure */}
                  <div className="mt-3 p-2.5 rounded-lg bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] leading-relaxed">
                    <span className="font-semibold text-[var(--text-secondary)] block mb-0.5">
                      Workflow &amp; Contribution:
                    </span>
                    {project.workflowNote}
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="px-6 py-4 bg-[var(--bg-secondary)]/40 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 py-1"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
