"use client";

import { useEffect } from "react";
import { useNavbarTheme, type NavbarTheme } from "@/lib/navbar-theme";

type NavbarThemeSetterProps = {
  theme: NavbarTheme;
};

export default function NavbarThemeSetter({ theme }: NavbarThemeSetterProps) {
  const { setTheme } = useNavbarTheme();

  useEffect(() => {
    setTheme(theme);
    return () => setTheme("light");
  }, [setTheme, theme]);

  return null;
}
