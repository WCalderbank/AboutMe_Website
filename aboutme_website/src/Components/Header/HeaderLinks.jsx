import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function HeaderLinks() {
  return (
    <div className="header_links">
      <a
        href="https://www.linkedin.com/in/will-calderbank-620741231/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <BsLinkedin />
      </a>
      <a href="https://github.com/WCalderbank" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderLinks;
