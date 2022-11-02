/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <div>
          <BsTwitter />
        </div>
      </a> */}
      <a
        href="https://github.com/JohanSannier"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsGithub />
        </div>
      </a>
      <a
        href="https://fr.linkedin.com/in/johan-sannier"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
