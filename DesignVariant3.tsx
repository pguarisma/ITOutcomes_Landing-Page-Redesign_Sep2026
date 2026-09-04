import React from 'react';
import { 
  Terminal,
  Activity,
  Cpu,
  Shield,
  Zap,
  Grid,
  Lock,
  ChevronRight,
  Check,
  X
} from 'lucide-react';

const GlitchText = ({ text }: { text: string }) => (
  <span className="relative inline-block group">
    <span className="relative z-10">{text}</span>
    <span className="absolute top-0 left-0 -ml-0.5 translate-x-[2px] text-red-500 opacity-0 group-hover:opacity-70 mix-blend-screen animate-pulse">{text}</span>
    <span className="absolute top-0 left-0 -ml-0.5 -translate-x-[2px] text-cyan-500 opacity-0 group-hover:opacity-70 mix-blend-screen animate-pulse delay-75">{text}</span>
  </span>
);

const HudCard = ({ children, title, className = "" }: any) => (
  <div className={`bg-[#0f1623] border border-cyan-900/50 relative overflow-hidden group ${className}`}>
    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500"></div>
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500"></div>
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500"></div>
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500"></div>
    
    {/* Header */}
    {title && (
      <div className="bg-cyan-950/30 border-b border-cyan-900/50 px-4 py-2 flex justify-between items-center">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{title}</span>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/30"></div>
        </div>
      </div>
    )}
    
    <div className="p-6 relative z-10">
      {children}
    </div>
    
    {/* Scanline effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000"></div>
  </div>
);

const StatRow = ({ label, value, status = "good" }: any) => (
  <div className="flex justify-between items-center py-2 border-b border-cyan-900/30 font-mono text-sm">
    <span className="text-slate-400">{label}</span>
    <span className={status === "good" ? "text-cyan-400" : "text-red-400"}>{value}</span>
  </div>
);

export function DesignVariant3() {
  return (
    <div className="min-h-screen bg-[#050a14] text-slate-300 font-sans relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-100">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#050a14]/90 border-b border-cyan-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4 text-cyan-500">
             <div className="w-8 h-8 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Main Up Arrow */}
                  <path d="M50 15 L78 42 H62 V72 H38 V42 H22 L50 15 Z" fill="currentColor" />
                  
                  {/* Left Node */}
                  <rect x="8" y="32" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="6" />
                  <path d="M26 40 L36 40" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <path d="M32 36 L36 40 L32 44" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Bottom Left Node */}
                  <rect x="8" y="68" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="6" />
                  
                  {/* Right Node */}
                  <rect x="76" y="55" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="6" />

                  {/* Connecting Circuit Lines */}
                  <path d="M26 76 H50 V74" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <path d="M50 74 V84 H70 V73" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
             </div>
            <span className="font-mono font-bold tracking-wider text-white">IT_OUTCOMES<span className="animate-pulse">_</span></span>
          </div>
          <div className="flex gap-1 text-[10px] font-mono text-cyan-700">
            <span>SYS.STATUS:</span>
            <span className="text-cyan-400">ONLINE</span>
            <span className="mx-2">|</span>
            <span>VER:</span>
            <span className="text-cyan-400">3.0.1</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="font-mono text-cyan-500 mb-4 text-sm">[ INITIALIZING PROTOCOL ]</div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-none">
              <GlitchText text="REFACTOR" /> YOUR<br/>
              METRICS STACK
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-xl font-mono leading-relaxed border-l-2 border-cyan-900 pl-6">
              >> Compiling raw data into executive intelligence.<br/>
              >> Eliminating noise.<br/>
              >> Optimizing decision latency.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-cyan-600 hover:bg-cyan-500 text-black font-mono font-bold px-8 py-3 clip-path-polygon hover:shadow-[0_0_20px_rgba(8,145,178,0.5)] transition-all">
                EXECUTE_JOIN()
              </button>
              <button className="border border-cyan-800 text-cyan-500 font-mono px-8 py-3 hover:bg-cyan-950/50 transition-colors">
                VIEW_SOURCE
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <HudCard title="LIVE_DASHBOARD_PREVIEW">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-slate-500 mb-1">CHANGE_SUCCESS_RATE</div>
                  <div className="flex items-end gap-2">
                    <div className="text-4xl font-bold text-white">98.4%</div>
                    <div className="text-sm font-mono text-emerald-500 mb-1">▲ 2.4%</div>
                  </div>
                  <div className="h-1.5 w-full bg-cyan-950 mt-2">
                    <div className="h-full bg-cyan-500 w-[98%] shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-[#050a14] p-3 border border-cyan-900/30">
                     <Activity className="w-5 h-5 text-purple-500 mb-2" />
                     <div className="text-xl font-bold text-white">12ms</div>
                     <div className="text-[10px] text-slate-500">DECISION LATENCY</div>
                   </div>
                   <div className="bg-[#050a14] p-3 border border-cyan-900/30">
                     <Cpu className="w-5 h-5 text-orange-500 mb-2" />
                     <div className="text-xl font-bold text-white">85%</div>
                     <div className="text-[10px] text-slate-500">RES. UTILIZATION</div>
                   </div>
                </div>

                <div className="font-mono text-xs text-cyan-700 mt-2">
                  > ANALYSIS COMPLETE<br/>
                  > 0 ERRORS FOUND
                </div>
              </div>
            </HudCard>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HudCard title="ERR_01: NO_SIGNAL">
             <Zap className="w-8 h-8 text-yellow-500 mb-4" />
             <h3 className="font-bold text-white mb-2">Data-Rich, Insight-Poor</h3>
             <p className="text-sm text-slate-400 font-mono">
               Metrics exist but lack narrative structure. Output is high, outcome is null.
             </p>
          </HudCard>
          <HudCard title="ERR_02: KPI_THEATER">
             <Grid className="w-8 h-8 text-red-500 mb-4" />
             <h3 className="font-bold text-white mb-2">Performance Theater</h3>
             <p className="text-sm text-slate-400 font-mono">
               Dashboards report 'Green' while user experience reports 'Critical Failure'.
             </p>
          </HudCard>
          <HudCard title="ERR_03: BRIDGE_FAILURE">
             <Lock className="w-8 h-8 text-purple-500 mb-4" />
             <h3 className="font-bold text-white mb-2">Ops/Exec Mismatch</h3>
             <p className="text-sm text-slate-400 font-mono">
               Translation layer between engineering reality and executive expectation is broken.
             </p>
          </HudCard>
        </div>
      </div>

      {/* Tiers */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-center font-mono text-cyan-500 mb-12 uppercase tracking-widest text-sm">[ SELECT ACCESS LEVEL ]</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-cyan-900/50">
           {[
             { name: "TIER_1: ESSENTIALS", price: 49, features: ["Core Video Feed", "Read-Only Access", "No Templates"] },
             { name: "TIER_2: PRO", price: 99, features: ["Full Access", "Download Root Files", "Live Uplink (Q&A)", "Dashboard Keys"], rec: true },
             { name: "TIER_3: EXEC", price: 299, features: ["Priority Bandwidth", "4-Week Cohort", "Direct Coaching", "Code Review"] }
           ].map((tier, i) => (
             <div key={i} className={`p-8 border-r last:border-r-0 border-cyan-900/50 relative ${tier.rec ? 'bg-cyan-950/10' : ''}`}>
               {tier.rec && <div className="absolute top-0 inset-x-0 h-1 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>}
               <h3 className="font-mono text-sm text-cyan-400 mb-2">{tier.name}</h3>
               <div className="text-4xl font-bold text-white mb-8">${tier.price}</div>
               <ul className="space-y-3 mb-8">
                 {tier.features.map((f, j) => (
                   <li key={j} className="flex gap-2 text-xs font-mono text-slate-400">
                     <span className="text-cyan-600">></span> {f}
                   </li>
                 ))}
               </ul>
               <button className={`w-full py-2 font-mono text-xs uppercase border transition-all
                 ${tier.rec 
                   ? 'bg-cyan-600 text-black border-cyan-600 hover:bg-cyan-500' 
                   : 'border-cyan-900 text-cyan-500 hover:border-cyan-500 hover:text-cyan-400'}`}>
                 Initialize
               </button>
             </div>
           ))}
        </div>
      </div>

      <footer className="border-t border-cyan-900/30 py-8 text-center font-mono text-xs text-cyan-800">
        // © 2026 IT OUTCOMES // ALL RIGHTS RESERVED // END OF LINE
      </footer>
    </div>
  );
}