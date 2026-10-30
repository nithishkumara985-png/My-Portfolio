import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, CornerDownLeft, Sparkles, BookOpen, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutTerminalProps {
  onOpenQuickContact: () => void;
}

export const AboutTerminal: React.FC<AboutTerminalProps> = ({ onOpenQuickContact }) => {
  const [terminalInput, setTerminalInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    {
      cmd: 'whoami',
      output: `${PERSONAL_INFO.name} — Computer Science & Engineering student at REVA University. Builder, Lead Developer, and Designer shaping autonomous software and modern web experiences.`,
    },
    {
      cmd: 'cat mission.md',
      output: PERSONAL_INFO.quote,
    },
  ]);

  const handleRunCommand = (commandToRun: string) => {
    const trimmed = commandToRun.trim().toLowerCase();
    if (!trimmed) return;

    let result: React.ReactNode = '';

    switch (trimmed) {
      case 'whoami':
        result = `${PERSONAL_INFO.name} — CSE Undergrad at ${PERSONAL_INFO.university}. Builder & Designer.`;
        break;
      case 'stack':
      case 'cat stack.json':
        result = 'Core: Python, React, Supabase, C/C++, Java, JavaScript (ES6+), HTML5/CSS3, GCC Toolchains, Git.';
        break;
      case 'projects':
      case 'ls projects':
        result = '1. Sports Club Management System (Multi-sport booking & training scheduler)\n2. Hardware & Systems Lab (Microcontroller & Python telemetry)\n3. DSA Lab (Search trees, graphs, complexity analysis)';
        break;
      case 'learning':
      case 'cat learning.log':
        result = 'Currently mastering Data Structures & Algorithms: Balanced Trees (AVL/Red-Black), Graph Traversals (BFS/DFS), Dynamic Programming, and Big-O efficiency.';
        break;
      case 'contact':
        result = `Email: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}`;
        break;
      case 'clear':
        setCommandHistory([]);
        setTerminalInput('');
        return;
      case 'help':
        result = 'Available commands: whoami, stack, projects, learning, contact, clear, help';
        break;
      default:
        result = `Command not recognized: '${trimmed}'. Type 'help' for available commands.`;
        break;
    }

    setCommandHistory((prev) => [...prev, { cmd: trimmed, output: result }]);
    setTerminalInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRunCommand(terminalInput);
  };

  return (
    <section id="about" className="py-20 border-b border-[#1e2638] bg-[#05070a]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider block mb-2">
            01. Narrative & Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f1f5f9] font-['Space_Grotesk'] text-balance">
            Systems Mindset: Intentional Software, Physical Realities & Intelligence
          </h2>
        </div>

        {/* 2-Column Split: Deep Narrative + Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Authentic Executive Summary */}
          <div className="lg:col-span-6 space-y-6 text-[#94a3b8] leading-relaxed font-sans">
            <p className="text-base sm:text-lg text-[#e2e2e8] font-medium leading-relaxed">
              At <span className="text-[#00f0ff] font-semibold">{PERSONAL_INFO.university}</span>, my approach to engineering centers on building cohesive systems where software does not merely render pixels, but actively solves physical and digital coordination challenges.
            </p>

            <p className="text-sm sm:text-base">
              My engineering stack spans full-stack web applications with <strong className="text-[#f1f5f9]">React</strong> and <strong className="text-[#f1f5f9]">Supabase</strong>, robust automation scripts in <strong className="text-[#f1f5f9]">Python</strong>, and performance-critical systems programmed in <strong className="text-[#f1f5f9]">C and C++</strong> using GCC toolchains.
            </p>

            <div className="p-4 bg-[#0b0f17] border border-[#1e2638] rounded-[0.5rem] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff]">
                <Layers className="w-4 h-4" />
                <span className="font-semibold uppercase tracking-wider">What Drives My Work</span>
              </div>
              <ul className="text-sm space-y-2 text-[#cbd5e1] font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981] font-bold mt-0.5">·</span>
                  <span><strong>Zero Friction Execution:</strong> Creating web platforms that load instantaneously, minimize latency, and handle user workflows intuitively.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3b82f6] font-bold mt-0.5">·</span>
                  <span><strong>Hardware & AI Synergy:</strong> Exploring how agentic reasoning loops can drive physical microcontrollers and edge hardware.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00f0ff] font-bold mt-0.5">·</span>
                  <span><strong>Algorithmic Discipline:</strong> Currently dedicating intensive focus to Data Structures & Algorithms to write time- and space-optimal software.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#64748b]">
              <span>DEGREE: B.TECH CSE</span>
              <span className="text-[#3b494b]">/</span>
              <span>CAMPUS: REVA BANGALORE</span>
              <span className="text-[#3b494b]">/</span>
              <span className="text-[#10b981]">STATUS: ACTIVE ENROLLMENT</span>
            </div>
          </div>

          {/* Right Column: Interactive Developer Console */}
          <div className="lg:col-span-6 bg-[#0b0f17] rounded-[0.5rem] border border-[#1e2638] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {/* Terminal Window Header */}
            <div className="bg-[#0e121b] px-4 py-3 border-b border-[#1e2638] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80"></span>
                <span className="ml-2 font-mono text-xs text-[#94a3b8] flex items-center gap-1.5">
                  <TerminalIcon className="w-3.5 h-3.5 text-[#00f0ff]" />
                  <span>nithish@reva-cse:~ (interactive)</span>
                </span>
              </div>
              <button
                onClick={() => setCommandHistory([])}
                className="text-[11px] font-mono text-[#64748b] hover:text-[#f1f5f9] flex items-center gap-1 transition-colors cursor-pointer"
                title="Clear screen"
              >
                <RotateCcw className="w-3 h-3" />
                <span>clear</span>
              </button>
            </div>

            {/* Quick-Run Action Chips */}
            <div className="px-4 py-2.5 bg-[#080b11] border-b border-[#1e2638] flex flex-wrap items-center gap-2 text-xs font-mono text-[#64748b]">
              <span className="text-[11px] text-[#64748b]">Preset probes:</span>
              <button
                onClick={() => handleRunCommand('whoami')}
                className="px-2 py-0.5 rounded-[0.25rem] bg-[#131924] hover:bg-[#1e2638] text-[#cbd5e1] hover:text-[#00f0ff] border border-[#1e2638] transition-colors cursor-pointer"
              >
                whoami
              </button>
              <button
                onClick={() => handleRunCommand('stack')}
                className="px-2 py-0.5 rounded-[0.25rem] bg-[#131924] hover:bg-[#1e2638] text-[#cbd5e1] hover:text-[#00f0ff] border border-[#1e2638] transition-colors cursor-pointer"
              >
                stack
              </button>
              <button
                onClick={() => handleRunCommand('projects')}
                className="px-2 py-0.5 rounded-[0.25rem] bg-[#131924] hover:bg-[#1e2638] text-[#cbd5e1] hover:text-[#00f0ff] border border-[#1e2638] transition-colors cursor-pointer"
              >
                projects
              </button>
              <button
                onClick={() => handleRunCommand('learning')}
                className="px-2 py-0.5 rounded-[0.25rem] bg-[#131924] hover:bg-[#1e2638] text-[#cbd5e1] hover:text-[#00f0ff] border border-[#1e2638] transition-colors cursor-pointer"
              >
                dsa_status
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-4 font-mono text-xs text-[#cbd5e1] space-y-4 min-h-[220px] max-h-[320px] overflow-y-auto">
              {commandHistory.map((entry, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-[#00f0ff]">
                    <span>$</span>
                    <span className="text-[#f1f5f9] font-medium">{entry.cmd}</span>
                  </div>
                  <div className="text-[#94a3b8] whitespace-pre-wrap pl-3 border-l border-[#1e2638]">
                    {entry.output}
                  </div>
                </div>
              ))}

              {/* Terminal Form Input */}
              <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
                <span className="text-[#00f0ff] font-bold">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type 'help', 'projects', 'stack', or 'contact'..."
                  className="flex-1 bg-transparent border-none outline-none text-[#f1f5f9] text-xs font-mono placeholder-[#475569] focus:ring-0"
                />
                <button
                  type="submit"
                  className="p-1 text-[#64748b] hover:text-[#00f0ff] transition-colors cursor-pointer"
                  title="Run command"
                >
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            {/* Footer Telemetry Bar */}
            <div className="px-4 py-2 bg-[#080b11] border-t border-[#1e2638] flex items-center justify-between text-[11px] font-mono text-[#64748b]">
              <span>REVA University CSE · Bangalore</span>
              <span className="text-[#00f0ff]">Press Enter to evaluate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
