"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // <--- ADD THIS
import "./globals.scss";
import Sidebar from "./Sidebar";
import BackgroundPattern from "@/icons/BackgroundPattern";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const themeParam = searchParams.get("theme"); // <-- get 'theme' from URL, required for portfolio iframe element to manually change the theme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (themeParam === "dark") {
      setIsDark(true);
    } else if (themeParam === "light") {
      setIsDark(false);
    } else {
      setIsDark(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setIsDark(e.matches);
      };
      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, [searchParams]);

  useEffect(() => {
    generateThemedSVG(isDark ? "dark" : "light");
  }, [isDark]);

  const generateThemedSVG = (theme: string) => {
    const mainBgColor =
      theme === "dark" ? "rgb(58, 63, 55)" : "rgb(240, 241, 241)";
    const secondaryBgColor =
      theme === "dark" ? "rgb(42, 46, 40)" : "rgb(225, 225, 225)";
    const svgContent = BackgroundPattern(mainBgColor, secondaryBgColor);

    const container = document.getElementById("background-container");

    if (container) {
      container.style.background = `url("data:image/svg+xml,${encodeURIComponent(
        svgContent
      )}")`;
    }
  };

  return (
    <html lang="en">
      <body>
        <div id="background-container" className="layout-container">
          <Sidebar />
          <main className="layout-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
