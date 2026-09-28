"use client";

import React, { useState } from "react";
import {
  Mail,
  Send,
  Copy,
  Check,
  Phone,
  MapPin,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || "Web Developer Internship Inquiry"
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-[var(--border-subtle)] relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Call to Action */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              10 // Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight mb-4">
              Let&apos;s build something.
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg">
              I&apos;m currently looking for{" "}
              <span className="text-[var(--text-primary)] font-semibold">
                Web Developer internship opportunities
              </span>{" "}
              and opportunities to learn through real-world development and team collaboration.
            </p>

            {/* Direct Connect Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-sm shadow-md hover:shadow-indigo-500/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 active:scale-98"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me Directly</span>
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[var(--text-muted)]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Verified Contact Details card */}
            <div className="w-full max-w-md p-5 rounded-2xl glass-panel border border-[var(--border-subtle)] space-y-3 text-xs sm:text-sm">
              <div className="flex items-center justify-between text-[var(--text-secondary)]">
                <span className="font-mono text-xs text-[var(--text-muted)] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" /> Email:
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-medium text-[var(--text-primary)] hover:text-indigo-400 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="flex items-center justify-between text-[var(--text-secondary)]">
                <span className="font-mono text-xs text-[var(--text-muted)] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" /> Phone:
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="font-medium text-[var(--text-primary)] hover:text-cyan-400 transition-colors"
                >
                  +91 {PERSONAL_INFO.phone}
                </a>
              </div>

              <div className="flex items-center justify-between text-[var(--text-secondary)]">
                <span className="font-mono text-xs text-[var(--text-muted)] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" /> Location:
                </span>
                <span className="font-medium text-[var(--text-primary)]">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Social Profile links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:text-indigo-400 hover:border-indigo-500/30 text-xs font-medium text-[var(--text-secondary)] transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:text-indigo-400 hover:border-indigo-500/30 text-xs font-medium text-[var(--text-secondary)] transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Email Composer (Transparently opens default email client) */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[var(--border-subtle)] bg-[var(--bg-card)]">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <h3 className="font-bold text-sm sm:text-base text-[var(--text-primary)]">
                    Send an Internship or Project Inquiry
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Direct Mailto
                </span>
              </div>

              <p className="text-xs text-[var(--text-secondary)] mb-5">
                Have an internship role, hackathon collaboration, or question? Fill this quick template and clicking send will immediately open your preferred email client with all details organized.
              </p>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono text-[var(--text-muted)] mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Web Developer Internship Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-[var(--text-muted)] mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Shivam, we came across your portfolio and would like to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center gap-2 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch in Email Client</span>
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] flex items-center justify-between">
                <span>No silent form failures.</span>
                <span>Direct dispatch to {PERSONAL_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
