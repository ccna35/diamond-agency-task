type NavLinkType = {
  id: number;
  href: string;
  name: string;
  dropdownMenu?: {
    id: number;
    href: string;
    name: string;
  }[];
};

export const navLinks: NavLinkType[] = [
  { id: 1, href: "/", name: "Home" },
  { id: 2, href: "/", name: "About Us" },
  {
    id: 3,
    href: "/",
    name: "Causes",
    dropdownMenu: [
      { id: 1, href: "/", name: "Causes" },
      { id: 2, href: "/", name: "Causes Details" },
    ],
  },
  {
    id: 4,
    href: "/",
    name: "Blog",
    dropdownMenu: [
      { id: 1, href: "/", name: "Blog" },
      { id: 2, href: "/", name: "Blog Details" },
    ],
  },
  {
    id: 5,
    href: "/",
    name: "Pages",
    dropdownMenu: [
      { id: 1, href: "/", name: "Volunteers" },
      { id: 2, href: "/", name: "Event Details" },
    ],
  },
  { id: 6, href: "/", name: "Contact Us" },
];
