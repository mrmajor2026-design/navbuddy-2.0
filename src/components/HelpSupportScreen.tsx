/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, HelpCircle, MessageCircle, FileText, ExternalLink, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface HelpSupportScreenProps {
  onBack: () => void;
}

export default function HelpSupportScreen({ onBack }: HelpSupportScreenProps) {
  const supportOptions = [
    { label: "Help Center", icon: HelpCircle, description: "Browse FAQs and tutorials", color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Contact Support", icon: MessageCircle, description: "Chat with our team 24/7", color: "text-orange-600", bg: "bg-orange-50" },
    { label: "Terms of Service", icon: FileText, description: "Read our legal terms", color: "text-slate-600", bg: "bg-slate-50" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-[#1A2B3C]"
    >
      <header className="p-6 flex items-center gap-4 bg-white border-b border-slate-100 sticky top-0 z-10">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-slate-50 rounded-full transition-colors cursor-pointer">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">Help & Support</h1>
      </header>

      <main className="flex-1 p-6 max-w-2xl mx-auto w-full space-y-8">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          {supportOptions.map((option, index) => (
            <button 
              key={option.label}
              className={`w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors ${index !== supportOptions.length - 1 ? 'border-b border-slate-50' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl ${option.bg} flex items-center justify-center`}>
                  <option.icon size={22} className={option.color} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-900">{option.label}</p>
                  <p className="text-xs text-slate-400 font-medium">{option.description}</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-300" />
            </button>
          ))}
        </div>

        <section>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Community</p>
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center">
                <ExternalLink size={22} className="text-purple-600" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Join our Community</p>
                <p className="text-xs text-slate-400 font-medium">Connect with other travelers</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-slate-300 group-hover:text-slate-400 transition-colors" />
          </div>
        </section>

        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm font-medium">Version 2.4.0 (Build 1024)</p>
          <p className="text-slate-300 text-xs mt-1">© 2026 NavBuddy Inc.</p>
        </div>
      </main>
    </motion.div>
  );
}
