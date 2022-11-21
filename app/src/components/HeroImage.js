import React from "react";

import hero_img from "../images/hero_img.jpg";

export default function HeroImage() {
  return (
    <>
      <img
        src={hero_img}
        alt="Dark Conference Audience by user Headway on website Unsplash"
        className="ml-24 h-72 w-72 rounded-full ring-4 ring-white md:mb-14 md:mt-16 md:flex md:h-96 md:w-96"
      />
    </>
  );
}
