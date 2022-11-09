import React from "react";
import "./index.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import LandingContent from "./components/LandingContent";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex justify-between bg-bgdark">
        <Header />
        <NavBar />
      </div>
      <div className="flex justify-evenly">
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
