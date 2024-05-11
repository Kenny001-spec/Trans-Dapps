"use client"
import { HiMenuAlt4 } from "react-icons/hi";
import { AioOutlineClose } from "react-icons/ai";
import { kenny } from "../assets";
import Image from "next/image";
import { useState } from "react";

const NavbarItems = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Image src={kenny} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-[#fff] md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Rates", "Trade"].map((item, index) => (
          <NavbarItems key={item + index} title={item} />
        ))}
      </ul>
      <div>
        {toggleMenu ? (
          <AioOutlineClose
            fontsize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        ) : (
          <HiMenuAlt4
            fontsize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul>
            <AioOutlineClose onClick={() => setToggleMenu(false)} />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
