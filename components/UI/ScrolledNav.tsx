"use client";

import { useState, useEffect } from "react";
function ScrolledNav({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#3b5b81]/90 backdrop-blur-md shadow-md  text-white p-5"
          : "bg-transparent text-[#3b5b81] p-6"
      }`}
    >
      {children}
    </div>
  );
}

export default ScrolledNav;
