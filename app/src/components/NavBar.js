import React from "react";

export default function NavBar() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Tracks", link: "/tracks" },
    { name: "Authors", link: "/authors" },
  ];
  return (
    <nav className="m-5 mr-24 flex justify-center">
      <ul className="mt-8 flex flex-row gap-12 text-2xl">
        {navItems.map((item) => (
          <li key={item.name}>
            <a className="text-white" href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
