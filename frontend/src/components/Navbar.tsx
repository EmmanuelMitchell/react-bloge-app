import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#010113] text-white p-4">
      <div className="flex justify-between items-center px-20 ">
        <h4 className="font-bold">Logo</h4>
        <div className="hidden md:block">
          <form>
            <input
              type="text"
              placeholder="search..."
              className="p-1 border-none outline-none focus:border-2 focus:border-red-500 text-black rounded-md"
            />
          </form>
        </div>
        <ul className="hidden md:flex items-center gap-4 text-xl font-mono">
          <li className="hover:bg-blue-400 p-2 rounded-md cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-blue-400 p-2 rounded-md cursor-pointer">
            <Link to="projects">Projects</Link>
          </li>
          <li className="hover:bg-blue-400 p-2 rounded-md cursor-pointer">
            <Link to="about">About</Link>
          </li>

          <li>
            <Link
              className="bg-blue-600 p-2 rounded-md hover:bg-slate-500"
              to="sign-in"
            >
              SignIn
            </Link>
          </li>
        </ul>
        <span
          className={`${isOpen ? "hidden" : "block"} text-4xl md:hidden`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </span>
        <span
          className={`${isOpen ? "block" : "hidden"} text-4xl md:hidden`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoClose />
        </span>
      </div>
      {isOpen && (
        <>
          <ul className="flex flex-col items-center gap-4 mt-4 font-mono text-xl md:hidden">
            <li className="hover:bg-blue-400 p-2 rounded-md cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-blue-400 p-2 rounded-md cursor-pointer">
              <Link to="projects">Projects</Link>
            </li>
            <li className="hover:bg-blue-400 p-2 rounded-md cursor-pointer">
              <Link to="about">About</Link>
            </li>
            <li>
              <div className=" md:hidden">
                <form>
                  <input
                    type="text"
                    placeholder="search..."
                    className="p-1 border-none outline-none focus:border-2 focus:border-red-500 text-black rounded-md"
                  />
                </form>
              </div>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}
