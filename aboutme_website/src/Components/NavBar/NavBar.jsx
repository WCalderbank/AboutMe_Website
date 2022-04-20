import React from "react";
import "./NavBar.css";
import {
  FaFolderOpen,
  FaHome,
  FaLaptopCode,
  FaUsers,
  FaFingerprint,
  FaEnvelopeSquare,
} from "react-icons/fa";

function NavBar() {
  return (
    <nav>
      <a href="#home">
        <FaHome />
      </a>
      <a href="#about">
        <FaFingerprint />
      </a>
      <a href="#experience">
        <FaLaptopCode />
      </a>
      <a href="#portfolio">
        <FaFolderOpen />
      </a>
      <a href="#references">
        <FaUsers />
      </a>
      <a href="#contact">
        <FaEnvelopeSquare />
      </a>
    </nav>
  );
}

export default NavBar;
