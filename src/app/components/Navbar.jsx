"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  // {
  //   title: "Projects",
  //   path: "#projects",
  // },
  {
    title: "Contact",
    path: "#contact",
  },
  {
	  title: "Resume",
	  path: "/cv",
  },
  {
	  title: "Blog",
	  path: "https://hemanthsbanur.medium.com/",
  }

];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#000000] bg-opacity-100 text-base">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text=5xl  text-zinc-400 font-extrabold   hover:text-white"
        >
          Hemanth S Banur
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-zinc-300 text-zinc-300 hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-zinc-300 text-zinc-300 hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto font-mono text-zinc-400" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10">
            {navLinks.map((link, index) => (
              <li key={index}
              className="hover:text-emerald-800"
              >
                {link.title === "Blog" ? (
                  <a href={link.path} target="_blank" rel="noreferrer">
                    {link.title}
                  </a>
                ) : (
                  <NavLink href={link.path} title={link.title} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
