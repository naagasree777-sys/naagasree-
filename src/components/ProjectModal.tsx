import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, BarChart2 } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { CivicsStepReport, CivicsStepTrack, CivicsStepFix, JobAnalysisIllustration } from './illustrations/ProjectIllustrations';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#1E293B] rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/60 inline-block mb-2">
            {project.category}
          </span>
          <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Project Visual Presentation */}
        <div className="mb-6 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 p-4">
          {project.id === 'civicsfix' ? (
            <div className="space-y-3">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                Workflow Overview (Report it → Track it → Fix it)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-3 border border-slate-200/80 dark:border-slate-700 text-center">
                  <div className="h-28 w-full mb-2">
                    <CivicsStepReport />
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">1. Report it</span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Submit civic concerns</p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-3 border border-slate-200/80 dark:border-slate-700 text-center">
                  <div className="h-28 w-full mb-2">
                    <CivicsStepTrack />
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">2. Track it</span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Real-time status updates</p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-3 border border-slate-200/80 dark:border-slate-700 text-center">
                  <div className="h-28 w-full mb-2">
                    <CivicsStepFix />
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">3. Fix it</span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Verified resolution</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-2">
              <div className="h-64 sm:h-72 w-full flex items-center justify-center">
                <JobAnalysisIllustration className="w-full h-full max-h-72 object-contain" />
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="space-y-4 mb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>{project.description}</p>
        </div>

        {/* Key Features / Takeaways */}
        {project.features && (
          <div className="mb-6">
            <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-3">
              Key Capabilities & Scope
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Analysis Metrics for Job Website Project */}
        {project.analysisMetrics && (
          <div className="mb-6 space-y-3">
            <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-purple-500" />
              <span>Audit Metric Observations</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.analysisMetrics.map((metric, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    <span>{metric.label}</span>
                    <span className="text-indigo-600 dark:text-indigo-400">{metric.score}%</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {metric.insight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions Footer */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <span>View live project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Github className="w-4 h-4" />
                <span>Code Repo</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
