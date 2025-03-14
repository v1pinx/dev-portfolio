"use client"
import './Project.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
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
  liveLink?: string;
  technologies: string[];
  index: number;
}

const ProjectCard = ({ 
  image, 
  name, 
  category, 
  description, 
  link, 
  liveLink, 
  technologies,
  index 
}: ProjectCardProps) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.3, 
        ease: "easeOut",
        delay: index * 0.1
      }}
      className='card'
    >
      <div className='card__img-wrapper'>
        <img src={image} alt={name} className='card__img' />
        <div className="card__overlay">
          <div className="card__links">
            <a href={link} target="_blank" rel="noopener noreferrer" className="card__icon-link">
              <FaGithub />
            </a>
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="card__icon-link">
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className='card__content'>
        <h1 className='card__name'>{name}</h1>
        <p className='card__description'>{description}</p>
        
        <div className='card__tech-stack'>
          {technologies.map((tech, idx) => (
            <span key={idx} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');
  const projectsPerPage = 3;

  const totalPages = Math.ceil(projectData.length / projectsPerPage);
  
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

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
  const currentProjects = projectData.slice(
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
            {projectData.length > 0 ? (
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
                    liveLink={project.liveLink || ""}
                    technologies={project.technologies || []}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <div className="no-projects">No projects found.</div>
            )}
          </AnimatePresence>
        </div>
        
        {projectData.length > projectsPerPage && (
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