import React from "react";

import hero_img1 from "../images/hero_img1.jpg";

export default function HeroImage(props) {
  return (
    <>
      <img
        src={hero_img1}
        alt="hero_img1"
        className="mb-14 mt-16 h-96 w-96 rounded-full"
      />
    </>
  );
}
