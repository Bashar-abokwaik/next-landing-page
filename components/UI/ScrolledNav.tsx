"use client";

import { useState, useEffect } from "react";
// Define the ScrolledNav component that changes its style based on scroll position
function ScrolledNav({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);// State to track if the user has scrolled down

  // Add an event listener to track scroll position and update the scrolled state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#3b5b81]/90 backdrop-blur-md shadow-md  text-white p-5"
          : "bg-transparent text-[#3b5b81] p-6 dark:text-white dark:bg-transparent"
      }`}
    >
      {children}
    </div>
  );
}

export default ScrolledNav;
