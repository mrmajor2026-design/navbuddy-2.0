/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, Settings } from "lucide-react";

interface TermsOfServiceScreenProps {
  onBack: () => void;
  onSettings: () => void;
  onProfile?: () => void;
}

export default function TermsOfServiceScreen({ onBack, onSettings, onProfile }: TermsOfServiceScreenProps) {
  const sections = [
    {
      title: "1. Introduction",
      content: "Welcome to NavBuddy. By accessing or using our travel planning services, mobile application, and website, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services."
    },
    {
      title: "2. User Accounts",
      content: "To access certain features of NavBuddy, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.\n\nYou must provide accurate and complete information when creating an account and keep this information up to date."
    },
    {
      title: "3. Privacy Policy",
      content: "Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using NavBuddy, you consent to the collection and use of your data as outlined in our Privacy Policy."
    },
    {
      title: "4. Prohibited Activities",
      content: "You agree not to engage in any activities that may harm the service, other users, or violate any laws. This includes but is not limited to unauthorized access, data scraping, or distributing malicious software."
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
        <h1 className="text-4xl font-bold text-[#0F172A] mb-10">Terms of Service</h1>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={index} className="space-y-4">
              <h3 className="text-xl font-bold text-[#0F172A]">{section.title}</h3>
              <p className="text-[#64748B] leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
              {index < sections.length - 1 && (
                <div className="pt-8 border-b border-gray-50" />
              )}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
