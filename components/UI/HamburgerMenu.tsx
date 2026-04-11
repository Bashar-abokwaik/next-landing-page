"use client";

import { useState } from "react";

function HamburgerMenu({
  liClasses,
  children,
}: {
  liClasses: string;
  children?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {children}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-lg font-heading px-5">
          <li className={liClasses}>
            <a href="#about">About</a>
          </li>
          <li className={liClasses}>
            <a href="#best-sellers">Best Sellers</a>
          </li>
          <li className={liClasses}>
            <a href="#new-arrivals">New Arrivals</a>
          </li>
          <li className={liClasses}>
            <a href="#way-choose-us">Why Choose Us</a>
          </li>
          <li className={liClasses}>
            <a
              href="#shop"
              className="block px-5 py-2 bg-[#c07e2b] text-white rounded-md"
            >
              Shop Now
            </a>
          </li>
        </ul>
      )}
    </>
  );
}

export default HamburgerMenu;
