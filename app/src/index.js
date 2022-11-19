import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./helpers/scrollToTop";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const basename = document.querySelector("base")?.getAttribute("href") ?? "/";
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
