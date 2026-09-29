import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ContactTab: React.FC = () => {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSent, setFormSent] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setValidationError('Please fill in all fields before sending.');
      return;
    }

    setValidationError(null);

    // Build the mailto link with encoded parameters
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `Hi Naagasree,\n\n${formData.message.trim()}\n\n---\nSender Name: ${formData.name.trim()}\nSender Email: ${formData.email.trim()}`
    );

    const mailtoUrl = `mailto:${contact.email}?subject=${subject}&body=${body}`;

    // Open visitor's default email app
    window.location.href = mailtoUrl;

    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
    }, 6000);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setValidationError(null);
    setFormSent(false);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
          Contact
        </h2>
        <div className="w-14 h-1.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 rounded-full mt-2" />
      </div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
        I&apos;m always excited to connect regarding data science internships, web development projects, or academic collaborations. Feel free to reach out via direct details or send a message below.
      </p>

      {/* Contact Info Tiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Email Tile */}
        <div className="group p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-1">
              Email Address
            </span>
            <a
              href={`mailto:${contact.email}`}
              className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
            >
              {contact.email}
            </a>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">Direct response</span>
            <button
              type="button"
              onClick={() => handleCopy(contact.email, 'email')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 rounded p-1"
              title="Copy email address"
            >
              {copiedField === 'email' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500 text-[11px]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Phone Tile */}
        <div className="group p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 hover:border-purple-300 dark:hover:border-purple-700 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-900/60 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-3 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-1">
              Phone Number
            </span>
            <a
              href={`tel:${contact.phone}`}
              className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              +91 {contact.phone}
            </a>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">Mon - Sat (IST)</span>
            <button
              type="button"
              onClick={() => handleCopy(contact.phone, 'phone')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 rounded p-1"
              title="Copy phone number"
            >
              {copiedField === 'phone' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500 text-[11px]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Location Tile */}
        <div className="group p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 hover:border-cyan-300 dark:hover:border-cyan-700 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-100 dark:border-cyan-900/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-3 group-hover:scale-105 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-1">
              Location
            </span>
            <address className="not-italic text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
              {contact.location}
            </address>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">Hyderabad, India</span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
              IST Zone
            </span>
          </div>
        </div>
      </div>

      {/* Message Form Section */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 shadow-xs">
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
              Send a Message
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Submitting this form prepares and opens your email application with the message ready to send to Naagasree.
          </p>
        </div>

        {/* Feedback Alert Banner */}
        {formSent && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-start gap-3 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <span className="font-semibold block">Opening your email app...</span>
              Your message was encoded into a mailto link. If your email client did not automatically launch, you can send directly to{' '}
              <a href={`mailto:${contact.email}`} className="underline font-bold">
                {contact.email}
              </a>
              .
            </div>
          </div>
        )}

        {validationError && (
          <div className="mb-6 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs sm:text-sm">
            {validationError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name Input */}
            <div>
              <label
                htmlFor="sender-name"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5"
              >
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="sender-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Johnson"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="sender-email"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5"
              >
                Your Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="sender-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. alex@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="sender-message"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300"
              >
                Your Message <span className="text-rose-500">*</span>
              </label>
              <span className="text-[11px] text-slate-400">
                {formData.message.length} characters
              </span>
            </div>
            <textarea
              id="sender-message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Hi Naagasree, I saw your portfolio and would like to talk about..."
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all resize-y min-h-[110px]"
            />
          </div>

          {/* Form Actions */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset form</span>
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/25 transition-all hover:shadow-indigo-500/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
