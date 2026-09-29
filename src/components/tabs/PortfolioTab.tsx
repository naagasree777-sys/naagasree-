import React, { useState } from 'react';
import { ExternalLink, Eye, Layers } from 'lucide-react';
import { portfolioData, ProjectItem } from '../../data/portfolioData';
import { CivicsStepReport, CivicsStepTrack, CivicsStepFix, JobAnalysisIllustration } from '../illustrations/ProjectIllustrations';
import { ProjectModal } from '../ProjectModal';

export const PortfolioTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Web Development' | 'Data & Research'>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const { projects } = portfolioData;

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
          Portfolio
        </h2>
        <div className="w-14 h-1.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 rounded-full mt-2" />
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 sm:gap-2 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl w-fit max-w-full overflow-x-auto">
        {(['All', 'Web Development', 'Data & Research'] as const).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`px-3.5 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              selectedCategory === category
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {filteredProjects.map((project) => {
          const isCivicsFix = project.id === 'civicsfix';

          return (
            <article
              key={project.id}
              className="rounded-3xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 overflow-hidden shadow-xs hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-900/60 transition-all duration-300"
            >
              {/* Card Main Container */}
              <div className="p-5 sm:p-7 space-y-6">
                {/* Project Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/60 inline-block mb-1.5">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Primary Project Action Buttons */}
                  <div className="flex items-center gap-2.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 text-slate-700 dark:text-slate-200 text-xs font-semibold shadow-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                      <Eye className="w-3.5 h-3.5 text-indigo-500" />
                      <span>Overview</span>
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs font-semibold shadow-sm shadow-indigo-500/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                      >
                        <span>View live project</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Illustrations Section */}
                {isCivicsFix ? (
                  /* CivicsFix: Three small pictures labeled "Report it", "Track it", "Fix it" */
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-indigo-500" />
                        Civic Issue Resolution Workflow
                      </span>
                      <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">
                        3-Step Community Process
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      {/* Step 1: Report it */}
                      <div className="group/step p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col">
                        <div className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-3 bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-2">
                          <CivicsStepReport className="w-full h-full object-contain group-hover/step:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="mt-auto">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold font-heading text-slate-900 dark:text-white">
                              Report it
                            </span>
                            <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950">
                              Step 01
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                            Snap geo-tagged photos and report community issues in seconds.
                          </p>
                        </div>
                      </div>

                      {/* Step 2: Track it */}
                      <div className="group/step p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col">
                        <div className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-3 bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-2">
                          <CivicsStepTrack className="w-full h-full object-contain group-hover/step:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="mt-auto">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold font-heading text-slate-900 dark:text-white">
                              Track it
                            </span>
                            <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 px-1.5 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950">
                              Step 02
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                            Follow live progress as municipal teams review and dispatch work.
                          </p>
                        </div>
                      </div>

                      {/* Step 3: Fix it */}
                      <div className="group/step p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col">
                        <div className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-3 bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-2">
                          <CivicsStepFix className="w-full h-full object-contain group-hover/step:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="mt-auto">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold font-heading text-slate-900 dark:text-white">
                              Fix it
                            </span>
                            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950">
                              Step 03
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                            Receive verified resolution proof and close out community tickets.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Job Website Analysis: Browser window with bar chart and magnifying glass */
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Browser Evaluation Mockup & Analytics Inspection
                      </span>
                      <span className="text-[11px] text-purple-600 dark:text-purple-400 font-medium">
                        UX Audit & Data Insights
                      </span>
                    </div>

                    <div className="w-full rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 p-4 sm:p-5 shadow-2xs">
                      <div className="w-full max-h-[300px] flex items-center justify-center">
                        <JobAnalysisIllustration className="w-full h-auto max-h-[280px]" />
                      </div>

                      {/* Summary points underneath */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="text-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                          <span className="block text-sm font-bold text-indigo-600 dark:text-indigo-400 font-mono">85%</span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">Search Match</span>
                        </div>
                        <div className="text-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                          <span className="block text-sm font-bold text-purple-600 dark:text-purple-400 font-mono">72%</span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">Filter Precision</span>
                        </div>
                        <div className="text-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                          <span className="block text-sm font-bold text-cyan-600 dark:text-cyan-400 font-mono">92%</span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">Mobile Ease</span>
                        </div>
                        <div className="text-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                          <span className="block text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono">88%</span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">Info Clarity</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
};
