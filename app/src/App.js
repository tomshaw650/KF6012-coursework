/**
 *
 * This is the main component of the application
 * Used to render the application and set the routing
 *
 * @author Tom Shaw
 *
 */

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
  // Get the current location from react-router-dom
  const location = useLocation();

  // Set the background based on the current location to be used for modals
  const background = location.state && location.state.background;

  return (
    <div className="h-full w-screen">
      {/* Render the routes, setting the location */}
      <Routes location={background || location}>
        {/* Base path routes to Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Papers path routes to the Papers page, creating a modal on selecting an abstract */}
        <Route path="/papers" element={<PapersPage />}>
          <Route path="/papers/view/:paperId" element={<AbstractModal />} />
        </Route>

        {/* Tracks path routes to the Tracks page, set with a prpo. Creates a modal on selecting an abstract */}
        <Route
          path="/papers/interactivity"
          element={<TrackPage track="interactivity" />}
        >
          <Route path="view/:paperId" element={<AbstractModal />} />
        </Route>

        <Route
          path="/papers/fullpapers"
          element={<TrackPage track="fullpapers" />}
        >
          <Route path="view/:paperId" element={<AbstractModal />} />
        </Route>
        <Route path="/papers/wip" element={<TrackPage track="wip" />}>
          <Route path="view/:paperId" element={<AbstractModal />} />
        </Route>
        <Route
          path="/papers/competition"
          element={<TrackPage track="competition" />}
        >
          <Route path="view/:paperId" element={<AbstractModal />} />
        </Route>
        <Route path="/papers/doctoral" element={<TrackPage track="doctoral" />}>
          <Route path="view/:paperId" element={<AbstractModal />} />
        </Route>
        <Route path="/papers/rapid" element={<TrackPage track="rapid" />}>
          <Route path="view/:paperId" element={<AbstractModal />} />
        </Route>

        {/* Authors path routes to the Authors page, creating a modal on selecting an author ID */}
        <Route path="/authors" element={<AuthorsPage />}>
          <Route path="/authors/:authorId" element={<AuthorModal />} />
        </Route>

        {/* 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Render the modal if the background is set, this allows the modal to appear on top of the previous page */}
      {background && <Route path="view/:paperId" element={<AbstractModal />} />}
      {background && (
        <Route path="author/:authorId" element={<AuthorModal />} />
      )}
    </div>
  );
}
