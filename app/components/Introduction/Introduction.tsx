"use client"
import { useEffect } from 'react';
import './Introduction.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Introduction = () => {
    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".intro-div", 
                start: "top 100%", 
                toggleActions: "play none none reverse none", 
                markers: true
            }
        });
    
        tl.from('.designation', {
            opacity: 0,
            duration: 0.7,
            y: 50,
            ease: "back.out(1.7)"
        })
        .from('.name1', {
            opacity: 0,
            duration: 0.7,
            y: 50,
            ease: "back.out(1.7)"
        }, "-=0.5") 
        .from('.name2', {
            opacity: 0,
            duration: 0.7,
            y: 50,
            ease: "back.out(1.7)"
        }, "-=0.5")
        .from('.description', {
            opacity: 0,
            duration: 0.7,
            y: 50,
            ease: "back.out(1.7)"
        }, "-=0.5"); 
    });
    
    
    return (
        <>
            <div className='dev-btn'>In Development : Thanks For Visiting</div>
            <div className='intro-div'>
                <div className='designation'>Developer</div>
                <div className='name1'>Vipin</div>
                <div className='name2'>Kumar</div>
                <div className='description'>I'm a student skilled in web development, proficient in C++, Java, Next.js, and the MERN stack. I'm a tech geek who enjoys helping others, learning new technologies, and treating people with respect :)</div>
            </div>
        </>

    )
}

export default Introduction;