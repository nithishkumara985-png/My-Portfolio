import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Send, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [topic, setTopic] = useState('High-Priority Project');
  const [messageText, setMessageText] = useState('');
  const [copiedDraft, setCopiedDraft] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio Reach - ${topic}] From ${senderName || 'Inquirer'}`);
    const body = encodeURIComponent(
      `Hello Nithish,\n\n${messageText}\n\n---\nSender: ${senderName}\nContact: ${senderEmail}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyDraft = () => {
    const draft = `Subject: [Portfolio Reach - ${topic}] From ${senderName || 'Inquirer'}\n\n${messageText}\n\n---\nSender: ${senderName}\nContact: ${senderEmail}`;
    navigator.clipboard.writeText(draft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-b border-[#1e2638] bg-[#05070a]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider block mb-2">
            05. Direct Channels & Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f1f5f9] font-['Space_Grotesk'] text-balance">
            Let's Engineer Systems That Run Without Friction
          </h2>
          <p className="text-sm text-[#94a3b8] mt-2 font-sans">
            Direct access channels for engineering opportunities, collaborative builds, and autonomous system architecture.
          </p>
        </div>

        {/* 2-Column Grid: Direct Channels + Interactive Quick Dispatcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left Column: Direct Channels (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Channel */}
            <div className="p-5 bg-[#0b0f17] border border-[#1e2638] hover:border-[#00f0ff]/40 rounded-[0.5rem] transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> Direct Primary Email
                </span>
                <span className="text-[11px] font-mono text-[#10b981]">FASTEST RESPONSE</span>
              </div>
              <p className="text-sm font-mono text-[#f1f5f9] font-medium break-all mb-2">
                {PERSONAL_INFO.email}
              </p>
              <p className="text-xs text-[#94a3b8] font-sans mb-3">
                Direct line for high-priority projects, technical roles, and system consultations.
              </p>
              <div className="flex items-center gap-2 pt-1 border-t border-[#1e2638]">
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-mono rounded-[0.25rem] bg-[#131924] hover:bg-[#1e2638] text-[#cbd5e1] border border-[#1e2638] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10b981]" />
                      <span className="text-[#10b981]">Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#64748b]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-3 py-1.5 text-xs font-mono rounded-[0.25rem] bg-[#00f0ff] hover:bg-[#7df4ff] text-[#05070a] font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Compose Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* LinkedIn Channel */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group block p-5 bg-[#0b0f17] border border-[#1e2638] hover:border-[#3b82f6]/50 rounded-[0.5rem] transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#3b82f6] uppercase tracking-wider flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn Profile
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#64748b] group-hover:text-[#3b82f6] transition-colors" />
              </div>
              <p className="text-sm font-mono text-[#f1f5f9] font-medium mb-1">
                in/nithish-kumar-a-b86350384
              </p>
              <p className="text-xs text-[#94a3b8] font-sans">
                For formal ops, career chats, engineering leadership & academic networks.
              </p>
            </a>

            {/* GitHub Channel */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="group block p-5 bg-[#0b0f17] border border-[#1e2638] hover:border-[#00f0ff]/40 rounded-[0.5rem] transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#cbd5e1] uppercase tracking-wider flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" /> GitHub Repositories
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#64748b] group-hover:text-[#00f0ff] transition-colors" />
              </div>
              <p className="text-sm font-mono text-[#f1f5f9] font-medium mb-1">
                github.com/nithishkumara985-png
              </p>
              <p className="text-xs text-[#94a3b8] font-sans">
                Inspect the codebases, architecture, commit histories & live builds.
              </p>
            </a>
          </div>

          {/* Right Column: Interactive Quick Reach Dispatcher (Span 7) */}
          <div className="lg:col-span-7 bg-[#0b0f17] border border-[#1e2638] rounded-[0.5rem] p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#1e2638] pb-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#00f0ff]" />
                <span className="text-base font-semibold text-[#f1f5f9] font-['Space_Grotesk']">
                  Quick Message Console
                </span>
              </div>
              <span className="text-xs font-mono text-[#64748b]">
                DISPATCH_CHANNEL: DIRECT
              </span>
            </div>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#94a3b8] mb-1">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex Rivera, Tech Lead"
                    className="w-full px-3 py-2 text-xs font-mono bg-[#05070a] border border-[#1e2638] rounded-[0.25rem] text-[#f1f5f9] placeholder-[#475569] focus:outline-none focus:border-[#00f0ff]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#94a3b8] mb-1">
                    Your Return Email
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-3 py-2 text-xs font-mono bg-[#05070a] border border-[#1e2638] rounded-[0.25rem] text-[#f1f5f9] placeholder-[#475569] focus:outline-none focus:border-[#00f0ff]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#94a3b8] mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-mono bg-[#05070a] border border-[#1e2638] rounded-[0.25rem] text-[#f1f5f9] focus:outline-none focus:border-[#00f0ff]"
                >
                  <option value="High-Priority Project">High-Priority Project / Architecture</option>
                  <option value="Engineering Role or Internship">Engineering Role or Internship</option>
                  <option value="Sports Club Management System">Sports Club Management System Inquiry</option>
                  <option value="Hardware and Agentic AI Collaboration">Hardware & Agentic AI Collaboration</option>
                  <option value="General Technical Exchange">General Technical Exchange</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#94a3b8] mb-1">
                  Message Brief
                </label>
                <textarea
                  required
                  rows={4}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Outline the scope, problem statement, or discussion points..."
                  className="w-full px-3 py-2 text-xs font-mono bg-[#05070a] border border-[#1e2638] rounded-[0.25rem] text-[#f1f5f9] placeholder-[#475569] focus:outline-none focus:border-[#00f0ff] resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#1e2638]">
                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="px-3.5 py-2 text-xs font-mono text-[#cbd5e1] hover:text-[#f1f5f9] bg-[#131924] border border-[#1e2638] rounded-[0.25rem] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10b981]" />
                      <span className="text-[#10b981]">Draft Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#64748b]" />
                      <span>Copy Draft to Clipboard</span>
                    </>
                  )}
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-mono font-semibold text-[#05070a] bg-[#00f0ff] rounded-[0.25rem] hover:bg-[#7df4ff] shadow-[0_0_20px_rgba(0,240,255,0.35)] flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Mail Client</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Memorable Footer Punchline Block */}
        <div className="p-6 bg-[#0b0f17] border border-[#1e2638] rounded-[0.5rem] relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[#00f0ff] uppercase tracking-wider block">
                Direct Dispatch Note
              </span>
              <p className="text-base sm:text-lg italic text-[#dbfcff] font-sans">
                {PERSONAL_INFO.footerPunchline}
              </p>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-4 py-2 text-xs font-mono font-medium text-[#f1f5f9] bg-[#131924] border border-[#1e2638] hover:border-[#00f0ff] rounded-[0.25rem] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Say Hello</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00f0ff]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
