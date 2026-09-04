import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Target, 
  TrendingUp, 
  BrainCircuit, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Download,
  FileSpreadsheet,
  Layers,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const Logo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <div className="absolute -inset-2 bg-primary-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center border border-white/10 shadow-2xl relative p-2">
                <Logo className="w-full h-full text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-xl tracking-tighter text-white leading-none group-hover:text-primary-400 transition-colors">IT OUTCOMES</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-semibold mt-1">Metrics & KPIs</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#problem" onClick={(e) => handleNavClick(e, 'problem')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">The Problem</a>
              <a href="#solution" onClick={(e) => handleNavClick(e, 'solution')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Methodology</a>
              <a href="#instructor" onClick={(e) => handleNavClick(e, 'instructor')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Instructor</a>
              <a href="#offer" onClick={(e) => handleNavClick(e, 'offer')} className="bg-primary-600 hover:bg-primary-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary-500/20">
                Enroll Now
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-primary-400 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#problem" onClick={(e) => handleNavClick(e, 'problem')} className="text-slate-300 block px-3 py-2 rounded-md text-base font-medium">The Problem</a>
              <a href="#solution" onClick={(e) => handleNavClick(e, 'solution')} className="text-slate-300 block px-3 py-2 rounded-md text-base font-medium">Methodology</a>
              <a href="#offer" onClick={(e) => handleNavClick(e, 'offer')} className="text-primary-400 block px-3 py-2 rounded-md text-base font-bold">Enroll Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroChart = () => {
  const data = [
    { name: 'Jan', value: 400, baseline: 300 },
    { name: 'Feb', value: 300, baseline: 320 },
    { name: 'Mar', value: 500, baseline: 350 },
    { name: 'Apr', value: 450, baseline: 380 },
    { name: 'May', value: 600, baseline: 400 },
    { name: 'Jun', value: 750, baseline: 420 },
  ];

  return (
    <div className="glass-card p-6 rounded-xl w-full max-w-lg mx-auto transform rotate-y-12 rotate-x-12 perspective-1000">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-slate-400 text-xs font-mono uppercase tracking-wider">Change Success Rate</h3>
          <div className="text-3xl font-bold text-white mt-1">98.2% <span className="text-emerald-400 text-sm font-medium">↑ 12%</span></div>
        </div>
        <div className="p-2 bg-emerald-500/10 rounded-lg">
          <TrendingUp className="text-emerald-400 w-5 h-5" />
        </div>
      </div>
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis dataKey="name" hide />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
              itemStyle={{ color: '#38bdf8' }}
            />
            <Area type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
            <Area type="monotone" dataKey="baseline" stroke="#94a3b8" strokeWidth={1} strokeDasharray="5 5" fill="transparent" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex gap-2">
        <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-primary-500 w-3/4 rounded-full"></div>
        </div>
      </div>
      <div className="mt-2 flex justify-between text-xs text-slate-500 font-mono">
        <span>Target: 95%</span>
        <span>Actual: 98.2%</span>
      </div>
    </div>
  );
};

const SectionHeader = ({ title, subtitle, center = true }: { title: string, subtitle: string, center?: boolean }) => (
  <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
    <h2 className="text-primary-400 font-mono text-sm uppercase tracking-widest mb-3">{subtitle}</h2>
    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{title}</h3>
    <div className={`h-1 w-20 bg-primary-500 mt-6 rounded-full ${center ? 'mx-auto' : ''}`} />
  </div>
);

const ProblemCard = ({ icon: Icon, title, quote, description, color }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-panel p-8 rounded-2xl border-l-4"
    style={{ borderLeftColor: color }}
  >
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-lg bg-opacity-10`} style={{ backgroundColor: color }}>
        <Icon className="w-6 h-6" style={{ color: color }} />
      </div>
      <span className="text-slate-500 font-mono text-xs">DIAGNOSIS 0{Math.floor(Math.random() * 9) + 1}</span>
    </div>
    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
    <p className="italic text-slate-400 text-sm mb-4 border-l-2 border-slate-700 pl-3">"{quote}"</p>
    <p className="text-slate-300 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const BenefitCard = ({ icon: Icon, title, description }: any) => (
  <div className="flex gap-4 items-start">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
      <Icon className="w-5 h-5 text-primary-400" />
    </div>
    <div>
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const InstructorSection = () => (
  <section id="instructor" className="py-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-900/10 blur-[100px] rounded-full pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
           <SectionHeader title="Expert Guidance" subtitle="The Instructor" center={false} />
           <h4 className="text-2xl font-bold text-white mb-6">Senior Service Delivery Director</h4>
           <div className="space-y-6">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                 <Clock className="text-primary-400" />
               </div>
               <div>
                 <p className="text-white font-bold">25+ Years Experience</p>
                 <p className="text-slate-400 text-sm">Service Delivery & ITSM Leadership</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                 <BrainCircuit className="text-primary-400" />
               </div>
               <div>
                 <p className="text-white font-bold">M.Sc. Operations Research</p>
                 <p className="text-slate-400 text-sm">Statistics & Optimization Focus</p>
               </div>
             </div>
           </div>
           <p className="mt-8 text-slate-300 leading-relaxed">
             This isn't theory from a textbook. This is a battle-tested methodology developed over two decades of managing complex IT environments. I bridge the gap between "mathematically rigorous" and "monday-morning practical."
           </p>
        </div>
        <div className="relative">
           <div className="glass-panel p-8 rounded-2xl border border-white/10 relative">
             <div className="absolute -top-4 -right-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
               Instructor
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-lg">
                   <div className="text-3xl font-bold text-white mb-1">500+</div>
                   <div className="text-xs text-slate-400 uppercase">Students Mentored</div>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                   <div className="text-3xl font-bold text-white mb-1">50+</div>
                   <div className="text-xs text-slate-400 uppercase">Enterprises Transformed</div>
                </div>
                <div className="col-span-2 bg-slate-900/50 p-4 rounded-lg h-48 flex flex-col justify-end">
                  <div className="text-xs text-slate-400 uppercase mb-2">Outcome Delivery</div>
                  <div className="h-full w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={[{n:1, v:40}, {n:2, v:60}, {n:3, v:80}, {n:4, v:95}, {n:5, v:100}]}>
                         <Bar dataKey="v" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const PricingCard = ({ 
  tier, 
  price, 
  subtitle, 
  features, 
  recommended = false,
  buttonText = "Enroll Now",
  delay = 0 
}: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`relative flex flex-col h-full p-8 rounded-2xl border transition-transform duration-300 hover:scale-[1.02] ${
      recommended 
        ? 'bg-slate-900/80 border-primary-500 shadow-2xl shadow-primary-500/20 ring-1 ring-primary-500/50 z-10' 
        : 'bg-slate-900/40 border-slate-800'
    }`}
  >
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
        Most Popular
      </div>
    )}
    
    <div className="mb-6">
      <h3 className={`text-xl font-bold mb-2 ${recommended ? 'text-white' : 'text-slate-200'}`}>{tier}</h3>
      <p className="text-slate-400 text-sm h-10 leading-snug">{subtitle}</p>
    </div>

    <div className="mb-8 border-b border-white/5 pb-8">
      <div className="flex items-baseline">
        <span className="text-4xl font-bold text-white">${price}</span>
        {price !== '299' && <span className="text-slate-500 ml-1 text-sm">/one-time</span>}
      </div>
    </div>

    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature: any, i: number) => (
        <li key={i} className="flex items-start gap-3 text-sm">
          {feature.included ? (
            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${recommended ? 'text-primary-400' : 'text-slate-500'}`} />
          ) : (
            <X className="w-5 h-5 flex-shrink-0 text-slate-700 opacity-50" />
          )}
          <span className={feature.included ? 'text-slate-300' : 'text-slate-600 line-through decoration-slate-700'}>
            {feature.text}
          </span>
        </li>
      ))}
    </ul>

    <button className={`w-full py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
      recommended 
        ? 'bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-500/25' 
        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
    }`}>
      {buttonText} <ArrowRight className="w-4 h-4" />
    </button>
  </motion.div>
);

export function DesignVariant1() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-primary-500/30 selection:text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-900/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-700 text-primary-400 text-xs font-mono mb-6">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                DIAGNOSIS COMPLETE
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                You're Measuring Everything. <br />
                <span className="text-gradient">But Improving Nothing.</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                Stop performing KPI theater. Turn your raw ITSM data into executive-ready insights that drive decisions, prioritize action, and prove value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => handleScroll('offer')} className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3.5 rounded-lg font-bold transition-all flex items-center justify-center gap-2">
                  Start The Course
                </button>
                <button onClick={() => handleScroll('solution')} className="glass-panel text-white hover:bg-white/5 px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center justify-center">
                  View Curriculum
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-slate-800 rounded-xl rotate-12 opacity-50 border border-slate-700"></div>
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-slate-800 rounded-full opacity-30 blur-xl"></div>
              
              <HeroChart />
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-2xl flex items-center gap-3"
              >
                <div className="bg-primary-500/20 p-2 rounded-full">
                  <ShieldCheck className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">EXECUTIVE CONFIDENCE</div>
                  <div className="text-white font-bold">High Trust</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-slate-950 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Why Your Metrics Fail" 
            subtitle="The Diagnosis" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProblemCard 
              icon={FileSpreadsheet}
              title="Data-Rich, Insight-Poor"
              quote="I have lots of data, but no clear story."
              description="Metrics exist across tools (ITSM, Excel, PowerBI), but they lack a narrative. You can't answer 'So what?' or 'What do we change Monday morning?'"
              color="#f87171"
            />
            <ProblemCard 
              icon={Target}
              title="KPI Theater"
              quote="My KPIs don't drive decisions."
              description="Reviews are ceremonial. Dashboards are green, but service is red. Metrics are activity-based ('tickets closed') instead of value-based."
              color="#fbbf24"
            />
            <ProblemCard 
              icon={Layers}
              title="The Executive Gap"
              quote="Stuck between ops reality and exec expectations."
              description="Practitioners live in noise and exceptions. Executives want simplicity and predictability. Your metrics are failing to translate between these worlds."
              color="#a78bfa"
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="grid grid-cols-2 gap-4">
                 <div className="glass-panel p-6 rounded-xl col-span-2">
                   <div className="flex items-center justify-between mb-4">
                     <span className="text-xs font-mono text-slate-400">BEFORE</span>
                     <span className="text-xs font-mono text-emerald-400">AFTER</span>
                   </div>
                   <div className="h-2 bg-slate-800 rounded-full mb-2 overflow-hidden">
                     <div className="h-full w-1/4 bg-red-500/50"></div>
                   </div>
                   <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full w-3/4 bg-emerald-500"></div>
                   </div>
                   <p className="mt-4 text-sm text-slate-300">Shift from compliance reporting to outcome engineering.</p>
                 </div>
                 <div className="glass-panel p-6 rounded-xl flex items-center justify-center flex-col text-center">
                   <BarChart3 className="w-8 h-8 text-primary-400 mb-2" />
                   <div className="font-bold text-white">Value-Based</div>
                 </div>
                 <div className="glass-panel p-6 rounded-xl flex items-center justify-center flex-col text-center">
                   <Users className="w-8 h-8 text-indigo-400 mb-2" />
                   <div className="font-bold text-white">Exec-Ready</div>
                 </div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader title="The Solution" subtitle="Framework Agnostic" center={false} />
              <p className="text-lg text-slate-300 mb-6">
                A comprehensive online course that is mathematically rigorous without being overwhelming, and—most importantly—practical for everyday use.
              </p>
              <ul className="space-y-4">
                {[
                  "Design dashboards that actually change behavior.",
                  "Bridge the gap between ITIL/DevOps and Business Value.",
                  "Master the statistics behind 'Average' to stop lying with data.",
                  "Create a common language for Tech and Leadership."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-primary-500/20 p-1 rounded-full">
                      <ChevronRight className="w-3 h-3 text-primary-400" />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <InstructorSection />

      {/* Benefits / Deliverables */}
      <section className="py-24 bg-slate-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Tangible Deliverables" subtitle="More Than Just Theory" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={BrainCircuit}
              title="Decision Trees"
              description="Logic maps to determine exactly which metric to use for which stakeholder decision."
            />
            <BenefitCard 
              icon={FileSpreadsheet}
              title="Excel Aggregators"
              description="Plug-and-play calculators for weighted averages, standard deviations, and trend analysis."
            />
            <BenefitCard 
              icon={Layers}
              title="Dashboard Templates"
              description="Wireframes for Executive, Managerial, and Operational dashboards that tell a story."
            />
            <BenefitCard 
              icon={Target}
              title="Metric-to-Action Mapping"
              description="A framework ensuring that for every metric you track, a clear downstream action exists."
            />
             <BenefitCard 
              icon={CheckCircle2}
              title="Metric Dictionary"
              description="Standardized definitions to eliminate ambiguity across your IT teams."
            />
            <BenefitCard 
              icon={BarChart3}
              title="Visual Guide"
              description="Principles of data visualization to prevent 'dashboard fatigue' and cognitive overload."
            />
          </div>
        </div>
      </section>

      {/* Pricing / Offer */}
      <section id="offer" className="py-24 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Stop Reporting. Start Deciding." subtitle="Join the Cohort" />
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-slate-300 text-lg">
              Designed for Senior IT Engineers, ITSM Professionals, and Managers who need to prove value in a data-driven world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <PricingCard 
              tier="Essentials"
              price="49.99"
              subtitle="Core knowledge for individual contributors."
              features={[
                { text: "Core 6-module course", included: true },
                { text: "Lifetime access", included: true },
                { text: "Downloadable templates", included: false },
                { text: "Live Q&A Session", included: false },
                { text: "Dashboard audits", included: false },
              ]}
              buttonText="Get Essentials"
              delay={0}
            />
            
            <PricingCard 
              tier="Professional Edition"
              price="99"
              subtitle="The complete toolkit for practitioners."
              recommended={true}
              features={[
                { text: "Full Course Access", included: true },
                { text: "Downloadable Templates", included: true },
                { text: "Dashboard Excel Files", included: true },
                { text: "1×60 min Live Q&A", included: true },
                { text: "Personal coaching", included: false },
              ]}
              buttonText="Start Professional"
              delay={0.1}
            />

            <PricingCard 
              tier="Executive Workshop"
              price="299"
              subtitle="Guided transformation for leadership."
              features={[
                { text: "Everything in Professional", included: true },
                { text: "4-Week Guided Cohort", included: true },
                { text: "Small-Group Coaching", included: true },
                { text: "KPI Design Review", included: true },
                { text: "Dashboard Audit", included: true },
              ]}
              buttonText="Apply for Workshop"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 relative">
                   <Logo className="w-full h-full text-primary-500" />
                </div>
                <span className="font-mono font-bold text-white tracking-tighter text-lg">IT OUTCOMES</span>
              </div>
              <p className="text-slate-500 text-sm max-w-xs">
                Transforming IT practitioners into strategic partners through rigorous, practical metrics training.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Course</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={(e) => { e.preventDefault(); handleScroll('solution'); }} className="hover:text-primary-400 transition text-left">Curriculum</button></li>
                <li><button className="hover:text-primary-400 transition text-left cursor-not-allowed opacity-50">Templates</button></li>
                <li><button onClick={(e) => { e.preventDefault(); handleScroll('offer'); }} className="hover:text-primary-400 transition text-left">Pricing</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button className="hover:text-primary-400 transition text-left cursor-not-allowed opacity-50">Privacy Policy</button></li>
                <li><button className="hover:text-primary-400 transition text-left cursor-not-allowed opacity-50">Terms of Service</button></li>
                <li><button className="hover:text-primary-400 transition text-left cursor-not-allowed opacity-50">Contact</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-slate-600 text-sm">
            <p>© 2026 IT Outcomes. All Rights Reserved.</p>
            <p className="mt-1">No part of this publication may be reproduced without permission.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}