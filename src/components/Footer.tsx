import Link from "next/link";

function Footer() {
  const FooterRoutes = [
    {
      name: "Terms & Conditions",
      path: "/terms-conditions",
    },
    {
      name: "Privacy Policy",
      path: "/privacy-policy",
    },
  ];

  return (
    <footer className="mt-auto flex items-center h-16 border-t border-white/10 justify-between px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">
        &copy; 2050 Imran Irshad. All Rights Reserved
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {FooterRoutes.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
