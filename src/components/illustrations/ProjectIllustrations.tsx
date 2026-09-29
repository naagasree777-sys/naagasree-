import React from 'react';

/**
 * Three step illustrations for CivicsFix: "Report it", "Track it", "Fix it"
 */
export const CivicsStepReport: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 200 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Report it illustration"
  >
    <defs>
      <linearGradient id="repGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
      <filter id="shadowLight" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.15" />
      </filter>
    </defs>

    {/* Background card plate */}
    <rect width="200" height="150" rx="12" fill="#F1F5F9" className="dark:fill-slate-800/80" />
    
    {/* Road surface / neighborhood grid */}
    <path d="M20 120 L180 120" stroke="#CBD5E1" strokeWidth="3" strokeDasharray="6 6" className="dark:stroke-slate-700" />
    
    {/* Street light / civic post */}
    <path d="M45 120 V50 C45 42 55 42 62 42" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
    <circle cx="62" cy="45" r="4" fill="#FBBF24" />
    <path d="M62 49 L58 65 L66 65 Z" fill="#FDE047" opacity="0.3" />

    {/* Phone frame */}
    <g filter="url(#shadowLight)">
      <rect x="90" y="24" width="70" height="106" rx="8" fill="#FFFFFF" className="dark:fill-slate-900" stroke="#E2E8F0" className-dark="dark:stroke-slate-700" strokeWidth="1.5" />
      {/* Phone screen header */}
      <rect x="94" y="28" width="62" height="16" rx="4" fill="url(#repGrad)" />
      <circle cx="102" cy="36" r="3" fill="#FFFFFF" opacity="0.8" />
      <rect x="110" y="34" width="30" height="4" rx="2" fill="#FFFFFF" opacity="0.9" />

      {/* Camera viewfinder box on phone */}
      <rect x="98" y="50" width="54" height="40" rx="4" fill="#EEF2FF" className="dark:fill-slate-800" stroke="#818CF8" strokeWidth="1" strokeDasharray="3 3" />
      {/* Pothole / issue graphic inside viewfinder */}
      <ellipse cx="125" cy="72" rx="14" ry="7" fill="#64748B" />
      <ellipse cx="123" cy="71" rx="10" ry="4" fill="#334155" />

      {/* Location pin alert */}
      <g transform="translate(120, 56)">
        <path d="M5 0 C2.2 0 0 2.2 0 5 C0 8.8 5 14 5 14 C5 14 10 8.8 10 5 C10 2.2 7.8 0 5 0 Z" fill="url(#amberGrad)" />
        <circle cx="5" cy="5" r="2" fill="#FFFFFF" />
      </g>

      {/* Button "Submit Issue" */}
      <rect x="98" y="98" width="54" height="14" rx="4" fill="url(#repGrad)" />
      <text x="125" y="108" fill="#FFFFFF" fontSize="6" fontWeight="bold" textAnchor="middle">Snap & Report</text>
    </g>

    {/* Floating Alert pill */}
    <g filter="url(#shadowLight)">
      <rect x="25" y="65" width="56" height="22" rx="11" fill="#FFFFFF" className="dark:fill-slate-800" stroke="#FDE68A" strokeWidth="1" />
      <circle cx="36" cy="76" r="4" fill="#F59E0B" />
      <path d="M36 74 V77" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="36" cy="78.5" r="0.5" fill="#FFFFFF" />
      <text x="56" y="79" fill="#D97706" fontSize="7" fontWeight="bold" textAnchor="middle">New Alert</text>
    </g>
  </svg>
);

export const CivicsStepTrack: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 200 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Track it illustration"
  >
    <defs>
      <linearGradient id="trkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
      <filter id="trkShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.12" />
      </filter>
    </defs>

    {/* Background card plate */}
    <rect width="200" height="150" rx="12" fill="#F1F5F9" className="dark:fill-slate-800/80" />

    {/* Map Radar concentric circles */}
    <circle cx="65" cy="75" r="45" stroke="#818CF8" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
    <circle cx="65" cy="75" r="30" stroke="#818CF8" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
    <circle cx="65" cy="75" r="14" fill="#EEF2FF" className="dark:fill-indigo-950/60" stroke="#6366F1" strokeWidth="1.5" />
    <circle cx="65" cy="75" r="5" fill="#4F46E5" />

    {/* Radar sweep beam */}
    <path d="M65 75 L95 50" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="95" cy="50" r="3" fill="#8B5CF6" />

    {/* Progress Tracking Card on the right */}
    <g filter="url(#trkShadow)">
      <rect x="105" y="24" width="80" height="102" rx="8" fill="#FFFFFF" className="dark:fill-slate-900" stroke="#E2E8F0" strokeWidth="1" />
      
      {/* Header */}
      <rect x="113" y="32" width="45" height="5" rx="2" fill="#94A3B8" />
      <rect x="113" y="40" width="30" height="3" rx="1.5" fill="#CBD5E1" />

      {/* Status Timeline */}
      {/* Node 1: Logged */}
      <circle cx="118" cy="55" r="4" fill="#10B981" />
      <path d="M116.5 55 L117.5 56 L119.5 54" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="118" y1="59" x2="118" y2="71" stroke="#10B981" strokeWidth="1.5" />
      <rect x="126" y="53" width="40" height="4" rx="2" fill="#64748B" />

      {/* Node 2: Dispatched / In Progress */}
      <circle cx="118" cy="75" r="5" fill="url(#trkGrad)" />
      <circle cx="118" cy="75" r="2.5" fill="#FFFFFF" />
      <line x1="118" y1="80" x2="118" y2="92" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="2 2" />
      <rect x="126" y="73" width="50" height="5" rx="2" fill="#4F46E5" />

      {/* Node 3: Pending Final Fix */}
      <circle cx="118" cy="96" r="4" fill="#E2E8F0" className="dark:fill-slate-700" />
      <rect x="126" y="94" width="35" height="4" rx="2" fill="#CBD5E1" />

      {/* Status Badge */}
      <rect x="113" y="108" width="64" height="12" rx="6" fill="#EEF2FF" className="dark:fill-indigo-950/60" />
      <text x="145" y="116.5" fill="#4F46E5" fontSize="6.5" fontWeight="bold" textAnchor="middle">Dispatched · In Progress</text>
    </g>
  </svg>
);

export const CivicsStepFix: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 200 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Fix it illustration"
  >
    <defs>
      <linearGradient id="fixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#FBBF24" />
      </linearGradient>
      <filter id="fixShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.12" />
      </filter>
    </defs>

    {/* Background card plate */}
    <rect width="200" height="150" rx="12" fill="#F1F5F9" className="dark:fill-slate-800/80" />

    {/* Clean, repaired street pavement */}
    <rect x="25" y="95" width="150" height="35" rx="6" fill="#CBD5E1" className="dark:fill-slate-700/60" />
    <path d="M35 112 H165" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="8 6" opacity="0.8" />

    {/* Big Verified Seal in Center */}
    <g filter="url(#fixShadow)">
      {/* Badge Ring */}
      <circle cx="100" cy="55" r="32" fill="#FFFFFF" className="dark:fill-slate-900" stroke="#D1FAE5" strokeWidth="3" />
      <circle cx="100" cy="55" r="26" fill="url(#fixGrad)" />

      {/* Checkmark */}
      <path
        d="M90 55 L97 62 L111 48"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Confetti stars & sparkles */}
      <circle cx="56" cy="38" r="3" fill="#FBBF24" />
      <circle cx="144" cy="38" r="3" fill="#8B5CF6" />
      <circle cx="68" cy="78" r="2" fill="#4F46E5" />
      <circle cx="138" cy="74" r="2.5" fill="#10B981" />

      {/* Little star 1 */}
      <path d="M50 56 L52 50 L54 56 L60 58 L54 60 L52 66 L50 60 L44 58 Z" fill="url(#starGrad)" />
      {/* Little star 2 */}
      <path d="M148 58 L149.5 53 L151 58 L156 59.5 L151 61 L149.5 66 L148 61 L143 59.5 Z" fill="url(#starGrad)" />
    </g>

    {/* Resolution Card banner */}
    <g filter="url(#fixShadow)">
      <rect x="45" y="100" width="110" height="24" rx="12" fill="#FFFFFF" className="dark:fill-slate-900" stroke="#A7F3D0" strokeWidth="1.5" />
      <circle cx="58" cy="112" r="5" fill="#10B981" />
      <path d="M56 112 L57.5 113.5 L60.5 110.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <text x="70" y="115" fill="#047857" className="dark:fill-emerald-400" fontSize="8" fontWeight="bold">Issue Resolved & Verified</text>
    </g>
  </svg>
);

/**
 * Job Website Analysis Illustration:
 * "Use an illustration of a browser window with a bar chart and a magnifying glass."
 */
export const JobAnalysisIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 400 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Job Website Analysis browser window with bar chart and magnifying glass"
  >
    <defs>
      <linearGradient id="barGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="100%" stopColor="#6366F1" />
      </linearGradient>
      <linearGradient id="barGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#A855F7" />
      </linearGradient>
      <linearGradient id="barGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
      <linearGradient id="barGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#34D399" />
      </linearGradient>

      {/* Magnifying Glass Gradient */}
      <linearGradient id="lensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#EEF2FF" stopOpacity="0.4" />
      </linearGradient>

      <filter id="browserShadow" x="-5%" y="-5%" width="110%" height="115%">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodOpacity="0.1" />
      </filter>
      <filter id="glassShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="8" stdDeviation="6" floodOpacity="0.25" />
      </filter>
    </defs>

    {/* Browser Container Card */}
    <g filter="url(#browserShadow)">
      {/* Window Body */}
      <rect x="20" y="16" width="360" height="206" rx="12" fill="#FFFFFF" className="dark:fill-slate-900" stroke="#E2E8F0" className-dark="dark:stroke-slate-700" strokeWidth="1.5" />
      
      {/* Window Top Titlebar */}
      <path d="M20 28 C20 21.3726 25.3726 16 32 16 H368 C374.627 16 380 21.3726 380 28 V46 H20 V28 Z" fill="#F8FAFC" className="dark:fill-slate-800" />
      <line x1="20" y1="46" x2="380" y2="46" stroke="#E2E8F0" className="dark:stroke-slate-700" strokeWidth="1" />

      {/* Window Traffic Dots */}
      <circle cx="38" cy="31" r="4.5" fill="#EF4444" />
      <circle cx="52" cy="31" r="4.5" fill="#F59E0B" />
      <circle cx="66" cy="31" r="4.5" fill="#10B981" />

      {/* Browser URL address bar */}
      <rect x="85" y="24" width="200" height="15" rx="7.5" fill="#FFFFFF" className="dark:fill-slate-900" stroke="#CBD5E1" className-dark="dark:stroke-slate-700" strokeWidth="1" />
      <text x="96" y="34.5" fill="#64748B" fontSize="7" fontFamily="sans-serif">https://job-portal-audit.internal/insights</text>

      {/* Top right mini action pills */}
      <rect x="300" y="25" width="30" height="13" rx="4" fill="#EEF2FF" className="dark:fill-indigo-950/60" />
      <rect x="336" y="25" width="32" height="13" rx="4" fill="#4F46E5" />
      <text x="352" y="34" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" textAnchor="middle">Audit</text>

      {/* Subheader inside browser: Job Portal Evaluation Banner */}
      <rect x="36" y="58" width="130" height="8" rx="3" fill="#1E293B" className="dark:fill-slate-100" />
      <rect x="36" y="70" width="80" height="5" rx="2.5" fill="#94A3B8" />

      {/* Job Card Previews (Simulated Portal listings) */}
      <g opacity="0.85">
        {/* Listing 1 */}
        <rect x="36" y="86" width="115" height="34" rx="6" fill="#F8FAFC" className="dark:fill-slate-800/80" stroke="#E2E8F0" className-dark="dark:stroke-slate-700" strokeWidth="1" />
        <rect x="44" y="93" width="18" height="18" rx="4" fill="#4F46E5" />
        <rect x="68" y="93" width="45" height="5" rx="2" fill="#334155" className="dark:fill-slate-200" />
        <rect x="68" y="101" width="30" height="4" rx="1.5" fill="#94A3B8" />
        <circle cx="140" cy="96" r="2.5" fill="#10B981" />

        {/* Listing 2 */}
        <rect x="36" y="126" width="115" height="34" rx="6" fill="#F8FAFC" className="dark:fill-slate-800/80" stroke="#E2E8F0" className-dark="dark:stroke-slate-700" strokeWidth="1" />
        <rect x="44" y="133" width="18" height="18" rx="4" fill="#8B5CF6" />
        <rect x="68" y="133" width="50" height="5" rx="2" fill="#334155" className="dark:fill-slate-200" />
        <rect x="68" y="141" width="35" height="4" rx="1.5" fill="#94A3B8" />
        <circle cx="140" cy="136" r="2.5" fill="#10B981" />

        {/* Listing 3 */}
        <rect x="36" y="166" width="115" height="34" rx="6" fill="#F8FAFC" className="dark:fill-slate-800/80" stroke="#E2E8F0" className-dark="dark:stroke-slate-700" strokeWidth="1" />
        <rect x="44" y="173" width="18" height="18" rx="4" fill="#06B6D4" />
        <rect x="68" y="173" width="40" height="5" rx="2" fill="#334155" className="dark:fill-slate-200" />
        <rect x="68" y="181" width="28" height="4" rx="1.5" fill="#94A3B8" />
      </g>

      {/* Divider between job cards and Analytics Chart */}
      <line x1="165" y1="58" x2="165" y2="204" stroke="#F1F5F9" className="dark:stroke-slate-800" strokeWidth="1.5" />

      {/* Analytics Dashboard on Right */}
      <g transform="translate(178, 56)">
        <rect x="0" y="2" width="186" height="146" rx="8" fill="#F8FAFC" className="dark:fill-slate-800/50" stroke="#E2E8F0" className-dark="dark:stroke-slate-700" strokeWidth="1" />
        
        {/* Chart Header */}
        <text x="12" y="18" fill="#1E293B" className="dark:fill-slate-100" fontSize="9" fontWeight="bold">UX Metrics & Conversion Bar Chart</text>
        <text x="12" y="28" fill="#64748B" fontSize="6.5">Benchmarked Applicant Journey Analysis</text>

        {/* Bar Chart Grid Lines */}
        <line x1="16" y1="46" x2="170" y2="46" stroke="#E2E8F0" className="dark:stroke-slate-700" strokeWidth="0.8" strokeDasharray="2 2" />
        <line x1="16" y1="72" x2="170" y2="72" stroke="#E2E8F0" className="dark:stroke-slate-700" strokeWidth="0.8" strokeDasharray="2 2" />
        <line x1="16" y1="98" x2="170" y2="98" stroke="#E2E8F0" className="dark:stroke-slate-700" strokeWidth="0.8" strokeDasharray="2 2" />
        <line x1="16" y1="120" x2="170" y2="120" stroke="#CBD5E1" className="dark:stroke-slate-600" strokeWidth="1.2" />

        {/* Bar 1: Search Match (85%) */}
        <rect x="28" y="48" width="22" height="72" rx="4" fill="url(#barGrad1)" />
        <text x="39" y="44" fill="#4F46E5" fontSize="7" fontWeight="bold" textAnchor="middle">85%</text>
        <text x="39" y="130" fill="#64748B" fontSize="6.5" textAnchor="middle">Search</text>

        {/* Bar 2: Filters (72%) */}
        <rect x="64" y="60" width="22" height="60" rx="4" fill="url(#barGrad2)" />
        <text x="75" y="56" fill="#8B5CF6" fontSize="7" fontWeight="bold" textAnchor="middle">72%</text>
        <text x="75" y="130" fill="#64748B" fontSize="6.5" textAnchor="middle">Filters</text>

        {/* Bar 3: Usability (92%) */}
        <rect x="100" y="40" width="22" height="80" rx="4" fill="url(#barGrad3)" />
        <text x="111" y="36" fill="#0284C7" fontSize="7" fontWeight="bold" textAnchor="middle">92%</text>
        <text x="111" y="130" fill="#64748B" fontSize="6.5" textAnchor="middle">Mobile</text>

        {/* Bar 4: Retain (88%) */}
        <rect x="136" y="45" width="22" height="75" rx="4" fill="url(#barGrad4)" />
        <text x="147" y="41" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">88%</text>
        <text x="147" y="130" fill="#64748B" fontSize="6.5" textAnchor="middle">Clarity</text>

        {/* Trend Polyline */}
        <path
          d="M39 52 L75 62 L111 44 L147 48"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="39" cy="52" r="3" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1" />
        <circle cx="75" cy="62" r="3" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1" />
        <circle cx="111" cy="44" r="3" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1" />
        <circle cx="147" cy="48" r="3" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1" />
      </g>
    </g>

    {/* Big Foreground Magnifying Glass examining the chart */}
    <g filter="url(#glassShadow)" transform="translate(195, 80)">
      {/* Handle */}
      <path
        d="M74 74 L106 106 C109 109 114 109 117 106 C120 103 120 98 117 95 L85 63"
        stroke="#334155"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M78 78 L104 104"
        stroke="#4F46E5"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Metallic Rim */}
      <circle cx="45" cy="45" r="38" stroke="url(#barGrad1)" strokeWidth="6" fill="url(#lensGrad)" />
      
      {/* Glare Reflection */}
      <path
        d="M26 26 A28 28 0 0 1 64 26"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <circle cx="62" cy="58" r="3" fill="#FFFFFF" opacity="0.6" />

      {/* Magnified Insight badge inside lens */}
      <rect x="22" y="36" width="46" height="18" rx="6" fill="#1E1B4B" opacity="0.9" />
      <text x="45" y="48" fill="#A5B4FC" fontSize="7.5" fontWeight="bold" textAnchor="middle">UX AUDIT</text>
    </g>
  </svg>
);
