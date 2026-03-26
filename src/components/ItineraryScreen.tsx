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
  Calendar,
  Clock,
  MapPin,
  Plus
} from "lucide-react";
import { motion } from "motion/react";

interface ItineraryScreenProps {
  onBack: () => void;
  onHome: () => void;
  onCurrency: () => void;
  onCamera: () => void;
  onMed: () => void;
  onProfile: () => void;
  onSettings: () => void;
}

export default function ItineraryScreen({ 
  onBack, 
  onHome, 
  onCurrency, 
  onCamera, 
  onMed,
  onProfile,
  onSettings
}: ItineraryScreenProps) {
  const schedule = [
    {
      time: "09:00 AM",
      title: "Breakfast at Hotel",
      location: "Hotel Restaurant",
      icon: Clock
    },
    {
      time: "10:30 AM",
      title: "Visit Sagrada Familia",
      location: "Carrer de Mallorca, 401",
      icon: MapPin,
      highlight: true
    },
    {
      time: "01:00 PM",
      title: "Lunch at La Boqueria",
      location: "La Rambla, 91",
      icon: Clock
    },
    {
      time: "03:00 PM",
      title: "Park Güell Tour",
      location: "Gràcia, Barcelona",
      icon: MapPin
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
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-4xl font-bold">Itinerary</h2>
          <button className="w-10 h-10 rounded-full bg-[#4285F4] text-white flex items-center justify-center shadow-lg">
            <Plus className="w-6 h-6" />
          </button>
        </div>
        <p className="text-gray-500 text-lg mb-8">
          Your journey in Barcelona, Spain.
        </p>

        {/* Date Selector Placeholder */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {["Mon 20", "Tue 21", "Wed 22", "Thu 23"].map((date, i) => (
            <button 
              key={i}
              className={`px-6 py-3 rounded-2xl whitespace-nowrap font-semibold transition-all ${
                i === 0 ? "bg-[#1A2B3C] text-white" : "bg-gray-50 text-gray-400"
              }`}
            >
              {date}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100">
          {schedule.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10"
            >
              <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white shadow-sm z-10 ${
                item.highlight ? "bg-[#EA4335]" : "bg-[#4285F4]"
              }`} />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-[#4285F4] uppercase tracking-wider">{item.time}</span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
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
