import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

import { navItems } from "./navItems";

export default function MobileNavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="md:hidden">
      <button
        className="relative top-16 right-6 text-white"
        onClick={handleToggle}
      >
        {navbarOpen ? (
          <MdClose style={{ color: "#fff", width: "20px", height: "40px" }} />
        ) : (
          <FiMenu style={{ color: "#fff", width: "20px", height: "40px" }} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        {navItems.map((item) => (
          <li key={item.name} className="dropdown m-10">
            <a
              onClick={closeMenu}
              href={item.link}
              className="block text-white"
            >
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
            </a>
            {item.subMenu && (
              <ul className="dropdown-menu absolute mt-2 rounded-md bg-white shadow-lg">
                {item.subMenu.map((subItem) => (
                  <li key={subItem.name}>
                    <a
                      href={subItem.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </a>
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
