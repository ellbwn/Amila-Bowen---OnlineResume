import React from 'react';
import { contactInfo, experiences, skillCategories, educationList, certificationsList } from '../data/resumeData';
import { Search, X, Check, Award, Server, Wrench, ShieldCheck, DatabaseBackup, Activity, GraduationCap, CheckCircle2 } from 'lucide-react';

export const MainContentPane = ({
  searchQuery,
  onSearchChange,
  selectedSkillFilter,
  onSelectSkillFilter,
  onCopyText,
  onOpenContactModal
}) => {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Server': return <Server className="w-5 h-5 text-blue-600" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-sky-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-indigo-600" />;
      case 'DatabaseBackup': return <DatabaseBackup className="w-5 h-5 text-teal-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-cyan-600" />;
      default: return <Server className="w-5 h-5 text-blue-600" />;
    }
  };

  // Filter experiences based on search query and skill selection
  const filteredExperiences = experiences.filter((exp) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      exp.company.toLowerCase().includes(query) ||
      exp.role.toLowerCase().includes(query) ||
      exp.highlights.some(h => h.toLowerCase().includes(query)) ||
      exp.skills.some(s => s.toLowerCase().includes(query));

    const matchesSkill = !selectedSkillFilter || 
      exp.skills.some(s => s.toLowerCase() === selectedSkillFilter.toLowerCase()) ||
      exp.highlights.some(h => h.toLowerCase().includes(selectedSkillFilter.toLowerCase()));

    return matchesSearch && matchesSkill;
  });

  return (
    <main className="flex-1 p-6 sm:p-8 xl:p-10 space-y-10 min-w-0">
      
      {/* HEADER SECTION - Amila Bowen */}
      <header id="about" className="space-y-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading leading-tight">
            Amila Bowen
          </h1>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-600 mt-1">
            {contactInfo.title} • {contactInfo.location}
          </p>
        </div>

        {/* Professional Summary */}
        <div className="bg-sky-50/50 p-5 sm:p-6 rounded-2xl border border-sky-100/80 shadow-2xs">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {contactInfo.aboutMe}
          </p>
        </div>
      </header>

      {/* SEARCH BAR */}
      <section className="bg-gradient-to-r from-sky-50/80 via-blue-50/50 to-sky-50 border border-sky-200/80 rounded-2xl p-4 sm:p-5 no-print shadow-2xs">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-sky-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search experience, skills (e.g. PACS, PowerShell, VMware)..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-sky-200 rounded-xl text-xs font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {(searchQuery || selectedSkillFilter) && (
            <button
              onClick={() => {
                onSearchChange('');
                onSelectSkillFilter(null);
              }}
              className="text-xs font-bold text-sky-700 hover:text-sky-900 underline px-2 self-end sm:self-center shrink-0"
            >
              Clear Filters
            </button>
          )}
        </div>
      </section>

      {/* WORK EXPERIENCE SECTION */}
      <section id="experience" className="space-y-6">
        <div className="flex justify-between items-center border-b border-sky-100 pb-3">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-sky-700 font-heading flex items-center gap-2">
            <span className="w-2 h-4 bg-sky-500 rounded-full"></span>
            Professional Experience
          </h2>
          <span className="text-xs font-bold text-slate-600">
            {filteredExperiences.length} {filteredExperiences.length === 1 ? 'Role' : 'Roles'}
          </span>
        </div>

        <div className="space-y-8">
          {filteredExperiences.map((exp) => (
            <article
              key={exp.id}
              className="group relative bg-white rounded-2xl p-6 border border-sky-100 hover:border-sky-300 transition-all shadow-2xs hover:shadow-md"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight font-heading group-hover:text-sky-700 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-sm font-extrabold text-sky-700">{exp.company}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-semibold text-slate-500">{exp.location}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-sky-50 text-sky-700 border border-sky-100">
                      {exp.workMode}
                    </span>
                  </div>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <div className="text-xs font-extrabold text-slate-800 bg-sky-50/80 px-3 py-1 rounded-full border border-sky-100 inline-block">
                    {exp.period}
                  </div>
                  {exp.duration && (
                    <div className="text-[10px] font-semibold text-slate-600 mt-1">{exp.duration}</div>
                  )}
                </div>
              </div>

              {/* Company Description */}
              {exp.companyDescription && (
                <p className="text-xs text-slate-600 italic mb-4 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                  "{exp.companyDescription}"
                </p>
              )}

              {/* Special Awards/Recognitions if any */}
              {exp.awards && exp.awards.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {exp.awards.map((award, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-xl bg-amber-50 text-amber-800 border border-amber-200">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      {award}
                    </span>
                  ))}
                </div>
              )}

              {/* Highlights List */}
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-5">
                {exp.highlights.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0"></span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-sky-50/70 text-sky-800 border border-sky-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNICAL SKILLS MATRIX */}
      <section id="skills" className="space-y-6 pt-4 border-t border-sky-100">
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-sky-700 font-heading flex items-center gap-2">
          <span className="w-2 h-4 bg-sky-500 rounded-full"></span>
          Technical Skills & Categorized Competencies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.categoryKey}
              className="bg-white p-5 rounded-2xl border border-sky-100 hover:border-sky-300 transition-all shadow-2xs space-y-3"
            >
              <div className="flex items-center gap-3 border-b border-sky-50 pb-3">
                <div className="p-2 rounded-xl bg-sky-50 border border-sky-100 shrink-0">
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm font-heading">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section id="education" className="space-y-6 pt-4 border-t border-sky-100">
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-sky-700 font-heading flex items-center gap-2">
          <span className="w-2 h-4 bg-sky-500 rounded-full"></span>
          Education & Professional Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Certifications Block */}
          <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-black text-sm font-heading border-b border-sky-50 pb-3">
              <Award className="w-4 h-4 text-sky-600" />
              <span>Certifications</span>
            </div>

            <div className="space-y-3">
              {certificationsList.map((cert) => (
                <div key={cert.id} className="p-3.5 rounded-xl bg-sky-50/50 border border-sky-100 flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-slate-900 text-xs">{cert.name}</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{cert.issuer}</div>
                  </div>
                  <span className="text-[11px] font-black px-2.5 py-1 rounded-full bg-white text-sky-700 border border-sky-200">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Block */}
          <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-black text-sm font-heading border-b border-sky-50 pb-3">
              <GraduationCap className="w-4 h-4 text-sky-600" />
              <span>Education Background</span>
            </div>

            <div className="space-y-3">
              {educationList.map((edu) => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-sky-50/50 border border-sky-100 space-y-1">
                  <div className="flex justify-between items-start">
                    <div className="font-extrabold text-slate-900 text-xs">{edu.degree}</div>
                    <span className="text-[10px] font-extrabold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">{edu.period}</span>
                  </div>
                  <div className="text-xs text-slate-600 font-medium">{edu.institution}</div>
                  {edu.honors && (
                    <div className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                      ★ {edu.honors}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};
