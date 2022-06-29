import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderLinks from "./HeaderLinks";
import { FaUserSecret } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hey There I'm...</h5>
        <h1>Will Calderbank</h1>
        <h5 className="text-bright">Software Developer</h5>
        <CTA />
        <HeaderLinks />

        <div className="profile">
          <FaUserSecret />
        </div>

        <a href="#contact" className="scroller">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
