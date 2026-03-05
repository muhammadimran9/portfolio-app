"use client";

import { useState } from 'react';
import SkillsSection from './SkillsSection';
import ProjectsCard from './projectcard';

export default function MainContent() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="main-content mx-5 space-y-8">
      <section className="hero-section">
        <h1 className="text-3xl font-bold mb-4">
          Hi, I'm Muhammad Imran
        </h1>
        
        <div className="flex flex-wrap gap-4 mb-6 text-neutral-600 dark:text-neutral-400">
          <span>📍 Multan, Pakistan</span>
          <span>💼 Onsite Available</span>
          <span>🕐 Part-time Freelancer</span>
        </div>

        <p className="text-lg leading-relaxed max-w-3xl">
          Full-Stack Developer specializing in MERN stack, Next.js, and modern UI/UX. 
          I build high-performance web apps, mobile solutions, and AI-powered products 
          with clean architecture and SEO-friendly development.
        </p>
      </section>

      <SkillsSection />
      <ProjectsCard />
    </div>
  );
}
