import React from 'react';
import { Layout, Database, GitBranch, Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData, ActivityCard } from '../../data/portfolioData';

interface AboutTabProps {
  onNavigateToPortfolio: () => void;
}

const getIcon = (iconName: ActivityCard['iconName']) => {
  switch (iconName) {
    case 'layout':
      return <Layout className="w-6 h-6 text-indigo-500" />;
    case 'database':
      return <Database className="w-6 h-6 text-purple-500" />;
    case 'code':
      return <GitBranch className="w-6 h-6 text-indigo-400" />;
    case 'sparkles':
      return <Sparkles className="w-6 h-6 text-amber-500" />;
    default:
      return <Sparkles className="w-6 h-6 text-indigo-500" />;
  }
};

export const AboutTab: React.FC<AboutTabProps> = ({ onNavigateToPortfolio }) => {
  const { about } = portfolioData;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Article Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
          About Me
        </h2>
        {/* Purple/Indigo gradient accent underline bar - vCard hallmark */}
        <div className="w-14 h-1.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 rounded-full mt-2" />
      </div>

      {/* About Paragraphs */}
      <section className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
        {about.paragraphs.map((p, index) => (
          <p key={index} className="text-pretty">
            {p}
          </p>
        ))}
      </section>

      {/* What I'm doing Section */}
      <section className="pt-2">
        <div className="mb-5">
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
            What I&apos;m doing
          </h3>
          <div className="w-10 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full mt-1.5" />
        </div>

        {/* 2x2 Grid of Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {about.whatImDoing.map((item) => (
            <div
              key={item.id}
              className="group relative p-5 sm:p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:shadow-indigo-500/5 transition-all duration-300 flex items-start gap-4"
            >
              {/* Icon Container with glowing purple/indigo styling */}
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200/60 dark:border-slate-700/80 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-indigo-400 dark:group-hover:border-indigo-500 transition-all duration-300">
                {getIcon(item.iconName)}
              </div>

              {/* Text content */}
              <div className="space-y-1.5 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-heading font-semibold text-slate-900 dark:text-white text-base sm:text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-400 shrink-0">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Call to Action Banner */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/30 border border-indigo-100/80 dark:border-indigo-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base">
            Interested in seeing my work?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
            Explore CivicsFix and the Job Website Analysis in the portfolio tab.
          </p>
        </div>
        <button
          type="button"
          onClick={onNavigateToPortfolio}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 whitespace-nowrap"
        >
          <span>View Projects</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
