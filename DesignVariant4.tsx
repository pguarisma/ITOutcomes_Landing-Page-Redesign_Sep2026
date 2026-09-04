import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  Users, 
  FileText,
  AlertTriangle,
  FileSpreadsheet,
  CheckCircle2,
  Workflow,
  Table2,
  Trello,
  BookOpen,
  TrendingUp,
  Briefcase,
  Play,
  X
} from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

// --- SVGs for the "Wireframe" look ---

const Logo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15 L78 42 H62 V72 H38 V42 H22 L50 15 Z" fill="currentColor" />
    <rect x="8" y="32" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="6" />
    <path d="M26 40 L36 40" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M32 36 L36 40 L32 44" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="8" y="68" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="6" />
    <rect x="76" y="55" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="6" />
    <path d="M26 76 H50 V74" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M50 74 V84 H70 V73" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

const RealisticDashboard = () => {
  const data = [
    { name: 'Mon', active: 12, resolved: 8 },
    { name: 'Tue', active: 19, resolved: 15 },
    { name: 'Wed', active: 15, resolved: 20 },
    { name: 'Thu', active: 22, resolved: 18 },
    { name: 'Fri', active: 28, resolved: 25 },
    { name: 'Sat', active: 10, resolved: 12 },
    { name: 'Sun', active: 8, resolved: 8 },
  ];

  return (
    <div className="relative w-full h-[360px] md:h-[420px] select-none text-left">
      {/* 1. The Dashboard (Background/Base) */}
      <div className="absolute inset-0 right-8 md:right-16 bottom-8 bg-[#0f172a] rounded-xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden">
         {/* Top Bar */}
         <div className="h-10 border-b border-slate-800 bg-[#1e293b] flex items-center px-4 justify-between shrink-0">
           <div className="flex gap-2">
             <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
           </div>
           <div className="text-[10px] font-mono text-slate-500">ITSM Portal // Incident_Overview</div>
         </div>
         
         {/* Content */}
         <div className="p-4 flex flex-col h-full gap-4">
            {/* KPI Row */}
            <div className="grid grid-cols-4 gap-2 md:gap-3">
              <div className="bg-slate-800/50 p-2 md:p-3 rounded border border-slate-700/50">
                 <div className="text-[9px] md:text-[10px] text-slate-400 uppercase truncate">Open Incidents</div>
                 <div className="text-lg md:text-xl font-bold text-white">142</div>
              </div>
              <div className="bg-slate-800/50 p-2 md:p-3 rounded border border-slate-700/50">
                 <div className="text-[9px] md:text-[10px] text-slate-400 uppercase truncate">Avg MTTR</div>
                 <div className="text-lg md:text-xl font-bold text-[#ff4d4d]">4.2h</div>
              </div>
              <div className="bg-slate-800/50 p-2 md:p-3 rounded border border-slate-700/50">
                 <div className="text-[9px] md:text-[10px] text-slate-400 uppercase truncate">SLA Breach</div>
                 <div className="text-lg md:text-xl font-bold text-white">2.1%</div>
              </div>
               <div className="bg-slate-800/50 p-2 md:p-3 rounded border border-slate-700/50">
                 <div className="text-[9px] md:text-[10px] text-slate-400 uppercase truncate">CSAT</div>
                 <div className="text-lg md:text-xl font-bold text-emerald-400">4.8</div>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded border border-slate-700/50 p-3 mt-4 relative">
               <div className="text-[10px] font-bold text-slate-400 mb-2">Incident Volume vs Resolution</div>
               <div className="w-full h-[180px]">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ff4d4d" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#ff4d4d" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                        <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                        <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', fontSize: '12px' }}
                          itemStyle={{ fontSize: '12px' }}
                        />
                        <Area type="monotone" dataKey="active" stroke="#ff4d4d" strokeWidth={2} fillOpacity={1} fill="url(#colorActive)" />
                        <Area type="monotone" dataKey="resolved" stroke="#10b981" strokeWidth={2} fillOpacity={0} />
                      </AreaChart>
                   </ResponsiveContainer>
                 </div>
            </div>
         </div>
      </div>

      {/* 2. The Report (Floating Overlay) */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute right-0 md:right-4 bottom-0 w-56 md:w-64 bg-white text-slate-900 rounded-lg shadow-2xl border border-slate-200 p-6 transform rotate-3 origin-bottom-right"
      >
        <div className="flex justify-between items-start mb-4">
           <div>
             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Monthly Report</div>
             <div className="text-lg font-bold leading-tight">Executive<br/>Summary</div>
           </div>
           <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
             <FileText className="w-4 h-4 text-[#ff4d4d]" />
           </div>
        </div>

        <div className="space-y-3 mb-4">
           <div className="text-xs text-slate-600 leading-relaxed">
             <span className="font-bold">Key Insight:</span> While incident volume spiked on Thursday, MTTR remained stable due to auto-remediation.
           </div>
           <div className="h-px bg-slate-100 w-full"></div>
           <div className="flex justify-between items-center">
              <span className="text-xs font-medium">Business Impact</span>
              <span className="text-xs font-bold text-emerald-600">Minimal</span>
           </div>
           <div className="flex justify-between items-center">
              <span className="text-xs font-medium">Cost Savings</span>
              <span className="text-xs font-bold">$12,450</span>
           </div>
        </div>

        <div className="bg-[#ff4d4d] text-white text-center py-2 rounded text-xs font-bold cursor-pointer hover:bg-[#ff3333] transition-colors shadow-lg shadow-red-200">
          Download PDF
        </div>
      </motion.div>
    </div>
  );
};

// Fix: Mark children as optional to satisfy TypeScript when used as a wrapper component in JSX
const Section = ({ children, className = "", id }: { children?: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-20 px-6 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const ROICalculator = () => {
  const [hours, setHours] = useState(10);
  
  // Calculations
  const wastedCost = hours * 75 * 4; // Assuming $75/hr * 4 weeks
  const gainedValue = hours * 0.8 * 75 * 4; // 80% recovered

  const h1 = 60;
  const h2 = 80;
  const h3 = 60 + (hours * 2); 

  return (
    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">Reporting ROI Calculator</h3>
          <p className="text-slate-500 mb-8">How many hours a week does your team spend manually updating dashboards?</p>
          
          <div className="mb-8">
            <div className="flex justify-between mb-2 font-bold text-sm">
              <span>Time Spent</span>
              <span>{hours} Hours / Week</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="40" 
              value={hours} 
              onChange={(e) => setHours(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#ff4d4d]"
            />
          </div>

          <div className="space-y-4">
             <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
               <span className="text-slate-500">Monthly Cost of "Reporting"</span>
               <span className="font-bold font-mono text-red-500">-${wastedCost.toLocaleString()}</span>
             </div>
             <div className="flex justify-between text-sm">
               <span className="text-slate-500">Potential Recovered Value</span>
               <span className="font-bold font-mono text-green-600">+${gainedValue.toLocaleString()}</span>
             </div>
          </div>
        </div>

        <div className="flex-1 flex items-end justify-around h-64 border-b border-slate-200 pb-4 gap-4">
          <div className="w-full bg-slate-100 rounded-t-sm relative group" style={{ height: `60%` }}>
             <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] text-slate-400 font-bold uppercase">Now</div>
          </div>
          <div className="w-full bg-[#ff4d4d] rounded-t-sm relative shadow-lg shadow-[#ff4d4d]/20 transition-all duration-300" style={{ height: `${Math.min(gainedValue / 100 + 20, 95)}%` }}>
            <div className="absolute -top-10 w-full text-center text-[#ff4d4d] font-bold">
               <div className="text-xs uppercase">Impact</div>
               <div className="text-lg">+{((gainedValue/wastedCost)*100).toFixed(0)}%</div>
            </div>
            <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] text-white font-bold uppercase opacity-80">Future</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PriceCard = ({ title, price, description, features = [], highlight = false, buttonText = "Enroll Now", onButtonClick, comingSoon = false }: { title: string, price?: string, description?: React.ReactNode, features?: string[], highlight?: boolean, buttonText?: React.ReactNode, onButtonClick?: () => void, comingSoon?: boolean }) => (
  <div className={`p-8 rounded-xl border flex flex-col h-full transition-all duration-300 ${highlight ? 'bg-[#111] text-white border-[#111] shadow-xl shadow-slate-400/20' : 'bg-white text-slate-900 border-slate-200'}`}>
    <div className="mb-4">
      <h3 className="font-bold text-lg">{title}</h3>
      {price && <div className="text-3xl font-bold mt-2 font-mono">{price}</div>}
      {comingSoon && <div className="text-2xl font-bold mt-2 text-[#ff4d4d]">Coming Soon</div>}
    </div>
    {description && (
      <div className={`text-sm mb-6 ${highlight ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>
        {description}
      </div>
    )}
    <div className={`h-1 w-12 mb-8 ${highlight ? 'bg-[#ff4d4d]' : 'bg-slate-200'}`}></div>
    {!comingSoon && features.length > 0 && (
      <ul className="space-y-4 flex-grow mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex gap-3 text-sm">
            {highlight ? <Check className="w-4 h-4 text-[#ff4d4d] shrink-0" /> : <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />}
            <span className={highlight ? 'text-slate-300' : 'text-slate-600'}>{f}</span>
          </li>
        ))}
      </ul>
    )}
    {(!features.length || comingSoon) && <div className="flex-grow"></div>}
    <button onClick={onButtonClick} className={`w-full py-3 rounded font-bold text-sm transition-all ${highlight ? 'bg-[#ff4d4d] text-white hover:bg-[#ff3333]' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'} flex items-center justify-center gap-2`}>
      {buttonText}
    </button>
  </div>
);

const DeliverablePreview = ({ icon: Icon, colorClass }: { icon: any, colorClass: string }) => (
  <div className={`h-44 ${colorClass} relative overflow-hidden flex items-center justify-center p-8 group-hover:brightness-95 transition-all duration-300`}>
    {/* Structural background elements for crispness */}
    <div className="absolute inset-0 opacity-20 pointer-events-none" 
         style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '12px 12px' }}>
    </div>
    
    {/* The main preview element */}
    <div className="relative bg-white p-4 rounded-lg shadow-xl border border-white/50 w-full max-w-[140px] aspect-square flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-500">
      <Icon className="w-12 h-12 text-slate-900 stroke-[1.5]" />
      
      {/* Decorative corner lines */}
      <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-slate-200"></div>
      <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-slate-200"></div>
    </div>
    
    {/* Floating accent elements */}
    <div className="absolute top-4 right-4 w-12 h-1.5 bg-white/40 rounded-full blur-[1px]"></div>
    <div className="absolute bottom-8 left-6 w-8 h-8 rounded-full border border-white/30 group-hover:scale-125 transition-transform duration-700"></div>
  </div>
);

interface DesignVariant4Props {
  onNavigate?: (page: string) => void;
}

export function DesignVariant4({ onNavigate }: DesignVariant4Props) {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleCurriculumClick = () => {
    if (onNavigate) {
      onNavigate('curriculum');
    } else {
      handleScroll('curriculum');
    }
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-slate-900 font-sans">
      {/* --- Navbar --- */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <div className="bg-slate-900 p-1.5 rounded">
              <Logo className="w-6 h-6 text-[#ff4d4d]" />
            </div>
            <span className="font-bold text-xl tracking-tight">IT <span className="text-[#ff4d4d]">Outcomes</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => handleScroll('features')} className="hover:text-[#ff4d4d] transition-colors">The Problem</button>
            <button onClick={handleCurriculumClick} className="hover:text-[#ff4d4d] transition-colors">Curriculum</button>
            <button onClick={() => handleScroll('pricing')} className="hover:text-[#ff4d4d] transition-colors">Pricing</button>
          </div>

          <div className="flex items-center gap-4">
            <button 
              id="nav-contact-btn"
              onClick={() => onNavigate && onNavigate('contact')} 
              className="bg-[#ff4d4d] hover:bg-[#ff3333] text-white px-6 py-2.5 rounded font-bold text-sm transition-all shadow-lg shadow-[#ff4d4d]/20"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* --- Hero --- */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ff4d4d 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.95]">
              You're Measuring Everything.<br />
              But <span className="text-[#ff4d4d]">Improving Nothing.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 font-light">
              Stop performing KPI theater. Turn your raw ITSM data into executive-ready insights that drive decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => handleScroll('pricing')} className="bg-[#111] text-white px-8 py-4 rounded font-bold hover:bg-black transition-all flex items-center gap-2">
                Get Actionable Metrics <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-4 px-6 text-sm font-medium text-slate-600">
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-[#ff4d4d]" /> 25+ Years Exp.</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-[#ff4d4d]" /> Framework Agnostic</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Black Section / Quote Banner --- */}
      <section className="bg-[#111] py-20 relative overflow-hidden text-white">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
             <div className="lg:col-span-2 relative">
               <div className="absolute top-0 left-0 w-full h-full bg-[#ff4d4d]/10 blur-[100px] rounded-full"></div>
               <div className="relative border border-white/10 bg-white/5 backdrop-blur-sm p-8 rounded-xl min-h-[450px]">
                  <RealisticDashboard />
               </div>
             </div>
             
             <div className="space-y-8">
               <div className="relative pl-6 border-l-2 border-[#ff4d4d]">
                 <p className="text-lg font-medium italic mb-4">"I have lots of data, but no clear story. Dashboards are green, but my customers are seeing red."</p>
                 <div className="text-sm text-slate-400 font-bold uppercase tracking-widest">- Every IT Manager</div>
               </div>

               <div className="relative pl-6 border-l-2 border-[#ff4d4d]">
                 <p className="text-lg font-medium italic mb-4">"I need to justify growing my team to my VP but she requires a detailed business case with relevant data that backs up my claim."</p>
                 <div className="text-sm text-slate-400 font-bold uppercase tracking-widest">- Every Team Lead</div>
               </div>

               <div className="relative pl-6 border-l-2 border-slate-700">
                 <p className="text-lg font-medium mb-2 text-slate-300">The Problem:</p>
                 <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Data Rich • Insight Poor</p>
               </div>
             </div>
           </div>
         </div>
      </section>

      {/* --- Feature Grid (Diagnosis) --- */}
      <Section id="features">
        <div className="text-center mb-16">
          <span className="text-[#ff4d4d] font-bold uppercase tracking-widest text-xs">The Diagnosis</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Why your metrics fail.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: "Data-Rich, Insight-Poor", 
              sub: "The Noise Problem",
              desc: "Metrics exist across tools (ITSM, Excel, PowerBI), but they lack a narrative. You can't answer 'So what?' or 'What do we change Monday?'",
              icon: FileSpreadsheet,
              metric: "ERR_01"
            },
            { 
              title: "KPI Theater", 
              sub: "The Vanity Problem",
              desc: "Reviews are ceremonial. Metrics track activity ('tickets closed') instead of value. Everyone nods, nothing changes.",
              icon: AlertTriangle,
              metric: "ERR_02"
            },
            { 
              title: "The Executive Gap", 
              sub: "The Translation Problem",
              desc: "Practitioners live in exceptions. Executives want predictability. Your metrics fail to translate operational reality to business value.",
              icon: Users,
              metric: "ERR_03"
            },
            { 
              title: "Unique Snowflake Syndrome", 
              sub: "The Customization Trap",
              desc: "Believing your org is too unique for standards. We teach you how to adapt best practices without reinventing the wheel.",
              icon: Target,
              metric: "ERR_04"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="group bg-slate-50 hover:bg-white p-8 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <item.icon className="w-32 h-32 text-[#ff4d4d]" />
              </div>
              
              <div className="relative z-10">
                 <div className="w-12 h-12 bg-white rounded-lg border border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-[#ff4d4d]">
                    <item.icon className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                 <p className="text-xs font-bold text-[#ff4d4d] uppercase tracking-wide mb-4">{item.sub}</p>
                 <p className="text-slate-500 leading-relaxed mb-8 max-w-sm">{item.desc}</p>
                 
                 <div className="inline-block bg-[#ff4d4d]/10 text-[#ff4d4d] px-3 py-1 rounded text-xs font-mono font-bold">
                   {item.metric}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- Instructor Section --- */}
      <Section id="instructor" className="bg-[#111] text-white border-y border-white/10">
         <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
               <div className="aspect-square bg-slate-800 rounded-xl overflow-hidden relative border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#ff4d4d]/20 to-transparent"></div>
                  {/* Instructor Photo */}
                  <div className="absolute inset-0">
                     <img 
                       src="/Instructor.png" 
                       alt="Instructor" 
                       className="w-full h-full object-cover transition-opacity duration-300"
                       onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.style.display = 'none';
                         target.nextElementSibling?.classList.remove('hidden');
                       }}
                     />
                     <div className="w-full h-full flex items-center justify-center bg-slate-800 hidden">
                        <Users className="w-32 h-32 text-white/20" />
                     </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                     <div className="font-bold text-xl">Pavel Guarisma</div>
                     <div className="text-[#ff4d4d] text-sm font-mono">Senior Service Delivery Director</div>
                  </div>
               </div>
            </div>
            <div className="w-full md:w-2/3">
               <h2 className="text-3xl font-bold mb-6">Not just theory. <span className="text-[#ff4d4d]">Battle-tested.</span></h2>
               <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Led by Pavel Guarisma, a Senior Service Delivery Director with 25+ years of experience in service delivery and ITSM. 
                  Holding an M.Sc. in Operations Research with a focus on statistics and optimization.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold font-mono">25+</div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest">Years Experience</div>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* --- Deliverables (Curriculum) --- */}
      <Section id="curriculum" className="bg-slate-50 overflow-hidden">
        <div className="flex justify-between items-end mb-12">
           <div>
             <span className="text-[#ff4d4d] font-bold uppercase tracking-widest text-xs tracking-widest">Deliverables</span>
             <h2 className="text-4xl font-bold mt-2">More than just videos.</h2>
           </div>
           <div className="flex gap-2">
             <button onClick={scrollLeft} className="p-3 border border-slate-200 bg-white hover:border-[#ff4d4d] hover:text-[#ff4d4d] transition-all rounded shadow-sm"><ChevronLeft className="w-5 h-5" /></button>
             <button onClick={scrollRight} className="p-3 border border-slate-200 bg-white hover:border-[#ff4d4d] hover:text-[#ff4d4d] transition-all rounded shadow-sm"><ChevronRight className="w-5 h-5" /></button>
           </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-8 snap-x [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[
            { title: "Decision Trees", cat: "Framework", color: "bg-blue-100 text-blue-600", icon: Workflow, comingSoon: true },
            { title: "Business Vertical KPIs", cat: "Strategy", color: "bg-emerald-100 text-emerald-600", icon: Briefcase, comingSoon: true },
            { title: "Dashboard Templates", cat: "Design", color: "bg-amber-100 text-amber-600", icon: Trello, comingSoon: true },
            { title: "Metric Dictionary", cat: "Reference", color: "bg-violet-100 text-violet-600", icon: BookOpen, comingSoon: true },
            { title: "Action Mapping", cat: "Strategy", color: "bg-rose-100 text-rose-600", icon: TrendingUp, comingSoon: true },
          ].map((card, i) => (
             <div 
               key={i} 
               onClick={() => {
                 if (card.title === "Business Vertical KPIs" && onNavigate) {
                   onNavigate('business-kpis');
                 }
               }}
               className="relative min-w-[300px] md:min-w-[340px] bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer snap-start group flex-shrink-0"
             >
               {card.comingSoon && (
                  <div className="absolute top-5 -left-10 w-40 bg-slate-800/80 backdrop-blur border-y border-slate-700 text-slate-200 text-[10px] font-bold py-1 text-center z-10 transform -rotate-45 uppercase tracking-widest shadow-md">
                    Coming Soon
                  </div>
               )}
               <DeliverablePreview icon={card.icon} colorClass={card.color} />
               <div className="p-6">
                 <h4 className="font-bold text-xl mb-1 group-hover:text-[#ff4d4d] transition-colors">{card.title}</h4>
                 <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{card.cat}</p>
                 
                 <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#ff4d4d] uppercase tracking-widest">
                    <span>Downloadable</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                 </div>
               </div>
             </div>
          ))}
        </div>
      </Section>

      {/* --- Pricing (Interactive) --- */}
      <Section id="pricing">
         <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[#ff4d4d] font-bold uppercase tracking-widest text-xs">Pricing</span>
            <h2 className="text-5xl font-bold mt-4 mb-6">Invest in outcomes.</h2>
            <p className="text-slate-500 text-lg">
              Choose the level that fits your role. All plans include lifetime access to course updates.
            </p>
         </div>

         {/* ROI Calculator */}
         <div className="mb-20">
            <ROICalculator />
         </div>

         {/* Pricing Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
             <PriceCard 
               title="Free Quickstart Course" 
               price="Free" 
               buttonText={
                 <>
                   <Play className="w-4 h-4 fill-current" /> Play Quickstart Video
                 </>
               }
               onButtonClick={() => setShowVideoModal(true)}
               description={
                 <span>
                   You will learn how to differentiate between busy-work (outputs) and actual value (outcomes). By the end of this video, you’ll have a roadmap to move from "reactive fire-fighting" to "strategic leadership".
                 </span>
               }
               features={[]} 
             />
             <PriceCard 
               title="Full Course" 
               highlight={true}
               comingSoon={true}
               buttonText="View Full Curriculum"
               onButtonClick={handleCurriculumClick}
             />
         </div>

         {/* CTA Box */}
         <div className="mt-20 bg-slate-900 rounded-xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff4d4d]/20 blur-[80px] rounded-full"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <p className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
                  If you can't <span className="text-[#ff4d4d]">measure</span> it, you can't <span className="text-[#ff4d4d]">manage</span> it. Let's fix that.
                </p>
            </div>
         </div>
      </Section>

      {/* --- Footer --- */}
      <footer className="bg-[#111] text-white py-20 border-t border-slate-800">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
            <div>
              <div className="flex items-center gap-2 mb-6">
                 <div className="bg-white p-1 rounded">
                   <Logo className="w-4 h-4 text-black" />
                 </div>
                 <span className="font-bold">IT Outcomes</span>
              </div>
              <p className="text-slate-500">© 2026 IT Outcomes. All Rights Reserved.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Course</h4>
              <ul className="space-y-2 text-slate-500">
                <li className="hover:text-white cursor-pointer" onClick={handleCurriculumClick}>Curriculum</li>
                <li className="hover:text-white cursor-pointer">Outcomes</li>
                <li className="hover:text-white cursor-pointer" onClick={() => handleScroll('pricing')}>Pricing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-500">
                <li className="hover:text-white cursor-pointer">About Instructor</li>
                <li className="hover:text-white cursor-pointer">Corporate Training</li>
                <li className="hover:text-white cursor-pointer" onClick={() => onNavigate && onNavigate('contact')}>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-500">
                <li className="hover:text-white cursor-pointer">Imprint</li>
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Terms</li>
              </ul>
            </div>
         </div>
      </footer>

      {showVideoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm cursor-pointer" 
            onClick={() => setShowVideoModal(false)}
          />
          
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10 aspect-video">
            <button 
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/65 hover:bg-black/90 text-white rounded-full transition-colors border border-white/10"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            <iframe
              src="https://www.youtube.com/embed/eUp-xynIdLk?autoplay=1&rel=0&modestbranding=1"
              title="Free Quickstart Course Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}