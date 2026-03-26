/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, Plane, Hotel, Utensils, Globe, Clock } from "lucide-react";
import { motion } from "motion/react";

interface TravelPreferencesScreenProps {
  onBack: () => void;
}

export default function TravelPreferencesScreen({ onBack }: TravelPreferencesScreenProps) {
  const preferences = [
    { label: "Seat Preference", value: "Window Seat", icon: Plane },
    { label: "Dietary Requirements", value: "Vegetarian", icon: Utensils },
    { label: "Hotel Type", value: "Boutique Hotels", icon: Hotel },
    { label: "Language", value: "English, Spanish", icon: Globe },
    { label: "Flight Time", value: "Morning Flights", icon: Clock },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-white flex flex-col font-sans text-[#1A2B3C]"
    >
      <header className="p-6 flex items-center gap-4 border-b border-gray-50 sticky top-0 bg-white z-10">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">Travel Preferences</h1>
      </header>

      <main className="flex-1 p-6 max-w-2xl mx-auto w-full">
        <div className="space-y-8">
          {preferences.map((pref, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <pref.icon size={20} className="text-[#FF6B35]" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">{pref.label}</p>
                <p className="text-lg font-semibold text-[#0F172A]">{pref.value}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-12 py-4 bg-[#0F172A] text-white rounded-2xl font-bold text-lg hover:bg-[#1E293B] transition-colors shadow-lg shadow-gray-200">
          Update Preferences
        </button>
      </main>
    </motion.div>
  );
}
