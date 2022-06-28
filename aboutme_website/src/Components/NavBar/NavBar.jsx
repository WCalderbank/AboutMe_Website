import React from "react";
import "./NavBar.css";
import {
  FaFolderOpen,
  FaHome,
  FaLaptopCode,
  FaUsers,
  FaFingerprint,
  FaEnvelopeSquare,
  FaLightbulb,
} from "react-icons/fa";
import { useState } from "react";

function NavBar() {
  const [currentNav, setCurrentNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setCurrentNav("#")}
        className={currentNav === "#" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setCurrentNav("#about")}
        className={currentNav === "#about" ? "active" : ""}
      >
        <FaFingerprint />
      </a>
      <a
        href="#experience"
        onClick={() => setCurrentNav("#experience")}
        className={currentNav === "#experience" ? "active" : ""}
      >
        <FaLaptopCode />
      </a>
      <a
        href="#services_i_provide"
        onClick={() => setCurrentNav("#services_i_provide")}
        className={currentNav === "#services_i_provide" ? "active" : ""}
      >
        <FaLightbulb />
      </a>
      <a
        href="#portfolio"
        onClick={() => setCurrentNav("#portfolio")}
        className={currentNav === "#portfolio" ? "active" : ""}
      >
        <FaFolderOpen />
      </a>
      <a
        href="#references"
        onClick={() => setCurrentNav("#references")}
        className={currentNav === "#references" ? "active" : ""}
      >
        <FaUsers />
      </a>
      <a
        href="#contact"
        onClick={() => setCurrentNav("#contact")}
        className={currentNav === "#contact" ? "active" : ""}
      >
        <FaEnvelopeSquare />
      </a>
    </nav>
  );
}

export default NavBar;
