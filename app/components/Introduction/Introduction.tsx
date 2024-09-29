"use client"
import Avatar from '../../public/avatar.jpeg'
import './Introduction.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);


const Introduction = () => {
    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".intro-div",
                start: "top 100%",
                toggleActions: "play none none reverse none",
            
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
            }, "-=0.5")
            .from('.btn-container', {
                opacity: 0,
                duration: 0.7,
                y: 50,
                ease: "back.out(1.7)"
            }, "-=0.5");

        gsap.fromTo(".designation", {
            width: "0",
        }, {
            width: "8.5em",
            duration: 2,
            ease: "steps(11)",
            yoyo: true,
            repeat: -1,
            repeatDelay: 1 
        }
        );

        gsap.fromTo(".designation", {
            borderRightColor: "rgba(255,255,255,0.75)",
            borderRightWidth: "2px",
            borderRightStyle: "solid",
        }, {
            borderRightColor: "rgba(255,255,255,0)",
            duration: 0.5,
            repeat: -1,
            ease: "steps(11)"
        }
        );



    });


    return (
        <>
            <div className='intro-main'>
                <div className='intro-div'>
                    <div className='designation cursor-scale s'>&#62; Developer</div>
                    <div className='name1 cursor-scale'>Vipin Kumar</div>
                    <div className='description'>I'm a student skilled in web development, proficient in C++, Java, Next.js, and the MERN stack. I'm a tech geek who enjoys helping others, learning new technologies, and treating people with respect :)</div>
                    <div className="btn-container">
                        <a href="https://www.linkedin.com/in/vipin01/"><button className="connect-btn" >Connect</button></a>
                    </div>
                </div>
                <Image src={Avatar} alt="" className='avatar' />
            </div>
        </>

    )
}

export default Introduction;