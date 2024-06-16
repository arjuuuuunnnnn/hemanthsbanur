import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer border z-5 border-top-emerald-800 border-l-transparent text-zinc-400">
      <div className="container p-12 flex justify-center">
        <p>arjuuuuunnnnn @ <span className="hover:text-emerald-800">
	  <Link href="/">
	  127.0.0.1
	  </Link>
	  </span>
	  <br/>
	  <span className="flex justify-center space-between-2">
	  <Link href="https://github.com/arjuuuuunnnnn/">
	  <FaGithub className="hover:scale-105 hover:text-white mt-2 mr-4"/>
	  </Link>
	  <Link href="https://www.linkedin.com/in/hemanth-s-banur-3aaa34284/">
	  <FaLinkedin className="hover:scale-105 hover:text-white mt-2 mr-4"/>
	  </Link>
	  <Link href="mailto:arjunbanur27@gmail.com">
	  <SiGmail className="hover:scale-105 hover:text-white mt-2 mr-4"/>
	  </Link>
	  </span>
	  </p>
      </div>
    </footer>
  );
};

export default Footer;
