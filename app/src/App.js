import "./index.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AuthorModal } from "./components/AuthorModal";

import LandingPage from "./pages/LandingPage";
import PapersPage from "./pages/papers/PapersPage";
import TrackPage from "./pages/papers/TrackPage";
import AuthorsPage from "./pages/AuthorsPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="h-screen w-screen">
      <Routes location={background || location}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/papers">
          <Route index element={<PapersPage />} />
          <Route path="/papers/:track" element={<TrackPage />} />
        </Route>
        <Route path="/authors" element={<AuthorsPage />}>
          <Route path="/authors/:authorId" element={<AuthorModal />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/:authorId" element={<AuthorModal />} />
        </Routes>
      )}
    </div>
  );
}
