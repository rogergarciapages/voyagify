"use client"

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react"; // Import useSession
import { signOut } from "next-auth/react";
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
        <div className="flex gap-4 items-center">
          {/* Logout Button */}
          <LogoutButton />
        </div>
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

function LogoutButton() {
  const { data: session } = useSession(); // Ensure useSession is correctly imported

  const handleLogout = async () => {
    await signOut({ redirect: false, callbackUrl: "/" }); // Adjust callbackUrl as needed
  };

  if (session) {
    return (
      <button
        className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    );
  }
  
  return null;
}

export default Navibar;
