/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, Bell, MessageSquare, Smartphone, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface NotificationsSettingsScreenProps {
  onBack: () => void;
}

export default function NotificationsSettingsScreen({ onBack }: NotificationsSettingsScreenProps) {
  const [settings, setSettings] = useState({
    push: true,
    email: false,
    sms: true,
    trips: true,
    offers: false
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const notificationOptions = [
    { id: "push", label: "Push Notifications", icon: Smartphone, description: "Receive alerts on your device" },
    { id: "email", label: "Email Notifications", icon: Mail, description: "Weekly summaries and trip updates" },
    { id: "sms", label: "SMS Notifications", icon: MessageSquare, description: "Urgent travel alerts via text" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-[#1A2B3C]"
    >
      <header className="p-6 flex items-center gap-4 bg-white border-b border-slate-100 sticky top-0 z-10">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-slate-50 rounded-full transition-colors cursor-pointer">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">Notifications</h1>
      </header>

      <main className="flex-1 p-6 max-w-2xl mx-auto w-full space-y-8">
        <section>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Channels</p>
          <div className="space-y-3">
            {notificationOptions.map((option) => (
              <div key={option.id} className="flex items-center justify-between p-5 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center">
                    <option.icon size={22} className="text-orange-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{option.label}</p>
                    <p className="text-xs text-slate-400 font-medium">{option.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => toggle(option.id as keyof typeof settings)}
                  className={`w-14 h-8 rounded-full transition-all relative ${settings[option.id as keyof typeof settings] ? 'bg-orange-600' : 'bg-slate-200'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${settings[option.id as keyof typeof settings] ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Trip Updates</p>
          <div className="p-5 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                <Bell size={22} className="text-blue-600" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Real-time Trip Alerts</p>
                <p className="text-xs text-slate-400 font-medium">Gate changes, delays, and more</p>
              </div>
            </div>
            <button 
              onClick={() => toggle('trips')}
              className={`w-14 h-8 rounded-full transition-all relative ${settings.trips ? 'bg-blue-600' : 'bg-slate-200'}`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${settings.trips ? 'left-7' : 'left-1'}`} />
            </button>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
