import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Check, 
  ChevronRight, 
  Target, 
  Users, 
  FileText,
  AlertTriangle,
  FileSpreadsheet,
  CheckCircle2,
  Workflow,
  BookOpen,
  TrendingUp,
  TrendingDown,
  Cloud,
  Bot,
  Smile,
  RefreshCw,
  Scale,
  Activity,
  Compass,
  Database,
  Play,
  X,
  Clock,
  Sparkles,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  BarChart3,
  Sliders,
  DollarSign,
  Terminal,
  Cpu,
  Download,
  Send,
  Lock,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { BrandLogo } from './LandingPage';

export interface ConceptProps {
  onNavigate?: (page: string) => void;
}

export function Concept1DualDepth({ onNavigate }: ConceptProps) {
  // Dual-depth persona toggle: 'executive' vs 'practitioner'
  const [viewDepth, setViewDepth] = useState<'executive' | 'practitioner'>('executive');
  
  // Video Lightbox State
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Material Kit Modal State
  const [showKitModal, setShowKitModal] = useState(false);
  const [selectedKit, setSelectedKit] = useState('XLA Survey & Weighting Matrix (XLSX)');
  const [kitEmail, setKitEmail] = useState('');
  const [kitRole, setKitRole] = useState('manager');
  const [kitSubmitted, setKitSubmitted] = useState(false);

  // Waitlist Form State
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistRole, setWaitlistRole] = useState<'practitioner' | 'manager' | 'executive'>('manager');
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);

  // Active Role Benefit Tab in Section 5
  const [activeRoleTab, setActiveRoleTab] = useState<'practitioner' | 'manager' | 'executive'>('manager');

  // Chart data for simulated terminal
  const chartData = [
    { time: '08:00', rawVol: 45, meanMttr: 3.8, p95Lag: 12 },
    { time: '10:00', rawVol: 120, meanMttr: 4.1, p95Lag: 28 },
    { time: '12:00', rawVol: 180, meanMttr: 4.2, p95Lag: 38.4 },
    { time: '14:00', rawVol: 160, meanMttr: 4.0, p95Lag: 34 },
    { time: '16:00', rawVol: 90, meanMttr: 3.9, p95Lag: 22 },
    { time: '18:00', rawVol: 40, meanMttr: 3.7, p95Lag: 15 },
  ];

  // Smooth scroll
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Esc key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowVideoModal(false);
        setShowKitModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleKitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!kitEmail) return;
    setKitSubmitted(true);
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail) return;
    setWaitlistSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans selection:bg-[#ff4d4d] selection:text-white antialiased">
      
      {/* ========================================================================= */}
      {/* 1. TOP DUAL-DEPTH SYSTEM BAR & NAVIGATION */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-800">
        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-6 h-22 sm:h-24 flex items-center justify-between">
          {/* Logo Mark & Large Brand Title */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3.5 sm:gap-4 cursor-pointer group"
          >
            <div className="bg-[#0b0e14] p-2.5 sm:p-3 rounded-xl border border-slate-700/80 group-hover:border-[#ff3b4e] transition-colors shadow-xl shadow-black/60">
              <BrandLogo className="w-9 h-9 sm:w-11 sm:h-11 text-[#ff3b4e]" glow={true} />
            </div>
            <div>
              <span className="font-black text-2xl sm:text-3xl tracking-tight block leading-none font-sans">
                <span className="text-[#ff3b4e] drop-shadow-[0_0_12px_rgba(255,59,78,0.55)]">IT</span> <span className="text-white">OUTCOMES</span>
              </span>
            </div>
          </div>

          {/* Right: Global View-Depth Toggle + CTA */}
          <div className="flex items-center gap-3.5">
            {/* View Depth Toggle Button (HUMAN Security style) */}
            <div className="bg-[#1e293b] p-1 rounded-lg border border-slate-700 flex items-center text-xs font-mono">
              <button
                onClick={() => setViewDepth('executive')}
                className={`px-3 py-1.5 rounded-md transition-all font-semibold ${
                  viewDepth === 'executive'
                    ? 'bg-[#ff4d4d] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="90-second high-level strategic overview"
              >
                Executive
              </button>
              <button
                onClick={() => setViewDepth('practitioner')}
                className={`px-3 py-1.5 rounded-md transition-all font-semibold ${
                  viewDepth === 'practitioner'
                    ? 'bg-slate-700 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Deep operational practitioner drill-down"
              >
                Practitioner
              </button>
            </div>

            <button
              onClick={() => scrollTo('scarcity-waitlist')}
              className="bg-[#ff4d4d] hover:bg-[#ff3333] text-white px-5 py-2.5 rounded-lg text-xs font-bold font-mono uppercase tracking-wider transition-colors shadow-lg shadow-[#ff4d4d]/20 hidden sm:inline-flex items-center gap-2"
            >
              Waitlist <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. STAGE 1: GET ATTENTION (DIAGNOSTIC HERO) */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-slate-800">
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ 
            backgroundImage: 'linear-gradient(#ff4d4d 1px, transparent 1px), linear-gradient(90deg, #ff4d4d 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}
        />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#ff4d4d]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Core Positioning Copy */}
            <div className="lg:col-span-5 space-y-6">
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tighter leading-[1.05]">
                You are measuring everything.<br />
                <span className="text-[#ff4d4d]">But improving nothing.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                {viewDepth === 'executive' ? (
                  <>
                    Stop performing <strong className="font-semibold text-white">KPI theater</strong>. Turn raw ServiceNow and Jira tickets into defensible, executive-ready insights that justify capital investments, eliminate hidden operational friction, and protect customer experience.
                  </>
                ) : (
                  <>
                    Stop wrangling manual spreadsheets to defend arbitrary SLAs. Learn the applied statistical models and XLA weighting matrices that expose real bottleneck queues and prove your engineering team's capacity to leadership.
                  </>
                )}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => {
                    setSelectedKit('Complete XLA Survey & Weighting Matrix (XLSX)');
                    setShowKitModal(true);
                  }}
                  className="px-5 py-3.5 bg-[#ff4d4d] hover:bg-[#ff3333] text-white rounded-lg font-bold text-xs font-mono uppercase tracking-wider shadow-xl shadow-[#ff4d4d]/25 transition-all flex items-center justify-center gap-2 group"
                >
                  <Download className="w-4 h-4" />
                  Claim Free Material Kit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setShowVideoModal(true)}
                  className="px-5 py-3.5 bg-[#1e293b] hover:bg-slate-800 border border-slate-700 text-slate-200 rounded-lg font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 text-[#ff4d4d] fill-current" />
                  Watch 1-Hr QuickStart
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Glassmorphism Hero Dashboards (Director's vs Ops) */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* Colorful ambient background gradients & glow orbs (Yellow, Coral, Indigo) creating glassmorphism depth */}
                <div 
                  className="absolute -top-12 -right-8 w-72 h-72 rounded-full blur-[90px] pointer-events-none opacity-40 transition-colors duration-700"
                  style={{
                    background: viewDepth === 'executive' 
                      ? 'radial-gradient(circle, rgba(255, 77, 77, 0.45) 0%, rgba(245, 158, 11, 0.25) 50%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(245, 158, 11, 0.5) 0%, rgba(255, 77, 77, 0.3) 50%, transparent 70%)'
                  }}
                />
                <div 
                  className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-35"
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 77, 77, 0.4) 0%, rgba(99, 102, 241, 0.2) 60%, transparent 80%)'
                  }}
                />
                <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-64 h-64 bg-amber-400/15 rounded-full blur-[100px] pointer-events-none" />

                {/* Main Glassmorphic Panel */}
                <div className="relative backdrop-blur-2xl bg-white/[0.06] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.55),inset_0_1px_1px_rgba(255,255,255,0.35)] overflow-hidden">
                  {/* Frosted glass specular diagonal sheen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.14] via-transparent to-transparent pointer-events-none" />

                  {/* Top Bar: Brand Logo & Interactive View Switcher */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-[#0b0e14]/90 p-1.5 rounded-lg border border-white/20 shadow-md">
                        <BrandLogo className="w-5 h-5 text-[#ff3b4e]" glow={false} />
                      </div>
                      <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-slate-300">
                        IT <span className="text-[#ff4d4d]">OUTCOMES</span>
                      </span>
                    </div>

                    {/* Integrated Glass Switcher */}
                    <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 text-xs font-mono shadow-inner">
                      <button
                        onClick={() => setViewDepth('executive')}
                        className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                          viewDepth === 'executive'
                            ? 'bg-[#ff4d4d] text-white shadow-lg shadow-[#ff4d4d]/30'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Executive
                      </button>
                      <button
                        onClick={() => setViewDepth('practitioner')}
                        className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                          viewDepth === 'practitioner'
                            ? 'bg-amber-400 text-slate-950 font-black shadow-lg shadow-amber-400/30'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Practitioner
                      </button>
                    </div>
                  </div>

                  {/* Animated Dashboard Container */}
                  <AnimatePresence mode="wait">
                    {viewDepth === 'executive' ? (
                      <motion.div
                        key="executive-directors-view"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="relative z-10 pt-4 sm:pt-5"
                      >
                        {/* Title */}
                        <div className="mb-4 sm:mb-5">
                          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                            The <span className="text-[#ff4d4d]">Executive</span> Dashboard
                          </h2>
                        </div>

                        {/* Row 1: Core Governance & Stability (4 Cards) */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                          {/* Card 1: Change Success */}
                          <div className="backdrop-blur-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 rounded-xl p-3 sm:p-4 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all group/card">
                            <div className="text-2xl sm:text-3xl font-black text-[#ff4d4d] tracking-tight drop-shadow-[0_2px_10px_rgba(255,77,77,0.3)]">
                              97.8%
                            </div>
                            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider mt-1.5">
                              CHANGE SUCCESS
                            </div>
                          </div>

                          {/* Card 2: Emergency Rate */}
                          <div className="backdrop-blur-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 rounded-xl p-3 sm:p-4 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all group/card">
                            <div className="text-2xl sm:text-3xl font-black text-[#ff4d4d] tracking-tight drop-shadow-[0_2px_10px_rgba(255,77,77,0.3)]">
                              3.4%
                            </div>
                            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider mt-1.5">
                              EMERGENCY RATE
                            </div>
                          </div>

                          {/* Card 3: Active Problems */}
                          <div className="backdrop-blur-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 rounded-xl p-3 sm:p-4 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all group/card">
                            <div className="text-2xl sm:text-3xl font-black text-[#ff4d4d] tracking-tight drop-shadow-[0_2px_10px_rgba(255,77,77,0.3)]">
                              12
                            </div>
                            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider mt-1.5">
                              ACTIVE PROBLEMS
                            </div>
                          </div>

                          {/* Card 4: KEDB Health */}
                          <div className="backdrop-blur-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 rounded-xl p-3 sm:p-4 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all group/card">
                            <div className="text-2xl sm:text-3xl font-black text-[#ff4d4d] tracking-tight drop-shadow-[0_2px_10px_rgba(255,77,77,0.3)]">
                              85%
                            </div>
                            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider mt-1.5">
                              KEDB HEALTH
                            </div>
                          </div>
                        </div>

                        {/* Row 2: AI Modernization & Experience Level Agreements (XLAs) (3 Cards) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mt-2.5 sm:mt-3">
                          {/* Card 5: AI Agent Deflection Rate */}
                          <div className="backdrop-blur-xl bg-indigo-500/[0.09] hover:bg-indigo-500/[0.15] border border-indigo-400/25 border-b-2 border-b-indigo-400 rounded-xl p-3 sm:p-4 text-center shadow-[inset_0_1px_1px_rgba(129,140,248,0.2)] transition-all">
                            <div className="text-2xl sm:text-3xl font-black text-indigo-300 tracking-tight drop-shadow-[0_2px_10px_rgba(129,140,248,0.3)] flex items-center justify-center gap-1.5">
                              <Bot className="w-5 h-5 text-indigo-400" />
                              <span>35%</span>
                            </div>
                            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider mt-1">
                              AI DEFLECTION RATE
                            </div>
                            <div className="text-[9px] font-mono text-indigo-300/80 mt-0.5">
                              Autonomous Tier-1
                            </div>
                          </div>

                          {/* Card 6: Average Customer Satisfaction (CSAT) XLA */}
                          <div className="backdrop-blur-xl bg-emerald-500/[0.08] hover:bg-emerald-500/[0.14] border border-emerald-400/25 border-b-2 border-b-emerald-400 rounded-xl p-3 sm:p-4 text-center shadow-[inset_0_1px_1px_rgba(52,211,153,0.2)] transition-all">
                            <div className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight drop-shadow-[0_2px_10px_rgba(52,211,153,0.3)] flex items-center justify-center gap-1.5">
                              <Smile className="w-5 h-5 text-emerald-400" />
                              <span>5.7 <span className="text-xs font-normal text-emerald-300/70">/ 7</span></span>
                            </div>
                            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider mt-1">
                              AVG CSAT (XLA)
                            </div>
                            <div className="text-[9px] font-mono text-emerald-400 font-bold mt-0.5">
                              ↑ Higher is better
                            </div>
                          </div>

                          {/* Card 7: Cumulative Effort Index (CEI) XLA */}
                          <div className="backdrop-blur-xl bg-amber-500/[0.08] hover:bg-amber-500/[0.14] border border-amber-400/25 border-b-2 border-b-amber-400 rounded-xl p-3 sm:p-4 text-center shadow-[inset_0_1px_1px_rgba(245,158,11,0.2)] transition-all">
                            <div className="text-2xl sm:text-3xl font-black text-amber-300 tracking-tight drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)] flex items-center justify-center gap-1.5">
                              <Target className="w-5 h-5 text-amber-400" />
                              <span>2.4</span>
                            </div>
                            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider mt-1">
                              EFFORT INDEX (CEI)
                            </div>
                            <div className="text-[9px] font-mono text-amber-400 font-bold mt-0.5">
                              ↓ Lower is better
                            </div>
                          </div>
                        </div>

                        {/* Explanatory Caption */}
                        <p className="text-slate-200 text-xs sm:text-sm text-center max-w-xl mx-auto mt-5 mb-4 leading-relaxed font-light">
                          Executives don't need ticket counts. They need to know if the environment is stable, governance is sound, and user experience (XLAs) is protected.
                        </p>

                        {/* Callout Box */}
                        <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl backdrop-blur-xl bg-white/[0.08] border border-white/15 text-xs sm:text-sm text-slate-200 relative overflow-hidden shadow-md">
                          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ff4d4d]" />
                          <div className="w-7 h-7 rounded-lg bg-[#ff4d4d]/20 text-[#ff4d4d] flex items-center justify-center shrink-0">
                            <FileText className="w-4 h-4" />
                          </div>
                          <span className="leading-snug">
                            <strong className="text-white font-semibold">This is the view that gets you budget for tools;</strong> it shows if tech debt is managed, AI deflection works, and user sentiment is protected.
                          </span>
                        </div>

                        {/* Subtle Footer Tag */}
                        <div className="text-[10px] font-mono text-slate-400 text-right mt-3">
                          © 2026 IT Outcomes. All Rights Reserved.
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="practitioner-ops-view"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="relative z-10 pt-4 sm:pt-5"
                      >
                        {/* Title */}
                        <div className="mb-4 sm:mb-5">
                          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                            The Ops <span className="text-[#ff4d4d]">Dashboard</span>
                          </h2>
                        </div>

                        {/* Row 1: Frontline Ticket & Queue Metrics (5 Cards) */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
                          {/* Card 1: Open Incidents */}
                          <div className="backdrop-blur-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 border-b-2 border-b-[#ff4d4d] rounded-xl p-3 sm:p-3.5 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all">
                            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                              42
                            </div>
                            <div className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-300 uppercase tracking-wider mt-1.5">
                              OPEN INCIDENTS
                            </div>
                          </div>

                          {/* Card 2: P1 / P2 Status */}
                          <div className="backdrop-blur-xl bg-[#ff4d4d]/10 hover:bg-[#ff4d4d]/15 border border-[#ff4d4d]/30 border-b-2 border-b-[#ff4d4d] rounded-xl p-3 sm:p-3.5 text-center shadow-[inset_0_1px_1px_rgba(255,77,77,0.2)] transition-all">
                            <div className="text-2xl sm:text-3xl font-black text-[#ff4d4d] tracking-tight drop-shadow-[0_2px_10px_rgba(255,77,77,0.4)]">
                              1
                            </div>
                            <div className="text-[9px] sm:text-[10px] font-mono font-bold text-[#ff4d4d] uppercase tracking-wider mt-1.5">
                              P1 / P2 STATUS
                            </div>
                          </div>

                          {/* Card 3: Open Service Requests */}
                          <div className="backdrop-blur-xl bg-sky-500/[0.08] hover:bg-sky-500/[0.14] border border-sky-400/25 border-b-2 border-b-sky-400 rounded-xl p-3 sm:p-3.5 text-center shadow-[inset_0_1px_1px_rgba(56,189,248,0.2)] transition-all">
                            <div className="text-2xl sm:text-3xl font-black text-sky-400 tracking-tight drop-shadow-[0_2px_10px_rgba(56,189,248,0.3)]">
                              25
                            </div>
                            <div className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-300 uppercase tracking-wider mt-1.5">
                              OPEN REQUESTS
                            </div>
                          </div>

                          {/* Card 4: Backlog Trend (with yellow/amber accent) */}
                          <div className="backdrop-blur-xl bg-amber-400/[0.08] hover:bg-amber-400/[0.14] border border-amber-400/25 border-b-2 border-b-amber-400 rounded-xl p-3 sm:p-3.5 text-center shadow-[inset_0_1px_1px_rgba(245,158,11,0.2)] transition-all">
                            <div className="flex items-center justify-center gap-1 text-amber-400 font-black text-2xl sm:text-3xl tracking-tight drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)]">
                              <TrendingDown className="w-5 h-5 text-amber-400" />
                              <span>14%</span>
                            </div>
                            <div className="text-[9px] sm:text-[10px] font-mono font-bold text-amber-300 uppercase tracking-wider mt-1.5">
                              BACKLOG TREND
                            </div>
                          </div>

                          {/* Card 5: FCR Today */}
                          <div className="backdrop-blur-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 border-b-2 border-b-emerald-400 rounded-xl p-3 sm:p-3.5 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all col-span-2 sm:col-span-1">
                            <div className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight drop-shadow-[0_2px_10px_rgba(52,211,153,0.3)]">
                              78%
                            </div>
                            <div className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-300 uppercase tracking-wider mt-1.5">
                              FCR TODAY
                            </div>
                          </div>
                        </div>

                        {/* Row 2: Infrastructure Health Status with Traffic Light Indicators (Azure & AWS) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mt-2.5 sm:mt-3">
                          {/* Azure Health Status Card */}
                          <div className="backdrop-blur-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0">
                                <Cloud className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
                                  Azure Health Status
                                </div>
                                <div className="text-[10px] font-mono text-slate-400">
                                  All Regions Online
                                </div>
                              </div>
                            </div>

                            {/* Traffic Light Indicator */}
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-black/60 rounded-full border border-white/15 backdrop-blur-md shadow-inner">
                                {/* Green Light (Active Illuminated) */}
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,1)]"></span>
                                </span>
                                {/* Yellow Light (Dim) */}
                                <span className="h-3 w-3 rounded-full bg-amber-500/20 border border-amber-500/30 opacity-30"></span>
                                {/* Red Light (Dim) */}
                                <span className="h-3 w-3 rounded-full bg-rose-500/20 border border-rose-500/30 opacity-30"></span>
                              </div>
                              <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider hidden sm:inline-block">
                                Green
                              </span>
                            </div>
                          </div>

                          {/* AWS Health Status Card */}
                          <div className="backdrop-blur-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                                <Cloud className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
                                  AWS Health Status
                                </div>
                                <div className="text-[10px] font-mono text-slate-400">
                                  Global Services Normal
                                </div>
                              </div>
                            </div>

                            {/* Traffic Light Indicator */}
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-black/60 rounded-full border border-white/15 backdrop-blur-md shadow-inner">
                                {/* Green Light (Active Illuminated) */}
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,1)]"></span>
                                </span>
                                {/* Yellow Light (Dim) */}
                                <span className="h-3 w-3 rounded-full bg-amber-500/20 border border-amber-500/30 opacity-30"></span>
                                {/* Red Light (Dim) */}
                                <span className="h-3 w-3 rounded-full bg-rose-500/20 border border-rose-500/30 opacity-30"></span>
                              </div>
                              <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider hidden sm:inline-block">
                                Green
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Explanatory Caption */}
                        <p className="text-slate-200 text-xs sm:text-sm text-center max-w-xl mx-auto mt-5 mb-4 leading-relaxed font-light">
                          Don't drown in data. For the morning huddle, you only need the frontline workload, backlog trend, and cloud service health.
                        </p>

                        {/* Callout Box */}
                        <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl backdrop-blur-xl bg-white/[0.08] border border-white/15 text-xs sm:text-sm text-slate-200 relative overflow-hidden shadow-md">
                          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ff4d4d]" />
                          <div className="w-7 h-7 rounded-lg bg-[#ff4d4d]/20 text-[#ff4d4d] flex items-center justify-center shrink-0">
                            <FileText className="w-4 h-4" />
                          </div>
                          <span className="leading-snug">
                            <strong className="text-white font-semibold">Focus on the current open pile,</strong> critical blockers, and cloud infrastructure uptime.
                          </span>
                        </div>

                        {/* Subtle Footer Tag */}
                        <div className="text-[10px] font-mono text-slate-400 text-right mt-3">
                          © 2026 IT Outcomes. All Rights Reserved.
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. STAGE 2: IDENTIFY THE PROBLEM (4 DIAGNOSTIC FAILURE MODES) */}
      {/* ========================================================================= */}
      <section id="diagnosis" className="py-24 bg-white border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#ff4d4d] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              [ ROOT CAUSE DIAGNOSIS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Why your ITSM metrics fail to drive action.
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Most IT teams don't have a data collection problem. You have gigabytes of ticket logs, resolution timestamps, and survey ratings. What's missing is the translation layer between operational activity and business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: "THE NOISE PROBLEM",
                title: "Data-Rich, Insight-Poor",
                pain: "You export thousands of rows into Excel or PowerBI every month. But when your VP asks 'What should we change on Monday morning?', the room goes silent. Dashboards track volume, but cannot expose true operational bottlenecks.",
                fix: "Shift from counting tickets to analyzing cycle-time flow and arrival distributions."
              },
              {
                label: "THE VANITY PROBLEM",
                title: "KPI Theater",
                pain: "Monthly service reviews are ceremonial. The SLA dashboard shows 98% green compliance, but users complain directly to the CIO about system instability. Everyone nods, reports are filed, and nothing gets fixed.",
                fix: "Implement Experience Level Agreements (XLAs) that measure business impact instead of ticket closure timestamps."
              },
              {
                label: "THE TRANSLATION GAP",
                title: "Two Languages, Zero Alignment",
                pain: "Engineers speak in exceptions, sub-tasks, and server thresholds. Executives speak in operational risk, headcount capacity, and budget ROI. When you request headcount with ticket volume, leadership sees overhead.",
                fix: "Build role-based dashboards that translate MTTR directly into lost business hours and dollar impacts."
              },
              {
                label: "THE CUSTOMIZATION TRAP",
                title: "Unique Snowflake Syndrome",
                pain: "Teams falsely believe their organization is too unique for standards, spawning a sprawling mess of custom ServiceNow fields, unmaintained reports, and conflicting definitions of what 'resolved' means.",
                fix: "Apply framework-agnostic mathematical baselines that adapt to any enterprise tool stack."
              }
            ].map((card, i) => (
              <div 
                key={i}
                className="bg-slate-100/90 hover:bg-white border border-slate-200 hover:border-[#ff4d4d] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="mb-4">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      {card.label}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#ff4d4d] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {card.pain}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 group-hover:border-slate-100 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-slate-400 font-semibold">OPERATIONAL CURE:</span>
                  <span className="text-emerald-600 font-bold">{card.fix}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. STAGE 3: THE FOUNDATION + FLYWHEEL OPERATING MODEL */}
      {/* ========================================================================= */}
      <section id="solution" className="py-24 bg-[#0f172a] border-b border-slate-800 relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ff4d4d]/5 blur-[160px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-amber-500/5 blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <span className="text-[#ff4d4d] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              [ THE OPERATING MODEL ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              The Bedrock + Flywheel Framework
            </h2>
            <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed mb-3">
              I do not teach an ad-hoc collection of metric tricks. Every concept in my courses is grounded in a unified 3-part framework: <strong className="text-white font-semibold">Foundation</strong>, <strong className="text-white font-semibold">Execution</strong>, and <strong className="text-white font-semibold">Optimization</strong>.
            </p>
            <p className="text-slate-400 text-sm font-light max-w-2xl mx-auto">
              Whether through hands-on advisory, downloadable toolkits, or on-demand masterclasses, this framework ensures you move directly from vanity metrics to board-level leverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Area 1: Foundation */}
            <div className="bg-[#111827] border border-slate-700/80 rounded-2xl p-6 sm:p-7 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-400" />
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded">
                  PILLAR 01: BEDROCK
                </span>
                <Database className="w-5 h-5 text-emerald-400" />
              </div>

              <h4 className="text-xl font-bold text-white mb-2">
                The Analytical Foundation
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 font-light">
                The math that keeps your reporting honest. If your baseline numbers are flawed, every dashboard and SLA report is just wishful thinking.
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-1">Skills I Help Build:</span>
                  <span className="text-slate-400 font-light">
                    Ditch misleading averages for realistic percentiles (like P80/P95), measure genuine business outcomes instead of vanity metrics, and catch the chronic issues hiding in your numbers.
                  </span>
                </div>
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-1">Tangible Outcome:</span>
                  <span className="text-emerald-400 font-mono font-semibold">
                    Clean, trustworthy data that easily holds up when leadership starts asking tough questions.
                  </span>
                </div>
              </div>
            </div>

            {/* Area 2: Execution */}
            <div className="bg-[#111827] border border-slate-700/80 rounded-2xl p-6 sm:p-7 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff4d4d]" />
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#ff4d4d] bg-[#ff4d4d]/10 border border-[#ff4d4d]/30 px-2.5 py-1 rounded">
                  PILLAR 02: ENGINE
                </span>
                <Activity className="w-5 h-5 text-[#ff4d4d]" />
              </div>

              <h4 className="text-xl font-bold text-white mb-2">
                Frontline Execution
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 font-light">
                Practical metrics for the daily grind. Giving team leads and frontline staff a crystal-clear look at ticket flow, queue health, and real operational costs.
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-1">Skills I Help Build:</span>
                  <span className="text-slate-400 font-light">
                    Clear queue burn-down pacing, tracking for AI agent deflection, smart change-risk checks, and true cost calculations for every ticket type.
                  </span>
                </div>
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-1">Tangible Outcome:</span>
                  <span className="text-[#ff4d4d] font-mono font-semibold">
                    Relevant business KPIs that avoid vanity metrics, predictable backlogs, and the hard proof you need to justify your staffing levels.
                  </span>
                </div>
              </div>
            </div>

            {/* Area 3: Optimization */}
            <div className="bg-[#111827] border border-slate-700/80 rounded-2xl p-6 sm:p-7 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-400" />
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-indigo-400 bg-indigo-950/60 border border-indigo-800/60 px-2.5 py-1 rounded">
                  PILLAR 03: FLYWHEEL
                </span>
                <Compass className="w-5 h-5 text-indigo-400" />
              </div>

              <h4 className="text-xl font-bold text-white mb-2">
                Strategic Optimization
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 font-light">
                Connecting everyday operations to leadership decisions. Turning daily ticket data into great user experiences, protected teams, and secured funding.
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-1">Skills I Help Build:</span>
                  <span className="text-slate-400 font-light">
                    Experience Level Agreements (XLAs) that measure user happiness, workload metrics that keep your team from burning out, and one-page executive dashboards that answer &ldquo;so what?&rdquo;
                  </span>
                </div>
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-1">Tangible Outcome:</span>
                  <span className="text-indigo-300 font-mono font-semibold">
                    Clear executive buy-in, approved budgets, and a team that stays supported.
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. STAGE 4: PRESENT YOUR CREDENTIALS (INSTRUCTOR DOSSIER) */}
      {/* ========================================================================= */}
      <section id="dossier" className="py-24 bg-white border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Photo & Technical Credentials Badge */}
              <div className="lg:col-span-4">
                <div className="aspect-square rounded-xl overflow-hidden relative border border-slate-200 bg-slate-100 shadow-md">
                  <img 
                    src="/Instructor.png" 
                    alt="Pavel Guarisma - Senior Service Delivery Director"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 hidden text-center p-6">
                    <Users className="w-16 h-16 text-slate-400 mb-3" />
                    <span className="text-base font-bold text-slate-900">Pavel Guarisma</span>
                    <span className="text-xs text-slate-500">Senior Service Delivery Director</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6 font-mono">
                    <span className="text-[#ff4d4d] text-xs font-bold uppercase">INSTRUCTOR DOSSIER</span>
                    <span className="text-white text-lg font-bold">Pavel Guarisma</span>
                    <span className="text-slate-300 text-xs">M.Sc. Operations Research</span>
                  </div>
                </div>
              </div>

              {/* Authority Narrative */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <span className="text-[#ff4d4d] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
                    [ BATTLE-TESTED AUTHORITY ]
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                    Not an analyst's theory.<br />
                    <span className="text-[#ff4d4d]">25+ years in enterprise service delivery.</span>
                  </h2>
                </div>

                <p className="text-slate-700 text-base md:text-lg leading-relaxed font-normal">
                  Holding a Master of Science in Operations Research with a specialization in statistics and mathematical optimization, Pavel bridges frontline incident realities with genuine quantitative models. No vendor sponsorships, zero slide fluff.
                </p>

                {/* 4 Authority Metric Counters */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 font-mono">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-2xl font-black text-slate-900">25+</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">Years Frontline</div>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-2xl font-black text-[#ff4d4d]">M.Sc.</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">Operations Research</div>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-2xl font-black text-slate-900">100%</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">Framework Agnostic</div>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-2xl font-black text-emerald-600">0%</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">Vendor Slideware</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. STAGE 5: SHOW THE BENEFITS (SEGMENTED AUDIENCE MATRIX) */}
      {/* ========================================================================= */}
      <section id="benefits" className="py-24 bg-[#0f172a] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-[#ff4d4d] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              [ AUDIENCE BENEFIT MATRIX ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              What changes on Monday morning.
            </h2>
            <p className="text-slate-400 text-base">
              Different stakeholders face different pressures. Select your role to see the concrete operational shift:
            </p>

            {/* Role Tab Selector (Palo Alto Networks style) */}
            <div className="inline-flex bg-[#162033] p-1 rounded-lg border border-slate-700 mt-6 font-mono text-xs">
              <button
                onClick={() => setActiveRoleTab('practitioner')}
                className={`px-5 py-2.5 rounded font-bold transition-all ${
                  activeRoleTab === 'practitioner'
                    ? 'bg-[#ff4d4d] text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                For Practitioners & Leads
              </button>
              <button
                onClick={() => setActiveRoleTab('manager')}
                className={`px-5 py-2.5 rounded font-bold transition-all ${
                  activeRoleTab === 'manager'
                    ? 'bg-[#ff4d4d] text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                For IT Managers & Directors
              </button>
              <button
                onClick={() => setActiveRoleTab('executive')}
                className={`px-5 py-2.5 rounded font-bold transition-all ${
                  activeRoleTab === 'executive'
                    ? 'bg-[#ff4d4d] text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                For CIOs & VPs
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="max-w-4xl mx-auto bg-[#111827] border border-slate-700 rounded-xl p-8 shadow-xl">
            {activeRoleTab === 'practitioner' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-emerald-400 font-mono text-xs font-bold">
                  <Terminal className="w-4 h-4" /> SENIOR PRACTITIONERS, INCIDENT MANAGERS & DESK LEADS
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Stop the manual spreadsheet cleanup and defend your team’s capacity.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="p-4 bg-[#0f172a] rounded border border-slate-800">
                    <div className="text-[#ff4d4d] font-mono text-xs font-bold mb-2">01 // NOISE REDUCTION</div>
                    <div className="text-white font-bold text-sm mb-1">Filter Out Alarm Fatigue</div>
                    <div className="text-slate-400 text-xs font-light">Eliminate low-value tickets from your daily triage so engineers focus on critical defects.</div>
                  </div>
                  <div className="p-4 bg-[#0f172a] rounded border border-slate-800">
                    <div className="text-[#ff4d4d] font-mono text-xs font-bold mb-2">02 // REPORT AUTOMATION</div>
                    <div className="text-white font-bold text-sm mb-1">Ditch Excel Manual Labor</div>
                    <div className="text-slate-400 text-xs font-light">Save 8–15 hours every month with pre-built formulas that ingest raw CSV exports in seconds.</div>
                  </div>
                  <div className="p-4 bg-[#0f172a] rounded border border-slate-800">
                    <div className="text-[#ff4d4d] font-mono text-xs font-bold mb-2">03 // PROVE BURNOUT</div>
                    <div className="text-white font-bold text-sm mb-1">Defend Queuing Limits</div>
                    <div className="text-slate-400 text-xs font-light">Show leadership mathematically why sudden incident bursts cause multi-day ticket backlog spikes.</div>
                  </div>
                </div>
              </div>
            )}

            {activeRoleTab === 'manager' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-emerald-400 font-mono text-xs font-bold">
                  <Users className="w-4 h-4" /> SERVICE DELIVERY MANAGERS & IT DIRECTORS
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Turn green SLA dashboards into boardroom-credible business cases.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="p-4 bg-[#0f172a] rounded border border-slate-800">
                    <div className="text-[#ff4d4d] font-mono text-xs font-bold mb-2">01 // XLA ADOPTION</div>
                    <div className="text-white font-bold text-sm mb-1">Fix Customer Disconnects</div>
                    <div className="text-slate-400 text-xs font-light">Replace defensive SLA reviews with sentiment and availability metrics business leaders care about.</div>
                  </div>
                  <div className="p-4 bg-[#0f172a] rounded border border-slate-800">
                    <div className="text-[#ff4d4d] font-mono text-xs font-bold mb-2">02 // JUSTIFY HEADCOUNT</div>
                    <div className="text-white font-bold text-sm mb-1">Defensible Capacity Modeling</div>
                    <div className="text-slate-400 text-xs font-light">Present queuing curves that demonstrate the exact business cost of operating under-staffed.</div>
                  </div>
                  <div className="p-4 bg-[#0f172a] rounded border border-slate-800">
                    <div className="text-[#ff4d4d] font-mono text-xs font-bold mb-2">03 // DECISION REVIEWS</div>
                    <div className="text-white font-bold text-sm mb-1">Stop KPI Theater</div>
                    <div className="text-slate-400 text-xs font-light">Transform monthly meetings into actionable planning sessions focused on continuous improvement.</div>
                  </div>
                </div>
              </div>
            )}

            {activeRoleTab === 'executive' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-emerald-400 font-mono text-xs font-bold">
                  <Target className="w-4 h-4" /> CIOS, VPS OF INFRASTRUCTURE & CTO EXECUTIVES
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Achieve operational predictability and eliminate vanity metric noise.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="p-4 bg-[#0f172a] rounded border border-slate-800">
                    <div className="text-[#ff4d4d] font-mono text-xs font-bold mb-2">01 // FINANCIAL REALITY</div>
                    <div className="text-white font-bold text-sm mb-1">Quantify Downtime Cost</div>
                    <div className="text-slate-400 text-xs font-light">Tie application outages directly to payroll drag and customer transaction loss.</div>
                  </div>
                  <div className="p-4 bg-[#0f172a] rounded border border-slate-800">
                    <div className="text-[#ff4d4d] font-mono text-xs font-bold mb-2">02 // RISK TRANSPARENCY</div>
                    <div className="text-white font-bold text-sm mb-1">Identify Chronic Fragility</div>
                    <div className="text-slate-400 text-xs font-light">Spot recurring defects hidden behind passing monthly SLA reports before they escalate.</div>
                  </div>
                  <div className="p-4 bg-[#0f172a] rounded border border-slate-800">
                    <div className="text-[#ff4d4d] font-mono text-xs font-bold mb-2">03 // BENCHMARK ROI</div>
                    <div className="text-white font-bold text-sm mb-1">Clear Capital Allocation</div>
                    <div className="text-slate-400 text-xs font-light">Make confident technology investment decisions grounded in clean operational statistics.</div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. STAGE 6: MAKE YOUR OFFER (THE PRODUCT SUITE & MATERIAL KITS) */}
      {/* ========================================================================= */}
      <section id="offer-suite" className="py-24 bg-slate-50 border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#ff4d4d] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              [ THE LEARNING &amp; TOOLKIT SUITE ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Tools, training, and operational frameworks.
            </h2>
            <p className="text-slate-600 text-base">
              From free YouTube video teardowns to our focused foundation training and comprehensive flagship masterclass.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* TIER 01: Free YouTube Mini-Courses */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    UNRESTRICTED ACCESS
                  </span>
                  <span className="font-mono text-xs text-slate-400">TIER 01</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Free YouTube Mini-Courses
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 font-normal">
                  Short, practical video teardowns breaking down specific calculation traps. Learn how to calculate real percentile MTTR in Excel, isolate backlog queues, and construct defensible dashboards.
                </p>

                {/* Downloadable material kits notice */}
                <div className="mb-6 p-3 bg-emerald-50/90 border border-emerald-200 rounded-lg flex items-start gap-2.5 text-xs text-emerald-900">
                  <Download className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    <strong className="font-bold">Downloadable Material Kits:</strong> Select mini-courses include companion spreadsheet templates and material kits available for free download.
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-800 font-medium">Stop Using Fixed Averages for Dynamic Data</span>
                    <span className="text-[#ff4d4d] font-bold">9 min</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-800 font-medium">False Resolution Rates of AI Agents</span>
                    <span className="text-[#ff4d4d] font-bold">4 min</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a 
                  id="browse-youtube-channel-btn"
                  href="https://www.youtube.com/@ITOutcomes-CA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs font-mono uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 text-[#ff4d4d] fill-current" />
                  Browse YouTube Channel <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* TIER 02: 1-Hour QuickStart Foundation Course */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    60-MIN FOUNDATION TRAINING
                  </span>
                  <span className="font-mono text-xs text-slate-400">TIER 02</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  1-Hour QuickStart Course
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  A comprehensive foundation video masterclass breaking down the core principles of metric design. Learn how to differentiate between busy-work (outputs) and actual value (outcomes) right in your browser.
                </p>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs font-mono text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#ff4d4d]" />
                    <span>Hosted on YouTube, delivered via seamless in-page modal.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#ff4d4d]" />
                    <span>Roadmap to move from reactive firefighting to strategic leadership.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs font-mono uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 border border-slate-200"
                >
                  <Play className="w-4 h-4 text-[#ff4d4d] fill-current" />
                  Play 1-Hour QuickStart Course
                </button>
              </div>
            </div>

            {/* TIER 03: Flagship Deep-Dive Course */}
            <div className="bg-gradient-to-br from-[#131b2e] to-[#0a0f1d] border-2 border-[#ff4d4d] rounded-2xl p-8 flex flex-col justify-between shadow-xl text-white relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#ff4d4d] bg-[#ff4d4d]/20 px-2.5 py-0.5 rounded border border-[#ff4d4d]/30">
                    ADVANCED MASTERCLASS // WAITLIST
                  </span>
                  <span className="font-mono text-xs text-slate-400">TIER 03</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Flagship Deep-Dive Masterclass
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  Mastering ITSM Metrics: 8 comprehensive modules (4–5 hours) with end-to-end spreadsheet automation models, real-world case audits, and bi-weekly coaching clinics with Pavel.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono text-slate-300">
                  <div className="p-3 bg-black/40 rounded-lg border border-white/10">
                    <div className="text-white font-bold">8 Modules</div>
                    <div className="text-slate-400 text-[10px]">Complete Syllabus</div>
                  </div>
                  <div className="p-3 bg-black/40 rounded-lg border border-white/10">
                    <div className="text-[#ff4d4d] font-bold">Founding Cohort</div>
                    <div className="text-slate-400 text-[10px]">50% Launch Discount</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => scrollTo('scarcity-waitlist')}
                  className="flex-1 py-3 bg-[#ff4d4d] hover:bg-[#ff3333] text-white font-bold text-xs font-mono uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#ff4d4d]/25"
                >
                  Join Flagship Waitlist
                </button>
                <button
                  onClick={() => onNavigate && onNavigate('curriculum')}
                  className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs rounded-lg transition-colors"
                >
                  View Syllabus
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. STAGE 7: INJECT SCARCITY (FOUNDING COHORT WAITLIST) */}
      {/* ========================================================================= */}
      <section id="scarcity-waitlist" className="py-24 bg-[#090e17] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff4d4d]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-[#0f172a] border border-[#ff4d4d]/40 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#ff4d4d] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
                [ LIMITED FOUNDING COHORT ENROLLMENT ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
                Secure founding cohort benefits before public launch.
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-light">
                We are launching the Flagship ITSM Metrics Masterclass to a limited group of 100 founding practitioners and managers.
              </p>
            </div>

            {/* Scarcity Benefits Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-xs font-mono">
              <div className="p-4 bg-[#162033] rounded border border-slate-700 flex items-start gap-3">
                <Check className="w-4 h-4 text-[#ff4d4d] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Guaranteed 50% Launch Discount</strong>
                  <span className="text-slate-400">Lock in founding member pricing ($99 instead of $199 retail).</span>
                </div>
              </div>
              <div className="p-4 bg-[#162033] rounded border border-slate-700 flex items-start gap-3">
                <Check className="w-4 h-4 text-[#ff4d4d] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">1-on-1 Dashboard Review Clinic</strong>
                  <span className="text-slate-400">Pavel Guarisma will personally review your ServiceNow/Jira setup.</span>
                </div>
              </div>
              <div className="p-4 bg-[#162033] rounded border border-slate-700 flex items-start gap-3">
                <Check className="w-4 h-4 text-[#ff4d4d] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Lifetime Curriculum Upgrades</strong>
                  <span className="text-slate-400">Includes all future module expansions, spreadsheets, and templates.</span>
                </div>
              </div>
              <div className="p-4 bg-[#162033] rounded border border-slate-700 flex items-start gap-3">
                <Check className="w-4 h-4 text-[#ff4d4d] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Private Bi-Weekly Office Hours</strong>
                  <span className="text-slate-400">Direct coaching access to troubleshoot data friction in your org.</span>
                </div>
              </div>
            </div>

            {/* Live Counter Pill */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff4d4d]/10 border border-[#ff4d4d]/30 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#ff4d4d] animate-ping" />
                <span className="text-slate-300">SEATS REMAINING IN FOUNDING BATCH:</span>
                <span className="text-[#ff4d4d] font-bold">[ 38 / 100 ]</span>
              </div>
            </div>

            {/* Waitlist Form */}
            {waitlistSuccess ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center font-mono">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-white mb-1">You are locked in!</h3>
                <p className="text-slate-300 text-xs">
                  We have reserved your 50% discount and notified Pavel. Watch your inbox for priority cohort release details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-4 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  <div className="sm:col-span-7">
                    <input
                      id="waitlist-email-input"
                      type="email"
                      required
                      placeholder="name@company.com (Work Email)"
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      className="w-full bg-[#162033] border border-slate-700 rounded-lg px-4 py-3.5 text-white font-mono text-sm placeholder:text-slate-500 focus:border-[#ff4d4d] focus:outline-none"
                    />
                  </div>
                  <div className="sm:col-span-5">
                    <select
                      id="waitlist-role-select"
                      value={waitlistRole}
                      onChange={(e) => setWaitlistRole(e.target.value as any)}
                      className="w-full bg-[#162033] border border-slate-700 rounded-lg px-3 py-3.5 text-slate-300 font-mono text-xs sm:text-sm focus:border-[#ff4d4d] focus:outline-none"
                    >
                      <option value="practitioner">Senior Practitioner</option>
                      <option value="manager">Service Delivery Manager</option>
                      <option value="executive">CIO / IT Executive</option>
                    </select>
                  </div>
                  <div className="sm:col-span-12">
                    <button
                      id="reserve-founding-spot-btn"
                      type="submit"
                      className="w-full py-4 bg-[#ff4d4d] hover:bg-[#ff3333] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#ff4d4d]/20"
                    >
                      Reserve Founding Spot
                    </button>
                  </div>
                </div>
                <div className="text-center text-[11px] font-mono text-slate-500">
                  100% Free to Reserve • Zero Spam • One-Click Unsubscribe
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FOOTER */}
      {/* ========================================================================= */}
      <footer className="py-14 bg-[#060a12] border-t border-slate-800 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-[#0b0e14] p-2.5 rounded-xl border border-slate-700/80 shadow-lg shadow-black/50">
              <BrandLogo className="w-8 h-8 sm:w-9 sm:h-9 text-[#ff3b4e]" glow={true} />
            </div>
            <div>
              <div className="font-black text-xl sm:text-2xl tracking-tight leading-none font-sans">
                <span className="text-[#ff3b4e] drop-shadow-[0_0_10px_rgba(255,59,78,0.4)]">IT</span> <span className="text-white">OUTCOMES</span>
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Advanced ITSM Metrics & KPI Training</div>
            </div>
          </div>
          <div className="flex items-center gap-7 text-slate-300 font-medium text-sm">
            <button onClick={() => onNavigate && onNavigate('curriculum')} className="hover:text-[#ff4d4d] transition-colors">Curriculum</button>
            <button onClick={() => onNavigate && onNavigate('business-kpis')} className="hover:text-[#ff4d4d] transition-colors">Deliverables</button>
            <button onClick={() => onNavigate && onNavigate('contact')} className="hover:text-[#ff4d4d] transition-colors">Contact</button>
            <a 
              href="https://www.youtube.com/@ITOutcomes-CA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#ff4d4d] transition-colors flex items-center gap-1.5"
            >
              YouTube
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
          <div className="text-slate-500 text-xs">
            © 2026 IT Outcomes. Framework-agnostic training led by Pavel Guarisma.
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 10. MODAL: YOUTUBE LIGHTBOX FOR 1-HOUR QUICKSTART */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVideoModal(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 z-10 aspect-video flex flex-col"
            >
              <button 
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-30 p-2 bg-black/70 hover:bg-black text-white rounded-full border border-white/20 transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                src="https://www.youtube.com/embed/eUp-xynIdLk?autoplay=1&rel=0&modestbranding=1"
                title="IT Outcomes Quickstart Course"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 11. MODAL: GATED MATERIAL KIT DOWNLOAD FORM */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showKitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowKitModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="relative w-full max-w-lg bg-[#0f172a] border border-[#ff4d4d]/50 rounded-xl p-8 z-10 shadow-2xl font-mono text-xs"
            >
              <button 
                onClick={() => setShowKitModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-[#ff4d4d] font-bold uppercase tracking-wider block mb-1">
                MATERIAL KIT UNLOCK
              </span>
              <h3 className="text-xl font-bold text-white mb-2 font-sans">
                {selectedKit}
              </h3>
              <p className="text-slate-400 text-xs mb-6 font-light font-sans">
                Enter your work email below to receive the complete spreadsheet models, XLA weighting formulas, and calculation blueprints directly in your inbox.
              </p>

              {kitSubmitted ? (
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded text-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">Toolkit Dispatched!</h4>
                  <p className="text-slate-300 text-[11px] mb-4">
                    Check your inbox at <span className="text-white font-bold">{kitEmail}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setShowKitModal(false);
                      setShowVideoModal(true);
                    }}
                    className="px-4 py-2 bg-[#ff4d4d] text-white font-bold rounded text-xs"
                  >
                    Watch Quickstart While You Wait -&gt;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleKitSubmit} className="space-y-4">
                  <div>
                    <label className="block text-slate-300 mb-1 text-[11px]">Work Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={kitEmail}
                      onChange={(e) => setKitEmail(e.target.value)}
                      className="w-full bg-[#162033] border border-slate-700 rounded px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:border-[#ff4d4d] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 text-[11px]">Your Role Category *</label>
                    <select
                      value={kitRole}
                      onChange={(e) => setKitRole(e.target.value)}
                      className="w-full bg-[#162033] border border-slate-700 rounded px-3.5 py-2.5 text-slate-200 focus:border-[#ff4d4d] focus:outline-none"
                    >
                      <option value="practitioner">Senior Practitioner / Desk Lead</option>
                      <option value="manager">Service Delivery Manager / Director</option>
                      <option value="executive">CIO / VP Executive</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#ff4d4d] hover:bg-[#ff3333] text-white font-bold uppercase tracking-wider rounded transition-colors shadow-lg shadow-[#ff4d4d]/20 mt-2"
                  >
                    Send Me The Complete Kit -&gt;
                  </button>

                  <div className="text-[10px] text-slate-500 text-center">
                    Instant delivery via Brevo. Zero spam. 1-click unsubscribe.
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
