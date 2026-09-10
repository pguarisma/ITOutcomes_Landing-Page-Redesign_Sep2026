import React, { useState, useEffect, useRef } from 'react';
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
  Trello,
  BookOpen,
  TrendingUp,
  Briefcase,
  Play,
  X,
  Clock,
  Sparkles,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  BarChart3,
  Sliders,
  DollarSign
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

// --- Official IT Outcomes Company Logo ---
export const BrandLogo = ({ 
  className = "w-7 h-7 text-[#ff3b4e]",
  showWordmark = false,
  glow = true
}: { 
  className?: string;
  showWordmark?: boolean;
  glow?: boolean;
}) => {
  if (showWordmark) {
    return (
      <div className="inline-flex flex-col items-center select-none group">
        <svg 
          viewBox="0 0 350 320" 
          className={className} 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={glow ? { filter: 'drop-shadow(0 0 10px rgba(255, 59, 78, 0.4))' } : undefined}
        >
          {/* Central Upward Hero Arrow with Slanted Base */}
          <path 
            d="M 175 22 L 232 94 H 200 V 176 L 150 214 V 94 H 118 Z" 
            fill="currentColor" 
          />
          {/* Top-Left Process Node */}
          <rect 
            x="44" 
            y="106" 
            width="52" 
            height="52" 
            rx="8" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="11" 
            strokeLinejoin="round" 
          />
          {/* Top-Left Feeder Arrow */}
          <line 
            x1="96" 
            y1="132" 
            x2="132" 
            y2="132" 
            stroke="currentColor" 
            strokeWidth="11" 
            strokeLinecap="round" 
          />
          <polygon 
            points="126,118 148,132 126,146" 
            fill="currentColor" 
          />
          {/* Bottom-Left Origin Node */}
          <rect 
            x="44" 
            y="236" 
            width="52" 
            height="52" 
            rx="8" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="11" 
            strokeLinejoin="round" 
          />
          {/* Right Outcome Node */}
          <rect 
            x="232" 
            y="164" 
            width="52" 
            height="52" 
            rx="8" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="11" 
            strokeLinejoin="round" 
          />
          {/* Interconnect Bus Trunk */}
          <path 
            d="M 96 262 H 247 A 11 11 0 0 0 258 251 V 216" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="11" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Vertical Bus Tap into Arrow Base */}
          <line 
            x1="175" 
            y1="262" 
            x2="175" 
            y2="224" 
            stroke="currentColor" 
            strokeWidth="11" 
            strokeLinecap="round" 
          />
          {/* Inline Flow Chevron */}
          <polygon 
            points="203,250 225,262 203,274" 
            fill="currentColor" 
          />
        </svg>
        <div className="mt-1 text-center font-black tracking-wider text-xs uppercase font-sans">
          <span className="text-[#ff3b4e]">IT </span>
          <span className="text-white">OUTCOMES</span>
        </div>
      </div>
    );
  }

  return (
    <svg 
      viewBox="0 0 350 320" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={glow ? { filter: 'drop-shadow(0 0 8px rgba(255, 59, 78, 0.45))' } : undefined}
    >
      {/* Central Upward Hero Arrow with Slanted Base */}
      <path 
        d="M 175 22 L 232 94 H 200 V 176 L 150 214 V 94 H 118 Z" 
        fill="currentColor" 
      />
      {/* Top-Left Process Node */}
      <rect 
        x="44" 
        y="106" 
        width="52" 
        height="52" 
        rx="8" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="11" 
        strokeLinejoin="round" 
      />
      {/* Top-Left Feeder Arrow */}
      <line 
        x1="96" 
        y1="132" 
        x2="132" 
        y2="132" 
        stroke="currentColor" 
        strokeWidth="11" 
        strokeLinecap="round" 
      />
      <polygon 
        points="126,118 148,132 126,146" 
        fill="currentColor" 
      />
      {/* Bottom-Left Origin Node */}
      <rect 
        x="44" 
        y="236" 
        width="52" 
        height="52" 
        rx="8" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="11" 
        strokeLinejoin="round" 
      />
      {/* Right Outcome Node */}
      <rect 
        x="232" 
        y="164" 
        width="52" 
        height="52" 
        rx="8" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="11" 
        strokeLinejoin="round" 
      />
      {/* Interconnect Bus Trunk */}
      <path 
        d="M 96 262 H 247 A 11 11 0 0 0 258 251 V 216" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="11" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Vertical Bus Tap into Arrow Base */}
      <line 
        x1="175" 
        y1="262" 
        x2="175" 
        y2="224" 
        stroke="currentColor" 
        strokeWidth="11" 
        strokeLinecap="round" 
      />
      {/* Inline Flow Chevron */}
      <polygon 
        points="203,250 225,262 203,274" 
        fill="currentColor" 
      />
    </svg>
  );
};

// --- Dual-Perspective ITSM Dashboard Simulation ---
const TransformationSimulator = () => {
  const [activeTab, setActiveTab] = useState<'operational' | 'executive'>('executive');

  const operationalData = [
    { label: 'Mon', volume: 240, backlog: 180, escalated: 42 },
    { label: 'Tue', volume: 310, backlog: 210, escalated: 55 },
    { label: 'Wed', volume: 290, backlog: 240, escalated: 60 },
    { label: 'Thu', volume: 380, backlog: 310, escalated: 85 },
    { label: 'Fri', volume: 420, backlog: 390, escalated: 95 },
    { label: 'Sat', volume: 160, backlog: 360, escalated: 30 },
    { label: 'Sun', volume: 120, backlog: 340, escalated: 20 },
  ];

  const executiveData = [
    { label: 'Wk 1', valueAdded: 45, costWaste: 38, availability: 99.1 },
    { label: 'Wk 2', valueAdded: 58, costWaste: 32, availability: 99.4 },
    { label: 'Wk 3', valueAdded: 72, costWaste: 24, availability: 99.7 },
    { label: 'Wk 4', valueAdded: 94, costWaste: 12, availability: 99.9 },
  ];

  return (
    <div className="w-full bg-[#0f172a] rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col">
      {/* Console Top-Bar */}
      <div className="h-11 bg-[#1e293b] border-b border-slate-700/80 px-4 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff4d4d]/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="font-mono text-slate-400 text-[11px] ml-2 hidden sm:inline">
            ITSM_PORTAL // {activeTab === 'operational' ? 'RAW_INCIDENT_STREAM' : 'EXECUTIVE_VALUE_MAP'}
          </span>
        </div>
        
        {/* Toggle Mode */}
        <div className="flex bg-slate-900/80 p-0.5 rounded-lg border border-slate-700">
          <button
            id="tab-btn-operational"
            onClick={() => setActiveTab('operational')}
            className={`px-3 py-1 rounded text-[11px] font-bold font-mono transition-all ${
              activeTab === 'operational'
                ? 'bg-slate-700 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Raw Operational
          </button>
          <button
            id="tab-btn-executive"
            onClick={() => setActiveTab('executive')}
            className={`px-3 py-1 rounded text-[11px] font-bold font-mono transition-all ${
              activeTab === 'executive'
                ? 'bg-[#ff4d4d] text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Executive Story
          </button>
        </div>
      </div>

      {/* KPI Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800/80 border-b border-slate-700/80">
        {activeTab === 'operational' ? (
          <>
            <div className="p-4 bg-[#0f172a]">
              <div className="text-[10px] uppercase font-mono font-bold text-slate-400">Total Incidents</div>
              <div className="text-xl font-bold font-mono text-white mt-1">1,920 <span className="text-xs text-red-400 font-normal">+14%</span></div>
            </div>
            <div className="p-4 bg-[#0f172a]">
              <div className="text-[10px] uppercase font-mono font-bold text-slate-400">Avg MTTR (Raw)</div>
              <div className="text-xl font-bold font-mono text-[#ff4d4d] mt-1">4.6h <span className="text-xs text-slate-400 font-normal">(Skewed)</span></div>
            </div>
            <div className="p-4 bg-[#0f172a]">
              <div className="text-[10px] uppercase font-mono font-bold text-slate-400">SLA Green %</div>
              <div className="text-xl font-bold font-mono text-emerald-400 mt-1">96.8% <span className="text-[10px] text-amber-400">(Vanity)</span></div>
            </div>
            <div className="p-4 bg-[#0f172a]">
              <div className="text-[10px] uppercase font-mono font-bold text-slate-400">Backlog Stagnation</div>
              <div className="text-xl font-bold font-mono text-amber-400 mt-1">390 tkts</div>
            </div>
          </>
        ) : (
          <>
            <div className="p-4 bg-[#0f172a]">
              <div className="text-[10px] uppercase font-mono font-bold text-slate-400">Productive Hours Saved</div>
              <div className="text-xl font-bold font-mono text-emerald-400 mt-1">418 hrs</div>
            </div>
            <div className="p-4 bg-[#0f172a]">
              <div className="text-[10px] uppercase font-mono font-bold text-slate-400">Defect Reoccurrence</div>
              <div className="text-xl font-bold font-mono text-white mt-1">-68% <span className="text-xs text-emerald-400">Fixed</span></div>
            </div>
            <div className="p-4 bg-[#0f172a]">
              <div className="text-[10px] uppercase font-mono font-bold text-slate-400">Quarterly Cost Recovery</div>
              <div className="text-xl font-bold font-mono text-[#ff4d4d] mt-1">$62,700</div>
            </div>
            <div className="p-4 bg-[#0f172a]">
              <div className="text-[10px] uppercase font-mono font-bold text-slate-400">Core Service Uptime</div>
              <div className="text-xl font-bold font-mono text-white mt-1">99.94%</div>
            </div>
          </>
        )}
      </div>

      {/* Main Chart Graphic */}
      <div className="p-5 h-[240px] md:h-[280px]">
        {activeTab === 'operational' ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={operationalData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="volGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff4d4d" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#ff4d4d" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="backlogGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="label" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', borderRadius: '8px', fontSize: '12px' }}
                itemStyle={{ fontSize: '12px' }}
              />
              <Area type="monotone" dataKey="volume" name="Raw Ticket Spike" stroke="#ff4d4d" strokeWidth={2} fillOpacity={1} fill="url(#volGrad)" />
              <Area type="monotone" dataKey="backlog" name="Unresolved Backlog" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#backlogGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={executiveData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="label" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', borderRadius: '8px', fontSize: '12px' }}
                itemStyle={{ fontSize: '12px' }}
              />
              <Bar dataKey="valueAdded" name="Business Value Delivered ($k)" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="costWaste" name="Operational Friction ($k)" fill="#ff4d4d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Context Banner */}
      <div className="px-5 py-3 bg-[#1e293b]/70 border-t border-slate-700/80 text-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <span className="text-slate-300 font-medium">
          {activeTab === 'operational'
            ? '⚠️ Operational Trap: Measuring output volume triggers firefighter burnout without explaining business health.'
            : '✅ Executive Mastery: Connecting statistical stability to saved dollars and customer confidence.'}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff4d4d] font-bold">
          {activeTab === 'operational' ? 'STATUS: NOISY' : 'STATUS: DEFENSIVE ROI'}
        </span>
      </div>
    </div>
  );
};

// --- Props for LandingPage ---
export interface LandingPageProps {
  onNavigate?: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  // Video Lightbox State
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Interactive ROI Calculator State
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(75);
  const [teamSize, setTeamSize] = useState(3);

  // ROI Math
  const annualCostWasted = hoursPerWeek * hourlyRate * teamSize * 52;
  const annualRecoveredValue = Math.round(annualCostWasted * 0.8);
  const monthlyWasted = Math.round(annualCostWasted / 12);

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Keyboard escape listener for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowVideoModal(false);
    };
    if (showVideoModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [showVideoModal]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#ff4d4d] selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. STICKY GLOBAL NAVIGATION */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Mark */}
          <div 
            id="brand-logo-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="bg-[#111] p-2 rounded-lg group-hover:scale-105 transition-transform">
              <BrandLogo className="w-5 h-5 text-[#ff4d4d]" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              IT <span className="text-[#ff4d4d]">Outcomes</span>
            </span>
          </div>

          {/* Center Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <button 
              id="nav-problem-btn"
              onClick={() => scrollTo('diagnosis')} 
              className="hover:text-[#ff4d4d] transition-colors"
            >
              The Problem
            </button>
            <button 
              id="nav-simulator-btn"
              onClick={() => scrollTo('simulator')} 
              className="hover:text-[#ff4d4d] transition-colors"
            >
              Data vs. Value
            </button>
            <button 
              id="nav-roi-btn"
              onClick={() => scrollTo('calculator')} 
              className="hover:text-[#ff4d4d] transition-colors"
            >
              ROI Calculator
            </button>
            <button 
              id="nav-pricing-btn"
              onClick={() => scrollTo('pricing')} 
              className="hover:text-[#ff4d4d] transition-colors"
            >
              Pricing
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button 
              id="nav-quickstart-cta"
              onClick={() => setShowVideoModal(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Play className="w-3.5 h-3.5 text-[#ff4d4d] fill-current" /> Free Video
            </button>
            <button 
              id="nav-contact-cta"
              onClick={() => onNavigate && onNavigate('contact')}
              className="bg-[#ff4d4d] hover:bg-[#ff3333] text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-md shadow-[#ff4d4d]/20 transition-all"
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        {/* Subtle Geometric Background */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ 
            backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }}
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff4d4d]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Value Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff4d4d]/10 border border-[#ff4d4d]/20 text-[#ff4d4d] text-xs font-bold uppercase tracking-wider mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Advanced ITSM Metrics & KPI Training
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.02] mb-6">
              You're Measuring Everything.<br className="hidden sm:inline" />
              <span className="text-[#ff4d4d]"> But Improving Nothing.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
              Stop performing <strong className="font-semibold text-slate-900">KPI theater</strong>. Turn raw ServiceNow and Jira tickets into defensible, executive-ready business insights that justify investments.
            </p>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                id="hero-play-video-btn"
                onClick={() => setShowVideoModal(true)}
                className="w-full sm:w-auto px-8 py-4 bg-[#ff4d4d] hover:bg-[#ff3333] text-white rounded-xl font-bold text-base shadow-xl shadow-[#ff4d4d]/25 transition-all flex items-center justify-center gap-3 group"
              >
                <Play className="w-5 h-5 fill-current" />
                Play Free Quickstart Video
              </button>

              <button
                id="hero-scroll-pricing-btn"
                onClick={() => scrollTo('pricing')}
                className="w-full sm:w-auto px-8 py-4 bg-[#111] hover:bg-black text-white rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                View Plans & Curriculum <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs sm:text-sm font-medium text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff4d4d]" /> 25+ Years Service Delivery
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff4d4d]" /> Framework Agnostic
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff4d4d]" /> M.Sc. Operations Research
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SIMULATOR & PAIN-POINT CONTRAST BANNER */}
      {/* ========================================================================= */}
      <section id="simulator" className="bg-[#111] text-white py-20 md:py-28 relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Transformation Visual */}
            <div className="lg:col-span-7 relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#ff4d4d]/10 blur-[100px] rounded-full pointer-events-none"></div>
              <TransformationSimulator />
            </div>

            {/* Right: Pain-Point Testimonials */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[#ff4d4d] text-xs font-mono font-bold uppercase tracking-widest block mb-2">
                  The Daily Reality
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                  Data-rich.<br />Insight-poor.
                </h2>
              </div>

              {/* Quote 1 */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 relative">
                <div className="w-1 h-full absolute left-0 top-0 bg-[#ff4d4d] rounded-l-xl"></div>
                <p className="text-base text-slate-200 italic leading-relaxed mb-3">
                  "I have lots of data, but no clear story. Dashboards are green, but my customers are seeing red."
                </p>
                <div className="text-xs font-bold uppercase tracking-wider text-[#ff4d4d]">
                  — Every IT Service Delivery Manager
                </div>
              </div>

              {/* Quote 2 */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 relative">
                <div className="w-1 h-full absolute left-0 top-0 bg-[#ff4d4d] rounded-l-xl"></div>
                <p className="text-base text-slate-200 italic leading-relaxed mb-3">
                  "I need to justify growing my team to my VP, but she requires a detailed business case with relevant data that backs up my claim."
                </p>
                <div className="text-xs font-bold uppercase tracking-wider text-[#ff4d4d]">
                  — Every Team Lead
                </div>
              </div>

              {/* Solution Takeaway */}
              <div className="pt-2 text-sm text-slate-400 leading-relaxed">
                This course gives you the mathematical and storytelling toolkit to eliminate ambiguity and bridge the communication gap with the C-suite.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE DIAGNOSIS (4 CORE FAILURE MODES) */}
      {/* ========================================================================= */}
      <section id="diagnosis" className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d4d] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              The Root Cause Diagnosis
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Why your ITSM metrics fail.
            </h2>
            <p className="text-slate-600 text-lg">
              Most organizations don't have a tooling problem. They have a translation problem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                code: "ERR_01",
                label: "The Noise Problem",
                title: "Data-Rich, Insight-Poor",
                icon: FileSpreadsheet,
                desc: "Metrics exist across tools (ITSM, Excel, PowerBI), but they lack a narrative. You can't answer 'So what?' or 'What do we change on Monday morning?'",
                cure: "Statistical normalization & executive synthesis"
              },
              {
                code: "ERR_02",
                label: "The Vanity Problem",
                title: "KPI Theater",
                icon: AlertTriangle,
                desc: "Monthly reviews are ceremonial. Metrics track activity ('tickets closed') instead of business value. Everyone nods, but nothing gets fundamentally fixed.",
                cure: "Outcome-driven SLAs & Experience Level Agreements (XLAs)"
              },
              {
                code: "ERR_03",
                label: "The Translation Problem",
                title: "The Executive Gap",
                icon: Users,
                desc: "Practitioners live in day-to-day exceptions. Executives want predictability and ROI. Technical dashboards fail to translate operational reality into business impact.",
                cure: "Role-based dashboards & financial alignment (TCO / ROI)"
              },
              {
                code: "ERR_04",
                label: "The Customization Trap",
                title: "Unique Snowflake Syndrome",
                icon: Target,
                desc: "Teams falsely believe their organization is too unique for standards, spawning unmaintainable customized metrics instead of applying battle-tested principles.",
                cure: "Framework-agnostic mathematical baselines & standard maps"
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-100/90 hover:bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#ff4d4d] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#ff4d4d]/10 text-[#ff4d4d] flex items-center justify-center group-hover:scale-110 transition-transform border border-[#ff4d4d]/20">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    {item.label}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#ff4d4d] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 group-hover:border-slate-100 transition-colors flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 font-semibold">How we resolve it:</span>
                  <span className="text-emerald-600 font-bold">{item.cure}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE REPORTING ROI CALCULATOR */}
      {/* ========================================================================= */}
      <section id="calculator" className="py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#ff4d4d] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              Cost of Inefficiency
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Reporting ROI Calculator
            </h2>
            <p className="text-slate-600 text-lg">
              Calculate the true financial and cognitive drag of manual reporting and reactive firefighting on your engineering and delivery teams.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200/80 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Sliders Column */}
              <div className="lg:col-span-7 space-y-8">
                {/* Hours Spent */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-slate-900">
                      Hours spent manually compiling reports / week
                    </label>
                    <span className="font-mono text-sm font-extrabold text-[#ff4d4d]">
                      {hoursPerWeek} hrs/wk
                    </span>
                  </div>
                  <input 
                    type="range"
                    min={1}
                    max={40}
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#ff4d4d]"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                    <span>1 hr</span>
                    <span>20 hrs</span>
                    <span>40 hrs</span>
                  </div>
                </div>

                {/* Hourly Rate */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-slate-900">
                      Blended Practitioner / Manager Rate ($/hr)
                    </label>
                    <span className="font-mono text-sm font-extrabold text-slate-900">
                      ${hourlyRate}/hr
                    </span>
                  </div>
                  <input 
                    type="range"
                    min={40}
                    max={150}
                    step={5}
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#ff4d4d]"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                    <span>$40/hr</span>
                    <span>$95/hr</span>
                    <span>$150/hr</span>
                  </div>
                </div>

                {/* Team Size */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-slate-900">
                      Number of Team Leads & Reporting Staff
                    </label>
                    <span className="font-mono text-sm font-extrabold text-slate-900">
                      {teamSize} {teamSize === 1 ? 'Person' : 'People'}
                    </span>
                  </div>
                  <input 
                    type="range"
                    min={1}
                    max={15}
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#ff4d4d]"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                    <span>1</span>
                    <span>7</span>
                    <span>15</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-500 leading-relaxed">
                  💡 <strong>Benchmark Insight:</strong> High-maturity teams automate 80% of routine metric queries, liberating over $50k in strategic leadership time per cohort.
                </div>
              </div>

              {/* Output Display Column */}
              <div className="lg:col-span-5 bg-[#111] text-white rounded-xl p-6 md:p-8 flex flex-col justify-between border border-slate-800">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Annual Waste (Labor Drag)
                  </span>
                  <div className="text-3xl md:text-4xl font-black font-mono text-red-400 mb-6">
                    -${annualCostWasted.toLocaleString()}
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-800">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Monthly Burn:</span>
                      <span className="font-mono font-bold text-slate-200">
                        ${monthlyWasted.toLocaleString()}/mo
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Recoverable Hours:</span>
                      <span className="font-mono font-bold text-emerald-400">
                        {Math.round(hoursPerWeek * teamSize * 52 * 0.8).toLocaleString()} hrs
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                    Potential Recovered Value
                  </span>
                  <div className="text-2xl md:text-3xl font-black font-mono text-emerald-400">
                    +${annualRecoveredValue.toLocaleString()}
                  </div>
                  <button 
                    id="calc-enroll-jump-btn"
                    onClick={() => scrollTo('pricing')}
                    className="w-full mt-6 py-3 bg-[#ff4d4d] hover:bg-[#ff3333] text-white font-bold rounded-lg text-sm transition-colors shadow-lg shadow-[#ff4d4d]/20"
                  >
                    Recover Team Capacity
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CURRICULUM PREVIEW (8 MODULES OVERVIEW) */}
      {/* ========================================================================= */}
      <section id="curriculum-preview" className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-[#ff4d4d] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
                Structured 8-Module Syllabus
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                A rigorous, outcome-first roadmap.
              </h2>
            </div>
            
            <button
              id="view-full-curriculum-top-btn"
              onClick={() => onNavigate && onNavigate('curriculum')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold rounded-lg transition-colors text-sm shadow-sm shrink-0"
            >
              View Full Syllabus Details <ArrowRight className="w-4 h-4 text-[#ff4d4d]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Foundations: Value Language",
                desc: "Shifting from tracking outputs to business outcomes aligned with ITIL 4."
              },
              {
                num: "02",
                title: "Statistical Literacy",
                desc: "Mean, Median, Mode and distributions to move from gut feelings to data confidence."
              },
              {
                num: "03",
                title: "Service Ops Flow",
                desc: "Measuring Incident and Request velocity to eliminate backlog bottlenecks."
              },
              {
                num: "04",
                title: "Strategic Stability",
                desc: "Balancing agility and stability using Change and Problem root cause analysis."
              },
              {
                num: "05",
                title: "Financial ROI Alignment",
                desc: "Bridging IT operations to executive financial reality with TCO and ROI metrics."
              },
              {
                num: "06",
                title: "People & DEX Experience",
                desc: "XLAs and Digital Employee Experience data to prevent agent burnout."
              },
              {
                num: "07",
                title: "Executive Data Storytelling",
                desc: "Designing role-based dashboards answering 'So what?' for executive leaders."
              },
              {
                num: "08",
                title: "90-Day Implementation",
                desc: "Building a sustainable data culture through continuous operational improvement."
              }
            ].map((mod, i) => (
              <div 
                key={i}
                onClick={() => onNavigate && onNavigate('curriculum')}
                className="p-6 bg-white rounded-xl border border-slate-200 hover:border-[#ff4d4d] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="font-mono text-sm font-extrabold text-[#ff4d4d] mb-4">
                    MODULE {mod.num}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-[#ff4d4d] transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-[#ff4d4d] transition-colors">
                  <span>Explore Module</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. DELIVERABLES VAULT (VERTICAL KPIS & TEMPLATES) */}
      {/* ========================================================================= */}
      <section id="deliverables" className="py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-[#ff4d4d] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
                Actionable Artifacts
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                More than just video lectures.
              </h2>
              <p className="text-slate-600 text-lg mt-2 max-w-xl">
                Ready-to-deploy strategy maps, decision trees, and role-based dashboard blueprints.
              </p>
            </div>

            <button
              id="view-vertical-kpis-btn"
              onClick={() => onNavigate && onNavigate('business-kpis')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff4d4d]/10 hover:bg-[#ff4d4d]/20 text-[#ff4d4d] font-bold rounded-lg transition-colors text-sm shrink-0"
            >
              Browse All Deliverables <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Deliverable 1: Banking KPI Map (Live Link) */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div className="p-8">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold rounded mb-3">
                  STRATEGY • XLSX
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Banking KPI Map</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Comprehensive strategy blueprint for banking and fintech service delivery teams, mapping transaction availability directly to executive SLA commitments.
                </p>
              </div>

              <div className="p-8 pt-0">
                <a 
                  id="checkout-banking-kpi-btn"
                  href="https://portal.itoutcomes.ca/checkout/?add-to-cart=62"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#ff4d4d] hover:bg-[#ff3333] text-white font-bold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  Download Map ($) <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Deliverable 2: Healthcare KPI Map */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between relative">
              <div className="absolute top-5 -left-10 w-40 bg-slate-800 text-slate-200 text-[10px] font-mono font-bold py-1 text-center z-10 transform -rotate-45 uppercase tracking-widest shadow-md">
                Coming Soon
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-mono font-bold rounded mb-3">
                  HEALTHCARE • XLSX
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Healthcare KPI Map</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Clinical system availability and mission-critical emergency incident response frameworks tailored for hospital IT networks.
                </p>
              </div>

              <div className="p-8 pt-0">
                <button 
                  disabled
                  className="w-full py-3 px-4 bg-slate-100 text-slate-400 font-bold text-sm rounded-lg cursor-not-allowed flex items-center justify-center gap-2"
                >
                  In Final Review
                </button>
              </div>
            </div>

            {/* Deliverable 3: Manufacturing KPI Map */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between relative">
              <div className="absolute top-5 -left-10 w-40 bg-slate-800 text-slate-200 text-[10px] font-mono font-bold py-1 text-center z-10 transform -rotate-45 uppercase tracking-widest shadow-md">
                Coming Soon
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-0.5 bg-amber-50 text-amber-700 text-[10px] font-mono font-bold rounded mb-3">
                  INDUSTRY • PDF
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Manufacturing KPI Map</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Shop-floor operational technology (OT) and supply chain integration metrics quantifying production downtime in hard currency.
                </p>
              </div>

              <div className="p-8 pt-0">
                <button 
                  disabled
                  className="w-full py-3 px-4 bg-slate-100 text-slate-400 font-bold text-sm rounded-lg cursor-not-allowed flex items-center justify-center gap-2"
                >
                  In Final Review
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. INSTRUCTOR CREDENTIAL SECTION */}
      {/* ========================================================================= */}
      <section id="instructor" className="bg-[#111] text-white py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Instructor Photo Card */}
            <div className="lg:col-span-5">
              <div className="aspect-square rounded-2xl overflow-hidden relative border border-white/10 bg-slate-800 shadow-2xl">
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
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 hidden text-center p-6">
                  <Users className="w-20 h-20 text-slate-600 mb-4" />
                  <span className="text-lg font-bold">Pavel Guarisma</span>
                  <span className="text-xs text-slate-400">Senior Service Delivery Director</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <span className="text-[#ff4d4d] text-xs font-mono font-bold uppercase tracking-widest mb-1">
                    Course Instructor
                  </span>
                  <h3 className="text-2xl font-black text-white">Pavel Guarisma</h3>
                  <p className="text-slate-300 text-sm">Senior Service Delivery Director</p>
                </div>
              </div>
            </div>

            {/* Bio & Academic Authority */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[#ff4d4d] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
                  Battle-Tested Authority
                </span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                  Not just theory.<br />
                  <span className="text-[#ff4d4d]">25+ years in the trenches.</span>
                </h2>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed font-light">
                Led by Pavel Guarisma, a Senior Service Delivery Director with over a quarter-century of frontline experience leading enterprise IT service delivery, global operations, and executive reporting transformations.
              </p>

              <p className="text-slate-400 text-base leading-relaxed">
                Holding an <strong className="text-white font-semibold">M.Sc. in Operations Research</strong> with a deep specialization in statistical methods, queuing theory, and process optimization. This program strips away vendor hype and grounds your service delivery metrics in authentic mathematical rigor.
              </p>

              {/* Stat Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
                <div>
                  <div className="text-3xl font-black font-mono text-white">25+</div>
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-black font-mono text-[#ff4d4d]">M.Sc.</div>
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-1">Operations Research</div>
                </div>
                <div>
                  <div className="text-3xl font-black font-mono text-emerald-400">100%</div>
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-1">Framework Agnostic</div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  id="instructor-contact-btn"
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-lg transition-colors border border-white/10 inline-flex items-center gap-2"
                >
                  Contact Instructor <ArrowRight className="w-4 h-4 text-[#ff4d4d]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. PRICING & ENROLLMENT SECTION */}
      {/* ========================================================================= */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#ff4d4d] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              Invest In Outcomes
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Choose your training track.
            </h2>
            <p className="text-slate-600 text-lg">
              Immediate access to free quickstart insights or comprehensive cohort training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            
            {/* TIER 1: Free Quickstart Course */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Starter Track
                    </span>
                    <h3 className="text-2xl font-black text-slate-900">
                      Free Quickstart Course
                    </h3>
                  </div>
                  <div className="text-3xl font-black font-mono text-slate-900">
                    Free
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Learn how to differentiate between busy-work (outputs) and actual business value (outcomes). In this training video, you will receive an actionable roadmap to shift from reactive firefighting to strategic leadership.
                </p>

                <div className="h-px bg-slate-100 my-6" />

                <ul className="space-y-3 mb-8 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#ff4d4d] shrink-0" />
                    <span>Instant streaming video masterclass</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#ff4d4d] shrink-0" />
                    <span>Moving from 'Tickets Closed' to Business Impact</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#ff4d4d] shrink-0" />
                    <span>In-page lightbox player (no external ads)</span>
                  </li>
                </ul>
              </div>

              <button
                id="tier-free-play-btn"
                onClick={() => setShowVideoModal(true)}
                className="w-full py-4 bg-[#ff4d4d] hover:bg-[#ff3333] text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ff4d4d]/20"
              >
                <Play className="w-4 h-4 fill-current" /> Play Quickstart Video Now
              </button>
            </div>

            {/* TIER 2: Full Course (Coming Soon) */}
            <div className="bg-[#111] text-white rounded-2xl border-2 border-[#111] p-8 md:p-10 flex flex-col justify-between shadow-xl shadow-slate-400/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff4d4d]/10 blur-[90px] rounded-full pointer-events-none" />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#ff4d4d] block mb-1">
                      Full Masterclass
                    </span>
                    <h3 className="text-2xl font-black text-white">
                      Full Course Cohort
                    </h3>
                  </div>
                  <div className="text-2xl font-bold font-mono text-[#ff4d4d]">
                    Coming Soon
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Complete 8-module executive certification program including statistical frameworks, financial ROI models, role-based dashboard architectures, and live mentorship cohorts.
                </p>

                <div className="h-px bg-white/10 my-6" />

                <ul className="space-y-3 mb-8 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#ff4d4d] shrink-0" />
                    <span>All 8 comprehensive syllabus modules</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#ff4d4d] shrink-0" />
                    <span>Downloadable KPI maps (Banking, Healthcare, etc.)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#ff4d4d] shrink-0" />
                    <span>90-Day Continuous Data Culture Roadmap</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#ff4d4d] shrink-0" />
                    <span>Lifetime updates & executive community</span>
                  </li>
                </ul>
              </div>

              <button
                id="tier-full-curriculum-btn"
                onClick={() => onNavigate && onNavigate('curriculum')}
                className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 border border-white/10"
              >
                View Complete 8-Module Syllabus <ArrowRight className="w-4 h-4 text-[#ff4d4d]" />
              </button>
            </div>

          </div>

          {/* Bottom Statement */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-slate-500 text-sm">
              Need corporate training or custom group workshops for your IT service delivery organization?{' '}
              <button 
                id="footer-contact-link-btn"
                onClick={() => onNavigate && onNavigate('contact')}
                className="text-[#ff4d4d] font-bold hover:underline"
              >
                Contact our instructor directly
              </button>.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FOOTER */}
      {/* ========================================================================= */}
      <footer className="bg-[#111] text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <div className="bg-[#0b0e14] p-2 rounded-xl border border-slate-700/80 shadow-md">
                <BrandLogo className="w-8 h-8 text-[#ff3b4e]" glow={true} />
              </div>
              <span className="font-black text-xl tracking-tight font-sans">
                <span className="text-[#ff3b4e] drop-shadow-[0_0_8px_rgba(255,59,78,0.4)]">IT</span> <span className="text-white">OUTCOMES</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Framework-agnostic training empowering IT leaders to turn raw operational data into executive-ready strategic insights.
            </p>
            <p className="text-slate-500 text-xs">© 2026 IT Outcomes. All Rights Reserved.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Program</h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <button onClick={() => onNavigate && onNavigate('curriculum')} className="hover:text-white transition-colors">
                  Curriculum (8 Modules)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate && onNavigate('business-kpis')} className="hover:text-white transition-colors">
                  Deliverable Maps
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('calculator')} className="hover:text-white transition-colors">
                  ROI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors">
                  Pricing & Enrollment
                </button>
              </li>
            </ul>
          </div>

          {/* Instructor & Contact */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Instructor</h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>Pavel Guarisma, M.Sc.</li>
              <li>Senior Service Delivery Director</li>
              <li>
                <a href="mailto:pguarisma@itoutcomes.ca" className="text-[#ff4d4d] hover:underline">
                  pguarisma@itoutcomes.ca
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate && onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact Instructor
                </button>
              </li>
            </ul>
          </div>

          {/* Portal & Legal */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Portal & Legal</h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <a href="https://www.youtube.com/@ITOutcomes-CA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  YouTube Channel <ArrowUpRight className="w-3 h-3 text-[#ff4d4d]" />
                </a>
              </li>
              <li>
                <a href="https://portal.itoutcomes.ca" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  Student Portal <ArrowUpRight className="w-3 h-3 text-[#ff4d4d]" />
                </a>
              </li>
              <li>
                <a href="https://itoutcomes.com" className="hover:text-white transition-colors">
                  itoutcomes.com
                </a>
              </li>
              <li className="text-slate-500">Privacy Policy</li>
              <li className="text-slate-500">Terms of Service</li>
            </ul>
          </div>

        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 11. YOUTUBE LIGHTBOX MODAL OVERLAY */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVideoModal(false)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Window */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10 aspect-video flex flex-col"
            >
              {/* Close Button */}
              <button 
                id="close-video-modal-btn"
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-30 p-2.5 bg-black/70 hover:bg-black text-white rounded-full transition-colors border border-white/20 shadow-lg"
                aria-label="Close Quickstart Video"
              >
                <X className="w-5 h-5" />
              </button>

              {/* YouTube Iframe Embed */}
              <iframe
                src="https://www.youtube.com/embed/eUp-xynIdLk?autoplay=1&rel=0&modestbranding=1"
                title="Free Quickstart Course Video - IT Outcomes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
