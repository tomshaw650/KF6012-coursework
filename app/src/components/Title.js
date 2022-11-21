/**
 *
 * Title component creates a header to serve as the branding for the site
 * Uses react-router Link to serve as a further link to the homepage
 *
 * @author Tom Shaw
 *
 */

import React from "react";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <div className="m-5 flex flex-col">
      <h1 className="text-5xl font-bold md:text-7xl">
        <Link className="title-link" to="/">
          CHI Play 2021
        </Link>
      </h1>
      <h2 className="text-2xl font-bold text-gray-400 md:ml-5">
        where HCI evolves.
      </h2>
    </div>
  );
}
