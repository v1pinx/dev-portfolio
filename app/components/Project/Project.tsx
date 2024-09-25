"use client"
import './Project.css';
import 'remixicon/fonts/remixicon.css';
import { gsap  } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ image, name, description, link }: {
    image: string;
    name: string;
    description: string;
    link: string;
}) => {

    return (
        <div className='project-card'>
            <img src={image} alt='project' className='project-image' />
            <div className='project-name'>{name}</div>
            <div className='project-description'>{description}</div>
            <a href={link}><button className='project-btn'><i className="ri-github-fill"></i> GitHub</button></a>
        </div>
    )
}

const Project = () => {
    useGSAP(() => {
        gsap.from('.project-heading', {
            opacity: 0,
            delay: 0.7,
            duration: 0.7,
            y: 50,
            ease: "back.out(1.7)"
        });

        const cards = document.querySelectorAll('.project-card');


        cards.forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 1,
                scale: 0.5,
                rotate: 10,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%", 
                    toggleActions: "play none none reverse none", 
            
                }
            });
        });

        cards.forEach((card) => {
            card.addEventListener('mouseenter', () => {

                cards.forEach((otherCard) => {
                    if (otherCard !== card) {
                        otherCard.classList.add('blurred');
                    }
                });
                gsap.to(card, {
                    scale: 1.1,
                    // rotation: 5, 
                    // skewX: 5,    
                    // opacity: 0.9, 
                    duration: 0.3,
                    ease: "power1.out"
                });
            });

            card.addEventListener('mouseleave', () => {

                cards.forEach((otherCard) => {
                    if (otherCard !== card) {
                        otherCard.classList.remove('blurred');
                    }
                });
                gsap.to(card, {
                    scale: 1,
                    rotation: 0,
                    skewX: 0,    
                    opacity: 1,  
                    duration: 0.3,
                    ease: "power1.out",
                });
            });
        });

    },[])
    return (
        <>
            <div className='project-section'>
                <div className='project-heading cursor-scale s'>Projects</div>
                <div className='project-cards'>
                    <ProjectCard
                        image='https://placewaifu.com/image/400'
                        name='Hash Wallet'
                        description='Hash Wallet is a decentralized crypto wallet built with Next.js, TypeScript, and Web3, supporting Ethereum and Solana blockchains. It features a responsive UI, secure asset management, and robust protection for private keys and transactions.'
                        link='https://github.com/v1pinx/hashwallet-crypto-wallet'
                    />

                    <ProjectCard
                        image='https://placewaifu.com/image/400'
                        name='URL Shortener'
                        description='URL Shortener is a Node.js-based platform that allows users to create and manage shortened URLs. Built with Express.js and MongoDB, it features user authentication for secure link management, optimized RESTful APIs for fast operations, and a scalable, reliable data storage system.'
                        link='https://github.com/v1pinx/INT222-backend-project'
                    />

                    <ProjectCard
                        image='https://placewaifu.com/image/400'
                        name='Bingo Game'
                        description='Bingo Grid Game is a real-time, interactive Bingo game built with React and Node.js, featuring seamless multiplayer functionality. It uses Socket.IO for low-latency communication between players and offers a user-friendly interface for smooth and engaging gameplay.'
                        link='https://github.com/v1pinx/bingo-game'
                    />

                    <ProjectCard
                        image='https://placewaifu.com/image/400'
                        name='Resume Builder'
                        description='Resume Builder is a Node.js web app that lets users create professional resumes using dynamic forms. It features a responsive design, real-time preview, and seamless PDF downloads, all built with a modular and maintainable code structure.'
                        link='https://github.com/v1pinx/INT219-frontend-project'
                    />
                </div>
            </div>
        </>
    )
}

export default Project;