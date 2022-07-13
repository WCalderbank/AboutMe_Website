import React from "react";
import "./ServicesIProvide.css";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

function ServicesIProvide() {
  return (
    <section id="services_i_provide">
      <h5>What do I bring to the table?</h5>
      <h2>Services I Provide</h2>

      <div className="container services_i_provide_container">
        <article className="service">
          <div className="service_top">
            <h3>Software Developer</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsFillHandThumbsUpFill className="service_i_provide_icon" />
              <p>Knowledge of Coding Languages</p>
            </li>
            <li>
              <BsFillHandThumbsUpFill className="service_i_provide_icon" />
              <p>Excellent Communication Skills</p>
            </li>
            <li>
              <BsFillHandThumbsUpFill className="service_i_provide_icon" />
              <p>Problem-Solving Mind</p>
            </li>
            <li>
              <BsFillHandThumbsUpFill className="service_i_provide_icon" />
              <p>Resourceful and Inquisitive Attitude</p>
            </li>
            <li>
              <BsFillHandThumbsUpFill className="service_i_provide_icon" />
              <p>Good Understanding of Agile Methodologies</p>
            </li>
          </ul>
        </article>
        {/* Break 1 */}
        <article className="service">
          <div className="service_top">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsFillHandThumbsUpFill className="service_i_provide_icon" />
              <p>Produce Clean & Efficient Code</p>
            </li>
            <li>
              <BsFillHandThumbsUpFill className="service_i_provide_icon" />
              <p>Work Cooperatively & Effectively With Developers</p>
            </li>
            <li>
              <BsFillHandThumbsUpFill className="service_i_provide_icon" />
              <p>Front-End Design & Development</p>
            </li>
            <li>
              <BsFillHandThumbsUpFill className="service_i_provide_icon" />
              <p>Back-End Development</p>
            </li>
            <li>
              <BsFillHandThumbsUpFill className="service_i_provide_icon" />
              <p>TDD & Continous Intergration</p>
            </li>
          </ul>
        </article>
        {/* Break 2 */}
        <article className="service">
          <div className="service_top">
            <h3>UX/UI</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsFillHandThumbsUpFill className="service_i_provide_icon" />
              <p>Low/High Fidelity Wireframes</p>
            </li>
            <li>
              <BsFillHandThumbsUpFill className="service_i_provide_icon" />
              <p>User Stories</p>
            </li>
            <li>
              <BsFillHandThumbsUpFill className="service_i_provide_icon" />
              <p>Flow Charts & Diagrams</p>
            </li>
            <li>
              <BsFillHandThumbsUpFill className="service_i_provide_icon" />
              <p>User Research & Feedback</p>
            </li>
            <li>
              <BsFillHandThumbsUpFill className="service_i_provide_icon" />
              <p>Tailored Designs</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default ServicesIProvide;
