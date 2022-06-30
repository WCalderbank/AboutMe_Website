import React, { useRef } from "react";
import { BsEnvelope, BsLinkedin, BsTelephone } from "react-icons/bs";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9pnwrtl",
      "template_embo8oe",
      form.current,
      "rF5OfEZqfxrK2EwgM"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>How To Reach Me</h5>
      <h2>Contact</h2>

      <div className="container contact_container">
        <div className="contact_methods">
          <article className="contact_method">
            <BsEnvelope className="contact_icons" />
            <h4>Email</h4>
            <h5>wcalderbank99@gmail.com</h5>
            <a
              href="mailto:wcalderbank99@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Me An Email
            </a>
          </article>
          <article className="contact_method">
            <BsLinkedin className="contact_icons" />
            <h4>LinkedIn</h4>
            <h5>https://www.linkedin.com/in/will-calderbank-620741231/</h5>
            <a
              href="https://www.linkedin.com/in/will-calderbank-620741231/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Me A Message
            </a>
          </article>
          <article className="contact_method">
            <BsTelephone className="contact_icons" />
            <h4>Phone Number</h4>
            <h5>07508402278</h5>
            <a
              href="Tel: 07508402278"
              target="_blank"
              rel="noopener noreferrer"
            >
              Give Me A Call
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name..." required />
          <input type="email" name="email" placeholder=" Email..." required />
          <textarea
            name="message"
            rows="8"
            placeholder="Message..."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
