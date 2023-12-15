import { NavLink } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton";
import SlideMenu from "../Slide Menu/SlideMenu";
import { useState } from "react";
import { navLinks } from "./NavMenu";
import { cn } from "../../lib/utils";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow-navbar bg-white py-4 xl:p-0 sticky top-0 z-20">
      <div className="container flex justify-between items-center">
        <div>
          <img src="./logo.webp" alt="Logo" className="w-24 lg:w-36" />
        </div>
        <ul className="hidden xl:flex">
          {navLinks.map(({ id, name, href, dropdownMenu }) => {
            return (
              <li
                key={id}
                className="relative group p-8 overflow-hidden hover:overflow-visible"
              >
                <img
                  src="./menu-shape.webp"
                  alt=""
                  className={cn("absolute left-0 w-full -z-10 hidden", {
                    block: name === "Home",
                  })}
                />
                <NavLink
                  to={href}
                  className={cn(
                    "font-semibold text-primary text-lg transition hover:text-accent",
                    {
                      "text-white": name === "Home",
                    }
                  )}
                >
                  {name}
                </NavLink>
                {dropdownMenu && (
                  <div className="absolute bg-white shadow-navbarDropdownMenu w-max p-4 top-full transition-all translate-y-10 opacity-0 group-hover:-translate-y-0 group-hover:opacity-100">
                    <ul className="flex flex-col gap-2">
                      {dropdownMenu.map(({ id, href, name }) => {
                        return (
                          <li key={id}>
                            <NavLink
                              to={href}
                              className="text-primary transition hover:text-accent"
                            >
                              {name}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <div className="flex gap-8 items-center">
          <div
            className="w-10 flex flex-col gap-1 lg:hidden group cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <span className="h-1 bg-primary rounded-full scale-x-75 transition-transform duration-500 group-hover:scale-x-100 origin-right" />
            <span className="h-1 bg-primary rounded-full" />
            <span className="h-1 bg-primary rounded-full scale-x-50 transition-transform duration-500 group-hover:scale-x-100 origin-right" />
          </div>
          <PrimaryButton text="Give Support" />
          <SlideMenu open={open} setOpen={setOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
