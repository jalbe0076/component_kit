"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.scss";
import OpenSidebarIcon from "../icons/OpenSidebarIcon";
import CloseSidebarIcon from "../icons/CloseSidebarIcon";
import useScreenUnderWidthCheck from "@/utils/useScreenUnderWidthCheck";

const Sidebar: React.FC = () => {
  const checkWidthUnder900 = useScreenUnderWidthCheck(900);
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(!checkWidthUnder900);
  const [isHovered, setIsHovered] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const asideState = isOpen ? "open" : "closed";

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      setIsOpen(!checkWidthUnder900);
    }
  }, [checkWidthUnder900, hasMounted]);

  const isActive = (path: string) => currentPath === path;
  const isActiveClass = (path: string) => (isActive(path) ? styles.active : "");
  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => {
    if (checkWidthUnder900) {
      toggleSidebar();
    }
  };

  // Don’t render anything until mounted
  if (!hasMounted) return null;

  return (
    <aside
      className={`${styles.sidebar} ${styles[asideState]}`}
      aria-label="Component Sidebar Navigation"
    >
      <button
        className={`${styles.toggleButton} ${styles[asideState]}`}
        onClick={toggleSidebar}
        aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        aria-expanded={!isOpen}
        aria-controls="sidebar-nav"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isOpen ? (
          <span className={styles.icon}>
            <CloseSidebarIcon />
          </span>
        ) : (
          <span className={styles.icon}>
            <OpenSidebarIcon />
          </span>
        )}
      </button>
      <nav
        className={`${styles.sidebarContent}  ${
          isHovered ? styles.hovered : ""
        }`}
        id="sidebar-nav"
        role="navigation"
        aria-hidden={!isOpen}
      >
        <h2 className={styles.title}>
          <Link href="/" onClick={handleLinkClick}>
            Components
          </Link>
        </h2>

        <h3 className={styles.section}>Inputs</h3>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link
              href="/button"
              className={`${styles.navLink} ${isActiveClass("/button")}`}
              onClick={handleLinkClick}
            >
              Button
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/slider"
              className={`${styles.navLink} ${isActiveClass("/slider")}`}
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
