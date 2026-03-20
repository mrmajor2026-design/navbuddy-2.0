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
  Plus, 
  Home, 
  Coins, 
  Camera, 
  BriefcaseMedical,
  Asterisk
} from "lucide-react";

interface DashboardScreenProps {
  onLogout: () => void;
  onTerms: () => void;
  onPrivacy: () => void;
  onCookies: () => void;
  onProfile: () => void;
  onSettings: () => void;
  onCurrency: () => void;
  onCamera: () => void;
  onMed: () => void;
  onCountdownTodo: () => void;
}

export default function DashboardScreen({ 
  onLogout, 
  onTerms, 
  onPrivacy, 
  onCookies, 
  onProfile, 
  onSettings,
  onCurrency,
  onCamera,
  onMed,
  onCountdownTodo
}: DashboardScreenProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const companions = [
    { name: "Sarah", avatar: "https://picsum.photos/seed/sarah/100/100" },
    { name: "James", avatar: "https://picsum.photos/seed/james/100/100" },
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
      />

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 sticky top-0 bg-white z-10">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <Menu size={20} className="text-[#0F172A]" />
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

      <main className="px-6 py-4 space-y-8 max-w-md mx-auto w-full">
        {/* Current Stay Section */}
        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <h3 className="text-2xl font-bold text-[#0F172A]">Current Stay</h3>
            <span className="text-[#EC4899] font-semibold text-sm">Madrid, Spain</span>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[32px] overflow-hidden shadow-xl shadow-gray-100 border border-gray-50"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" 
                alt="Hotel Room"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex justify-between items-center">
              <div>
                <h4 className="text-xl font-bold text-[#0F172A]">Hotel Meliá Madrid</h4>
                <p className="text-[#94A3B8] font-medium mt-1">Room 402 • Deluxe Suite</p>
              </div>
              <button className="p-2 text-[#94A3B8] hover:text-[#0F172A] transition-colors cursor-pointer">
                <Pencil size={20} />
              </button>
            </div>
          </motion.div>
        </section>

        {/* Travel Companions Section */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-[#0F172A]">Travel Companions</h3>
          <div className="flex gap-6">
            {companions.map((companion) => (
              <div key={companion.name} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img src={companion.avatar} alt={companion.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <span className="text-sm font-semibold text-[#0F172A]">{companion.name}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-2">
              <button className="w-16 h-16 rounded-full bg-[#F8FAFC] flex items-center justify-center text-[#94A3B8] hover:bg-gray-100 transition-colors cursor-pointer">
                <Plus size={24} />
              </button>
              <span className="text-sm font-semibold text-[#94A3B8]">Add</span>
            </div>
          </div>
        </section>

        {/* Emergency Numbers Section */}
        <section className="bg-[#F8FAFC] rounded-[40px] p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <Asterisk size={20} className="text-[#EC4899]" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A]">Emergency Numbers</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50">
              <p className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase mb-1">Police</p>
              <p className="text-3xl font-bold text-[#8B5CF6]">091</p>
            </div>
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50">
              <p className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase mb-1">Ambulance</p>
              <p className="text-3xl font-bold text-[#8B5CF6]">061</p>
            </div>
          </div>

          <button className="w-full py-4 bg-white rounded-full text-[#FB923C] font-bold shadow-sm hover:shadow-md transition-all cursor-pointer">
            Show All Contacts
          </button>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-100 px-6 py-3 flex justify-around items-center z-20">
        <button className="flex flex-col items-center gap-1 text-[#EC4899] cursor-pointer">
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
        <button 
          onClick={onMed}
          className="flex flex-col items-center gap-1 text-[#94A3B8] hover:text-[#64748B] transition-colors cursor-pointer"
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
