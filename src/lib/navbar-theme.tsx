"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type NavbarTheme = "light" | "dark";

type NavbarThemeContextValue = {
  theme: NavbarTheme;
  setTheme: (theme: NavbarTheme) => void;
};

const NavbarThemeContext = createContext<NavbarThemeContextValue | undefined>(undefined);

type NavbarThemeProviderProps = {
  children: ReactNode;
};

export function NavbarThemeProvider({ children }: NavbarThemeProviderProps) {
  const [theme, setTheme] = useState<NavbarTheme>("light");

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <NavbarThemeContext.Provider value={value}>{children}</NavbarThemeContext.Provider>;
}

export function useNavbarTheme() {
  const context = useContext(NavbarThemeContext);
  if (!context) {
    throw new Error("useNavbarTheme must be used within NavbarThemeProvider");
  }
  return context;
}
