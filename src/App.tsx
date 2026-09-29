/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Navbar, TabId } from './components/Navbar';
import { AboutTab } from './components/tabs/AboutTab';
import { ResumeTab } from './components/tabs/ResumeTab';
import { PortfolioTab } from './components/tabs/PortfolioTab';
import { ContactTab } from './components/tabs/ContactTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('about');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check localStorage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('ng_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Sync dark class on documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('ng_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('ng_theme', 'light');
    }
  }, [isDarkMode]);

  // Listen to system preference changes if no manual override
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem('ng_theme');
      if (!savedTheme) {
        setIsDarkMode(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#111827] text-slate-800 dark:text-slate-100 transition-colors duration-300 antialiased py-6 sm:py-10 px-3 sm:px-6 lg:px-8">
      {/* Background ambient gradient glow accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main 2-column vCard Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          {/* Left Column: Sticky Profile Sidebar */}
          <Sidebar onOpenContactTab={() => setActiveTab('contact')} />

          {/* Right Column: Main Content Panel */}
          <main className="w-full flex-1 min-w-0">
            {/* Top Navigation Bar with Tabs */}
            <Navbar
              activeTab={activeTab}
              onTabChange={(tab) => setActiveTab(tab)}
              isDarkMode={isDarkMode}
              onToggleDarkMode={handleToggleDarkMode}
            />

            {/* Dynamic Content Panel Card */}
            <div className="bg-white dark:bg-[#1E293B] rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-9 shadow-sm border border-slate-200/80 dark:border-slate-800 transition-all duration-300">
              {activeTab === 'about' && (
                <AboutTab onNavigateToPortfolio={() => setActiveTab('portfolio')} />
              )}
              {activeTab === 'resume' && <ResumeTab />}
              {activeTab === 'portfolio' && <PortfolioTab />}
              {activeTab === 'contact' && <ContactTab />}
            </div>

            {/* Quiet Footer */}
            <footer className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400 space-y-1">
              <p>
                © 2026 Naagasree Govindula <span aria-hidden="true">·</span> Data science student
              </p>
              <p className="text-[11px] text-slate-400 dark:text-slate-500">
                Responsive vCard Portfolio <span aria-hidden="true">·</span> Boduppal, Hyderabad
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
