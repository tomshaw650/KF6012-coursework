import React from "react";

import hero_img1 from "../images/hero_img1.jpg";

export default function HeroImage() {
  return (
    <>
      <img
        src={hero_img1}
        alt="Dark Conference Audience by user Headway on website Unsplash"
        className="ml-12 rounded-full ring-4 ring-white md:mb-14 md:mt-16 md:flex md:h-96 md:w-96"
      />
    </>
  );
}
