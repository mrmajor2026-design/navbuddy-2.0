/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Check } from "lucide-react";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

interface CountdownTodoScreenProps {
  onBack: () => void;
}

export default function CountdownTodoScreen({ onBack }: CountdownTodoScreenProps) {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: "1", text: "Pack suitcases", completed: false },
    { id: "2", text: "Get travel insurance", completed: true },
    { id: "3", text: "Update app with travel details", completed: false },
    { id: "4", text: "Download language pack", completed: false },
    { id: "5", text: "Download offline maps", completed: false },
  ]);

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#1A2B3C]">
      {/* Header */}
      <header className="flex items-center px-6 py-6 sticky top-0 bg-white z-10">
        <button 
          onClick={onBack}
          className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <ArrowLeft size={20} className="text-[#0F172A]" />
        </button>
        <h2 className="flex-1 text-center text-xl font-bold text-[#0F172A] pr-10">NavBuddy</h2>
      </header>

      <main className="px-8 py-4 space-y-12 max-w-md mx-auto w-full flex flex-col items-center">
        {/* Countdown Section */}
        <div className="text-center space-y-4">
          <p className="text-[10px] font-bold text-[#94A3B8] tracking-[0.2em] uppercase">Days until Spain</p>
          <h1 className="text-[120px] font-bold leading-none tracking-tighter bg-gradient-to-b from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
            14
          </h1>
        </div>

        {/* To-Do Section */}
        <section className="w-full space-y-8">
          <h3 className="text-2xl font-bold text-[#0F172A]">To-Do Before Your Trip</h3>
          
          <div className="space-y-6">
            {todos.map((todo) => (
              <div 
                key={todo.id} 
                className="flex items-center justify-between group cursor-pointer"
                onClick={() => toggleTodo(todo.id)}
              >
                <span className={`text-lg font-semibold transition-colors ${todo.completed ? 'text-[#94A3B8]' : 'text-[#0F172A]'}`}>
                  {todo.text}
                </span>
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                  todo.completed 
                    ? 'bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] border-transparent' 
                    : 'border-gray-200 group-hover:border-gray-300'
                }`}>
                  {todo.completed && <Check size={16} className="text-white" strokeWidth={3} />}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Actions */}
        <div className="w-full pt-8 space-y-4 text-center">
          <button className="text-xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer">
            Save Changes
          </button>
          <p className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase">
            Auto-saved 2 mins ago
          </p>
        </div>
      </main>
    </div>
  );
}
