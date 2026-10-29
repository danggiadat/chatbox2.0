import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Header({ activeTab, setActiveTab }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setActiveTab && setActiveTab('chat')}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-md shadow-emerald-500/20 text-white font-black text-xl">
              📚
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Vocab<span className="text-emerald-600">Chat</span>
                </span>
                <span className="px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200/60">
                  CEFR A1–B2
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Trợ lý tra cứu & học từ vựng tiếng Anh tương tác thông minh
              </p>
            </div>
          </div>

          {/* Mode Pill */}
          <div className="flex items-center space-x-1.5 px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs sm:text-sm font-extrabold shadow-2xs">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>Tra cứu & Chat</span>
          </div>

        </div>
      </div>
    </header>
  );
}
