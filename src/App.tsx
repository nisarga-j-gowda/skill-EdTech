/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Course, RoadmapStep, AuthUser } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { WhySkill99 } from './components/WhySkill99';
import { CourseMarketplace } from './components/CourseMarketplace';
import { RoadmapSection } from './components/RoadmapSection';
import { DashboardShowcase } from './components/DashboardShowcase';
import { AIAssistant } from './components/AIAssistant';
import { ProjectsSection } from './components/ProjectsSection';
import { CareerSection } from './components/CareerSection';
import { CertificateShowcase } from './components/CertificateShowcase';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CourseModal } from './components/CourseModal';
import { SearchModal } from './components/SearchModal';
import { SkillAssessmentModal } from './components/SkillAssessmentModal';
import { AuthModal } from './components/AuthModal';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);

  // Authentication State
  const [authUser, setAuthUser] = useState<AuthUser | null>(() => {
    try {
      const saved = localStorage.getItem('skill99_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExploreTrack = (_step: RoadmapStep) => {
    scrollToSection('courses');
  };

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('skill99_user');
    setAuthUser(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white antialiased">
      
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenAssessment={() => setAssessmentModalOpen(true)}
        onOpenAuth={handleOpenAuth}
        authUser={authUser}
        onLogout={handleLogout}
        onNavigate={scrollToSection}
      />

      {/* Main Page Sections */}
      <main id="main-content">
        {/* Section 2: Hero */}
        <Hero
          onExploreCourses={() => scrollToSection('courses')}
          onStartLearning={() => {
            if (!authUser) {
              handleOpenAuth('signup');
            } else {
              scrollToSection('courses');
            }
          }}
          onOpenAITutor={() => scrollToSection('ai-tutor')}
        />

        {/* Section 4: Stats */}
        <Stats />

        {/* Section 5: Why Skill99 */}
        <WhySkill99 />

        {/* Section 6: Course Marketplace */}
        <CourseMarketplace
          onSelectCourse={(course) => setSelectedCourse(course)}
        />

        {/* Section 7: Skill Roadmap */}
        <RoadmapSection
          onExploreTrack={handleExploreTrack}
        />

        {/* Section 8: Learning Dashboard Showcase */}
        <DashboardShowcase />

        {/* Section 9: AI Learning Assistant */}
        <AIAssistant />

        {/* Section 10: Project-Based Learning */}
        <ProjectsSection />

        {/* Section 11: Career Section */}
        <CareerSection
          onStartCareer={() => scrollToSection('courses')}
        />

        {/* Section 13: Certificate Showcase */}
        <CertificateShowcase
          onExploreCertifications={() => scrollToSection('courses')}
        />

        {/* Section 12: Testimonials */}
        <Testimonials />

        {/* Section 14: FAQ */}
        <FAQSection />

        {/* Section 15: Final CTA */}
        <FinalCTA
          onStartLearning={() => {
            if (!authUser) {
              handleOpenAuth('signup');
            } else {
              scrollToSection('courses');
            }
          }}
          onExploreCourses={() => scrollToSection('courses')}
        />
      </main>

      {/* Section 16: Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive Overlays & Modals */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectCourse={(course) => setSelectedCourse(course)}
        onNavigate={scrollToSection}
      />

      <SkillAssessmentModal
        isOpen={assessmentModalOpen}
        onClose={() => setAssessmentModalOpen(false)}
        onNavigate={scrollToSection}
      />

      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={(user) => setAuthUser(user)}
      />

    </div>
  );
}

