import React from 'react';
import { ArrowLeft, ChevronDown, BookOpen, Target, Download, FileText, FileSpreadsheet, Lock } from 'lucide-react';

export const BusinessKPIsPage = ({ onBack, onEnroll }: { onBack: () => void, onEnroll: () => void }) => {
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
          <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Strategy
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Business Vertical KPIs
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
             Downloadable deliverables for strategy mapping. The full list of downloadable files will be provided soon.
          </p>
        </div>

        <div className="space-y-4">
          
          <div className="relative overflow-hidden bg-white rounded-xl border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition-all duration-300">
            <div className="absolute top-5 -left-10 w-40 bg-slate-800 text-slate-200 text-[10px] font-bold py-1 text-center z-10 transform -rotate-45 uppercase tracking-widest shadow-md">
              Coming Soon
            </div>
            <div className="flex items-start gap-4">
               <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-lg flex items-center justify-center shrink-0">
                 <FileSpreadsheet className="w-6 h-6" />
               </div>
               <div>
                  <h3 className="font-bold text-xl mb-1 text-slate-900">Healthcare KPI Map</h3>
                  <p className="text-slate-500 text-sm">XLSX • Template</p>
               </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
               <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-[#ff4d4d]/10 hover:bg-[#ff4d4d]/20 text-[#ff4d4d] font-bold rounded-lg transition-colors">
                 <Download className="w-4 h-4" /> Download
               </button>
            </div>
          </div>

          <div className="relative overflow-hidden bg-white rounded-xl border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition-all duration-300">
            <div className="absolute top-5 -left-10 w-40 bg-slate-800 text-slate-200 text-[10px] font-bold py-1 text-center z-10 transform -rotate-45 uppercase tracking-widest shadow-md">
              Coming Soon
            </div>
            <div className="flex items-start gap-4">
               <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-lg flex items-center justify-center shrink-0">
                 <FileText className="w-6 h-6" />
               </div>
               <div>
                  <h3 className="font-bold text-xl mb-1 text-slate-900">Manufacturing KPI Map</h3>
                  <p className="text-slate-500 text-sm">PDF • Reference Guide</p>
               </div>
            </div>
             <div className="flex items-center gap-3 w-full md:w-auto">
               <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-[#ff4d4d]/10 hover:bg-[#ff4d4d]/20 text-[#ff4d4d] font-bold rounded-lg transition-colors">
                 <Download className="w-4 h-4" /> Download
               </button>
            </div>
          </div>
          
           <div className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
               <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-lg flex items-center justify-center shrink-0">
                 <FileSpreadsheet className="w-6 h-6" />
               </div>
               <div>
                  <h3 className="font-bold text-xl mb-1 text-slate-900">Banking KPI Map</h3>
                  <p className="text-slate-500 text-sm">XLSX • Template</p>
               </div>
            </div>
             <div className="flex items-center gap-3 w-full md:w-auto">
               <a href="https://portal.itoutcomes.ca/checkout/?add-to-cart=62" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-[#ff4d4d]/10 hover:bg-[#ff4d4d]/20 text-[#ff4d4d] font-bold rounded-lg transition-colors">
                 <Download className="w-4 h-4" /> Download
               </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
