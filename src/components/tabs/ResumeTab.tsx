import React from 'react';
import { GraduationCap, Code2, BookOpen, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ResumeTab: React.FC = () => {
  const { resume } = portfolioData;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
          Resume
        </h2>
        <div className="w-14 h-1.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 rounded-full mt-2" />
      </div>

      {/* Education Timeline Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
            Education
          </h3>
        </div>

        {/* Timeline list */}
        <div className="relative pl-6 sm:pl-8 ml-3.5 sm:ml-4 border-l-2 border-indigo-200 dark:border-indigo-900/80 space-y-6 pt-2">
          {resume.education.map((item) => (
            <div key={item.id} className="relative group">
              {/* Glowing Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-indigo-400 group-hover:scale-125 group-hover:bg-indigo-600 transition-all duration-200">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mx-auto mt-0.5 group-hover:bg-white" />
              </div>

              {/* Education Card Content */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60 group-hover:border-indigo-200 dark:group-hover:border-indigo-800/60 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                    {item.degree}
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/50">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                  {item.institution}
                </p>

                {item.description && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-900/60 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <Code2 className="w-5 h-5" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
            My Skills
          </h3>
        </div>

        {/* Primary Skills as Tags */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
            Core technologies and foundational skills applied in coursework & personal projects:
          </p>
          
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {resume.skills.map((skill) => (
              <div
                key={skill}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:scale-125 transition-transform" />
                <span className="font-heading font-semibold text-slate-800 dark:text-slate-200 text-sm">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Competency Breakdown with visual progress metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resume.skillCategories[0]?.items.map((skillItem) => (
            <div
              key={skillItem.name}
              className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs"
            >
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                <span className="text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  {skillItem.name}
                </span>
                <span className="text-indigo-600 dark:text-indigo-400 font-mono">
                  {skillItem.level}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700"
                  style={{ width: `${skillItem.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Focus & Growth Areas */}
      <section className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-800/50 dark:to-indigo-950/20 border border-slate-200/80 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-4 h-4 text-indigo-500" />
          <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base">
            Academic & Growth Focus
          </h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Currently balancing academic foundations in Computer Science & Data Analytics with hands-on practice in modern web architectures. Constantly experimenting with real-world problems and civic tech solutions.
        </p>
      </section>
    </div>
  );
};
