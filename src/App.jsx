import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SidebarPane } from './components/SidebarPane';
import { MainContentPane } from './components/MainContentPane';
import { ContactModal } from './components/ContactModal';
import { PrintResumeView } from './components/PrintResumeView';
import { Check } from 'lucide-react';

export default function App() {
  const [customImage, setCustomImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkillFilter, setSelectedSkillFilter] = useState(null);
  const [activeSection, setActiveSection] = useState('about');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleCopyText = (text, label) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`Copied ${label}: ${text}`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handlePrintResume = () => {
    window.print();
  };

  const handleNavigateSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100/80 via-blue-50/90 to-sky-50 text-slate-800 font-sans antialiased flex flex-col selection:bg-sky-200 selection:text-sky-900">
      
      {/* Top Fixed Header Nav */}
      <Navbar
        onPrintResume={handlePrintResume}
        onOpenContactModal={() => setContactModalOpen(true)}
        activeSection={activeSection}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Responsive Canvas Wrapper */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-2 sm:p-4 md:p-6 lg:p-8 no-print">
        
        {/* White Portfolio Sheet Container - Soft Light Blue accents */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl shadow-sky-900/5 border border-sky-200/80 overflow-hidden flex flex-col lg:flex-row transition-all">
          
          {/* Left Column / Sidebar Pane */}
          <SidebarPane
            selectedSkillFilter={selectedSkillFilter}
            onSelectSkillFilter={setSelectedSkillFilter}
            onCopyText={handleCopyText}
            onPrintResume={handlePrintResume}
            onOpenContactModal={() => setContactModalOpen(true)}
          />

          {/* Right Main Content Pane */}
          <MainContentPane
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedSkillFilter={selectedSkillFilter}
            onSelectSkillFilter={setSelectedSkillFilter}
            onCopyText={handleCopyText}
            onOpenContactModal={() => setContactModalOpen(true)}
          />

        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl text-xs font-semibold flex items-center gap-2 border border-slate-700 animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Contact Popup Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onCopyText={handleCopyText}
      />

      {/* Clean Printable PDF Document Format */}
      <PrintResumeView />

    </div>
  );
}
