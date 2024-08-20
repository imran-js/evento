"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

const NavLinks = [
  {
    routName: "Home",
    routePath: "/",
  },
  {
    routName: "All Events",
    routePath: "/events/all",
  },
];

function Header() {
  const activePath = usePathname();

  return (
    <header className="px-3 sm:px-9 h-14 flex justify-between items-center border-b border-white/10">
      <Logo />
      <nav className="h-full">
        <ul className="flex  h-full gap-x-6 text-sm">
          {NavLinks.map((link) => (
            <li
              className={clsx(
                "flex items-center  hover:text-white  relative transition",
                {
                  "text-white": activePath === link.routePath,
                  "text-white/50": activePath !== link.routePath,
                }
              )}
              key={link.routePath}
            >
              {activePath === link.routePath && (
                <motion.div
                  layoutId="header-framer-active-lick"
                  className="bg-accent w-full h-1 bottom-0 absolute "
                ></motion.div>
              )}
              <Link href={link.routePath}>{link.routName}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
