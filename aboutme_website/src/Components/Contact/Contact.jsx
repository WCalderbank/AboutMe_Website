import React from "react";
import { BsEnvelope, BsLinkedin } from "react-icons/bs";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h5>How To Reach Me</h5>
      <h2>Contact</h2>

      <div className="container contact_container">
        <div className="contact_methods">
          <article className="contact_method">
            <BsEnvelope />
            <h4>Email</h4>
            <h5>wcalderbank99@gmail.com</h5>
            <a href="mailto:wcalderbank99@gmail.com">Send Me An Email</a>
          </article>
          <article className="contact_method">
            <BsLinkedin />
            <h4>LinkedIn</h4>
            <h5>https://www.linkedin.com/in/will-calderbank-620741231/</h5>
            <a href="https://www.linkedin.com/in/will-calderbank-620741231/">
              Send Me An Email
            </a>
          </article>
        </div>
        <form></form>
      </div>
    </section>
  );
}

export default Contact;
