import React, { useState } from 'react';
import { ArrowLeft, Mail, MessageSquare, AlertCircle, Copy, Check } from 'lucide-react';
import { BrandLogo } from './LandingPage';

interface ContactPageProps {
  onBack: () => void;
}

export const ContactPage = ({ onBack }: ContactPageProps) => {
  const [copied, setCopied] = useState(false);
  const email = "pguarisma@itoutcomes.ca";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-500 font-sans selection:bg-[#ff4d4d] selection:text-white flex flex-col justify-between">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 h-20">
        <div className="max-w-4xl mx-auto px-6 h-full flex items-center justify-between">
          <button 
            id="back-to-main-btn"
            onClick={onBack}
            className="group flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#ff4d4d] transition-colors"
          >
            <div className="p-2 bg-slate-100 rounded-full group-hover:bg-[#ff4d4d]/10 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Main Page
          </button>
          <div className="flex items-center gap-2.5 font-black text-lg tracking-tight">
            <BrandLogo className="w-5 h-5 text-[#ff3b4e]" glow={false} />
            <span className="text-slate-900"><span className="text-[#ff3b4e]">IT</span> OUTCOMES</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24 flex-grow flex flex-col justify-center w-full">
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8 md:p-12 relative overflow-hidden">
          {/* Decorative subtle background elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff4d4d]/5 blur-[60px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-slate-500/5 blur-[40px] rounded-full"></div>

          <div className="relative z-10">
            {/* Tag / Status Line */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-amber-800 text-xs font-bold tracking-wider uppercase mb-8">
              <AlertCircle className="w-3.5 h-3.5" />
              Under Development
            </div>

            {/* Main Statement */}
            <h1 id="contact-page-title" className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              We are crafting something <span className="text-[#ff4d4d]">impactful</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              This webpage is currently under development as we finalize the curriculum. 
              Our premium outcomes-focused training and actionable materials will be available very soon. Thank you for your patience!
            </p>

            <hr className="border-slate-100 my-8" />

            {/* Profile / Contact Info */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">Instructor Contact</h2>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-slate-50 border border-slate-200/60 rounded-xl p-6">
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-1">Pavel Guarisma</h3>
                  <div className="flex items-center gap-2 text-slate-600 text-sm mt-1.5">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <a href={`mailto:${email}`} className="hover:text-[#ff4d4d] hover:underline font-medium transition-colors">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    id="copy-email-btn"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-sm rounded-lg transition-colors shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Email
                      </>
                    )}
                  </button>
                  <a 
                    id="email-mailto-link"
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#ff4d4d]/10 hover:bg-[#ff4d4d]/20 text-[#ff4d4d] font-bold text-sm rounded-lg transition-colors border border-transparent"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Get In Touch
                  </a>
                </div>
              </div>

              {/* Invitation Message */}
              <p className="text-sm md:text-base text-slate-500 mt-6 leading-relaxed">
                If you have any questions, suggestions, or would like to learn about corporate training options before the website goes live, please do not hesitate to reach out. I would love to hear from you and discuss how we can help your team drive concrete outcomes.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Subtle brand footer footer inside the container view */}
      <footer className="py-8 bg-slate-100/50 border-t border-slate-200 text-xs text-center text-slate-400 font-medium">
        &copy; {new Date().getFullYear()} IT Outcomes. All rights reserved.
      </footer>
    </div>
  );
};
