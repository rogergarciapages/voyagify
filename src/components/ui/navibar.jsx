// src/components/Navibar.tsx
import React from "react";
import Link from "next/link";
import MountainIcon from "../MountainIcon";
import MenuIcon from "../MenuIcon";

const Navibar = () => {
  return (
    <header className="w-full bg-[#1db954] text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" passHref>
          <div className="flex items-center gap-2 cursor-pointer">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Acme Inc</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {/* Navigation links */}
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/explore">Explore</NavLink>
        </nav>
        {/* Menu button or additional elements */}
      </div>
    </header>
  );
};

function NavLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <div className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
        {children}
      </div>
    </Link>
  );
}

export default Navibar;
