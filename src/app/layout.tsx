import type { Metadata } from "next";
import "./globals.scss";
import Sidebar from "./Sidebar";

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
          <Sidebar />
          <main className="layout-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
