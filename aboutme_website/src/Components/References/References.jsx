import React from "react";
import "./References.css";
import { FaUserAlt } from "react-icons/fa";
import { BsEnvelope, BsLinkedin } from "react-icons/bs";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const referee_data = [
  {
    name: "Dave Megins-Nicholas",
    job: "Senior Software Engineer at ASOS",
    linkedin: "https://www.linkedin.com/in/davidm-n/",
    email: "dave.megins-nicholas@asos.com",
  },
  {
    name: "Kentleigh English",
    job: "Director at Ikenga Innovations and Contract Web Developer",
    linkedin: "https://www.linkedin.com/in/kentleighenglish/",
    email: "kentleigh@ikengainnovations.com",
  },
  {
    name: "Terry Calderbank",
    job: "DevOps in Test Consultant",
    linkedin: "https://www.linkedin.com/in/terry-calderbank-9386251/",
    email: "",
  },
];

function References() {
  return (
    <section id="references">
      <h5>Contacts In The Industry</h5>
      <h2>References</h2>

      <Swiper
        className="container references_container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet`,
        }}
      >
        {referee_data.map(({ name, job, linkedin, email }, index) => {
          return (
            <SwiperSlide key={index} className="reference">
              <div className="referee_icon">
                <FaUserAlt />
              </div>
              <h2 className="referee_name">{name}</h2>
              <h3>{job}</h3>
              <div className="reference_info">
                <div className="linkedin">
                  <BsLinkedin className="linkedin_icon" />
                  <h4>{linkedin}</h4>
                </div>
                <div className="email">
                  <BsEnvelope className="email_icon" />
                  <h4>{email}</h4>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default References;
