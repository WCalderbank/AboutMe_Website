import React from "react";
import CV from "../../Accessories/William Calderbank CV (Remote & Manchester).pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        {" "}
        Lets Chat...
      </a>
    </div>
  );
}

export default CTA;
