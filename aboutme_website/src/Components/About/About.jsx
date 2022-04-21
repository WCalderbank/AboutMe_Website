import React from "react";
import "./About.css";
import Me from "../../Accessories/Profile.jpeg";
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
              <small>6 Months</small>
            </article>
            <article className="about_card">
              <FaHandshake className="about_icon" />
              <h5>Clients</h5>
              <small>1</small>
            </article>
            <article className="about_card">
              <FaClipboardCheck className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem corporis dicta ipsa ipsum debitis assumenda
            voluptatibus vel porro aliquid, dolore deserunt magnam quasi numquam
            praesentium suscipit, quis voluptatem quae eligendi!
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
