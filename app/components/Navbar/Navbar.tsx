"use client";
import './Navbar.css';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Navbar({ onMenuClick } : any) {
    const [menuOpen, setMenuOpen] = useState(false);

    function downloadCV() {
        window.open('https://drive.google.com/file/d/1r_PNdS9dyZp042L10UUtSo36QhnPrvbx/view?usp=sharing', '_blank');
    }

    function handleMenuClick(component : any) {
        onMenuClick(component);
        setMenuOpen(false); 
    }

    return (
        <nav>
            <div className='nav-menu'>
                <a href="#" onClick={() => handleMenuClick('introduction')}>About</a>
                <a href="#" onClick={() => handleMenuClick('project')}>Projects</a>
                <a href="#" onClick={() => handleMenuClick('skills')}>Skills</a>
                <a href="#" onClick={() => handleMenuClick('contact')}>Contact</a>
                <button className='download-cv' onClick={downloadCV}>Download CV</button>
            </div>
            <div className='nav-menu-sm'>
                <button className='download-cv' onClick={downloadCV}>Download CV</button>
            </div>
        </nav>
    );
}
