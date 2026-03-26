/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, Phone, User, Plus, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

interface EmergencyContactsScreenProps {
  onBack: () => void;
}

export default function EmergencyContactsScreen({ onBack }: EmergencyContactsScreenProps) {
  const contacts = [
    { name: "Jane Doe", relationship: "Spouse", phone: "+1 (555) 123-4567" },
    { name: "Robert Johnson", relationship: "Father", phone: "+1 (555) 987-6543" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-white flex flex-col font-sans text-[#1A2B3C]"
    >
      <header className="p-6 flex items-center gap-4 border-b border-gray-50 sticky top-0 bg-white z-10">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">Emergency Contacts</h1>
      </header>

      <main className="flex-1 p-6 max-w-2xl mx-auto w-full">
        <div className="bg-red-50 p-6 rounded-3xl mb-8 flex items-start gap-4 border border-red-100">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
            <ShieldAlert size={24} className="text-red-600" />
          </div>
          <div>
            <p className="text-red-900 font-bold mb-1">Emergency Mode</p>
            <p className="text-red-700 text-sm leading-relaxed">These contacts will be notified if you trigger the SOS feature in the app.</p>
          </div>
        </div>

        <div className="space-y-6">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center justify-between p-6 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <User size={20} className="text-slate-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{contact.name}</p>
                  <p className="text-sm text-slate-400 font-medium">{contact.relationship}</p>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-slate-900 hover:bg-slate-50 transition-colors">
                <Phone size={18} />
              </button>
            </div>
          ))}

          <button className="w-full py-6 rounded-3xl border-2 border-dashed border-slate-200 flex items-center justify-center gap-2 text-slate-400 font-bold hover:border-slate-300 hover:text-slate-500 transition-all">
            <Plus size={20} />
            Add New Contact
          </button>
        </div>
      </main>
    </motion.div>
  );
}
