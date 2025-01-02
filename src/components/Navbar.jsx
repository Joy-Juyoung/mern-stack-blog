import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Image from "./image";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // console.log("open", open);

  return (
    <div className="flex items-center justify-between w-full h-16 md:-20">
      {/* LoGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo-1.png" alt="Jlogo" w={32} h={32} />
        <span>Jlog</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="text-2xl cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <IoClose /> : <IoMenu />}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          } absolute flex flex-col gap-8 font-medium text-lg items-center justify-center w-full h-screen top-16 `}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="px-4 py-2 text-white bg-green-800 rounded-3xl">
              Login
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="items-center hidden gap-8 font-medium md:flex xl:gap-12">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <Link to="/">
          <button className="px-4 py-2 text-white bg-green-800 rounded-3xl">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
