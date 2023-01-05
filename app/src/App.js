/**
 *
 * This is the main component of the application
 * Used to render the application and set the routing
 *
 * @author Tom Shaw
 *
 */

import "./index.css";
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AuthorModal } from "./components/modals/AuthorModal";
import { AbstractModal } from "./components/modals/AbstractModal";
import { AdminModal } from "./components/modals/AdminModal";
import { PaperAuthorModal } from "./components/modals/PaperAuthorModal";

import LandingPage from "./pages/LandingPage";
import PapersPage from "./pages/PapersPage";
import TrackPage from "./pages/TrackPage";
import AuthorsPage from "./pages/AuthorsPage";
import AdminPage from "./pages/AdminPage";
import SignupPage from "./pages/SignupPage";
import NotFoundPage from "./pages/NotFoundPage";
import AffiliationPage from "./pages/AffiliationPage";

export default function App() {
  // create authentication state variable
  const [authenticated, setAuthenticated] = useState(false);

  // Get the current location from react-router-dom
  const location = useLocation();

  // Set the background based on the current location to be used for modals
  const background = location.state && location.state.background;

  const handleAuthenticated = (isAuthenticated) => {
    setAuthenticated(isAuthenticated);
  };

  return (
    <div className="h-full w-screen">
      {/* Render the routes, setting the location */}
      <Routes location={background || location}>
        {/* Base path routes to Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Papers path routes to the Papers page, creating a modal on selecting an abstract */}
        <Route path="/papers" element={<PapersPage />}>
          <Route path="/papers/view/:paperId" element={<AbstractModal />} />
          <Route
            path="/papers/authors/:paperId"
            element={<PaperAuthorModal />}
          />
        </Route>

        {/* Tracks path routes to the Tracks page, set with a prpo. Creates a modal on selecting an abstract */}
        <Route
          path="/papers/interactivity"
          element={<TrackPage track="interactivity" />}
        >
          <Route path="view/:paperId" element={<AbstractModal />} />
        </Route>

        {/* Full Papers track route */}
        <Route
          path="/papers/fullpapers"
          element={<TrackPage track="fullpapers" />}
        >
          <Route path="view/:paperId" element={<AbstractModal />} />
        </Route>

        {/* WIP track route */}
        <Route path="/papers/wip" element={<TrackPage track="wip" />}>
          <Route path="view/:paperId" element={<AbstractModal />} />
        </Route>

        {/* Competition track route */}
        <Route
          path="/papers/competition"
          element={<TrackPage track="competition" />}
        >
          <Route path="view/:paperId" element={<AbstractModal />} />
        </Route>

        {/* Doctoral track route */}
        <Route path="/papers/doctoral" element={<TrackPage track="doctoral" />}>
          <Route path="view/:paperId" element={<AbstractModal />} />
        </Route>

        {/* Rapid track route */}
        <Route path="/papers/rapid" element={<TrackPage track="rapid" />}>
          <Route path="view/:paperId" element={<AbstractModal />} />
        </Route>

        {/* Authors path routes to the Authors page, creating a modal on selecting an author ID */}
        <Route path="/authors" element={<AuthorsPage />}>
          <Route path="/authors/:authorId" element={<AuthorModal />} />
        </Route>

        <Route
          path="/authors/affiliation"
          element={<AffiliationPage />}
        ></Route>

        {/* Admin path passes in authentication details */}
        <Route
          path="/admin"
          element={
            <AdminPage
              authenticated={authenticated}
              handleAuthenticated={handleAuthenticated}
            />
          }
        >
          <Route path="/admin/edit/:paperId" element={<AdminModal />} />
        </Route>
        <Route path="/admin/signup" element={<SignupPage />} />

        {/* 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Render the modal if the background is set, this allows the modal to appear on top of the previous page */}
      {background && <Route path="view/:paperId" element={<AbstractModal />} />}
      {background && (
        <Route path="author/:authorId" element={<AuthorModal />} />
      )}
      {background && (
        <Route path="admin/edit/:paperId" element={<AdminModal />} />
      )}
      {background && (
        <Route path="papers/authors/:paperId" element={<PaperAuthorModal />} />
      )}
    </div>
  );
}
