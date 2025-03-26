import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Component Library",
  description: "A library of reusable components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <main className="content">{children}</main>
          <aside className="sidebar">Sidebar placeholder</aside>
        </div>
      </body>
    </html>
  );
}
