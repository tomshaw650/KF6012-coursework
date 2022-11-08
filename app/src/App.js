import React from "react";
import "./index.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="h-screen w-screen bg-bgblack">
      <span className="sr-only">CHI Play Conference 2021</span>
      <NavBar />

      <div>
        <Header />
      </div>
    </div>
  );
}
