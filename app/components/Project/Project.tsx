"use client"
import './Project.css';
import { FaGithub } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { BorderBeam } from "@stianlarsen/border-beam";
import { projectData } from '@/app/data/projectData';

interface ProjectCardProps {
    image: string;
    name: string;
    category: string;
    description: string;
    link: string;
}

const ProjectCard = ({ image, name, category, description, link }: ProjectCardProps) => {
    return (
        <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }} className='card'>
            {/* <BorderBeam size={150} duration={5} /> */}

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

    const categories = ['All', ...Array.from(new Set(
        projectData.flatMap(project => project.category.split(', ').map(cat => cat.trim()))
    ))];

    const filteredProjects = selectedCategory === 'All'
        ? projectData
        : projectData.filter(project =>
            project.category.split(', ').map(cat => cat.trim()).includes(selectedCategory)
        );

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