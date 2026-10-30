import React, { useState } from 'react';
import { GitBranch, Search, Zap, Play, RotateCcw, CheckCircle2, ChevronRight, Binary, ArrowRight } from 'lucide-react';

export const DsaLab: React.FC = () => {
  // Sorted array for Binary vs Linear search demo
  const sampleArray = [4, 9, 15, 23, 31, 42, 56, 67, 78, 89, 95, 104, 120];
  const [targetVal, setTargetVal] = useState<number>(67);
  const [searchAlgorithm, setSearchAlgorithm] = useState<'binary' | 'linear'>('binary');
  const [searchSteps, setSearchSteps] = useState<number | null>(null);
  const [visitedIndices, setVisitedIndices] = useState<number[]>([]);
  const [foundIndex, setFoundIndex] = useState<number | null>(null);
  const [traversalMode, setTraversalMode] = useState<'inorder' | 'preorder' | 'postorder'>('inorder');

  const runSearch = (target: number, algo: 'binary' | 'linear') => {
    setFoundIndex(null);
    const visited: number[] = [];

    if (algo === 'linear') {
      let steps = 0;
      let found = -1;
      for (let i = 0; i < sampleArray.length; i++) {
        steps++;
        visited.push(i);
        if (sampleArray[i] === target) {
          found = i;
          break;
        }
      }
      setVisitedIndices(visited);
      setSearchSteps(steps);
      setFoundIndex(found !== -1 ? found : null);
    } else {
      // Binary search
      let low = 0;
      let high = sampleArray.length - 1;
      let steps = 0;
      let found = -1;

      while (low <= high) {
        steps++;
        const mid = Math.floor((low + high) / 2);
        visited.push(mid);
        if (sampleArray[mid] === target) {
          found = mid;
          break;
        } else if (sampleArray[mid] < target) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
      setVisitedIndices(visited);
      setSearchSteps(steps);
      setFoundIndex(found !== -1 ? found : null);
    }
  };

  const bstNodes = {
    root: 50,
    left: 25,
    right: 75,
    ll: 12,
    lr: 37,
    rl: 62,
    rr: 88,
  };

  const getTraversalResult = () => {
    switch (traversalMode) {
      case 'inorder':
        return '12 → 25 → 37 → 50 → 62 → 75 → 88 (Ascending Sorted Output)';
      case 'preorder':
        return '50 → 25 → 12 → 37 → 75 → 62 → 88 (Root-first Serialization)';
      case 'postorder':
        return '12 → 37 → 25 → 62 → 88 → 75 → 50 (Bottom-up Deletion / Evaluation)';
    }
  };

  return (
    <section id="dsa-lab" className="py-20 border-b border-[#1e2638] bg-[#05070a]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider block mb-2">
              04. Active Curriculum Deep-Dive
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f1f5f9] font-['Space_Grotesk']">
              Data Structures & Algorithmic Complexity Lab
            </h2>
          </div>
          <p className="text-sm text-[#94a3b8] max-w-md font-sans">
            Deepening computational intuition. Exploring binary search trees, graph traversals, and asymptotic efficiency at REVA University.
          </p>
        </div>

        {/* 2-Column Split: High-Fidelity Diagram Visual + Interactive Search Lab */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Algorithmic Diagram & BST Exploration (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#0b0f17] border border-[#1e2638] rounded-[0.5rem] p-4 overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1e2638] text-xs font-mono text-[#64748b]">
                <span className="text-[#00f0ff]">TOPOLOGICAL_STUDY::TREES & GRAPHS</span>
                <span>BIG-O EFFICIENCY</span>
              </div>

              <div className="relative aspect-video rounded-[0.25rem] overflow-hidden border border-[#1e2638] bg-[#05070a] mb-4">
                <img
                  src="/src/assets/images/dsa_algorithmic_diagram_1793342837832.jpg"
                  alt="Balanced Search Trees and Graph Connections"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* BST Traversal Explorer */}
              <div className="p-4 bg-[#05070a] rounded-[0.375rem] border border-[#1e2638] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#f1f5f9] flex items-center gap-1.5 font-semibold">
                    <Binary className="w-4 h-4 text-[#00f0ff]" />
                    Binary Search Tree Traversal Orders
                  </span>
                  <span className="text-[11px] font-mono text-[#10b981]">O(n) Time</span>
                </div>

                <div className="flex items-center gap-1.5 p-1 bg-[#0b0f17] rounded-[0.25rem] border border-[#1e2638]">
                  <button
                    onClick={() => setTraversalMode('inorder')}
                    className={`flex-1 py-1 text-xs font-mono rounded-[0.2rem] transition-colors cursor-pointer ${
                      traversalMode === 'inorder' ? 'bg-[#00f0ff] text-[#05070a] font-semibold' : 'text-[#94a3b8] hover:text-[#f1f5f9]'
                    }`}
                  >
                    In-Order
                  </button>
                  <button
                    onClick={() => setTraversalMode('preorder')}
                    className={`flex-1 py-1 text-xs font-mono rounded-[0.2rem] transition-colors cursor-pointer ${
                      traversalMode === 'preorder' ? 'bg-[#00f0ff] text-[#05070a] font-semibold' : 'text-[#94a3b8] hover:text-[#f1f5f9]'
                    }`}
                  >
                    Pre-Order
                  </button>
                  <button
                    onClick={() => setTraversalMode('postorder')}
                    className={`flex-1 py-1 text-xs font-mono rounded-[0.2rem] transition-colors cursor-pointer ${
                      traversalMode === 'postorder' ? 'bg-[#00f0ff] text-[#05070a] font-semibold' : 'text-[#94a3b8] hover:text-[#f1f5f9]'
                    }`}
                  >
                    Post-Order
                  </button>
                </div>

                <div className="p-2.5 bg-[#0e121b] border border-[#1e2638] rounded-[0.25rem] text-xs font-mono text-[#cbd5e1]">
                  <span className="text-[#64748b] block mb-1">Sequence:</span>
                  <span className="text-[#00f0ff] font-medium">{getTraversalResult()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Search Algorithm Simulator (Span 6) */}
          <div className="lg:col-span-6 bg-[#0b0f17] border border-[#1e2638] rounded-[0.5rem] p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-[#1e2638] pb-3">
              <div>
                <h3 className="text-base font-semibold text-[#f1f5f9] font-['Space_Grotesk']">
                  Interactive Search Complexity Benchmark
                </h3>
                <p className="text-xs font-mono text-[#64748b]">
                  Compare Binary Search vs Linear Search step count
                </p>
              </div>
              <span className="text-xs font-mono text-[#10b981]">
                N = {sampleArray.length} ELEMENTS
              </span>
            </div>

            {/* Target Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#94a3b8] flex items-center justify-between">
                <span>Select Target Value from Sorted Array:</span>
                <span className="text-[#00f0ff] font-bold">{targetVal}</span>
              </label>

              {/* Array Elements Chips */}
              <div className="flex flex-wrap gap-1.5 p-2 bg-[#05070a] rounded-[0.375rem] border border-[#1e2638]">
                {sampleArray.map((val, idx) => {
                  const isTarget = val === targetVal;
                  const isVisited = visitedIndices.includes(idx);
                  const isFound = foundIndex === idx;

                  return (
                    <button
                      key={val}
                      onClick={() => {
                        setTargetVal(val);
                        setSearchSteps(null);
                        setVisitedIndices([]);
                        setFoundIndex(null);
                      }}
                      className={`px-2.5 py-1 text-xs font-mono rounded-[0.25rem] border transition-all cursor-pointer ${
                        isFound
                          ? 'bg-[#10b981] text-[#05070a] font-bold border-[#10b981]'
                          : isTarget
                          ? 'bg-[#00f0ff] text-[#05070a] font-bold border-[#00f0ff]'
                          : isVisited
                          ? 'bg-[#3b82f6]/20 text-[#3b82f6] border-[#3b82f6]/40'
                          : 'bg-[#0b0f17] text-[#cbd5e1] border-[#1e2638] hover:border-[#2e3d5b]'
                      }`}
                    >
                      {val}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Algorithm Selector & Trigger */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-1.5 p-1 bg-[#05070a] rounded-[0.25rem] border border-[#1e2638] flex-1">
                <button
                  onClick={() => setSearchAlgorithm('binary')}
                  className={`flex-1 py-1.5 text-xs font-mono rounded-[0.2rem] transition-colors cursor-pointer ${
                    searchAlgorithm === 'binary'
                      ? 'bg-[#00f0ff] text-[#05070a] font-semibold'
                      : 'text-[#94a3b8] hover:text-[#f1f5f9]'
                  }`}
                >
                  Binary Search (O(log n))
                </button>
                <button
                  onClick={() => setSearchAlgorithm('linear')}
                  className={`flex-1 py-1.5 text-xs font-mono rounded-[0.2rem] transition-colors cursor-pointer ${
                    searchAlgorithm === 'linear'
                      ? 'bg-[#00f0ff] text-[#05070a] font-semibold'
                      : 'text-[#94a3b8] hover:text-[#f1f5f9]'
                  }`}
                >
                  Linear Search (O(n))
                </button>
              </div>

              <button
                onClick={() => runSearch(targetVal, searchAlgorithm)}
                className="px-4 py-2 bg-[#00f0ff] text-[#05070a] text-xs font-mono font-semibold rounded-[0.25rem] hover:bg-[#7df4ff] shadow-[0_0_15px_rgba(0,240,255,0.3)] flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Execute Search</span>
              </button>
            </div>

            {/* Execution Result Box */}
            {searchSteps !== null ? (
              <div className="p-4 bg-[#05070a] rounded-[0.375rem] border border-[#10b981]/50 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#10b981] flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-4 h-4" /> Element Found at Index {foundIndex}
                  </span>
                  <span className="text-[#f1f5f9]">
                    Steps Required: <strong className="text-[#00f0ff]">{searchSteps}</strong>
                  </span>
                </div>

                <p className="text-xs text-[#94a3b8] font-sans">
                  {searchAlgorithm === 'binary' ? (
                    <span>
                      Binary search cut the problem space in half on each step, requiring only <strong className="text-[#00f0ff]">{searchSteps} iterations</strong> for array size {sampleArray.length} (Theoretical worst case: ⌈log₂({sampleArray.length})⌉ = 4 steps).
                    </span>
                  ) : (
                    <span>
                      Linear search sequentially inspected elements, requiring <strong className="text-[#3b82f6]">{searchSteps} iterations</strong>.
                    </span>
                  )}
                </p>

                <div className="pt-1 text-[11px] font-mono text-[#64748b]">
                  Evaluated Indices: [{visitedIndices.join(', ')}]
                </div>
              </div>
            ) : (
              <div className="p-4 bg-[#05070a] rounded-[0.375rem] border border-[#1e2638] text-center text-xs font-mono text-[#64748b]">
                Select a target number and click "Execute Search" to run step-by-step benchmark.
              </div>
            )}

            {/* Big-O Complexity Quick Reference Matrix */}
            <div className="pt-2 border-t border-[#1e2638] space-y-2">
              <span className="text-[11px] font-mono text-[#64748b] uppercase tracking-wider block">
                Time Complexity Reference
              </span>
              <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                <div className="p-2 bg-[#05070a] border border-[#1e2638] rounded-[0.25rem]">
                  <span className="text-[#10b981] block font-bold">O(1)</span>
                  <span className="text-[11px] text-[#64748b]">Array Index Access</span>
                </div>
                <div className="p-2 bg-[#05070a] border border-[#1e2638] rounded-[0.25rem]">
                  <span className="text-[#00f0ff] block font-bold">O(log n)</span>
                  <span className="text-[11px] text-[#64748b]">Binary Search Tree</span>
                </div>
                <div className="p-2 bg-[#05070a] border border-[#1e2638] rounded-[0.25rem]">
                  <span className="text-[#3b82f6] block font-bold">O(n log n)</span>
                  <span className="text-[11px] text-[#64748b]">Merge / Quick Sort</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
