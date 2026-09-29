import React from 'react';
import { User, FileText, Briefcase, Mail, Moon, Sun } from 'lucide-react';

export type TabId = 'about' | 'resume' | 'portfolio' | 'contact';

interface TabItem {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

const TABS: TabItem[] = [
  { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
  { id: 'resume', label: 'Resume', icon: <FileText className="w-4 h-4" /> },
  { id: 'portfolio', label: 'Portfolio', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
];

interface NavbarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  isDarkMode,
  onToggleDarkMode,
}) => {
  return (
    <nav
      className="bg-white/95 dark:bg-[#1E293B]/95 backdrop-blur-md rounded-2xl md:rounded-3xl border border-slate-200/80 dark:border-slate-800 p-2 sm:p-2.5 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-2"
      aria-label="Portfolio sections navigation"
    >
      {/* Navigation Tabs */}
      <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-0.5 max-w-full">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`relative flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dark Mode Toggle & Quick Info */}
      <div className="flex items-center gap-2 ml-auto">
        <button
          type="button"
          onClick={onToggleDarkMode}
          className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          title={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-600" />
          )}
        </button>
      </div>
    </nav>
  );
};
