import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Achievements } from './components/Achievements';
import { About } from './components/About';
import { Services } from './components/Services';
import { SkillsTools } from './components/SkillsTools';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [inquirySubject, setInquirySubject] = useState('');

  const handleSelectProjectForInquiry = (projectTitle: string) => {
    setInquirySubject(`Inquiry regarding ${projectTitle} strategy`);
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-violet-600/30 selection:text-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Key Verified Achievements Strip */}
        <Achievements />

        {/* 3. About Me */}
        <About />

        {/* 4. Specialized Services */}
        <Services />

        {/* 5. Skills & Tech Stack */}
        <SkillsTools />

        {/* 6. Projects & Case Studies */}
        <Projects onSelectProjectForInquiry={handleSelectProjectForInquiry} />

        {/* 7. Experience Timeline */}
        <Experience />

        {/* 8. Contact Section */}
        <Contact initialSubject={inquirySubject} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
