"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.scss";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const currentPath = usePathname();

  const isActive = (path: string) => currentPath === path;
  const isActiveClass = (path: string) => (isActive(path) ? styles.active : "");
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
      aria-label="Component Sidebar Navigation"
      aria-expanded={isOpen}
    >
      <button
        className={`${styles.toggleButton} ${
          isOpen ? styles.open : styles.closed
        }`}
        onClick={toggleSidebar}
        aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        aria-expanded={!isOpen}
        aria-controls="sidebar-nav"
      />
      <nav
        className={styles.sidebarContent}
        id="sidebar-nav"
        role="navigation"
        aria-hidden={!isOpen}
      >
        <h2 className={styles.title}>
          <Link href="/">Components</Link>
        </h2>

        <h3 className={styles.section}>Inputs</h3>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link
              href="/button"
              className={`${styles.navLink} ${isActiveClass("/button")}`}
            >
              Button (Under Construction)
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/slider"
              className={`${styles.navLink} ${isActiveClass("/slider")}`}
            >
              Slider (Under Construction)
            </Link>
          </li>
        </ul>

        <h3 className={styles.section}>Data Display</h3>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link
              href="/chip"
              className={`${styles.navLink} ${isActiveClass("/chip")}`}
            >
              Chip (Under Construction)
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
