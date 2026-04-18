"use client";

import { useEffect } from "react";
import { useNavbarTheme, type NavbarTheme } from "@/lib/navbar-theme";

type NavbarThemeSetterProps = {
  theme: NavbarTheme;
  heroLogo?: boolean;
};

export default function NavbarThemeSetter({ theme, heroLogo }: NavbarThemeSetterProps) {
  const { setTheme, setHasHeroLogo } = useNavbarTheme();

  useEffect(() => {
    setTheme(theme);
    return () => setTheme("light");
  }, [setTheme, theme]);

  useEffect(() => {
    if (heroLogo === undefined) {
      return;
    }
    setHasHeroLogo(heroLogo);
    return () => setHasHeroLogo(false);
  }, [heroLogo, setHasHeroLogo]);

  return null;
}
