"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ActiveThemeProvider } from "./active-theme";

export function Providers({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme?: string | undefined;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <ActiveThemeProvider initialTheme={initialTheme}>
        {children}
      </ActiveThemeProvider>
    </NextThemesProvider>
  );
}
