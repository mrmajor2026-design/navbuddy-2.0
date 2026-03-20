/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface LoginScreenProps {
  onBack: () => void;
  onSignUp: () => void;
  onLoginSuccess: () => void;
}

export default function LoginScreen({ onBack, onSignUp, onLoginSuccess }: LoginScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#1A2B3C]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
        >
          <ArrowLeft size={24} className="text-[#0F172A]" />
        </button>
        <h2 className="text-xl font-bold text-[#0F172A]">NavBuddy</h2>
        <div className="w-10" /> {/* Spacer for centering */}
      </header>

      <main className="flex-1 px-6 py-8 flex flex-col max-w-md mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Log In</h1>
          <p className="text-[#64748B]">Access your account to continue your journey</p>
        </motion.div>

        {/* Form */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#0F172A] ml-1">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full h-14 px-4 rounded-xl border border-gray-200 focus:border-[#60A5FA] focus:ring-2 focus:ring-[#60A5FA]/20 outline-none transition-all placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#0F172A] ml-1">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              className="w-full h-14 px-4 rounded-xl border border-gray-200 focus:border-[#60A5FA] focus:ring-2 focus:ring-[#60A5FA]/20 outline-none transition-all placeholder:text-gray-400"
            />
          </div>

          <div className="flex justify-end">
            <button className="text-sm font-medium text-[#94A3B8] hover:text-[#64748B] transition-colors cursor-pointer">
              Forgot Password?
            </button>
          </div>

          <button 
            onClick={onLoginSuccess}
            className="group relative w-full h-14 rounded-full p-[2px] overflow-hidden transition-transform active:scale-95 cursor-pointer mt-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#FB923C]" />
            <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center">
              <span className="text-lg font-semibold bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#FB923C] bg-clip-text text-transparent">
                Log In
              </span>
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-10 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <span className="relative px-4 bg-white text-xs font-medium text-[#94A3B8] uppercase tracking-wider">or</span>
        </div>

        {/* Social Logins */}
        <div className="space-y-4">
          <button className="group relative w-full h-14 rounded-full p-[2px] overflow-hidden transition-transform active:scale-95 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#FB923C]" />
            <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center gap-3">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
              <span className="text-base font-semibold bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#FB923C] bg-clip-text text-transparent">
                Continue with Google
              </span>
            </div>
          </button>

          <button className="group relative w-full h-14 rounded-full p-[2px] overflow-hidden transition-transform active:scale-95 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#FB923C]" />
            <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.039 2.48-4.5 2.597-4.584-1.429-2.09-3.623-2.324-4.402-2.376-1.636-.13-3.441 1.116-4.402 1.116zm2.48-4.87c.883-1.066 1.48-2.545 1.312-4.026-1.273.052-2.805.844-3.714 1.91-.818.948-1.532 2.442-1.338 3.883 1.415.11 2.857-.701 3.74-1.767z" />
              </svg>
              <span className="text-base font-semibold bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#FB923C] bg-clip-text text-transparent">
                Continue with Apple
              </span>
            </div>
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#64748B]">
            Don't have an account?{" "}
            <button 
              onClick={onSignUp}
              className="text-[#FB923C] font-bold hover:underline cursor-pointer"
            >
              Sign Up
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}
