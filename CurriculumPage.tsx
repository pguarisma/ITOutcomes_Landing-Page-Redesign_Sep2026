import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, BookOpen, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const curriculumData = [
  {
    title: "Module 1: Foundations – Speaking the Language of Value",
    focus: "Shifting from \"tracking everything\" to \"measuring what matters\" by focusing on business outcomes rather than technical outputs and aligning with the ITIL 4 Service Value Chain."
  },
  {
    title: "Module 2: Statistical Literacy – Trusting Your Data",
    focus: "Using statistical methods (Mean, Median, Mode, and various distributions) to interpret data accurately and move from \"gut feelings\" to data-driven proactive decisions."
  },
  {
    title: "Module 3: Service Ops Metrics – Mastering the Flow",
    focus: "Measuring the velocity and quality of Incident and Request Management to identify bottlenecks, manage backlogs, and optimize agent utilization."
  },
  {
    title: "Module 4: Strategic Metrics – Stability and Proactivity",
    focus: "Utilizing Change and Problem Management as strategic levers to balance agility with stability and eliminate recurring issues through root cause analysis."
  },
  {
    title: "Module 5: Financial Alignment – Proving ROI",
    focus: "Bridging technical operations and financial reality by using metrics like TCO and ROI to demonstrate IT as a value driver rather than a cost center."
  },
  {
    title: "Module 6: People and Resources – Empowering the Team",
    focus: "Balancing operational efficiency with the human experience using Experience Level Agreements (XLAs) and Digital Employee Experience (DEX) data to prevent burnout."
  },
  {
    title: "Module 7: Data Storytelling – Designing for Action",
    focus: "Designing role-based dashboards (Practitioner, Manager, Executive) that answer the question \"So what?\" and provide actionable insights for decision-makers."
  },
  {
    title: "Module 8: Implementation – Building a Data Culture",
    focus: "Executing a 90-day roadmap (Foundation, Execution, Optimization) to build a sustainable data culture through accountability and continuous improvement."
  }
];

export const CurriculumPage = ({ onBack, onEnroll }: { onBack: () => void, onEnroll: () => void }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#ff4d4d] selection:text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 h-20">
        <div className="max-w-4xl mx-auto px-6 h-full flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#ff4d4d] transition-colors"
          >
            <div className="p-2 bg-slate-100 rounded-full group-hover:bg-[#ff4d4d]/10 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Main Page
          </button>
          <div className="font-bold text-lg tracking-tight hidden sm:block">IT <span className="text-[#ff4d4d]">Outcomes</span></div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 bg-[#ff4d4d]/10 text-[#ff4d4d] rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Detailed Syllabus
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            ITSM Metrics & KPIs:<br/>Training Module Curriculum
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
             A rigorous, step-by-step framework designed to transform how you measure, report, and improve IT service delivery.
          </p>
        </div>

        <div className="space-y-4">
          {curriculumData.map((module, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'border-[#ff4d4d] shadow-lg shadow-[#ff4d4d]/5 ring-1 ring-[#ff4d4d]' 
                  : 'border-slate-200 hover:border-[#ff4d4d]/50'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    openIndex === index ? 'bg-[#ff4d4d] text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${openIndex === index ? 'text-[#ff4d4d]' : 'text-slate-900'}`}>
                      {module.title.split(':')[0]}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium">
                      {module.title.split(':')[1]}
                    </p>
                  </div>
                </div>
                <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                   <ChevronDown className="w-5 h-5 text-slate-400" />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-8 pt-2 ml-14 border-t border-slate-50">
                       <div className="flex gap-3">
                         <Target className="w-5 h-5 text-[#ff4d4d] shrink-0 mt-1" />
                         <div>
                           <span className="font-bold text-slate-900 block mb-2">Module Focus</span>
                           <p className="text-slate-600 leading-relaxed">
                             {module.focus}
                           </p>
                         </div>
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#ff4d4d]/20 via-transparent to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Ready to master these metrics?</h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">Join the next cohort and get access to all 8 modules, plus templates and live coaching.</p>
            <button 
              onClick={onEnroll}
              className="bg-[#ff4d4d] hover:bg-[#ff3333] text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-[#ff4d4d]/25"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};