/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, Ruler, Thermometer, Weight, Check } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface UnitsSettingsScreenProps {
  onBack: () => void;
}

export default function UnitsSettingsScreen({ onBack }: UnitsSettingsScreenProps) {
  const [units, setUnits] = useState({
    distance: "Metric (km, m)",
    temperature: "Celsius (°C)",
    weight: "Kilograms (kg)"
  });

  const unitCategories = [
    { 
      id: "distance", 
      label: "Distance & Speed", 
      icon: Ruler, 
      options: ["Metric (km, m)", "Imperial (mi, ft)"],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    { 
      id: "temperature", 
      label: "Temperature", 
      icon: Thermometer, 
      options: ["Celsius (°C)", "Fahrenheit (°F)"],
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    { 
      id: "weight", 
      label: "Weight", 
      icon: Weight, 
      options: ["Kilograms (kg)", "Pounds (lb)"],
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
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
        <h1 className="text-xl font-bold">Measurement Units</h1>
      </header>

      <main className="flex-1 p-6 max-w-2xl mx-auto w-full space-y-8">
        {unitCategories.map((category) => (
          <section key={category.id}>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">{category.label}</p>
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              {category.options.map((option, index) => (
                <button 
                  key={option}
                  onClick={() => setUnits(prev => ({ ...prev, [category.id]: option }))}
                  className={`w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors ${index !== category.options.length - 1 ? 'border-b border-slate-50' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${units[category.id as keyof typeof units] === option ? category.bgColor : 'bg-slate-50'}`}>
                      <category.icon size={20} className={units[category.id as keyof typeof units] === option ? category.iconColor : 'text-slate-400'} />
                    </div>
                    <span className={`font-bold ${units[category.id as keyof typeof units] === option ? 'text-slate-900' : 'text-slate-600'}`}>{option}</span>
                  </div>
                  {units[category.id as keyof typeof units] === option && (
                    <div className={`w-8 h-8 rounded-full ${category.iconColor.replace('text-', 'bg-')} flex items-center justify-center`}>
                      <Check size={16} className="text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>
        ))}
      </main>
    </motion.div>
  );
}
