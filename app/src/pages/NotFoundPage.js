import React from "react";
import "../index.css";

import Header from "../components/Header";
import LandingContent from "../components/LandingContent";

export default function NotFoundPage() {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="flex flex-col justify-evenly md:flex-row">
        <LandingContent
          title="Page not found!"
          body="The page you are trying to reach does not exist. Please go back and try again!"
        />
      </div>
    </div>
  );
}
