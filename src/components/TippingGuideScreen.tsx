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
  Utensils,
  Car,
  Coffee,
  Hotel
} from "lucide-react";
import { motion } from "motion/react";

interface TippingGuideScreenProps {
  onBack: () => void;
  onHome: () => void;
  onCurrency: () => void;
  onCamera: () => void;
  onMed: () => void;
  onProfile: () => void;
  onSettings: () => void;
}

export default function TippingGuideScreen({ 
  onBack, 
  onHome, 
  onCurrency, 
  onCamera, 
  onMed,
  onProfile,
  onSettings
}: TippingGuideScreenProps) {
  const tips = [
    {
      icon: Utensils,
      label: "Restaurants",
      amount: "5-10%",
      desc: "Usually included in 'servicio', but rounding up is appreciated.",
      color: "bg-orange-50 text-orange-500"
    },
    {
      icon: Coffee,
      label: "Cafes & Bars",
      amount: "Small Change",
      desc: "Leave small coins or round up to the nearest Euro.",
      color: "bg-blue-50 text-blue-500"
    },
    {
      icon: Car,
      label: "Taxis",
      amount: "Round Up",
      desc: "Rounding up to the nearest Euro is standard practice.",
      color: "bg-green-50 text-green-500"
    },
    {
      icon: Hotel,
      label: "Hotels",
      amount: "€1-2",
      desc: "Per bag for porters or per day for housekeeping.",
      color: "bg-purple-50 text-purple-500"
    }
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
        <h2 className="text-4xl font-bold mb-2">Tipping Guide</h2>
        <p className="text-gray-500 text-lg mb-10">
          Local customs for Spain.
        </p>

        <div className="grid grid-cols-1 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${tip.color}`}>
                  <tip.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-bold">{tip.label}</h3>
                    <span className="text-lg font-bold text-[#4285F4]">{tip.amount}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
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
