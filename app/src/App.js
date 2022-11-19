import "./index.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AuthorModal } from "./components/modals/AuthorModal";
import { AbstractModal } from "./components/modals/AbstractModal";

import LandingPage from "./pages/LandingPage";
import PapersPage from "./pages/PapersPage";
import TrackPage from "./pages/TrackPage";
import AuthorsPage from "./pages/AuthorsPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="h-full w-screen" id="toplevel">
      <Routes location={background || location}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/papers">
          <Route index element={<PapersPage />} />
          <Route path="/papers/view/:paperId" element={<AbstractModal />} />
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
          <Route path="/view/:paperId" element={<AbstractModal />} />
        </Routes>
      )}
    </div>
  );
}
