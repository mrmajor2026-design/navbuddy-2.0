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
  Map as MapIcon,
  Search,
  Navigation
} from "lucide-react";
import { motion } from "motion/react";

interface MapsScreenProps {
  onBack: () => void;
  onHome: () => void;
  onCurrency: () => void;
  onCamera: () => void;
  onMed: () => void;
  onProfile: () => void;
  onSettings: () => void;
}

export default function MapsScreen({ 
  onBack, 
  onHome, 
  onCurrency, 
  onCamera, 
  onMed,
  onProfile,
  onSettings
}: MapsScreenProps) {
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
      <main className="flex-1 px-6 pt-4 relative">
        <h2 className="text-4xl font-bold mb-2">Maps</h2>
        <p className="text-gray-500 text-lg mb-6">
          Explore your surroundings.
        </p>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search for a place..." 
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#4285F4] transition-all"
          />
        </div>

        {/* Map Placeholder */}
        <div className="flex-1 bg-gray-100 rounded-3xl overflow-hidden relative min-h-[400px]">
          <img 
            src="https://picsum.photos/seed/map/800/1200" 
            alt="Map Placeholder" 
            className="w-full h-full object-cover opacity-50 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl text-center shadow-xl">
              <MapIcon className="w-12 h-12 text-[#4285F4] mx-auto mb-4" />
              <p className="font-bold text-xl">Interactive Map</p>
              <p className="text-gray-500 text-sm">Map data loading...</p>
            </div>
          </div>

          {/* Floating Action Button */}
          <button className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-[#4285F4] text-white flex items-center justify-center shadow-2xl">
            <Navigation className="w-7 h-7" />
          </button>
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
