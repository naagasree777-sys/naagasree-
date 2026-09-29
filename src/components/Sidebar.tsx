import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ChevronDown, ChevronUp, Copy, Check, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface SidebarProps {
  onOpenContactTab?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onOpenContactTab }) => {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const { personal, contact } = portfolioData;

  const handleCopy = (text: string, field: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <aside
      className="w-full lg:w-[290px] xl:w-[320px] shrink-0 bg-white dark:bg-[#1E293B] rounded-2xl md:rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200/80 dark:border-slate-800 transition-all duration-300 relative z-10 lg:sticky lg:top-8"
      aria-label="Personal Profile and Contacts"
    >
      {/* Profile Header Block */}
      <div className="flex flex-col items-center text-center">
        {/* Initials Avatar */}
        <div className="relative mb-4 group">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-600 p-[3px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/35 transition-all duration-300">
            <div className="w-full h-full bg-slate-900 rounded-[21px] sm:rounded-[22px] flex items-center justify-center relative overflow-hidden">
              {/* Background gradient decorative glow inside avatar */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-transparent pointer-events-none" />
              
              {/* "NG" Monogram */}
              <span className="font-heading font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-200 tracking-wider select-none">
                {personal.initials}
              </span>
            </div>
          </div>

          {/* Active status beacon */}
          <span
            className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"
            title="Available for projects & roles"
            aria-label="Online status active"
          />
        </div>

        {/* Name */}
        <h1 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
          {personal.name}
        </h1>

        {/* Role Badge */}
        <div className="mt-2 inline-flex items-center px-3.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 border border-slate-200/70 dark:border-slate-700">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 animate-pulse" />
          {personal.role}
        </div>

        {/* Mobile toggle button: "Show contacts" / "Hide contacts" */}
        <button
          type="button"
          onClick={() => setIsOpenMobile((prev) => !prev)}
          className="lg:hidden mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          aria-expanded={isOpenMobile}
          aria-controls="sidebar-contact-info"
        >
          <span>{isOpenMobile ? 'Hide contacts' : 'Show contacts'}</span>
          {isOpenMobile ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Contact Details List - Collapsible on Mobile, always shown on Desktop */}
      <div
        id="sidebar-contact-info"
        className={`${
          isOpenMobile ? 'block' : 'hidden'
        } lg:block mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80 transition-all duration-300`}
      >
        <ul className="space-y-4" role="list">
          {/* Email Item */}
          <li className="flex items-start gap-3.5 group/item">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 group-hover/item:scale-105 transition-transform">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-400">
                Email
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                title={`Send email to ${contact.email}`}
              >
                {contact.email}
              </a>
            </div>
            <button
              type="button"
              onClick={(e) => handleCopy(contact.email, 'email', e)}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              title="Copy email address"
              aria-label="Copy email address"
            >
              {copiedField === 'email' ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </li>

          {/* Phone Item */}
          <li className="flex items-start gap-3.5 group/item">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-100 dark:border-purple-900/60 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 group-hover/item:scale-105 transition-transform">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-400">
                Phone
              </span>
              <a
                href={`tel:${contact.phone}`}
                className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                title={`Call ${contact.phone}`}
              >
                +91 {contact.phone}
              </a>
            </div>
            <button
              type="button"
              onClick={(e) => handleCopy(contact.phone, 'phone', e)}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              title="Copy phone number"
              aria-label="Copy phone number"
            >
              {copiedField === 'phone' ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </li>

          {/* Location Item */}
          <li className="flex items-start gap-3.5 group/item">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover/item:scale-105 transition-transform">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-400">
                Location
              </span>
              <address className="not-italic text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                {contact.location}
              </address>
            </div>
          </li>
        </ul>

        {/* Social Links & Action */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* LinkedIn */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#0077B5] hover:text-white dark:bg-slate-800 dark:hover:bg-[#0077B5] text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              title="Visit LinkedIn Profile"
              aria-label="LinkedIn profile of Naagasree Govindula"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* GitHub */}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              title="Visit GitHub Profile"
              aria-label="GitHub profile of Naagasree Govindula"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {onOpenContactTab && (
            <button
              type="button"
              onClick={onOpenContactTab}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1.5 py-0.5"
            >
              <span>Get in touch</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
