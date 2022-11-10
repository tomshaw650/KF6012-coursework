export const navItems = [
  { name: "Home", link: "/" },
  {
    name: "Tracks",
    link: "/tracks",
    subMenu: [
      { name: "Interactivity", link: "/tracks/interactivity" },
      { name: "Full Papers", link: "/tracks/fullpapers" },
      { name: "WIP", link: "/tracks/wip" },
      { name: "Competition", link: "/tracks/competition" },
      { name: "Doctoral", link: "/tracks/doctoral" },
      { name: "Rapid", link: "/tracks/rapid" },
    ],
  },
  { name: "Authors", link: "/authors" },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  navItems,
};
