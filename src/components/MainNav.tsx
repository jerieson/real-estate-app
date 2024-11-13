"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import ArrowWhite from "../app/ArrowWhite.svg";

const MainNav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50); // Change the value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "bg-black" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-8 flex justify-between items-center text-white">
        <Link href="/">
          <Image width={128} height={34} src="/logo.svg" alt="logo" />
        </Link>
        <div className="flex items-center gap-14">
          <Link href="#" className="hover:text-gray-300">
            Properties
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Find Agent
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Contact
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Support
          </Link>
          <Link href="/register">
            <Button
              label="Work with us"
              variant="primary"
              Icon={ArrowWhite}
              onClick={() => console.log("Next button clicked")}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
