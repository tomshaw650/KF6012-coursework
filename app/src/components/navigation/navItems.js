/**
 *
 * Exportable array of objects containing the navigation items and their links
 * This allows for easy modification of the navigation items and their links
 * without having to change the NavBar or MobileNavBar component
 *
 */

export const navItems = [
  { name: "Home", link: "/" },
  {
    name: "Papers",
    link: "/papers",
    subMenu: [
      { name: "Interactivity", link: "/papers/interactivity" },
      { name: "Full Papers", link: "/papers/fullpapers" },
      { name: "WIP", link: "/papers/wip" },
      { name: "Competition", link: "/papers/competition" },
      { name: "Doctoral", link: "/papers/doctoral" },
      { name: "Rapid", link: "/papers/rapid" },
    ],
  },
  { name: "Authors", link: "/authors" },
];

// the below line is for use in ignoring warning during development
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  navItems,
};
