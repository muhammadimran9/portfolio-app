'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border rounded-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      
      <aside className={`fixed left-0 top-0 h-full w-64 bg-card border transform transition-transform z-40 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:w-auto`}>
        
        <div className="p-4">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <img 
              src="/profile-pic.jpeg" 
              alt="Profile" 
              className="w-12 h-12 rounded-full"
              onError={(e) => { e.target.src = '/profile-placeholder.svg'; }}
            />
            <div>
              <h2 className="font-semibold">Muhammad Imran</h2>
              <p className="text-sm text-muted">JavaScript Developer</p>
            </div>
          </Link>

          <nav className="space-y-2 mb-6">
            {navLinks.map(link => (
              <Link 
                key={link.href}
                href={link.href}
                className="block p-2 rounded hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button 
            onClick={toggleTheme}
            className="p-2 bg-muted rounded-lg w-full"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </aside>
    </>
  );
}
