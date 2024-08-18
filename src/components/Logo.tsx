import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/">
      <Image
        alt="Logo"
        src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
        width={53}
        height={12}
      />
    </Link>
  );
}

export default Logo;
