import React from "react";
import "./About.css";
import Me from "../../Accessories/Me1.JPG";
import { FaBriefcase, FaClipboardCheck, FaHandshake } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h5>Who Am</h5>

      <h2>I?</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="me" />
          </div>
        </div>

        <div className="about_data">
          <div className="about_cards">
            <article className="about_card">
              <FaBriefcase className="about_icon" />
              <h5>Experience</h5>
              <small>8 Months</small>
            </article>
            <article className="about_card">
              <FaHandshake className="about_icon" />
              <h5>Clients</h5>
              <small>1</small>
            </article>
            <article className="about_card">
              <FaClipboardCheck className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Hey there, My name is Will Calderbank, I am a software developer
            from Rochdale, Greater Manchester. I'm searching for a position
            (front-end or back-end) in an Agile company. I love learning new
            skills, have a creative problem-solving mind and wish to learn more
            about the ever expanding world of tech first-hand. Looking forward
            to jumping into the industry and starting my new journey.
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Lets Chat
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
