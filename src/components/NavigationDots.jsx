import React from "react";
import { sections } from "../constants/sections";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {sections.map((item, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
