import { NavLink } from "react-router-dom";
import Button from "../Buttons/SecondaryButton";
import PrimaryButton from "../Buttons/PrimaryButton";

type NavLinksType = {
  id: number;
  href: string;
  name: string;
};

const navLinks: NavLinksType[] = [
  { id: 1, href: "/", name: "Home" },
  { id: 2, href: "/", name: "About Us" },
  { id: 3, href: "/", name: "Causes" },
  { id: 4, href: "/", name: "Blog" },
  { id: 5, href: "/", name: "Pages" },
  { id: 6, href: "/", name: "Contact Us" },
];

const Navbar = () => {
  return (
    <nav className="py-4 shadow-navbar bg-white">
      <div className="container flex justify-between items-center">
        <div>
          <img src="./logo.webp" alt="Logo" />
        </div>
        <ul className="flex gap-16">
          {navLinks.map(({ id, name, href }) => {
            return (
              <li key={id}>
                <NavLink
                  to={href}
                  className="font-semibold text-primary text-lg"
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <PrimaryButton />
      </div>
    </nav>
  );
};

export default Navbar;
