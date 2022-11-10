import React from "react";
import { useParams } from "react-router-dom";
import "../../index.css";

import NavBar from "../../components/navigation/NavBar";
import Header from "../../components/Header";
import LandingContent from "../../components/LandingContent";
import MobileNavBar from "../../components/navigation/MobileNavBar";

export default function TrackPage() {
  const { track } = useParams();

  console.log(track);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex justify-between bg-bgdark">
        <Header />
        <NavBar />
        <MobileNavBar />
      </div>
      <div className="flex flex-col justify-evenly md:flex-row">
        <LandingContent title={track} body="This is a track page" />
      </div>
    </div>
  );
}
