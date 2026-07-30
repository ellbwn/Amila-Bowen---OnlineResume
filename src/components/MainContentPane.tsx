import React from 'react';
import { contactInfo, experiences, skillCategories, educationList, certificationsList } from '../data/resumeData';
import { Search, X, Check, Award, Server, Wrench, ShieldCheck, DatabaseBackup, Activity, GraduationCap, CheckCircle2 } from 'lucide-react';

interface MainContentPaneProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedSkillFilter: string | null;
  onSelectSkillFilter: (skill: string | null) => void;
  onCopyText: (text: string, label: string) => void;
  onOpenContactModal: () => void;
  customImage?: string | null;
  onImageChange?: (image: string | null) => void;
}

export const MainContentPane: React.FC<MainContentPaneProps> = ({
  searchQuery,
  onSearchChange,
  selectedSkillFilter,
  onSelectSkillFilter,
  onCopyText,
  onOpenContactModal
}) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-5 h-5 text-blue-600" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-blue-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'DatabaseBackup': return <DatabaseBackup className="w-5 h-5 text-blue-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-blue-600" />;
      default: return <Server className="w-5 h-5 text-blue-600" />;
    }
  };

  // Check if a item matches search or filter
  const isMatch = (text: string) => {
    if (!searchQuery && !selectedSkillFilter) return true;
    const lowerText = text.toLowerCase();
    const queryMatch = searchQuery ? lowerText.includes(searchQuery.toLowerCase()) : true;
    const filterMatch = selectedSkillFilter ? lowerText.includes(selectedSkillFilter.toLowerCase()) : true;
    return queryMatch && filterMatch;
  };

  return (
    <main className="flex-1 p-6 sm:p-8 lg:p-12 bg-white space-y-12 max-w-5xl">
      
      {/* HEADER SECTION - Reference Format Style with Bold Typography */}
      <header className="space-y-4">
        <div>
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium bg-gradient-to-r from-sky-50/80 via-blue-50/50 to-sky-50 p-5 sm:p-6 rounded-2xl border border-sky-200/80 shadow-2xs">
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
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search resume keywords (e.g., PACS, VMware, PowerShell, HIPAA, SolarWinds)..."
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-white border border-sky-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 placeholder-slate-400 font-medium shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {(searchQuery || selectedSkillFilter) && (
            <button
              onClick={() => {
                onSearchChange('');
                onSelectSkillFilter(null);
              }}
              className="px-3.5 py-2.5 text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 hover:bg-rose-100 rounded-xl flex items-center justify-center gap-1.5 shrink-0 uppercase tracking-wider"
            >
              <X className="w-3.5 h-3.5" /> Clear Filters
            </button>
          )}
        </div>
      </section>

      {/* WORK EXPERIENCE SECTION */}
      <section id="experience" className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-sky-700 font-heading flex items-center gap-2">
            <span className="w-2 h-4 bg-sky-500 rounded-full"></span>
            Work Experience
          </h2>
          <span className="text-xs text-sky-600/80 font-bold uppercase tracking-wider">Career Timeline</span>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-5 before:w-0.5 before:bg-sky-200/80">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-12 group print-break-inside-avoid">
              
              {/* Timeline marker node */}
              <div className="absolute left-1.5 sm:left-3 top-1 w-4 h-4 rounded-full border-2 border-sky-500 bg-white group-hover:bg-sky-500 group-hover:scale-125 transition-all shadow-xs"></div>

              <div className="bg-white border border-sky-100 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-sky-200 transition-all space-y-4">
                
                {/* Job Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-sky-100 pb-3">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 font-heading tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-xs font-bold text-sky-600 flex items-center gap-2 mt-1">
                      <span>{exp.company}</span>
                      <span className="text-sky-200">•</span>
                      <span className="text-slate-600 font-medium">{exp.location}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100 text-[10px] font-bold uppercase tracking-wider">
                        {exp.workMode}
                      </span>
                    </div>
                  </div>

                  <div className="text-left sm:text-right shrink-0">
                    <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-extrabold border border-sky-200/80">
                      {exp.period}
                    </span>
                    {exp.duration && (
                      <div className="text-[11px] text-slate-400 mt-1 font-semibold uppercase tracking-wider">{exp.duration}</div>
                    )}
                  </div>
                </div>

                {/* Company Description */}
                {exp.companyDescription && (
                  <p className="text-xs italic text-slate-600 bg-sky-50/50 p-3 rounded-xl border border-sky-100 font-medium">
                    "{exp.companyDescription}"
                  </p>
                )}

                {/* Awards badge if available */}
                {exp.awards && exp.awards.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.awards.map((award, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80">
                        <Award className="w-3.5 h-3.5 text-amber-600" />
                        {award}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bullet Points */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {exp.highlights.map((highlight, index) => {
                    const matched = isMatch(highlight);
                    return (
                      <li
                        key={index}
                        className={`flex items-start gap-2.5 transition-colors p-1.5 rounded-xl ${
                          matched && (searchQuery || selectedSkillFilter)
                            ? 'bg-amber-50 font-bold text-slate-900 border-l-4 border-amber-500 pl-3'
                            : ''
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Skill tags for this role */}
                <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-sky-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">Skills:</span>
                  {exp.skills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => onSelectSkillFilter(selectedSkillFilter === skill ? null : skill)}
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-sky-50/60 hover:bg-sky-100 hover:text-sky-700 text-slate-600 border border-sky-200/60 transition-colors"
                    >
                      {skill}
                    </button>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL SKILLS MATRIX SECTION */}
      <section id="skills" className="space-y-6">
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-sky-700 font-heading flex items-center gap-2">
          <span className="w-2 h-4 bg-sky-500 rounded-full"></span>
          Skills & Technical Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((cat) => (
            <div key={cat.categoryKey} className="bg-sky-50/40 border border-sky-100 rounded-2xl p-5 hover:border-sky-200 transition-colors space-y-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white shadow-2xs border border-sky-100">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <h3 className="font-bold text-slate-900 text-sm font-heading tracking-tight">
                  {cat.title}
                </h3>
              </div>

              <ul className="space-y-1.5">
                {cat.skills.map((skill) => {
                  const matched = isMatch(skill);
                  return (
                    <li
                      key={skill}
                      onClick={() => onSelectSkillFilter(selectedSkillFilter === skill ? null : skill)}
                      className={`text-xs px-3 py-2 rounded-xl flex items-center justify-between cursor-pointer transition-colors font-medium ${
                        matched && (searchQuery || selectedSkillFilter)
                          ? 'bg-sky-600 text-white font-bold shadow-xs'
                          : 'bg-white border border-sky-200/80 text-slate-700 hover:bg-sky-50 hover:text-sky-700'
                      }`}
                    >
                      <span>{skill}</span>
                      <Check className="w-3.5 h-3.5 opacity-60" />
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS SECTION */}
      <section id="education" className="space-y-6">
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-sky-700 font-heading flex items-center gap-2">
          <span className="w-2 h-4 bg-sky-500 rounded-full"></span>
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Education Block */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-heading flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-sky-600" /> Education
            </h3>

            <div className="space-y-3">
              {educationList.map((edu) => (
                <div key={edu.id} className="p-4 rounded-2xl bg-white border border-sky-100 shadow-2xs space-y-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-slate-900 text-sm">{edu.degree}</h4>
                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100 shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs text-sky-600 font-bold">{edu.institution}</div>
                  {edu.honors && (
                    <div className="pt-1">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 inline-block">
                        ★ {edu.honors}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Block */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-heading flex items-center gap-2">
              <Award className="w-4 h-4 text-sky-600" /> Certifications
            </h3>

            <div className="space-y-3">
              {certificationsList.map((cert) => (
                <div key={cert.id} className="p-4 rounded-2xl bg-white border border-sky-100 shadow-2xs flex items-center justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{cert.name}</h4>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{cert.issuer}</div>
                  </div>
                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full border shrink-0 ${cert.badgeColor || 'bg-sky-50 text-sky-700 border-sky-200'}`}>
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};
