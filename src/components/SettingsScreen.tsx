/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, User, Bell, Globe, Ruler, Shield, HelpCircle, ChevronRight, Moon, LogOut } from "lucide-react";
import { motion } from "motion/react";

interface SettingsScreenProps {
  onBack: () => void;
  onProfile?: () => void;
  onNotifications: () => void;
  onLanguage: () => void;
  onUnits: () => void;
  onPrivacy: () => void;
  onHelp: () => void;
  onLogout: () => void;
}

export default function SettingsScreen({ 
  onBack, 
  onProfile,
  onNotifications,
  onLanguage,
  onUnits,
  onPrivacy,
  onHelp,
  onLogout
}: SettingsScreenProps) {
  const settingsItems = [
    {
      title: "Notifications",
      subtitle: "Manage your alerts",
      icon: Bell,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      onClick: onNotifications
    },
    {
      title: "Language",
      subtitle: "English (US)",
      icon: Globe,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      onClick: onLanguage
    },
    {
      title: "Units",
      subtitle: "Metric (km, m)",
      icon: Ruler,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      onClick: onUnits
    },
    {
      title: "Privacy & Security",
      subtitle: "Data and permissions",
      icon: Shield,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      onClick: onPrivacy
    },
    {
      title: "Help & Support",
      subtitle: "Get assistance and FAQs",
      icon: HelpCircle,
      bgColor: "bg-slate-50",
      iconColor: "text-slate-600",
      onClick: onHelp
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-[#1A2B3C]"
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-100 sticky top-0 z-10">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
        >
          <ArrowLeft size={24} className="text-slate-900" />
        </button>
        <h2 className="text-lg font-bold text-slate-900">Settings</h2>
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

      <main className="flex-1 max-w-2xl mx-auto w-full pb-12">
        {/* Appearance Section */}
        <div className="px-6 mt-8 space-y-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Appearance</p>
          <div className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center">
                <Moon size={22} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-base font-bold text-slate-900">Dark Mode</p>
                <p className="text-xs font-medium text-slate-400">System Default</p>
              </div>
            </div>
            <button className="w-14 h-8 bg-slate-200 rounded-full relative transition-all">
              <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-sm" />
            </button>
          </div>
        </div>

        {/* General Settings */}
        <div className="px-6 mt-10 space-y-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">General</p>
          <div className="space-y-3">
            {settingsItems.map((item, index) => (
              <motion.button 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={item.onClick}
                className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center`}>
                    <item.icon size={22} className={item.iconColor} />
                  </div>
                  <div className="text-left">
                    <p className="text-base font-bold text-slate-900">{item.title}</p>
                    <p className="text-xs font-medium text-slate-400">{item.subtitle}</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-slate-300 group-hover:text-slate-400 transition-colors" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Account Actions */}
        <div className="px-6 mt-12">
          <button 
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-3 p-5 bg-white rounded-2xl border border-red-100 text-red-600 font-bold hover:bg-red-50 transition-all cursor-pointer"
          >
            <LogOut size={20} />
            Sign Out
          </button>
          <p className="text-center mt-6 text-slate-400 text-xs font-medium">NavBuddy v2.4.0</p>
        </div>
      </main>
    </motion.div>
  );
}
