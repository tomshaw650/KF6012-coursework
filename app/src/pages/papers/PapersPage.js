import React from "react";
import "../../index.css";

import NavBar from "../../components/navigation/NavBar";
import Header from "../../components/Header";
import LandingContent from "../../components/LandingContent";
import MobileNavBar from "../../components/navigation/MobileNavBar";

export default function PapersPage() {
  return (
    <div className="h-screen w-screen">
      <div className="flex justify-between bg-bgdark">
        <Header />
        <NavBar />
        <MobileNavBar />
      </div>
      <div className="flex flex-col justify-evenly md:flex-row">
        <LandingContent title="Papers" body="This is all the papers" />
      </div>
    </div>
  );
}
