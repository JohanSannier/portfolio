import React from "react";
import { sections } from "../constants/sections";

const NavLinks = ({ setToggle }) => {
  return (
    <>
      {sections.map((item) => (
        <li key={item}>
          <a
            href={`#${item}`}
            onClick={() => {
              setToggle && setToggle(false);
            }}
          >
            {item}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
