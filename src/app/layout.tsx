"use client";
import React, { useEffect, useState } from "react";
import "./globals.scss";
import Sidebar from "./Sidebar";

type Theme = "light" | "dark";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const paramTheme = new URLSearchParams(window.location.search).get("theme");
    if (paramTheme === "dark" || paramTheme === "light") {
      setTheme(paramTheme);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => setTheme(mediaQuery.matches ? "dark" : "light");
    apply();
    mediaQuery.addEventListener("change", apply);
    return () => mediaQuery.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const container = document.getElementById("background-container");
    if (container) {
      container.style.backgroundImage = `url("./svg/background-${theme}.svg")`;
    }
  }, [theme]);

  return (
    <html lang="en" data-theme={theme}>
      <body>
        <div id="background-container" className="layout-container">
          <Sidebar />
          <main className="layout-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
