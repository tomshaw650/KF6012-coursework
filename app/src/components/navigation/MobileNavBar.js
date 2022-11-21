/**
 *
 * Seperate component for mobile navigation bar
 * This is used to display the navigation bar on mobile devices
 * Pulling in react-icons for the hamburger menu
 * using navItems to display the navigation items
 *
 * @author Tom Shaw
 *
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

import { navItems } from "./navItems";

export default function MobileNavBar() {
  // state to toggle the hamburger menu
  const [navbarOpen, setNavbarOpen] = useState(false);

  // function to handle the hamburger menu
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  // function to close the hamburger menu
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="md:hidden">
      {/* media query sets this as hidden on desktop */}

      {/* hamburger menu */}
      <button
        className="relative top-16 right-6 text-white"
        onClick={handleToggle}
      >
        {/* if the navigation bar is open, display the close icon, else display the 'hamburger' */}
        {navbarOpen ? (
          <MdClose style={{ color: "#fff", width: "20px", height: "40px" }} />
        ) : (
          <FiMenu style={{ color: "#fff", width: "20px", height: "40px" }} />
        )}
      </button>
      {/* if the navigation bar is open, display the navigation items */}
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        {navItems.map((item) => (
          <li key={item.name} className="dropdown m-10">
            <Link
              onClick={closeMenu}
              to={item.link}
              className="block text-white"
            >
              {item.name}
              {/* if the navigation item has a dropdown, display an animated arrow SVG for the item */}
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
            {/* if there is sub menu for a nav item, display the sub menu items */}
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
