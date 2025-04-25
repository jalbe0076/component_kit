"use client";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <section className={styles.homeSection}>
        <h1 className={styles.homeTitle}>Inspired Component Library</h1>
        <p className={styles.homeText}>
          This library simulates the reusable components I helped build and
          refactor during my internship at Solace. Since that code was private,
          I created a public version with similar patterns and structure for
          demonstration purposes.
        </p>
      </section>

      <section className={styles.homeSection}>
        <h2 className={styles.homeSubtitle}>Why This Exists</h2>
        <p className={styles.homeText}>
          At Solace, I contributed to a shared component repository used across
          teams. I collaborated with UX designers and developers to build
          accessible, consistent UI components. This repo reflects that work in
          a sharable way.
        </p>
      </section>

      <section className={styles.homeSection}>
        <h2 className={styles.homeSubtitle}>Getting Started</h2>
        <p>Under Construction</p>

      </section>
    </div>
  );
}
