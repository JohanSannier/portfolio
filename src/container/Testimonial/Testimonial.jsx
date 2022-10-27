import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonial.scss";
import { brands, testimonials } from "../../constants/testimonials";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  const test = testimonials[currentIndex];

  return (
    <>
      <div className="app__testimonial-item app__flex">
        <img src={test.imgurl} alt="Recommandation" />
        <div className="app__testimonial-content">
          <p className="p-text">{test.feedback}</p>
          <div>
            <h4 className="bold-text">{test.name}</h4>
            <h5 className="p-text">{test.company}</h5>
          </div>
        </div>
      </div>

      <div className="app__testimonial-btns app__flex">
        <div
          className="app__flex"
          onClick={() =>
            handleClick(
              currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
            )
          }
        >
          <HiChevronLeft />
        </div>
        <div
          className="app__flex"
          onClick={() =>
            handleClick(
              currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
            )
          }
        >
          <HiChevronRight />
        </div>
      </div>

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand.id}
          >
            <img src={brand.imgurl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "recommandation",
  "app__primarybg"
);
