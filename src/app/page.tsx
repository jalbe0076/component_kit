"use client";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <section className={styles.homeSection}>
        <h1 className={styles.homeTitle}>Inspired Component Library</h1>
        <p className={styles.homeText}>
          A small, opinionated collection of reusable React components inspired
          by the shared UI library I helped build and refactor during my
          internship at Solace. Because the original code lives in a private
          repository, this project is a public re-imagining that captures the
          same patterns, conventions, and design sensibilities in a form that
          can be freely explored, extended, and shared.
        </p>
        <p className={styles.homeText}>
          Every component here is accessible by default, themeable through CSS
          custom properties, and written to be dropped into a modern React or
          Next.js project without ceremony.
        </p>
      </section>

      <section className={styles.homeSection}>
        <h2 className={styles.homeSubtitle}>Why This Exists</h2>
        <p className={styles.homeText}>
          At Solace, I contributed to a shared component repository used by
          multiple product teams. My work involved close collaboration with UX
          designers and other developers to ship accessible, consistent, and
          well-documented UI primitives; the kind of building blocks that
          quietly speed up every feature a team ships afterwards.
        </p>
        <p className={styles.homeText}>
          This project is a way to preserve that experience in public. It lets
          me demonstrate how I think about component APIs, styling systems,
          theming, and documentation without exposing any proprietary code.
        </p>
      </section>

      <section className={styles.homeSection}>
        <h2 className={styles.homeSubtitle}>What&apos;s Inside</h2>
        <ul className={styles.homeList}>
          <li>
            A growing set of components (starting with <code className={styles.homeCode}>Button</code>) built
            with TypeScript, SCSS modules, and CSS variables for theming.
          </li>
          <li>
            Light and dark themes driven entirely by CSS custom properties, so
            palettes can be swapped without touching component code.
          </li>
          <li>
            A live preview for each component, alongside the source snippet you
            would paste into your own project.
          </li>
          <li>
            Responsive layout patterns that adapt cleanly from wide desktop
            views down to mobile.
          </li>
        </ul>
      </section>

    </div>
  );
}
