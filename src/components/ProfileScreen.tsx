/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, Settings, User, Plane, Lock, ChevronRight, Pencil } from "lucide-react";

interface ProfileScreenProps {
  onBack: () => void;
  onSettings: () => void;
}

export default function ProfileScreen({ onBack, onSettings }: ProfileScreenProps) {
  const menuItems = [
    {
      title: "Personal Information",
      icon: User,
      bgColor: "bg-[#FFF5F1]",
      iconColor: "text-[#FF6B35]"
    },
    {
      title: "Travel Preferences",
      icon: Plane,
      bgColor: "bg-[#FFF5F1]",
      iconColor: "text-[#FF6B35]"
    },
    {
      title: "Security Settings",
      icon: Lock,
      bgColor: "bg-[#FFF5F1]",
      iconColor: "text-[#FF6B35]"
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
        <button 
          onClick={onSettings}
          className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
        >
          <Settings size={24} className="text-[#0F172A]" />
        </button>
      </header>

      <main className="flex-1 px-6 py-12 max-w-2xl mx-auto w-full flex flex-col items-center">
        {/* Profile Image Section */}
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm ring-1 ring-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <button className="absolute bottom-1 right-1 w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center border-2 border-white shadow-sm cursor-pointer hover:bg-[#E85A2A] transition-colors">
            <Pencil size={14} className="text-white" />
          </button>
        </div>

        {/* Name and Email */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#0F172A] mb-1">Alex Johnson</h1>
          <p className="text-[#94A3B8] text-lg font-medium">alex.j@example.com</p>
        </div>

        {/* Menu Items */}
        <div className="w-full space-y-8 max-w-sm">
          {menuItems.map((item, index) => (
            <button 
              key={index}
              className="w-full flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center`}>
                  <item.icon size={24} className={item.iconColor} />
                </div>
                <span className="text-lg font-bold text-[#0F172A]">{item.title}</span>
              </div>
              <ChevronRight size={20} className="text-[#94A3B8] group-hover:text-[#64748B] transition-colors" />
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
