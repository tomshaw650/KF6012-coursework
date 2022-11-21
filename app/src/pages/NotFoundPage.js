/**
 *
 * NotFound component. This page serves as a 404 to non-existing routes
 * Uses React Router's useNavigate hook to return user
 *
 */

import React from "react";
import "../index.css";

import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import ContentInfo from "../components/ContentInfo";

export default function NotFoundPage() {
  // useNavigate hook to return user to previous page
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen">
      {/* Header component displays main title and navigation */}
      <Header />
      <div className="flex flex-col justify-evenly md:flex-row">
        {/* ContentInfo component renders error message and a button to return users based on previous page */}
        <ContentInfo
          title="Page not found!"
          body="The page you are trying to reach does not exist. Please go back and try again!"
          error={true}
          navigate={() => navigate(-1)}
        />
      </div>
    </div>
  );
}
