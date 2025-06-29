"use client";
import { useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Typewriter from "typewriter-effect";
import DiscordPresence from "./../DiscordPresence/DiscordPresence";
// import Background from "../Background/Background";
import AOS from "aos";
import "aos/dist/aos.css";
import './Introduction.css';
import ProfilePhoto from '../../public/photo2.png';

const Introduction = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const typewriterOptions = {
        strings: ["Developer", "Student", "Coder", "Tech Enthusiast"],
        autoStart: true,
        loop: true,
        cursor: "_",
        delay: 50,
        deleteSpeed: 30,
    };

    return (
        <>
            {/* <Background /> */}
            <div className="intro__wrapper" data-aos="flip-up">
                <div className="intro__container">
                    <div className="intro__content">
                        <div className="intro__subtitle">
                            Hi! <span>My Name is</span>
                        </div>
                        <h1 className="intro__name">
                            <span>Vipin</span> <span>Kumar</span>
                        </h1>
                        <b className="intro__designation">&#62;&#160;
                            <b>
                                <Typewriter options={typewriterOptions} />
                            </b>
                        </b>

                        {/* Image for smaller screens */}
                        <div className="intro__img--wrapper intro__img--mobile">
                            <div className="intro__banner">
                                <Image
                                    src={ProfilePhoto}
                                    alt="Profile Image"
                                    className="intro__profile"
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </div>

                        <p className="intro__text">
                            From India, I'm an experienced Full Stack Developer with a passion for Developing Softwares.
                            Currently pursuing B.Tech in CSE, I love to explore and create, always eager to discuss new ideas.
                        </p>

                        <div className="intro__socials">
                            <a href="https://www.linkedin.com/in/vipin-01/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin color="#eaf6ff" />
                            </a>
                            <a href="https://www.leetcode.com/u/v1pin/" target="_blank" rel="noopener noreferrer">
                                <SiLeetcode color="#eaf6ff" />
                            </a>
                            <a href="https://www.github.com/v1pinx/" target="_blank" rel="noopener noreferrer">
                                <FaGithub color="#eaf6ff" />
                            </a>
                            <a href="https://www.youtube.com/@ByteGeeks-01/" target="_blank" rel="noopener noreferrer">
                                <FaYoutube color="#eaf6ff" />
                            </a>
                        </div>

                        <div className="intro__btns">
                            <a
                                href="https://drive.google.com/file/d/1eta72ty2u11NU-7WWzX72A9CtynGne46/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn text-cs"
                            >
                                <span className="btn__text">Download CV</span>
                            </a>
                        </div>
                    </div>

                    {/* Image for larger screens */}
                    <div className="intro__img--wrapper intro__img--desktop">
                        <div className="intro__banner">
                            <Image
                                src={ProfilePhoto}
                                alt="Profile Image"
                                className="intro__profile"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <DiscordPresence />
        </>
    );
};

export default Introduction;
