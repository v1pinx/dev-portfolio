"use client"
import './Skills.css';

import { gsap } from 'gsap';
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
            },
            opacity: 0,
            duration: 0.5,
            y: 50,
            ease: "back.out(1.7)",
            stagger: 0.1,

        });

        let icons = document.querySelectorAll('.skill-icons img');
        icons.forEach((icon) => {
            icon.addEventListener('mouseenter', () => {
                icons.forEach((otherIcon) => {
                    if (otherIcon !== icon) {
                        gsap.to(otherIcon, {
                            scale: 0.8,
                            duration: 0.5,
                            ease: "back.out(1.7)"
                        });
                    }
                });
            });

            icon.addEventListener('mouseleave', () => {
                icons.forEach((otherIcon) => {
                    if (otherIcon !== icon) {
                        gsap.to(otherIcon, {
                            scale: 1,
                            duration: 0.5,
                            ease: "back.out(1.7)"
                        });
                    }
                });
            });
        })
    })

    return (
        <>
            <div className='skill-section' id='skills'>
                <div className="skill-heading cursor-scale s" >TOols </div>
                <div className='skill-icons'>
                    {/* Programming Languages  */}
                    <img src="https://skillicons.dev/icons?i=c" alt="C" />
                    <img src="https://skillicons.dev/icons?i=cpp" alt="C++" />
                    <img src="https://skillicons.dev/icons?i=java" alt="Java" />
                    <img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript" />
                    <img src="https://skillicons.dev/icons?i=python" alt="Python" />
                    <img src="https://skillicons.dev/icons?i=typescript" alt="TypeScript" />

                    {/* Frontend Development  */}
                    <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
                    <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
                    <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" />
                    <img src="https://skillicons.dev/icons?i=react" alt="React" />
                    <img src="https://skillicons.dev/icons?i=next" alt="Next" />
                    <img src="https://skillicons.dev/icons?i=vite" alt="Vite" />
                    <img src="https://skillicons.dev/icons?i=jquery" alt="jQuery" />

                    {/* Backend Development */}
                    <img src="https://skillicons.dev/icons?i=express" alt="Express" />
                    <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" />
                    <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" />
                    <img src="https://skillicons.dev/icons?i=postgresql" alt="PostgreSQL" />
                    <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" />

                    {/* Version Control & Collaboration  */}
                    <img src="https://skillicons.dev/icons?i=git" alt="Git" />
                    <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
                    <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" />

                    {/* Development Tools  */}
                    <img src="https://skillicons.dev/icons?i=postman" alt="Postman" />
                    <img src="https://skillicons.dev/icons?i=vscode" alt="VSCode" />
                    <img src="https://skillicons.dev/icons?i=replit" alt="Replit" />
                    <img src="https://skillicons.dev/icons?i=windows" alt="Windows" />
                    <img src="https://skillicons.dev/icons?i=figma" alt="Figma" />

                    {/* Cloud & DevOps  */}
                    <img src="https://skillicons.dev/icons?i=firebase" alt="Firebase" />
                    <img src="https://skillicons.dev/icons?i=netlify" alt="Netlify" />
                    <img src="https://skillicons.dev/icons?i=vercel" alt="Vercel" />
                    <img src="https://skillicons.dev/icons?i=docker" alt="Docker" />

                    {/* Operating Systems  */}
                    <img src="https://skillicons.dev/icons?i=kali" alt="Kali Linux" />
                    <img src="https://skillicons.dev/icons?i=linux" alt="Linux" />
                    <img src="https://skillicons.dev/icons?i=arch" alt="Arch" />
                    <img src="https://skillicons.dev/icons?i=ubuntu" alt="Ubuntu" />
                    <img src="https://skillicons.dev/icons?i=windows" alt="Windows" />

                    {/* Other Technologies  */}
                    <img src="https://skillicons.dev/icons?i=jquery" alt="jQuery" />

                </div>
            </div>
        </>
    )
}

export default Skills;