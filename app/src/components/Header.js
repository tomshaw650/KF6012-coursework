import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="m-5 flex flex-col">
      <h1 className="text-5xl font-bold md:text-7xl"><Link className="header-link" to="/">CHI Play 2021</Link></h1>
      <h2 className="text-2xl font-bold text-gray-400 md:ml-5">
        where HCI evolves.
      </h2>
    </header>
  );
}
