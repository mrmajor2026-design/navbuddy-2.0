/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, Settings } from "lucide-react";

interface PrivacyPolicyScreenProps {
  onBack: () => void;
  onSettings: () => void;
  onProfile?: () => void;
}

export default function PrivacyPolicyScreen({ onBack, onSettings, onProfile }: PrivacyPolicyScreenProps) {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, search for destinations, or communicate with our support team. This may include your name, email address, and location data when using navigation features."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, such as to process your bookings, personalize your travel recommendations, and send you technical notices and security alerts."
    },
    {
      title: "Data Security",
      content: "NavBuddy takes reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. We use industry-standard encryption to protect your personal data during transmission."
    },
    {
      title: "Your Choices",
      content: "You may update, correct or delete account information at any time by logging into your account settings or contacting us directly."
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
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-[#0F172A]">Privacy Policy</h1>
          <p className="text-sm text-[#94A3B8]">Last updated: October 24, 2023</p>
        </div>

        <div className="space-y-12 pt-4">
          {sections.map((section, index) => (
            <section key={index} className="space-y-4">
              <h3 className="text-xl font-bold text-[#0F172A]">{section.title}</h3>
              <p className="text-[#64748B] leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
