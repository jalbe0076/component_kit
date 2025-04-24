"use client";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-section">
        <h1 className="home-title">Inspired Component Library</h1>
        <p className="home-text">
          This library simulates the reusable components I helped build and
          refactor during my internship at Solace. Since that code was private,
          I created a public version with similar patterns and structure for
          demonstration purposes.
        </p>
      </section>

      <section className="home-section">
        <h2 className="home-subtitle">Why This Exists</h2>
        <p className="home-text">
          At Solace, I contributed to a shared component repository used across
          teams. I collaborated with UX designers and developers to build
          accessible, consistent UI components. This repo reflects that work in
          a sharable way.
        </p>
      </section>

      <section className="home-section">
        <h2 className="home-subtitle">Getting Started</h2>
        <p>Under Construction</p>

      </section>
    </div>
  );
}
