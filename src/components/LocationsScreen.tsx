/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ArrowLeft, 
  User, 
  Settings, 
  Home, 
  DollarSign, 
  Camera, 
  BriefcaseMedical,
  ChevronRight,
  Building2,
  Pill,
  Stethoscope,
  Hospital
} from "lucide-react";
import { motion } from "motion/react";

interface LocationsScreenProps {
  onBack: () => void;
  onHome: () => void;
  onCurrency: () => void;
  onCamera: () => void;
  onMed: () => void;
  onProfile: () => void;
  onSettings: () => void;
}

export default function LocationsScreen({ 
  onBack, 
  onHome, 
  onCurrency, 
  onCamera, 
  onMed,
  onProfile,
  onSettings
}: LocationsScreenProps) {
  const locations = [
    { icon: Building2, label: "Embassies" },
    { icon: Pill, label: "Pharmacies" },
    { icon: Stethoscope, label: "Doctors" },
    { icon: Hospital, label: "Hospitals" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white flex flex-col font-sans text-[#1A2B3C] pb-24"
    >
      {/* Header */}
      <header className="p-6 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold tracking-tight">NavBuddy</h1>
        <div className="flex items-center gap-4">
          <button onClick={onProfile} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <User className="w-6 h-6" />
          </button>
          <button onClick={onSettings} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-6 pt-4">
        <h2 className="text-4xl font-bold mb-2">Essential Locations</h2>
        <p className="text-gray-500 text-lg mb-10">
          Find reliable services during your journey.
        </p>

        <div className="space-y-6">
          {locations.map((loc, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-full group relative p-[2px] rounded-2xl bg-gradient-to-r from-[#4285F4] to-[#EA4335] hover:shadow-lg transition-all"
            >
              <div className="bg-white rounded-[14px] p-6 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-[#9333EA]">
                    <loc.icon className="w-7 h-7" />
                  </div>
                  <span className="text-xl font-semibold">{loc.label}</span>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-gray-400" />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Decorative Wavy Line */}
        <div className="mt-12 flex justify-center opacity-20">
          <svg width="343" height="40" viewBox="0 0 343 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 30C30 30 50 10 90 10C130 10 150 30 190 30C230 30 250 10 290 10C330 10 342 30 342 30" stroke="#EA4335" strokeWidth="2" strokeDasharray="8 8" strokeLinecap="round"/>
          </svg>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center z-40">
        <button 
          onClick={onHome}
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#4285F4] transition-colors"
        >
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
        </button>
        <button 
          onClick={onCurrency}
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#4285F4] transition-colors"
        >
          <DollarSign className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Currency</span>
        </button>
        <button 
          onClick={onCamera}
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#4285F4] transition-colors"
        >
          <Camera className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Camera</span>
        </button>
        <button 
          onClick={onMed}
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#4285F4] transition-colors"
        >
          <BriefcaseMedical className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Med</span>
        </button>
      </nav>
    </motion.div>
  );
}
