"use client";
import { useGSAP } from '@gsap/react';
import './Navbar.css';
import { gsap } from 'gsap';
import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // GSAP animations for menu show/hide
    useGSAP(() => {
        gsap.from('nav', {
            opacity: 0,
            duration: 0.7,
            y: 50,
            ease: "back.out(1.7)"
        })
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
        window.open('/Resume.pdf', '_blank');
    }

    return (
        <nav>
            <div className='nav-head cursor-scale'>2&#62;/dev/null</div>
            <div className='nav-menu'>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
                <button className='download-cv' onClick={downloadCV}>Download CV</button>
            </div>
            <div className='nav-menu-sm'>
                <button className='download-cv' onClick={downloadCV}>Download CV</button>
            </div>
        </nav>
    );
}
