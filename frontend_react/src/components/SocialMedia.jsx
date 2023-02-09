import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const SocialMedia = () => {
  return (
    <div className="app__social">
     
        <a href="https://www.linkedin.com/in/rahmonjon-john-ibragimov-b03635203/"   target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/Rahmonjon22"   target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="tel: +491785085114"  target="_blank" rel="noreferrer">
          <IoLogoWhatsapp />
        </a>
   
    </div>
  );
};

export default SocialMedia;
