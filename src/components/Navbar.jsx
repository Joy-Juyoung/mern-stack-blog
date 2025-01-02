import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { IKImage } from "imagekitio-react";
import Image from "./image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log("open", open);

  return (
    <div className="flex items-center justify-between w-full h-16 md:-20">
      {/* LoGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        {/* <IKImage
          urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          path="/logo-1.png"
          className="w-8 h-8"
          alt="Jlogo"
        /> */}
        <Image src="logo-1.png" alt="Jlogo" w={32} h={32} />
        <span>Jlog</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="text-2xl cursor-pointer"
          onClick={() => setOpen((prev) => !prev)} //->lamadev version
          // onClick={() => setOpen(!open)} -> My version
        >
          {open ? <IoClose /> : <IoMenu />}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          } absolute flex flex-col gap-8 font-medium text-lg items-center justify-center w-full h-screen top-16 `}
        >
          <a href="">Home</a>
          <a href="">Trending</a>
          <a href="">Most Popular</a>
          <a href="">About</a>
          <a href="">
            <button className="px-4 py-2 text-white bg-green-800 rounded-3xl">
              Login
            </button>
          </a>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="items-center hidden gap-8 font-medium md:flex xl:gap-12">
        <a href="">Home</a>
        <a href="">Trending</a>
        <a href="">Most Popular</a>
        <a href="">About</a>
        <a href="">
          <button className="px-4 py-2 text-white bg-green-800 rounded-3xl">
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
