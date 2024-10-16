"use client"
import Avatar from '../../public/profile.jpg'
import './Introduction.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import SocialIcons from '../SocialIcons/SocialIcons';

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

        tl.from('.avatar', {
            opacity: 0,
            duration: 0.7,
            y: 300,
            ease: 'back.out(1.7)'
        })
            .from('.designation', {
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
            width: "8.8em",
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

    function imgOnClick() {
        toast("Am I handsome?", {
            icon: '🤔',
        })
    }
    return (
        <>
            <SocialIcons />
            <div className="intro-main background-glitch">
                <div className="gradient-blob" style={{ top: '-10%', left: '-10%' }}></div>
                <div className="gradient-blob" style={{ bottom: '-10%', right: '-15%' }}></div>

                <div className="intro-div">
                    <Image src={Avatar} alt="Profile Image" className="avatar" onClick={imgOnClick} />
                    <div className="designation cursor-scale s">&#62; Developer</div>
                    <div className="name1 cursor-scale">Vipin Kumar</div>
                    <div className="btn-container">
                        <a href="https://www.linkedin.com/in/vipin01/">
                            <button className="connect-btn">Connect</button>
                        </a>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Introduction;