/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Sidebar from "./Sidebar";
import { 
  Menu, 
  Settings, 
  Image as ImageIcon, 
  History, 
  Languages, 
  Home, 
  Coins, 
  Camera as CameraIcon, 
  BriefcaseMedical 
} from "lucide-react";

interface CameraScreenProps {
  onHome: () => void;
  onCurrency: () => void;
  onMed: () => void;
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

export default function CameraScreen({ 
  onHome, 
  onCurrency, 
  onMed, 
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
}: CameraScreenProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const translations = [
    {
      original: "Tortilla de Patatas",
      translated: "Spanish Omelet",
      top: "20%",
      left: "10%",
    },
    {
      original: "Gazpacho",
      translated: "Cold Tomato Soup",
      top: "35%",
      left: "45%",
    },
    {
      original: "Paella de Marisco",
      translated: "Seafood Paella",
      top: "50%",
      left: "10%",
    }
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col font-sans text-white pb-24 overflow-hidden">
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
        onMed={onMed}
        onMaps={onMaps}
      />

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 sticky top-0 bg-white z-10 text-[#0F172A]">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
        >
          <Menu size={24} />
        </button>
        <h2 className="text-xl font-bold">NavBuddy</h2>
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
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
          >
            <Settings size={24} />
          </button>
        </div>
      </header>

      {/* Camera Viewport */}
      <main className="flex-1 relative overflow-hidden">
        {/* Blurred Background (Simulating Camera Feed) */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1000&auto=format&fit=crop')",
            filter: "blur(4px)"
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />

        {/* AR Translation Overlays */}
        {translations.map((item, index) => (
          <div 
            key={index}
            className="absolute space-y-1 animate-in fade-in zoom-in duration-500"
            style={{ top: item.top, left: item.left }}
          >
            <div className="bg-[#FF6321] text-[10px] font-bold px-2 py-0.5 rounded-sm w-fit tracking-wider">
              SPANISH
            </div>
            <div className="bg-black/30 backdrop-blur-md border border-white/20 p-4 rounded-xl min-w-[180px]">
              <p className="text-xs text-white/60 line-through italic font-medium">
                {item.original}
              </p>
              <p className="text-xl font-bold text-white">
                {item.translated}
              </p>
            </div>
          </div>
        ))}

        {/* Bottom Controls Area */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-8 px-6">
          {/* Status Pill */}
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl">
            <Languages size={18} className="text-[#FF6321]" />
            <span className="text-sm font-medium tracking-wide">
              Translating Spanish to English...
            </span>
          </div>

          {/* Shutter Controls */}
          <div className="w-full flex items-center justify-between">
            <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <ImageIcon size={24} />
            </button>
            
            <button className="w-20 h-20 rounded-full border-4 border-white p-1.5 hover:scale-105 transition-transform cursor-pointer">
              <div className="w-full h-full bg-white rounded-full" />
            </button>
            
            <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <History size={24} />
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-100 px-6 py-3 flex justify-around items-center z-20 text-[#94A3B8]">
        <button 
          onClick={onHome}
          className="flex flex-col items-center gap-1 hover:text-[#64748B] transition-colors cursor-pointer"
        >
          <Home size={24} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
        </button>
        <button 
          onClick={onCurrency}
          className="flex flex-col items-center gap-1 hover:text-[#64748B] transition-colors cursor-pointer"
        >
          <Coins size={24} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Currency</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#EC4899] cursor-pointer">
          <CameraIcon size={24} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Camera</span>
        </button>
        <button 
          onClick={onMed}
          className="flex flex-col items-center gap-1 hover:text-[#64748B] transition-colors cursor-pointer"
        >
          <BriefcaseMedical size={24} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">
            <span>ME</span>
            <span>D</span>
          </span>
        </button>
      </nav>
    </div>
  );
}
