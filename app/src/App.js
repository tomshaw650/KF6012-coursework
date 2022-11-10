import React from "react";
import "./index.css";

import NavBar from "./components/navigation/NavBar";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import LandingContent from "./components/LandingContent";
import Footer from "./components/Footer";
import MobileNavBar from "./components/navigation/MobileNavBar";

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex justify-between bg-bgdark">
        <Header />
        <NavBar />
        <MobileNavBar />
      </div>
      <div className="flex flex-col justify-evenly md:flex-row">
        <LandingContent
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
