import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}
