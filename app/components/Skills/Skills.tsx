"use client"
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const skillArr = ['c', 'cpp', 'java', 'javascript', 'python', 'typescript', 'html', 'css', 'tailwind', 'react', 'next', 'vite', 'express', 'nodejs', 'mongodb', 'postgresql', 'mysql', 'git', 'github', 'postman', 'vscode', 'windows', 'figma', 'netlify', 'vercel', 'docker', 'arch'];

const skills = [
    { name: 'JavaScript', percentage: 90, description: 'Proficient in building interactive web applications.' },
    { name: 'React', percentage: 85, description: 'Experienced in building reusable components and managing state.' },
    { name: 'Node.js', percentage: 80, description: 'Skilled in building scalable backend services.' },
    { name: 'CSS', percentage: 75, description: 'Adept at creating responsive and visually appealing designs.' },
    { name: 'Python', percentage: 70, description: 'Familiar with data analysis and scripting.' },
    { name: 'TypeScript', percentage: 65, description: 'Experienced in building type-safe applications.' },
];

const Skills = () => {
    useEffect(()=>{
        AOS.init({duration:500});
    },[]);
    return (
        <>
            <section className='section skills' id='skills'>
                <h2 className="section__title text-cs" data-aos="fade-up">Professional Skills</h2>
                <p className="section__subtitle" data-aos="fade-up">
                    MY <span>Tools</span>
                </p>

                <div className="skills__badges-container" data-aos="fade-left">
                    {skills.map(({ name, percentage, description }, index) => (
                        <div className="skills__item" key={index}>
                            <div className="skills__title">
                                <h3 className="skills__name">{name}</h3>
                                <span className="skills__number">
                                    {percentage}<span>%</span>
                                </span>
                            </div>
                            <p className="skills__description">{description}</p>
                            <div className="skills__bar">
                                <span className="skills__percentage" style={{ width: `${percentage}%` }}><span></span></span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='section__icons-wrapper' data-aos="fade-up">
                    <div className='section__icons-container'>
                        {skillArr.map((skill, index) => (
                            <div className='section__icons' key={index}>
                                <img src={`https://skillicons.dev/icons?i=${skill}`} alt={skill} />
                                <p>{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
            {/* <div className='card__dot-grid1'></div> */}
            <div className='card__dot-grid2'></div>
            </section>
        </>
    )
}

export default Skills;