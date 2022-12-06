/**
 *
 * LandingPage component, used as a route for the home page
 * This page displays a description and image for the site
 *
 */

import React from "react";
import "../index.css";

import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import ContentInfo from "../components/ContentInfo";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="h-screen w-screen">
      {/* Header component displays the main title and navigation */}
      <Header />
      <div className="flex flex-col justify-evenly md:flex-row">
        <ContentInfo
          title="Discover the Conference"
          body="Welcome to the main conference website. Here you can browse all related
      info, including all the papers and authors at CHI Play. Use the menu at
      the top to navigate."
        />
        <HeroImage />
      </div>
      <Footer />
    </div>
  );
}
