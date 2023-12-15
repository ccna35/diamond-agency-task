import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";

type MenuItemProps = {
  name: string;
  href: string;
  dropdownMenu?: {
    id: number;
    href: string;
    name: string;
  }[];
};

const MenuItem = ({ href, name, dropdownMenu }: MenuItemProps) => {
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);
  return (
    <li className="group">
      <div className="flex justify-between">
        <NavLink
          to={href}
          className="font-semibold text-primary text-lg transition hover:text-accent"
        >
          {name}
        </NavLink>
        {dropdownMenu &&
          (openDropdownMenu ? (
            <button type="button" onClick={() => setOpenDropdownMenu(false)}>
              <MinusCircleIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          ) : (
            <button type="button" onClick={() => setOpenDropdownMenu(true)}>
              <PlusCircleIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          ))}
      </div>
      {dropdownMenu && (
        <div
          className={cn("mt-2 hidden", {
            block: openDropdownMenu,
          })}
        >
          <ul className="flex flex-col gap-1">
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
};

export default MenuItem;
