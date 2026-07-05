"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme(); // State to track the current theme and a function to update it
  const [mounted, setMounted] = useState(false); // State to track if the component has mounted (to avoid hydration issues)

  // Set the mounted state to true after the component has mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // If the component hasn't mounted yet, return null to avoid rendering issues
  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}