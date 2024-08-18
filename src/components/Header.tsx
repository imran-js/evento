import Link from "next/link";
import Logo from "./Logo";

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
  return (
    <header className="px-3 sm:px-9 h-14 flex justify-between items-center border-b border-white/10">
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm">
          {NavLinks.map((link) => (
            <li
              className="text-white/50 hover:text-white transition"
              key={link.routePath}
            >
              <Link href={link.routePath}>{link.routName}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
