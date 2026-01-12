"use client";
import "./Experience.css";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  experienceData,
  Experience as ExperienceType,
} from "@/app/data/experienceData";

interface ExperienceCardProps {
  experience: ExperienceType;
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      className="experience__card"
    >
      <div className="experience__row experience__row--first">
        <div className="experience__left">
          {experience.companyLogo && (
            <div className="experience__logo">
              <Image
                src={experience.companyLogo}
                alt={experience.company}
                width={60}
                height={60}
                className="experience__logo-img"
              />
            </div>
          )}
          <div className="experience__header-content">
            <h3 className="experience__role">{experience.role}</h3>
            <h4 className="experience__company">{experience.company}</h4>
          </div>
        </div>
        <div className="experience__right">
          <div className="experience__right-row">
            <span className="experience__time-badge">
              {experience.startDate} - {experience.endDate}
            </span>
          </div>
          {experience.location && (
            <div className="experience__right-row">
              <span className="experience__location">{experience.location}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="section experience" id="experience">
      <h2 className="section__title text-cs" data-aos="fade-up">
        Experience
      </h2>
      <p className="section__subtitle" data-aos="fade-up">
        MY <span>Journey</span>
      </p>
      <div className="experience__container container" data-aos="fade-up">
        <div className="experience__timeline">
          <AnimatePresence>
            {experienceData.length > 0 ? (
              experienceData.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))
            ) : (
              <div className="no-experience">No experience found.</div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
