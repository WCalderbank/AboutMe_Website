import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_data">
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-bright">Intermediate</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>React</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Node</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>CodePen</h4>
                <small className="text-bright">Begginer</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Jest</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* BREAK 1 */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_data">
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Git</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Express</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Heroku</h4>
                <small className="text-bright">Intermediate</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Databases</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>API Knowledge</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* BREAK 2  */}
        <div className="experience_tools">
          <h3>Technical Tools</h3>
          <div className="experience_data">
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>GitHub</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Visual Studio Code</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Slack Messenger</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Trello</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Postman</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Visual Studio 2022</h4>
                <small className="text-bright">Beginner</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Canva</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* Break 3 */}
        <div className="experience_languages">
          <h3>Programming Languages</h3>
          <div className="experience_data">
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-bright">Experienced</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Python</h4>
                <small className="text-bright">Intermediate</small>
              </div>
            </article>
            <article className="experience_skills">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>C#</h4>
                <small className="text-bright">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
