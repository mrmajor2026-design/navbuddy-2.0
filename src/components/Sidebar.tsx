/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  Home, 
  Calendar, 
  Map, 
  MapPin, 
  Banknote, 
  Coins,
  Camera,
  BriefcaseMedical, 
  Gavel, 
  Download, 
  Languages, 
  User, 
  Settings, 
  FileText, 
  ShieldCheck,
  Cookie,
  LogOut,
  Timer
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  onTerms: () => void;
  onPrivacy: () => void;
  onCookies: () => void;
  onProfile: () => void;
  onSettings: () => void;
  onCountdownTodo: () => void;
}

export default function Sidebar({ 
  isOpen, 
  onClose, 
  onLogout, 
  onTerms, 
  onPrivacy, 
  onCookies, 
  onProfile, 
  onSettings,
  onCountdownTodo
}: SidebarProps) {
  const menuItems: { icon: any; label: string; active?: boolean; onClick?: () => void }[] = [
    { icon: Home, label: "Home", active: true },
    { icon: Timer, label: "Countdown/To-Do", onClick: onCountdownTodo },
    { icon: Calendar, label: "Itinerary Planner" },
    { icon: Map, label: "Maps" },
    { icon: MapPin, label: "Essential Locations" },
    { icon: Banknote, label: "Tipping Guide" },
    { icon: BriefcaseMedical, label: "Allergies" },
    { icon: Gavel, label: "Laws" },
    { icon: Download, label: "Download Maps" },
    { icon: Languages, label: "Download Language Packs" },
  ];

  const secondaryItems = [
    { icon: User, label: "Profile", onClick: onProfile },
    { icon: Settings, label: "Settings", onClick: onSettings },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100]"
          />

          {/* Sidebar Content */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-full max-w-[320px] bg-white z-[101] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <header className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
              <button 
                onClick={onClose}
                className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <X size={24} className="text-[#0F172A]" />
              </button>
              <h2 className="text-xl font-bold text-[#0F172A]">NavBuddy</h2>
              <div className="w-10" />
            </header>

            {/* Scrollable Menu */}
            <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (item.onClick) {
                      item.onClick();
                      onClose();
                    }
                  }}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all cursor-pointer ${
                    item.active 
                      ? "bg-gradient-to-r from-[#8B5CF6] to-[#FB923C] text-white shadow-lg shadow-orange-200" 
                      : "text-[#1A2B3C] hover:bg-gray-50"
                  }`}
                >
                  <item.icon size={22} className={item.active ? "text-white" : "text-[#1A2B3C]"} />
                  <span className="font-semibold text-base">{item.label}</span>
                </button>
              ))}

              <div className="my-4 border-t border-gray-50" />

              {secondaryItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-[#1A2B3C] hover:bg-gray-50 transition-all cursor-pointer"
                >
                  <item.icon size={22} className="text-[#1A2B3C]" />
                  <span className="font-semibold text-base">{item.label}</span>
                </button>
              ))}

              <div className="my-4 border-t border-gray-50" />

              <button 
                onClick={onTerms}
                className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-[#1A2B3C] hover:bg-gray-50 transition-all cursor-pointer text-left"
              >
                <FileText size={22} className="text-[#94A3B8]" />
                <span className="font-semibold text-base text-[#64748B]">Terms of Service</span>
              </button>

              <button 
                onClick={onPrivacy}
                className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-[#1A2B3C] hover:bg-gray-50 transition-all cursor-pointer text-left"
              >
                <ShieldCheck size={22} className="text-[#94A3B8]" />
                <span className="font-semibold text-base text-[#64748B]">Privacy Policy</span>
              </button>

              <button 
                onClick={onCookies}
                className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-[#1A2B3C] hover:bg-gray-50 transition-all cursor-pointer text-left"
              >
                <Cookie size={22} className="text-[#94A3B8]" />
                <span className="font-semibold text-base text-[#64748B]">Cookies Policy</span>
              </button>
            </div>

            {/* Footer / Logout */}
            <div className="p-6 border-t border-gray-50">
              <button 
                onClick={onLogout}
                className="flex items-center gap-4 px-4 py-2 text-[#EF4444] hover:bg-red-50 rounded-xl transition-all w-full cursor-pointer"
              >
                <LogOut size={22} />
                <span className="font-bold text-lg">Log Out</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
