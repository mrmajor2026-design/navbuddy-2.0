/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, Globe, Check } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface LanguageSettingsScreenProps {
  onBack: () => void;
}

export default function LanguageSettingsScreen({ onBack }: LanguageSettingsScreenProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");

  const languages = [
    { name: "English (US)", code: "en-US" },
    { name: "English (UK)", code: "en-GB" },
    { name: "Spanish", code: "es" },
    { name: "French", code: "fr" },
    { name: "German", code: "de" },
    { name: "Japanese", code: "ja" },
    { name: "Chinese (Simplified)", code: "zh-CN" },
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
        <h1 className="text-xl font-bold">Language</h1>
      </header>

      <main className="flex-1 p-6 max-w-2xl mx-auto w-full">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          {languages.map((lang, index) => (
            <button 
              key={lang.code}
              onClick={() => setSelectedLanguage(lang.name)}
              className={`w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors ${index !== languages.length - 1 ? 'border-b border-slate-50' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedLanguage === lang.name ? 'bg-blue-50' : 'bg-slate-50'}`}>
                  <Globe size={20} className={selectedLanguage === lang.name ? 'text-blue-600' : 'text-slate-400'} />
                </div>
                <span className={`font-bold ${selectedLanguage === lang.name ? 'text-slate-900' : 'text-slate-600'}`}>{lang.name}</span>
              </div>
              {selectedLanguage === lang.name && (
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
              )}
            </button>
          ))}
        </div>

        <p className="mt-8 text-center text-slate-400 text-sm font-medium px-8 leading-relaxed">
          Changing the language will update the entire application interface and navigation.
        </p>
      </main>
    </motion.div>
  );
}
