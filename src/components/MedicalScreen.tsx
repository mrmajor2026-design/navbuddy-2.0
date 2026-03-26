/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import Sidebar from "./Sidebar";
import { 
  Menu, 
  User, 
  Settings, 
  Pencil, 
  Home, 
  Coins, 
  Camera, 
  BriefcaseMedical,
  Pill,
  Wind,
  Plus,
  ArrowLeft
} from "lucide-react";

interface MedicalScreenProps {
  onBack: () => void;
  onHome: () => void;
  onCurrency: () => void;
  onCamera: () => void;
  onProfile: () => void;
  onSettings: () => void;
  onLogout: () => void;
  onTerms: () => void;
  onPrivacy: () => void;
  onCookies: () => void;
  onCountdownTodo: () => void;
  onLocations: () => void;
  onItinerary: () => void;
  onTipping: () => void;
  onLaws: () => void;
  onMaps: () => void;
}

export default function MedicalScreen({ 
  onBack,
  onHome, 
  onCurrency, 
  onCamera,
  onProfile,
  onSettings,
  onLogout,
  onTerms,
  onPrivacy,
  onCookies,
  onCountdownTodo,
  onLocations,
  onItinerary,
  onTipping,
  onLaws,
  onMaps
}: MedicalScreenProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sections = [
    {
      title: "Illnesses",
      items: [
        "• Chronic Asthma (Diagnosed 2015)",
        "• Seasonal Allergies (Rhinitis)",
        "• Hypertension (Managed)"
      ]
    },
    {
      title: "Medications",
      items: [
        { name: "Lisinopril 10mg", desc: "Once daily - Morning", icon: Pill, color: "text-orange-500", bg: "bg-orange-50" },
        { name: "Albuterol Inhaler", desc: "As needed for symptoms", icon: Wind, color: "text-blue-500", bg: "bg-blue-50" }
      ]
    },
    {
      title: "Allergies",
      items: ["Penicillin", "Peanuts", "Latex"],
      isBadges: true
    },
    {
      title: "Insurance Details",
      details: [
        { label: "PROVIDER", value: "BlueShield Health" },
        { label: "POLICY ID", value: "#BS-992031-X" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#1A2B3C] pb-24">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onLogout={onLogout} 
        onTerms={onTerms}
        onPrivacy={onPrivacy}
        onCookies={onCookies}
        onProfile={onProfile}
        onSettings={onSettings}
        onCountdownTodo={onCountdownTodo}
        onLocations={onLocations}
        onItinerary={onItinerary}
        onTipping={onTipping}
        onLaws={onLaws}
        onMed={() => setIsSidebarOpen(false)}
        onMaps={onMaps}
      />

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 sticky top-0 bg-white z-10">
        <button 
          onClick={onBack}
          className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <ArrowLeft size={20} className="text-[#0F172A]" />
        </button>
        <h2 className="text-xl font-bold text-[#0F172A]">NavBuddy</h2>
        <div className="flex gap-2">
          <button 
            onClick={onProfile}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </button>
          <button 
            onClick={onSettings}
            className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <Settings size={20} className="text-[#0F172A]" />
          </button>
        </div>
      </header>

      <main className="px-6 py-4 space-y-6 max-w-md mx-auto w-full">
        <h1 className="text-3xl font-bold text-[#0F172A] mb-8">Medical Information</h1>

        {sections.map((section, idx) => (
          <motion.div 
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-[32px] p-6 shadow-xl shadow-gray-100 border-2 border-transparent relative overflow-hidden group"
            style={{
              borderImage: "linear-gradient(to bottom right, #8B5CF6, #FB923C) 1",
              borderRadius: "32px" // Note: border-image can break border-radius in some browsers, using a wrapper or pseudo-element is safer but let's try this first with a custom class
            }}
          >
            {/* Custom Gradient Border Hack for Rounded Corners */}
            <div className="absolute inset-0 rounded-[32px] border-2 border-transparent bg-gradient-to-br from-[#8B5CF6] to-[#FB923C] -m-[2px] pointer-events-none" style={{ mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", maskComposite: "exclude", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor" }} />
            
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#0F172A]">{section.title}</h3>
              <button className="p-2 text-[#94A3B8] hover:text-[#0F172A] transition-colors cursor-pointer">
                <Pencil size={18} />
              </button>
            </div>

            {section.title === "Insurance Details" ? (
              <div className="bg-[#F8FAFC] rounded-2xl p-4 space-y-3">
                {section.details?.map((detail) => (
                  <div key={detail.label} className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase">{detail.label}</span>
                    <span className="font-bold text-[#0F172A]">{detail.value}</span>
                  </div>
                ))}
              </div>
            ) : section.isBadges ? (
              <div className="flex flex-wrap gap-2">
                {section.items.map((item: any, i) => (
                  <span key={i} className={`px-4 py-2 rounded-full text-sm font-semibold ${i === 0 ? "bg-red-50 text-red-500 border border-red-100" : i === 1 ? "bg-orange-50 text-orange-500 border border-orange-100" : "bg-gray-50 text-gray-500 border border-gray-100"}`}>
                    {item}
                  </span>
                ))}
              </div>
            ) : section.title === "Medications" ? (
              <div className="space-y-4">
                {section.items.map((item: any, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center ${item.color}`}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A]">{item.name}</h4>
                      <p className="text-xs text-[#94A3B8] font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                {section.items.map((item: any, i) => (
                  <p key={i} className="text-[#64748B] font-medium text-sm leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-100 px-6 py-3 flex justify-around items-center z-20">
        <button 
          onClick={onHome}
          className="flex flex-col items-center gap-1 text-[#94A3B8] hover:text-[#64748B] transition-colors cursor-pointer"
        >
          <Home size={24} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
        </button>
        <button 
          onClick={onCurrency}
          className="flex flex-col items-center gap-1 text-[#94A3B8] hover:text-[#64748B] transition-colors cursor-pointer"
        >
          <Coins size={24} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Currency</span>
        </button>
        <button 
          onClick={onCamera}
          className="flex flex-col items-center gap-1 text-[#94A3B8] hover:text-[#64748B] transition-colors cursor-pointer"
        >
          <Camera size={24} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Camera</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#EC4899] cursor-pointer">
          <BriefcaseMedical size={24} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">
            <span className="text-[#8B5CF6]">ME</span>
            <span className="text-[#EC4899]">D</span>
          </span>
        </button>
      </nav>
    </div>
  );
}
