/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Sidebar from "./Sidebar";
import { 
  Menu, 
  Settings, 
  Info, 
  Pencil, 
  ArrowUpDown, 
  PiggyBank, 
  Home, 
  Coins, 
  Camera, 
  BriefcaseMedical,
  ChevronDown
} from "lucide-react";

interface CurrencyScreenProps {
  onHome: () => void;
  onCamera: () => void;
  onMed: () => void;
  onProfile: () => void;
  onSettings: () => void;
  onLogout: () => void;
  onTerms: () => void;
  onPrivacy: () => void;
  onCookies: () => void;
  onCountdownTodo: () => void;
}

export default function CurrencyScreen({ 
  onHome, 
  onCamera, 
  onMed, 
  onProfile, 
  onSettings,
  onLogout,
  onTerms,
  onPrivacy,
  onCookies,
  onCountdownTodo
}: CurrencyScreenProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [amount, setAmount] = useState("45.00");
  const [convertedAmount, setConvertedAmount] = useState("51.75");

  const keypad = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "C"];

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
          className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
        >
          <Menu size={24} className="text-[#0F172A]" />
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
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
          >
            <Settings size={24} className="text-[#0F172A]" />
          </button>
        </div>
      </header>

      <main className="flex-1 px-6 py-4 space-y-8 max-w-md mx-auto w-full">
        {/* Title Section */}
        <div className="text-center space-y-1">
          <h1 className="text-4xl font-bold text-[#0F172A]">Currency Converter</h1>
          <p className="text-[#94A3B8] font-medium">Real-time travel conversion</p>
        </div>

        {/* Current Rate Card */}
        <div className="bg-[#F8FAFC] rounded-[24px] p-6 flex items-center justify-between border border-gray-50">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#8B5CF6] rounded-full flex items-center justify-center text-white">
              <Info size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase">Current Rate</p>
              <p className="text-xl font-bold text-[#0F172A]">1 GBP = 1.15 EUR</p>
            </div>
          </div>
          <button className="p-2 text-[#94A3B8] hover:text-[#0F172A] transition-colors cursor-pointer">
            <Pencil size={20} />
          </button>
        </div>

        {/* Conversion Inputs */}
        <div className="relative space-y-4">
          {/* Top Input */}
          <div className="group relative p-[2px] rounded-[24px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#FB923C]" />
            <div className="relative w-full bg-white rounded-[22px] p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-[#94A3B8]">£</span>
                <span className="text-4xl font-bold text-[#0F172A]">{amount}</span>
              </div>
              <button className="flex items-center gap-2 bg-[#F8FAFC] px-4 py-2 rounded-xl font-bold text-[#0F172A] hover:bg-gray-100 transition-colors cursor-pointer">
                GBP <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* Swap Button */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#FB923C] p-[2px] shadow-lg hover:scale-110 transition-transform cursor-pointer">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[#EC4899]">
                <ArrowUpDown size={20} />
              </div>
            </button>
          </div>

          {/* Bottom Input */}
          <div className="group relative p-[2px] rounded-[24px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#FB923C]" />
            <div className="relative w-full bg-white rounded-[22px] p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-[#94A3B8]">€</span>
                <span className="text-4xl font-bold text-[#0F172A]">{convertedAmount}</span>
              </div>
              <button className="flex items-center gap-2 bg-[#F8FAFC] px-4 py-2 rounded-xl font-bold text-[#0F172A] hover:bg-gray-100 transition-colors cursor-pointer">
                EUR <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Set Budget Button */}
        <button className="w-full group relative p-[2px] rounded-full overflow-hidden transition-transform active:scale-[0.98] cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#FB923C]" />
          <div className="relative w-full bg-white rounded-full py-4 flex items-center justify-center gap-3">
            <PiggyBank size={20} className="text-[#EC4899]" />
            <span className="text-sm font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#FB923C]">
              SET BUDGET
            </span>
          </div>
        </button>

        {/* Keypad */}
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-3 grid grid-cols-3 gap-3">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "C"].map((key) => (
              <button 
                key={key}
                className="h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-2xl font-bold text-[#0F172A] hover:bg-gray-100 transition-colors cursor-pointer"
              >
                {key}
              </button>
            ))}
          </div>
          <div className="grid grid-rows-3 gap-3">
            <button className="bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-xl font-bold text-[#94A3B8] hover:bg-gray-100 transition-colors cursor-pointer">
              +
            </button>
            <button className="bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-xl font-bold text-[#94A3B8] hover:bg-gray-100 transition-colors cursor-pointer">
              -
            </button>
            <button className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-2xl flex items-center justify-center text-2xl font-bold text-white hover:opacity-90 transition-opacity cursor-pointer">
              =
            </button>
          </div>
        </div>
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
        <button className="flex flex-col items-center gap-1 text-[#EC4899] cursor-pointer">
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
