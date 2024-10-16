"use client";
import { useGSAP } from '@gsap/react';
import './Navbar.css';
import { gsap } from 'gsap';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Navbar({ onMenuClick } : any) {
    const [menuOpen, setMenuOpen] = useState(false);

    // GSAP animations for menu show/hide
    useGSAP(() => {
        gsap.from('nav', {
            opacity: 0,
            duration: 0.7,
            y: 50,
            ease: "back.out(1.7)"
        });

        if (menuOpen) {
            gsap.to('.small-nav-menu', {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
            });
        } else {
            gsap.to('.small-nav-menu', {
                x: "50%",
                opacity: 0,
                duration: 0.5,
                ease: "power3.out",
            });
        }
    }, [menuOpen]);

    function downloadCV() {
        window.open('https://drive.google.com/file/d/1r_PNdS9dyZp042L10UUtSo36QhnPrvbx/view?usp=sharing', '_blank');
    }

    function handleMenuClick(component : any) {
        onMenuClick(component);
        setMenuOpen(false); // Close menu after selecting
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
