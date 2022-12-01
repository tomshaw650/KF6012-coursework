/**
 *
 * Component for the Hero Image
 * Set as a js function rather than in the public folder for performance
 * Resized using /helpers/resizeImage.js
 *
 * @author Tom Shaw
 *
 */

import React from "react";

import hero_img from "../images/desktop-hero_img.jpg";

export default function HeroImage() {
  return (
    <>
      <img
        src={hero_img}
        alt="Dark Conference Audience by user Headway on website Unsplash"
        className="ml-12 h-72 w-72 rounded-full ring-4 ring-white md:mb-14 md:mt-16 md:flex md:h-96 md:w-96"
      />
    </>
  );
}
