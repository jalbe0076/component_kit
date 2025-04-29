"use client";
import React, { useEffect } from "react";
import "./globals.scss";
import Sidebar from "./Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    const container = document.getElementById("background-container");
  
    const updateBackground = () => {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const bgUrl = isDark
        ? "./svg/background-dark.svg"
        : "./svg/background-light.svg";

      if (container) {
        container.style.backgroundImage = `url("${bgUrl}")`;
      }
    };
  
    updateBackground();  
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateBackground);
  
    return () => {
      mediaQuery.removeEventListener("change", updateBackground);
    };
  }, []);

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
