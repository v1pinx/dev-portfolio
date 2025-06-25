"use client";
import { useState } from 'react';
import './Navbar.css';

export default function Navbar({ onMenuClick }: any) {
  const [activeLink, setActiveLink] = useState<string | null>('introduction');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleMenuClick(component: string) {
    onMenuClick(component);
    setActiveLink(component);
    setMobileMenuOpen(false);
  }

  return (
    <nav>
      <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Desktop menu */}
      <div className='nav-menu'>
        <a
          href="#"
          className={activeLink === 'introduction' ? 'active' : ''}
          onClick={() => handleMenuClick('introduction')}
        >
          About Me
        </a>
        <a
          href="#"
          className={activeLink === 'skills' ? 'active' : ''}
          onClick={() => handleMenuClick('skills')}
        >
          Skills
        </a>
        <a
          href="#"
          className={activeLink === 'project' ? 'active' : ''}
          onClick={() => handleMenuClick('project')}
        >
          Projects
        </a>
        <a
          href="#"
          className={activeLink === 'achievements' ? 'active' : ''}
          onClick={() => handleMenuClick('achievements')}
        > 
          Achievements
        </a>
        {/* <a
          href="#"
          className={activeLink === 'videoCV' ? 'active' : ''}
          onClick={() => handleMenuClick('videoCV')}
        > 
          Video CV
        </a> */}
        <a
          href="#"
          className={activeLink === 'contact' ? 'active' : ''}
          onClick={() => handleMenuClick('contact')}
        >
          Contact
        </a>
      </div>

      {/* Mobile menu */}
      <div className={`nav-menu-sm ${mobileMenuOpen ? 'open' : ''}`}>
        <a
          href="#"
          className={activeLink === 'introduction' ? 'active' : ''}
          onClick={() => handleMenuClick('introduction')}
        >
          About Me
        </a>
        <a
          href="#"
          className={activeLink === 'skills' ? 'active' : ''}
          onClick={() => handleMenuClick('skills')}
        >
          Skills
        </a>
        <a
          href="#"
          className={activeLink === 'project' ? 'active' : ''}
          onClick={() => handleMenuClick('project')}
        >
          Projects
        </a>
        <a
          href="#"
          className={activeLink === 'contact' ? 'active' : ''}
          onClick={() => handleMenuClick('contact')}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}