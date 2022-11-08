import React from "react";
import "./index.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="h-screen w-screen bg-bgblack">
      <div className="flex justify-between">
        <Header />
        <NavBar />
      </div>
      <p class="text-white ">
        Welcome to the main conference website. Here you can browse all related
        info, including all the papers and authors at CHI Play. Use the menu at
        the top to navigate.
      </p>
    </div>
  );
}
