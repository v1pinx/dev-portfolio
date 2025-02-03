"use client"
import Avatar from '../../public/profile.jpg'
import './Introduction.css';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Typewriter from "typewriter-effect";
import DiscordPresence from './../DiscordPresence/DiscordPresence';

const Introduction = () => {

    return (
        <>
            <div className="intro__wrapper" data-aos="flip-right">
                <div className="intro__container">
                    <div className='intro__content'>
                        <div className='intro__subtitle'>Hi! <span>My Name is</span></div>
                        <h1 className='intro__name'><span>Vipin</span> <span>Kumar</span></h1>
                        <b className="intro__designation">&#62;&#160;
                            <b className="">
                                <Typewriter
                                    options={{
                                        strings: ["Developer", "Student", "Coder", "Tech Enthusiast"],
                                        autoStart: true,
                                        loop: true,
                                        cursor: "_",
                                        delay: 50,
                                        deleteSpeed: 30,
                                    }}
                                />
                            </b>
                        </b>

                        {/* Image for smaller screens */}
                        <div className='intro__img--wrapper intro__img--mobile'>
                            <div className='intro__banner'>
                                <Image src={Avatar} alt="Profile Image" className="intro__profile" />
                            </div>
                        </div>
                        <p className="intro__text">
                            From India, I'm an experienced Full Stack Developer with a passion
                            for Developing Softwares. Currently pursuing B.Tech in CSE, I love to explore and
                            create, always eager to discuss new ideas.
                        </p>

                        <div className="intro__socials">
                            <a
                                href="https://www.linkedin.com/in/vipin-01/"
                                className="intro__social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin color="#eaf6ff" />
                            </a>
                            <a
                                href="https://www.leetcode.com/u/v1pin/"
                                className="intro__social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiLeetcode color="#eaf6ff" />
                            </a>
                            <a
                                href="https://www.github.com/v1pinx/"
                                className="intro__social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub color="#eaf6ff" />
                            </a>
                        </div>

                        <div className="intro__btns">
                            <a
                                href="https://drive.google.com/file/d/1eI5tUws50XB8YC3KLqD39u4uJQOd4Ss3/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn text-cs"
                            >
                                <span className="btn__text">Download CV</span>
                            </a>
                        </div>
                    </div>

                    {/* Image for larger screens */}
                    <div className='intro__img--wrapper intro__img--desktop'>
                        <div className='intro__banner'>
                            <Image src={Avatar} alt="Profile Image" className="intro__profile" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='card__dot-grid1'></div>
            <div className='card__dot-grid2'></div>
            <DiscordPresence />
        </>
    )
}

export default Introduction;