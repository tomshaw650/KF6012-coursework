/**
 *
 * The main entry point for the application
 * React.StrictMode is used to enable strict mode for the application
 * StrictMode is a tool for highlighting potential problems in an application
 *
 * BrowserRouter from react-router-dom is used to enable routing in the application
 * The basename is set to allow BrowserRouter to work at the /kf6012/coursework/app URL
 *
 * The App component is rendered inside the BrowserRouter
 *
 * @author Tom Shaw
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const basename = document.querySelector("base")?.getAttribute("href") ?? "/";
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
