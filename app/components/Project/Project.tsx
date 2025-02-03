"use client"
import './Project.css';
import { FaGithub } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { motion } from 'framer-motion';
import { BorderBeam } from "@stianlarsen/border-beam";

const projectData = [
    {
        image: 'https://avantify.io/wp-content/uploads/2023/12/ecommerce.jpeg',
        name: 'eCommerce Platform',
        description: 'A full-stack eCommerce platform built with React, PHP, and MySQL, featuring user authentication and product management.',
        link: 'https://github.com/v1pinx/PHP-project',
        category: 'React.js'
    },
    {
        image: 'https://www.clickslice.co.uk/wp-content/uploads/2022/07/1_Pdw7h5X6vQQNVopIzHBG6A.jpeg',
        name: 'URL Shortener',
        description: 'URL Shortener allows users to create and manage shortened URLs. Built with Node.js, Express.js and MongoDB.',
        link: 'https://github.com/v1pinx/INT222-backend-project',
        category: 'Node.js',
    },
    {
        image: 'https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/10/22005930/Crypto-Wallet-Development-Solution.svg',
        name: 'Hash Wallet',
        description: 'A decentralized crypto wallet supporting Ethereum and Solana, built with Next.js and Web3 technologies.',
        link: 'https://github.com/v1pinx/hashwallet-crypto-wallet',
        category: 'Next.js',
    }, {

        image: 'https://images-cdn.ubuy.co.in/633ce08a089f3f2bc1728814-classic-bingo-game-cards-for-kids-and.jpg',
        name: 'Bingo Game',
        description: 'Bingo Grid Game is a real-time multiplayer Bingo built with React, Node.js, and Socket.IO.',
        link: 'https://github.com/v1pinx/bingo-game',
        category: 'React.js, Node.js'
    },
    {
        image: 'https://img.freepik.com/premium-photo/top-view-resumes-applicants-magnifying-glass-green-background-job-search-concept_35674-13811.jpg?semt=ais_hybrid',
        name: 'Resume Builder',
        description: 'A Node.js web app for creating professional resumes with real-time preview and PDF export.',
        link: 'https://github.com/v1pinx/INT219-frontend-project',
        category: 'Node.js',
    },
    {
        image: 'https://www.shutterstock.com/image-vector/concept-computer-programming-developing-software-600nw-2149658841.jpg',
        name: 'Store API',
        description: 'A RESTful API for eCommerce, built with Node.js, Express.js, and MongoDB.',
        link: 'https://github.com/v1pinx/store-api',
        category: 'Node.js',
    },
    {
        image: 'https://i.ytimg.com/vi/7fjmGWkv-sY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA_OGnFlCnJ6LZ2QwL_prERcMfc1g',
        name: 'nQueen Visualizer',
        description: 'A Java Swing app that visualizes the N-Queens problem using backtracking.',
        link: 'https://github.com/v1pinx/nQueen-Visualizer',
        category: 'Java',
    }
];

const ProjectCard = ({ image, name, category, description, link }) => {
    return (
        <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }} className='card'>
                <BorderBeam size={150} duration={5} />
                
            <div className='card__img-wrapper'>
                <img src={image} alt={name} className='card__img' />
            </div>
            <span className="card__category">{category}</span>
            <div className='card__info'>
                <h1 className='card__name'>{name}</h1>
                <a href={link} target="_blank" rel="noopener noreferrer" className="card__link">
                    <FaGithub />
                </a>
            </div>
            <p className='card__description'>{description}</p>
            <div className='card__dot-grid'></div>
        </motion.div>
    );
};

const Project = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(projectData.map(project => project.category))];

    const filteredProjects = selectedCategory === 'All'
        ? projectData
        : projectData.filter(project => project.category === selectedCategory);

    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    return (
        <section className='section project' id='project'>
            <h2 className='section__title text-cs' data-aos="fade-up">Portfolio</h2>
            <p className="section__subtitle" data-aos="fade-up">
                MY <span>Venture</span>
            </p>
            <div className="filter-buttons" data-aos="fade-up">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className='project__container container grid' data-aos="fade-up">
                <AnimatePresence initial={false}>
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.image}
                            name={project.name}
                            category={project.category}
                            description={project.description}
                            link={project.link}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Project;