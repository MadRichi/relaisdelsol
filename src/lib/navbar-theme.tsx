"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type NavbarTheme = "light" | "dark";

export type NavbarThemeContextValue = {
  theme: NavbarTheme;
  setTheme: (theme: NavbarTheme) => void;
  hasHeroLogo: boolean;
  setHasHeroLogo: (value: boolean) => void;
};

const NavbarThemeContext = createContext<NavbarThemeContextValue | undefined>(undefined);

type NavbarThemeProviderProps = {
  children: ReactNode;
};

export function NavbarThemeProvider({ children }: NavbarThemeProviderProps) {
  const [theme, setTheme] = useState<NavbarTheme>("light");
  const [hasHeroLogo, setHasHeroLogo] = useState(false);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      hasHeroLogo,
      setHasHeroLogo,
    }),
    [theme, hasHeroLogo],
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
