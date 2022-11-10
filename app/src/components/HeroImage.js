import React from "react";

import hero_img1 from "../images/hero_img1.jpg";

export default function HeroImage() {
  return (
    <>
      <img
        src={hero_img1}
        alt="Conference audience in a dark auditorium"
        className="h-72 w-72 rounded-full ring-4 ring-white sm:left-20 sm:mr-12 md:ml-12 md:mb-14 md:mt-16 md:flex md:h-96 md:w-96"
      />
    </>
  );
}
