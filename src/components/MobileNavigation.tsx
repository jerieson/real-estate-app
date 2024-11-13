"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MenuIcon,
  X,
  Home,
  Building,
  Phone,
  HelpCircle,
  Settings,
  ChevronRight,
} from "lucide-react";

import Button from "./Button";
import ArrowWhite from "../app/ArrowWhite.svg";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      label: "Properties",
      href: "/properties",
      icon: Building,
    },
    {
      label: "Find Agent",
      href: "/agents",
      icon: Home,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: Phone,
    },
    {
      label: "Support",
      href: "/support",
      icon: HelpCircle,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <>
      {/* Header */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-colors duration-300 ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        {/* Top Banner - Work with us */}
        <div className="w-full py-2 px-4 flex justify-between items-center">
          <Image
            width={128}
            height={34}
            src="./logo.svg"
            alt="logo"
            className="w-24"
          />
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Navigation Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 z-40 md:hidden transition-all duration-500 origin-top
          ${
            isOpen
              ? "opacity-100 transform translate-y-0 rotate-0"
              : "opacity-0 transform -translate-y-full rotate-12 pointer-events-none"
          }`}
      >
        <div className="pt-16 h-full overflow-y-auto">
          <div className="py-4">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between px-6 py-4 text-white hover:bg-white/10 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                  style={{
                    animation: isOpen
                      ? `slideIn 0.4s ease forwards ${index * 0.1}s`
                      : "none",
                    opacity: 0,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <Icon size={20} className="text-gray-400" />
                    <span className="text-lg font-semibold">{item.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </Link>
              );
            })}
          </div>
          {/* Bottom CTA */}
          <div
            className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10"
            style={{
              animation: isOpen ? "slideIn 0.4s ease forwards 0.5s" : "none",
              opacity: 0,
            }}
          >
            <Button
              label="Work with us"
              variant="primary"
              Icon={ArrowWhite} // Use the imported SVG as the Icon prop
              onClick={() => console.log("Next button clicked")}
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default MobileNavigation;
