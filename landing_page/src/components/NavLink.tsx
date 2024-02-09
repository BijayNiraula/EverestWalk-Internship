import React from "react";
import Link from "next/link";

interface INavLink {
  url: string;
  text: string;
}

const NavLink: React.FC<INavLink> = ({ url, text }) => {
  return (
    <Link
      href="url"
      className="lg:my-2 block font-semibold mt-4  text-white lg:text-[#263659] lg:ms-7 hover:text-[#1AAFD0] transition duration-500  text-[16px]"
    >
      {text}
    </Link>
  );
};

export default NavLink;
