"use client"
import './Skills.css';

import { gsap  } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    
    useGSAP(() => {
        gsap.from('.skill-heading', {
            scrollTrigger: {
                trigger: '.skill-heading',
                start: 'top 90%',
                toggleActions: 'play none none none'
                
            },
            opacity: 0,
            duration: 0.7,
            y: 50,
            ease: "back.out(1.7)",
        });

        gsap.from('.skill-icons img', {
            scrollTrigger: {
                trigger: '.skill-icons img',
                start: "top 80%", 
                toggleActions: "play none none reverse none", 
                markers: true 
            },
            opacity: 0,
            duration: 0.5,
            y: 50,
            ease: "back.out(1.7)",
            stagger: 0.1,

        });
    })

    return (
        <>
            <div className='skill-section'>
                <div className="skill-heading cursor-scale s">Skills</div>
                <div className='skill-icons'>
                    <img src="https://skillicons.dev/icons?i=c" alt="C" />
                    <img src="https://skillicons.dev/icons?i=cpp" alt="C++" />
                    <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
                    <img src="https://skillicons.dev/icons?i=discord" alt="Discord" />
                    <img src="https://skillicons.dev/icons?i=express" alt="Express" />
                    <img src="https://skillicons.dev/icons?i=git" alt="Git" />
                    <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
                    <img src="https://skillicons.dev/icons?i=gmail" alt="Gmail" />
                    <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
                    <img src="https://skillicons.dev/icons?i=instagram" alt="Instagram" />
                    <img src="https://skillicons.dev/icons?i=java" alt="Java" />
                    <img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript" />
                    <img src="https://skillicons.dev/icons?i=kali" alt="Kali Linux" />
                    <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" />
                    <img src="https://skillicons.dev/icons?i=linux" alt="Linux" />
                    <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" />
                    <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" />
                    <img src="https://skillicons.dev/icons?i=postman" alt="Postman" />
                    <img src="https://skillicons.dev/icons?i=python" alt="Python" />
                    <img src="https://skillicons.dev/icons?i=replit" alt="Replit" />
                    <img src="https://skillicons.dev/icons?i=vscode" alt="VSCode" />
                    <img src="https://skillicons.dev/icons?i=windows" alt="Windows" />
                    <img src="https://skillicons.dev/icons?i=typescript" alt="TypeScript" />
                </div>

            </div>
        </>
    )
}

export default Skills;