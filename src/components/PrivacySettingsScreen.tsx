/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, Shield, Eye, Lock, Database, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface PrivacySettingsScreenProps {
  onBack: () => void;
}

export default function PrivacySettingsScreen({ onBack }: PrivacySettingsScreenProps) {
  const [settings, setSettings] = useState({
    location: true,
    analytics: false,
    publicProfile: true,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const privacyOptions = [
    { id: "location", label: "Location Services", icon: Eye, description: "Allow app to access your location for maps" },
    { id: "analytics", label: "Usage Analytics", icon: Database, description: "Help us improve by sharing anonymous usage data" },
    { id: "publicProfile", label: "Public Profile", icon: Lock, description: "Allow other travelers to find your profile" },
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
        <h1 className="text-xl font-bold">Privacy & Security</h1>
      </header>

      <main className="flex-1 p-6 max-w-2xl mx-auto w-full space-y-8">
        <section>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Data Permissions</p>
          <div className="space-y-3">
            {privacyOptions.map((option) => (
              <div key={option.id} className="flex items-center justify-between p-5 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center">
                    <option.icon size={22} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{option.label}</p>
                    <p className="text-xs text-slate-400 font-medium">{option.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => toggle(option.id as keyof typeof settings)}
                  className={`w-14 h-8 rounded-full transition-all relative ${settings[option.id as keyof typeof settings] ? 'bg-purple-600' : 'bg-slate-200'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${settings[option.id as keyof typeof settings] ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Legal</p>
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <button className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors border-b border-slate-50">
              <span className="font-bold text-slate-900">Terms of Service</span>
              <ChevronRight size={18} className="text-slate-300" />
            </button>
            <button className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors">
              <span className="font-bold text-slate-900">Privacy Policy</span>
              <ChevronRight size={18} className="text-slate-300" />
            </button>
          </div>
        </section>

        <button className="w-full py-4 bg-red-50 text-red-600 rounded-2xl font-bold text-lg hover:bg-red-100 transition-colors">
          Delete Account
        </button>
      </main>
    </motion.div>
  );
}
