'use client';
import React, { use } from "react";
import Link from "next/link";
import { usePathname }  from "next/navigation";
import styles from "./sidebar.module.scss";

const Sidebar: React.FC = () => {
    const currentPath = usePathname();
    const isActive = (path: string) => currentPath === path;
    const isActiveClass = (path: string) => (isActive(path) ? styles.active : "");
    
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}><Link href="/">Components</Link></h2>
      
      <h3 className={styles.section}>Inputs</h3>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/button" className={`${styles.navLink} ${isActiveClass("/button")}`}>
            Button (Under Construction)
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/slider" className={`${styles.navLink} ${isActiveClass("/slider")}`}>
            Slider (Under Construction)
          </Link>
        </li>
      </ul>

      <h3 className={styles.section}>Data Display</h3>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/chip" className={`${styles.navLink} ${isActiveClass("/chip")}`}>
            Chip (Under Construction)
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
