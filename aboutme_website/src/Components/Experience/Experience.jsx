import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_data">
            <article className="experience_skills">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-bright">Experienced</small>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-bright">Experienced</small>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-bright">Experienced</small>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill />
              <h4>TypeScript</h4>
              <small className="text-bright">Intermediate</small>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className="text-bright">Experienced</small>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill />
              <h4>Node</h4>
              <small className="text-bright">Experienced</small>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill />
              <h4>Jest</h4>
              <small className="text-bright">Intermediate</small>
            </article>
          </div>
        </div>
        {/* BREAK 1 */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_data">
            <article className="experience_skills">
              <BsPatchCheckFill />
              <h4>Rest API</h4>
              <small className="text-bright">Experienced</small>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill />
              <h4>Node.js</h4>
              <small className="text-bright">Experienced</small>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill />
              <h4>Express</h4>
              <small className="text-bright">Experienced</small>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill />
              <h4>Heroku</h4>
              <small className="text-bright">Intermediate</small>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill />
              <h4>PostgreSQL</h4>
              <small className="text-bright">Experienced</small>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill />
              <h4>Databases</h4>
              <small className="text-bright">Experienced</small>
            </article>
          </div>
        </div>
      </div>
      {/* BREAK 2  */}
      <div className="experience_tools"></div>
    </section>
  );
}

export default Experience;
