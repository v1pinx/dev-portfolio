"use client"
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { skillArr, skills } from '@/app/data/skillData'; 
import Background from '../Background/Background';
const Skills = () => {
    useEffect(()=>{
        AOS.init({duration:500});
    },[]);
    return (
        <>
            <section className='section skills' id='skills'>
                <Background />
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