"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// Define the ThemeProvider component that wraps its children with the NextThemesProvider
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Render the NextThemesProvider with the specified attributes and wrap the children
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}