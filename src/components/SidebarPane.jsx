import React from 'react';
import { contactInfo } from '../data/resumeData';
import { Mail, MapPin, Linkedin, Copy, ExternalLink } from 'lucide-react';

export const SidebarPane = ({
  onCopyText
}) => {
  return (
    <aside className="w-full lg:w-80 xl:w-96 bg-sky-50/50 lg:bg-gradient-to-b lg:from-sky-50/80 lg:to-blue-50/30 border-b lg:border-b-0 lg:border-r border-sky-100 p-6 xl:p-8 flex flex-col justify-between shrink-0">
      <div className="space-y-6">
        
        {/* CONTACT DETAILS (Sidebar Style) */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-sky-700 font-heading mb-3 flex items-center gap-2">
            <span className="w-1.5 h-3.5 bg-sky-500 rounded-full"></span>
            Contact
          </h3>

          <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
            <li className="flex items-start gap-2.5 group">
              <Mail className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-sky-600 font-bold truncate block"
                  title={contactInfo.email}
                >
                  {contactInfo.email}
                </a>
              </div>
              <button
                onClick={() => onCopyText && onCopyText(contactInfo.email, "Email Address")}
                title="Copy Email"
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:text-sky-600 shrink-0"
              >
                <Copy className="w-3 h-3" />
              </button>
            </li>

            <li className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
              <span className="text-slate-600">{contactInfo.location}</span>
            </li>

            <li className="flex items-center gap-2.5">
              <Linkedin className="w-4 h-4 text-sky-600 shrink-0" />
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:underline font-bold inline-flex items-center gap-1"
              >
                abowen813 <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </li>
          </ul>
        </div>

      </div>

    </aside>
  );
};
