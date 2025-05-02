"use client";
import "./Achievements.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Background from "../Background/Background";
import GitHubCalendar from "react-github-calendar";
import { achievements } from "@/app/data/achievementData";
import LeetCodeStats from "./LeetCodeStats";

const Achievements = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <section className="section achievements" id="achievements">
        <Background />
        <h2 className="section__title text-cs" data-aos="fade-up">
          Achievements
        </h2>
        <p className="section__subtitle" data-aos="fade-up">
          MY <span>MILESTONES</span>
        </p>

        {/* GitHub Contribution Calendar */}
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

        {/* LeetCode Stats */}
        <div className="leetcode-activity" data-aos="fade-up">
          <h3 className="activity-title">LeetCode Progress</h3>
          <LeetCodeStats />
        </div>

        {/* Achievement Cards */}
        <div className="achievements__container" data-aos="fade-up">
          {achievements.map((achievement, index) => (
            <div
              className="achievement__card"
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={(index % 3) * 100}
            >
              <div className="achievement__icon">
                <i className={`fa-solid fa-${achievement.icon}`}></i>
              </div>
              <div className="achievement__content">
                <h3 className="achievement__title">{achievement.title}</h3>
                <div className="achievement__organization">
                  {achievement.organization}
                </div>
                <p className="achievement__description">
                  {achievement.description}
                </p>
                <div className="achievement__date">{achievement.date}</div>
              </div>
              <div className="card__dot-grid"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Achievements;
