import React from 'react';
import { 
  ArrowRight,
  TrendingUp,
  BrainCircuit,
  Target,
  FileSpreadsheet,
  CheckCircle2,
  X,
  Menu
} from 'lucide-react';

const Logo = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 text-blue-600" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main Up Arrow */}
    <path d="M50 15 L78 42 H62 V72 H38 V42 H22 L50 15 Z" fill="currentColor" />
    
    {/* Left Node */}
    <rect x="8" y="32" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="6" />
    <path d="M26 40 L36 40" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M32 36 L36 40 L32 44" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

    {/* Bottom Left Node */}
    <rect x="8" y="68" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="6" />
    
    {/* Right Node */}
    <rect x="76" y="55" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="6" />

    {/* Connecting Circuit Lines */}
    <path d="M26 76 H50 V74" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M50 74 V84 H70 V73" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

const Section = ({ title, id, children, className = "" }: any) => (
  <div id={id} className={`py-20 border-b border-slate-200 ${className}`}>
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-1">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 sticky top-24">{title}</h2>
      </div>
      <div className="md:col-span-3">
        {children}
      </div>
    </div>
  </div>
);

const PriceTier = ({ name, price, features, highlight }: any) => (
  <div className={`p-8 border ${highlight ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-900 border-slate-200'} flex flex-col h-full`}>
    <h3 className="text-xl font-bold mb-4">{name}</h3>
    <div className="text-4xl font-bold mb-8">${price}</div>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((f: any, i: number) => (
        <li key={i} className="flex gap-3 text-sm">
          {f.included ? <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-blue-500" /> : <X className="w-5 h-5 flex-shrink-0 text-slate-300" />}
          <span className={!f.included ? 'opacity-50' : ''}>{f.text}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 font-bold text-sm uppercase tracking-wide border transition-all
      ${highlight 
        ? 'bg-white text-slate-900 border-white hover:bg-slate-100' 
        : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'}`}>
      Select Plan
    </button>
  </div>
);

export function DesignVariant2() {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-200 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo />
            <span className="font-bold tracking-tight text-xl">IT OUTCOMES</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#problem" onClick={(e) => handleScroll(e, 'problem')} className="hover:text-slate-900 transition-colors">Problem</a>
            <a href="#methodology" onClick={(e) => handleScroll(e, 'methodology')} className="hover:text-slate-900 transition-colors">Method</a>
            <a href="#instructor" onClick={(e) => handleScroll(e, 'instructor')} className="hover:text-slate-900 transition-colors">Instructor</a>
          </div>
          <button onClick={(e) => handleScroll(e, 'pricing')} className="bg-slate-900 text-white px-6 py-2.5 text-sm font-bold hover:bg-blue-600 transition-colors">
            Start Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
             <div className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider mb-8 w-max">
               Course Open: Fall 2026
             </div>
             <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
               Measure.<br/>
               Decide.<br/>
               <span className="text-blue-600">Improve.</span>
             </h1>
             <p className="text-xl text-slate-600 max-w-md leading-relaxed mb-12">
               A rigorous framework to turn raw ITSM data into executive-level insights. Stop reporting. Start engineering outcomes.
             </p>
             <div className="flex gap-4">
               <button onClick={(e) => handleScroll(e, 'pricing')} className="bg-blue-600 text-white px-8 py-4 font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                 Join Cohort <ArrowRight className="w-4 h-4" />
               </button>
               <button onClick={(e) => handleScroll(e, 'methodology')} className="px-8 py-4 font-bold border border-slate-200 hover:border-slate-900 transition-colors">
                 Curriculum
               </button>
             </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-12 flex items-center justify-center relative overflow-hidden">
             {/* Abstract Grid Graphic */}
             <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="border border-slate-400"></div>
                ))}
             </div>
             <div className="relative z-10 w-full max-w-sm bg-white shadow-2xl p-8 border border-slate-100">
                <div className="flex justify-between items-end mb-8">
                  <div className="text-5xl font-bold text-slate-900">98%</div>
                  <div className="text-sm font-bold text-green-600 mb-2">+12.5%</div>
                </div>
                <div className="space-y-2">
                   <div className="h-2 bg-slate-100 w-full"><div className="h-full bg-blue-600 w-[98%]"></div></div>
                   <div className="h-2 bg-slate-100 w-full"><div className="h-full bg-slate-300 w-[80%]"></div></div>
                   <div className="h-2 bg-slate-100 w-full"><div className="h-full bg-slate-300 w-[65%]"></div></div>
                </div>
                <p className="mt-8 text-xs text-slate-400 uppercase font-bold tracking-widest">Change Success Rate</p>
             </div>
          </div>
        </div>
      </div>

      {/* Diagnosis */}
      <Section id="problem" title="Diagnosis">
        <h3 className="text-4xl font-bold mb-16 max-w-2xl">You are data-rich, but insight-poor. The gap between Ops and Execs is widening.</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-slate-200">
           {[
             { title: "No Narrative", desc: "You have charts, but no story. Data sits in silos without business context." },
             { title: "KPI Theater", desc: "Green dashboards, angry customers. Metrics track activity, not value." },
             { title: "Exec Noise", desc: "Leadership wants simplicity. You live in complexity. The translation fails." }
           ].map((item, i) => (
             <div key={i} className="p-8 border-r border-b border-slate-200 hover:bg-slate-50 transition-colors">
               <div className="text-xs font-bold text-blue-600 mb-4">0{i+1}</div>
               <h4 className="text-xl font-bold mb-4">{item.title}</h4>
               <p className="text-slate-600 leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </Section>

      {/* Solution */}
      <Section id="methodology" title="Methodology">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
           <div>
             <h3 className="text-3xl font-bold mb-6">Framework Agnostic. Mathematically Rigorous.</h3>
             <p className="text-slate-600 text-lg mb-8 leading-relaxed">
               We don't teach you how to use ServiceNow or Jira. We teach you how to think. This course provides the statistical foundation and business logic required to design metrics that actually change human behavior.
             </p>
             <ul className="space-y-4">
               {[
                 "Behavioral Design for KPIs",
                 "Statistical Process Control",
                 "Executive Communication",
                 "Visual Storytelling"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-4 py-3 border-b border-slate-100">
                   <Target className="w-5 h-5 text-blue-600" />
                   <span className="font-medium">{item}</span>
                 </li>
               ))}
             </ul>
           </div>
           <div className="bg-slate-900 text-white p-12 flex flex-col justify-between">
              <BrainCircuit className="w-16 h-16 text-blue-500 mb-8" />
              <blockquote className="text-2xl font-serif italic leading-relaxed opacity-90">
                "If a metric doesn't lead to a decision, it's vanity. This course taught me to kill 50% of my dashboard."
              </blockquote>
              <div className="mt-8 pt-8 border-t border-slate-700 text-sm font-bold uppercase tracking-widest text-slate-400">
                VP of Infrastructure, Fintech
              </div>
           </div>
        </div>
      </Section>
      
      {/* Instructor */}
      <Section id="instructor" title="Instructor">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Expert Guidance</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                 Led by a Senior Service Delivery Director with 25+ years of experience. M.Sc. in Operations Research. Bridging the gap between statistical rigor and Monday-morning reality.
              </p>
            </div>
            <div className="bg-slate-100 p-8 rounded-lg border border-slate-200">
               <div className="font-bold text-lg mb-2">500+ Students Mentored</div>
               <div className="font-bold text-lg text-slate-500">50+ Enterprise Transformations</div>
            </div>
         </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" title="Pricing">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <PriceTier 
             name="Essentials"
             price="49"
             features={[
               {text: "Core 6-module course", included: true},
               {text: "Lifetime access", included: true},
               {text: "Templates", included: false},
               {text: "Live Q&A", included: false}
             ]}
           />
           <PriceTier 
             name="Professional"
             price="99"
             highlight={true}
             features={[
               {text: "Core 6-module course", included: true},
               {text: "Lifetime access", included: true},
               {text: "Excel Templates", included: true},
               {text: "Live Q&A (60min)", included: true},
               {text: "Dashboard Audit", included: false}
             ]}
           />
           <PriceTier 
             name="Workshop"
             price="299"
             features={[
               {text: "Core 6-module course", included: true},
               {text: "Lifetime access", included: true},
               {text: "Excel Templates", included: true},
               {text: "Live Q&A (60min)", included: true},
               {text: "Small Group Coaching", included: true}
             ]}
           />
        </div>
      </Section>

      <footer className="bg-slate-50 border-t border-slate-200 py-20 text-center">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <p className="mt-8 text-slate-500 text-sm">© 2026 IT Outcomes. All Rights Reserved.</p>
      </footer>
    </div>
  );
}