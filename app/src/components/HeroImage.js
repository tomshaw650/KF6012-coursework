import React from "react";

import hero_img1 from "../images/hero_img1.jpg";

export default function HeroImage(props) {
  return (
    <>
      <img
        src={hero_img1}
        alt="hero_img1"
        className="ml-12 h-72 w-72 rounded-full md:mb-14 md:mt-16 md:flex md:h-96 md:w-96"
      />
    </>
  );
}
