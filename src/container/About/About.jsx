import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { abouts } from "../../constants/abouts.js";

import "./About.scss";
import AppWrap from "../../wrapper/AppWrap.js";
import MotionWrap from "../../wrapper/MotionWrap.js";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Je sais qu'une <span>Bonne App</span>
        <br /> est synonyme d'un <span>Travail Apprécié</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={`${about.title}${index}`}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "à propos",
  "app__whitebg"
);
