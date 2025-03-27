"use client";
import styles from "./page.module.scss";
import { Button } from "../components";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <>
      <Button onClick={handleClick}>Button CSV</Button>
    </>
  );
}
