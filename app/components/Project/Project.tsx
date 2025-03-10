"use client"
import './Project.css';
import { FaGithub } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { projectData } from '@/app/data/projectData';
import Background from '../Background/Background';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ProjectCardProps {
  image: string;
  name: string;
  category: string;
  description: string;
  link: string;
  index: number;
}

const ProjectCard = ({ image, name, category, description, link, index }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ 
        duration: 0.3, 
        ease: "easeOut",
        delay: index * 0.1 // Staggered animation for multiple cards
      }}
      className='card'
    >
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
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');
  const projectsPerPage = 3;
  
  const categories = ['All', ...Array.from(new Set(
    projectData.flatMap(project => project.category.split(', ').map(cat => cat.trim()))
  ))];
  
  const filteredProjects = selectedCategory === 'All'
    ? projectData
    : projectData.filter(project =>
        project.category.split(', ').map(cat => cat.trim()).includes(selectedCategory)
      );

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  
  useEffect(() => {
    AOS.init({ duration: 500 });
    // Reset current page when category changes
    setCurrentPage(0);
  }, [selectedCategory]);

  const nextPage = () => {
    setSlideDirection('right');
    setCurrentPage((prevPage) => 
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  const prevPage = () => {
    setSlideDirection('left');
    setCurrentPage((prevPage) => 
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const goToPage = (pageIndex: number) => {
    setSlideDirection(pageIndex > currentPage ? 'right' : 'left');
    setCurrentPage(pageIndex);
  };

  // Get current page projects
  const currentProjects = filteredProjects.slice(
    currentPage * projectsPerPage, 
    (currentPage + 1) * projectsPerPage
  );

  // Variants for the container animation
  const pageVariants = {
    enter: (direction: string) => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: string) => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0
    })
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5
  };

  return (
    <section className='section project' id='project'>
      <Background />
      <h2 className='section__title text-cs' data-aos="fade-up">Portfolio</h2>
      <p className="section__subtitle" data-aos="fade-up">
        MY <span>Venture</span>
      </p>
      <div className='project__carousel-container container' data-aos="fade-up">
        <div className="project__carousel">
          <AnimatePresence custom={slideDirection} mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={currentPage}
                className="project__carousel-page"
                custom={slideDirection}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={pageTransition}
              >
                {currentProjects.map((project, index) => (
                  <ProjectCard
                    key={`${currentPage}-${index}`}
                    image={project.image}
                    name={project.name}
                    category={project.category}
                    description={project.description}
                    link={project.link}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <div className="no-projects">No projects found in this category.</div>
            )}
          </AnimatePresence>
        </div>
        
        {filteredProjects.length > projectsPerPage && (
          <div className="carousel-controls">
            <button className="carousel-btn prev-btn" onClick={prevPage}>
              <FaArrowLeft />
            </button>
            <div className="carousel-pagination">
              {Array.from({ length: totalPages }).map((_, index) => (
                <span 
                  key={index} 
                  className={`pagination-dot ${index === currentPage ? 'active' : ''}`}
                  onClick={() => goToPage(index)}
                ></span>
              ))}
            </div>
            <button className="carousel-btn next-btn" onClick={nextPage}>
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;