/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, Settings, User, Plane, Lock, ChevronRight, Pencil, PhoneCall, ShieldCheck, CreditCard, Bell } from "lucide-react";
import { motion } from "motion/react";

interface ProfileScreenProps {
  onBack: () => void;
  onSettings: () => void;
  onPersonalInfo: () => void;
  onTravelPrefs: () => void;
  onSecurity: () => void;
  onEmergency: () => void;
}

export default function ProfileScreen({ 
  onBack, 
  onSettings, 
  onPersonalInfo, 
  onTravelPrefs, 
  onSecurity,
  onEmergency
}: ProfileScreenProps) {
  const menuItems = [
    {
      title: "Personal Information",
      subtitle: "Name, Email, Phone",
      icon: User,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      onClick: onPersonalInfo
    },
    {
      title: "Travel Preferences",
      subtitle: "Seats, Meals, Hotels",
      icon: Plane,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      onClick: onTravelPrefs
    },
    {
      title: "Security Settings",
      subtitle: "Password, 2FA",
      icon: Lock,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      onClick: onSecurity
    },
    {
      title: "Emergency Contacts",
      subtitle: "Trusted People",
      icon: PhoneCall,
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      onClick: onEmergency
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
        <h2 className="text-lg font-bold text-slate-900">Profile</h2>
        <button 
          onClick={onSettings}
          className="p-2 -mr-2 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
        >
          <Settings size={24} className="text-slate-900" />
        </button>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full pb-12">
        {/* Profile Card */}
        <div className="bg-white p-8 mb-6 border-b border-slate-100 flex flex-col items-center">
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl ring-1 ring-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <button className="absolute bottom-1 right-1 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border-4 border-white shadow-lg cursor-pointer hover:bg-slate-800 transition-colors">
              <Pencil size={16} className="text-white" />
            </button>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-1">Alex Johnson</h1>
            <p className="text-slate-500 font-medium">alex.j@example.com</p>
          </div>

          <div className="flex gap-4 mt-8 w-full max-w-xs">
            <div className="flex-1 bg-slate-50 p-4 rounded-2xl text-center">
              <p className="text-2xl font-bold text-slate-900">12</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trips</p>
            </div>
            <div className="flex-1 bg-slate-50 p-4 rounded-2xl text-center">
              <p className="text-2xl font-bold text-slate-900">4.9</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Rating</p>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="px-6 space-y-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Account Settings</p>
          {menuItems.map((item, index) => (
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

        {/* Support Section */}
        <div className="px-6 mt-10 space-y-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Support</p>
          <button className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 transition-all group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">
                <ShieldCheck size={22} className="text-slate-600" />
              </div>
              <div className="text-left">
                <p className="text-base font-bold text-slate-900">Privacy Center</p>
                <p className="text-xs font-medium text-slate-400">Data & Privacy</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-slate-300 group-hover:text-slate-400 transition-colors" />
          </button>
        </div>
      </main>
    </motion.div>
  );
}
