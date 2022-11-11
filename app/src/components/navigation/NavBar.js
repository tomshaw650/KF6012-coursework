import React from "react";
import { Link } from "react-router-dom";

import { navItems } from "./navItems";

export default function NavBar() {
  return (
    <nav className="m-5 mr-24 hidden justify-center md:flex">
      <ul className="mt-8 flex flex-row gap-12 text-2xl">
        {navItems.map((item) => (
          <li key={item.name} className="dropdown">
            <Link to={item.link} className="flex flex-row text-white">
              {item.name}
              {item.subMenu ? (
                <div className="mt-1 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="arrow ml-2 mt-1 h-4 w-4 duration-500 ease-in-out"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              ) : null}
            </Link>
            {item.subMenu && (
              <ul className="dropdown-menu absolute mt-2 rounded-md bg-white shadow-lg">
                {item.subMenu.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
