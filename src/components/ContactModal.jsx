import React, { useState } from 'react';
import { Mail, Copy, Check, Send, X } from 'lucide-react';
import { contactInfo } from '../data/resumeData';

export const ContactModal = ({
  isOpen,
  onClose,
  onCopyText
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl space-y-6 relative border border-sky-100" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-sky-50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <h3 className="text-xl font-black text-slate-900 font-heading tracking-tight uppercase">
            Get in Touch with Amila Bowen
          </h3>
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600 mt-1">
            Technical Support Specialist • Greater Tampa Bay Area, FL
          </p>
        </div>

        {/* Direct Quick Actions */}
        <div className="text-xs font-bold">
          <button
            onClick={() => onCopyText(contactInfo.email, "Email Address")}
            className="w-full p-3 rounded-xl bg-sky-50/60 border border-sky-200/80 hover:border-sky-500 flex items-center justify-between text-slate-800 transition-colors"
          >
            <div className="flex items-center gap-2 truncate">
              <Mail className="w-4 h-4 text-sky-600 shrink-0" />
              <span className="truncate">{contactInfo.email}</span>
            </div>
            <Copy className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3 bg-emerald-50/50 rounded-2xl border border-emerald-100">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Thank You!</h4>
            <p className="text-xs text-slate-600">
              Your message has been sent to Amila Bowen. She will reply promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 pt-2">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Smith"
                  className="w-full px-3 py-2 text-xs border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full px-3 py-2 text-xs border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-1">Message</label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                className="w-full px-3 py-2 text-xs border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
              ></textarea>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:bg-sky-50 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 rounded-xl flex items-center gap-1.5 shadow-xs transition-all"
              >
                <Send className="w-3.5 h-3.5" /> Send Inquiry
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
