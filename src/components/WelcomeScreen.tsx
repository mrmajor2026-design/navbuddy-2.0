/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MapPin } from "lucide-react";

interface WelcomeScreenProps {
  onSignUp: () => void;
  onLogin: () => void;
  onTerms: () => void;
  onPrivacy: () => void;
  onCookies: () => void;
}

export default function WelcomeScreen({ onSignUp, onLogin, onTerms, onPrivacy, onCookies }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between py-12 px-6 font-sans text-[#1A2B3C]">
      {/* Top Section: Logo and Slogan */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 flex flex-col items-center justify-center text-center"
      >
        {/* Icon Container */}
        <div className="w-32 h-32 bg-[#F0F7FF] rounded-[32px] flex items-center justify-center mb-8 shadow-sm">
          <div className="relative">
            <svg width="48" height="48" viewBox="0 0 24 24" className="absolute inset-0">
              <defs>
                <linearGradient id="pin-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
              <path
                d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
                fill="none"
                stroke="url(#pin-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="10"
                r="3"
                fill="none"
                stroke="url(#pin-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-5xl font-bold tracking-tight mb-4 text-[#0F172A]">
          NavBuddy
        </h1>
        <p className="text-xl text-[#64748B] max-w-[280px] leading-relaxed">
          Your ultimate travel assistant for every journey.
        </p>
      </motion.div>

      {/* Bottom Section: Buttons and Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="w-full max-w-sm flex flex-col gap-4 items-center"
      >
        {/* Sign Up Button */}
        <button 
          onClick={onSignUp}
          className="group relative w-full h-16 rounded-full p-[2px] overflow-hidden transition-transform active:scale-95 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#FB923C]" />
          <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center">
            <span className="text-xl font-semibold bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#FB923C] bg-clip-text text-transparent">
              Sign Up
            </span>
          </div>
        </button>

        {/* Log In Button */}
        <button 
          onClick={onLogin}
          className="group relative w-full h-16 rounded-full p-[2px] overflow-hidden transition-transform active:scale-95 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#FB923C]" />
          <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center">
            <span className="text-xl font-semibold bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#FB923C] bg-clip-text text-transparent">
              Log In
            </span>
          </div>
        </button>

        {/* Footer Links */}
        <div className="flex gap-6 mt-8 text-sm text-[#94A3B8]">
          <button 
            onClick={onTerms}
            className="hover:text-[#64748B] transition-colors cursor-pointer"
          >
            Terms of Service
          </button>
          <button 
            onClick={onPrivacy}
            className="hover:text-[#64748B] transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <button 
            onClick={onCookies}
            className="hover:text-[#64748B] transition-colors cursor-pointer"
          >
            Cookies
          </button>
        </div>
      </motion.div>
    </div>
  );
}
