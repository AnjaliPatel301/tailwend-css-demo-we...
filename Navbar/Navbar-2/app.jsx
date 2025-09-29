

import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoLogoElectron } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between px-4 shadow items-center">
      
        <div className="w-[150px] cursor-pointer">
          <img
            src="https://bookface-images.s3.amazonaws.com/logos/35f9c42f136f9510991c0fae39612fcb89cbd7ef.png"
            alt="logo"
          />
        </div>

      
        <div className="md:flex hidden space-x-9 items-center">
          <a href="#" className="cursor-pointer hover:text-blue-500">
            Pricing
          </a>
          <a href="#" className="cursor-pointer hover:text-blue-500">
            Doc
          </a>
          <a href="#" className="cursor-pointer hover:text-blue-500">
            Changelog
          </a>
          <a href="#" className="cursor-pointer hover:text-blue-500">
            Blog
          </a>
          <a href="#" className="cursor-pointer hover:text-blue-500">
            Login
          </a>
          
        </div>
        <button className="hidden gap-2 py-2 px-4 rounded border md:flex items-center hover:border-green-600">
            <IoLogoElectron className="text-xl hover:animate-spin" />
            Electron Developer <FaArrowRight />
          </button>

     
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl cursor-pointer"
        >
          {open ? <IoCloseSharp /> : <MdMenu />}
        </button>
      </nav>

      <div
        className={`fixed top-0 left-50 h-2/3 w-2/4 bg-white shadow-lg transform transition-transform duration-300 z-50 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 shadow">
          <div className="w-[120px]">
            <img
              src="https://bookface-images.s3.amazonaws.com/logos/35f9c42f136f9510991c0fae39612fcb89cbd7ef.png"
              alt="logo"
            />
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-3xl cursor-pointer"
          >
            <IoCloseSharp />
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-6 mt-6 font-semibold">
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Doc</a></li>
          <li><a href="#">Changelog</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
    </>
  );
};

export default App;
