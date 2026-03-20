/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, User, Bell, Globe, Ruler, Shield, HelpCircle, ChevronRight } from "lucide-react";

interface SettingsScreenProps {
  onBack: () => void;
  onProfile?: () => void;
}

export default function SettingsScreen({ onBack, onProfile }: SettingsScreenProps) {
  const settingsItems = [
    {
      title: "Notifications",
      subtitle: "Manage your alerts",
      icon: Bell,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      title: "Language",
      subtitle: "English (US)",
      icon: Globe,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      title: "Units",
      subtitle: "Metric (km, m)",
      icon: Ruler,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      title: "Privacy & Security",
      subtitle: "Data and permissions",
      icon: Shield,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      title: "Help & Support",
      subtitle: "Get assistance and FAQs",
      icon: HelpCircle,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#1A2B3C]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-50 sticky top-0 bg-white z-10">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
        >
          <ArrowLeft size={24} className="text-[#0F172A]" />
        </button>
        <h2 className="text-xl font-bold text-[#0F172A]">NavBuddy</h2>
        {onProfile ? (
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
        ) : (
          <div className="w-10" />
        )}
      </header>

      <main className="flex-1 px-6 py-8 max-w-2xl mx-auto w-full space-y-6">
        {settingsItems.map((item, index) => (
          <button 
            key={index}
            className="w-full group relative p-[2px] rounded-[24px] overflow-hidden transition-transform active:scale-[0.98] cursor-pointer"
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#FB923C]" />
            
            {/* Content Container */}
            <div className="relative w-full bg-white rounded-[22px] p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center`}>
                  <item.icon size={24} className={item.iconColor} />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-[#0F172A] leading-tight">{item.title}</h4>
                  <p className="text-[#64748B] text-sm">{item.subtitle}</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-[#94A3B8] group-hover:text-[#64748B] transition-colors" />
            </div>
          </button>
        ))}
      </main>
    </div>
  );
}
