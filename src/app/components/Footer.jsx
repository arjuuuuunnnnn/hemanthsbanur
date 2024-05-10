import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-top-emerald-800 border-l-transparent text-zinc-400">
      <div className="container p-12 flex justify-between">
        <Link href="/" className="font-extrabold hover:text-emerald-800">arjuuuuunnnnn</Link>
        <p>There&apos;s no place like <br/> <Link href="/" className="font-mono font-bold text-xl hover:text-emerald-800">&nbsp;&nbsp;127.0.0.1</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
