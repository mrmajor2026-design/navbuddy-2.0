/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, Shield, BarChart3, Target, Settings } from "lucide-react";

interface CookiesPolicyScreenProps {
  onBack: () => void;
  onSettings: () => void;
  onProfile?: () => void;
}

export default function CookiesPolicyScreen({ onBack, onSettings, onProfile }: CookiesPolicyScreenProps) {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      description: "These are necessary for the app to function. They enable core features like security, network management, and accessibility.",
      icon: Shield,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      title: "Performance & Analytics",
      description: "These help us understand how visitors interact with our app by collecting and reporting information anonymously.",
      icon: BarChart3,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      title: "Marketing Cookies",
      description: "Used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.",
      icon: Target,
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
        <div className="flex gap-2">
          {onProfile && (
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
          )}
          <button 
            onClick={onSettings}
            className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
          >
            <Settings size={24} className="text-[#0F172A]" />
          </button>
        </div>
      </header>

      <main className="flex-1 px-6 py-8 max-w-2xl mx-auto w-full space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-[#0F172A]">Cookies Policy</h1>
          <p className="text-[#64748B] leading-relaxed">
            This Cookies Policy explains how NavBuddy uses cookies and similar technologies to recognize you when you visit our application and use our navigation services.
          </p>
        </div>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-[#0F172A]">What are cookies?</h3>
          <p className="text-[#64748B] leading-relaxed">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website or use an app. They are widely used by service providers to make their platforms work, or to work more efficiently, as well as to provide reporting information.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-[#0F172A]">How we use cookies</h3>
          
          <div className="space-y-8">
            {cookieTypes.map((type, index) => (
              <div key={index} className="flex gap-4">
                <div className={`w-12 h-12 shrink-0 rounded-xl ${type.bgColor} flex items-center justify-center`}>
                  <type.icon size={24} className={type.iconColor} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-[#0F172A]">{type.title}</h4>
                  <p className="text-[#64748B] leading-relaxed text-sm">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
