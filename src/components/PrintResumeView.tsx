import React from 'react';
import { contactInfo, experiences, skillCategories, educationList, certificationsList } from '../data/resumeData';

export const PrintResumeView: React.FC = () => {
  return (
    <div className="hidden print:block p-8 bg-white text-slate-900 font-sans max-w-4xl mx-auto space-y-6">
      
      {/* Print Header */}
      <div className="border-b-2 border-slate-900 pb-4">
        <h1 className="text-3xl font-black uppercase text-slate-900 tracking-tight font-heading">
          {contactInfo.name}
        </h1>
        <p className="text-base font-semibold text-slate-700">
          {contactInfo.title}
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-700 mt-2 font-medium">
          <span>📍 {contactInfo.location}</span>
          <span>•</span>
          <span>✉️ {contactInfo.email}</span>
          <span>•</span>
          <span>🔗 {contactInfo.linkedin}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="space-y-1">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
          About Me
        </h2>
        <p className="text-xs leading-relaxed text-slate-800">
          {contactInfo.aboutMe}
        </p>
      </div>

      {/* Skills Summary Grid */}
      <div className="space-y-1">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
          Technical Skills & Core Competencies
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs pt-1">
          {skillCategories.map((cat) => (
            <div key={cat.categoryKey} className="space-y-0.5">
              <span className="font-bold text-slate-900">{cat.title}: </span>
              <span className="text-slate-700">{cat.skills.join(', ')}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
          Work Experience
        </h2>

        {experiences.map((exp) => (
          <div key={exp.id} className="space-y-1 print-break-inside-avoid">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-slate-900 text-xs">
                {exp.role} <span className="font-semibold text-slate-700">| {exp.company}</span>
              </h3>
              <span className="text-[11px] font-bold text-slate-700">
                {exp.period} ({exp.location})
              </span>
            </div>

            {exp.companyDescription && (
              <p className="text-[10px] italic text-slate-600">{exp.companyDescription}</p>
            )}

            <ul className="list-disc list-inside text-[11px] text-slate-800 space-y-0.5 pl-1">
              {exp.highlights.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education & Certifications */}
      <div className="grid grid-cols-2 gap-6 pt-2 border-t border-slate-200">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2">
            Education
          </h2>
          {educationList.map((edu) => (
            <div key={edu.id} className="text-xs space-y-0.5 mb-2">
              <div className="font-bold text-slate-900">{edu.degree}</div>
              <div className="text-slate-700">{edu.institution} ({edu.period})</div>
              {edu.honors && <div className="text-[10px] font-semibold text-slate-800">★ {edu.honors}</div>}
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2">
            Certifications
          </h2>
          {certificationsList.map((cert) => (
            <div key={cert.id} className="text-xs mb-1">
              <span className="font-bold text-slate-900">{cert.name}</span>
              <span className="text-slate-600"> — {cert.issuer} ({cert.year})</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
