"use client";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { skillArr, skills } from "@/app/data/skillData";
import Background from "../Background/Background";
import arch from "@/app/public/arch.svg";
import c from "../../public/c.svg";
import cpp from "@/app/public/cpp.svg";
import css from "@/app/public/css.svg";
import docker from "@/app/public/docker.svg";
import express from "@/app/public/express.svg";
import figma from "@/app/public/figma.svg";
import git from "@/app/public/git.svg";
import html from "@/app/public/html.svg";
import javascript from "@/app/public/js.svg";
import mongodb from "@/app/public/mongodb.svg";
import next from "@/app/public/next.svg";
import node from "@/app/public/nodejs.svg";
import postgresql from "@/app/public/psql.svg";
import python from "@/app/public/python.svg";
import react from "@/app/public/react.svg";
import tailwind from "@/app/public/tailwind.svg";
import netlify from "@/app/public/netlify.svg";
import postman from "@/app/public/postman.svg";
import typescript from "@/app/public/ts.svg";


import Image from "next/image";
import GitHubCalendar from "react-github-calendar";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <>
      <section className="skills" id="skills">
        {/* <Background /> */}
        <h2 className="section__title text-cs" data-aos="fade-up">
          Professional Skills
        </h2>
        <p className="section__subtitle" data-aos="fade-up">
          MY <span>Tools</span>
        </p>

        <div className="section__icons-wrapper" data-aos="fade-up">
          <div className="section__icons-container">
            <div className="section__icons">
              <Image src={arch} alt="arch" />
              <p>arch</p>
            </div>
            <div className="section__icons">
              <Image src={c} alt="c" />
              <p>c</p>
            </div>
            <div className="section__icons">
              <Image src={cpp} alt="cpp" />
              <p>cpp</p>
            </div>
            <div className="section__icons">
              <Image src={css} alt="css" />
              <p>css</p>
            </div>
            <div className="section__icons">
              <Image src={docker} alt="docker" />
              <p>docker</p>
            </div>
            <div className="section__icons">
              <Image src={express} alt="express" />
              <p>express</p>
            </div>
            <div className="section__icons">
              <Image src={figma} alt="figma" />
              <p>figma</p>
            </div>
            <div className="section__icons">
              <Image src={git} alt="git" />
              <p>git</p>
            </div>
            <div className="section__icons">
              <Image src={html} alt="html" />
              <p>html</p>
            </div>
            <div className="section__icons">
              <Image src={javascript} alt="javascript" />
              <p>js</p>
            </div>
            <div className="section__icons">
              <Image src={mongodb} alt="mongodb" />
              <p>mongodb</p>
            </div>
            <div className="section__icons">
              <Image src={next} alt="next" />
              <p>next</p>
            </div>
            <div className="section__icons">
              <Image src={node} alt="nodejs" />
              <p>node</p>
            </div>
            <div className="section__icons">
              <Image src={postgresql} alt="postgresql" />
              <p>psql</p>
            </div>
            <div className="section__icons">
              <Image src={python} alt="python" />
              <p>python</p>
            </div>
            <div className="section__icons">
              <Image src={react} alt="react" />
              <p>react</p>
            </div>
            <div className="section__icons">
              <Image src={tailwind} alt="tailwind" />
              <p>tailwind</p>
            </div>
            <div className="section__icons">
              <Image src={netlify} alt="netlify" />
              <p>netlify</p>
            </div>
            <div className="section__icons">
              <Image src={postman} alt="postman" />
                <p>postman</p>
             </div>
            <div className="section__icons">
              <Image src={typescript} alt="typescript" />
                <p>typescript</p>
            </div>
            
          </div>
        </div>
         <div className="github-activity" data-aos="fade-up">
          <h3 className="activity-title">GitHub Contributions</h3>
          <div className="github-calendar-container">
            <a href="https://www.github.com/v1pinx" target="_blank">
              <GitHubCalendar
                username="v1pinx"
                colorScheme="dark"
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                hideColorLegend={false}
                hideTotalCount={false}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
