"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

// Define the QueryProvider component that wraps its children with the QueryClientProvider
export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize the QueryClient and store it in state
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1, // Number of retry attempts for failed queries
          },
        },
      })
  );

  // Render the QueryClientProvider with the initialized queryClient and wrap the children
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}