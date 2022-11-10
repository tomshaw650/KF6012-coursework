import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import LandingPage from "./pages/LandingPage";
import PapersPage from "./pages/papers/PapersPage";
import TrackPage from "./pages/papers/TrackPage";
import AuthorsPage from "./pages/AuthorsPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/papers">
          <Route index element={<PapersPage />} />
          <Route path="/papers/:track" element={<TrackPage />} />
        </Route>
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
