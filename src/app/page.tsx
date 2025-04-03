"use client";
import { Button } from "../components";
import StarIcon from "../icons/StarIcon";
import styles from "./page.module.scss";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div style={{margin: "20px"}}>
      <Button className={styles.test} iconRightClassName={styles.test2} iconRight={<StarIcon/>} onClick={handleClick}>Button CSV</Button>
    </div>
  );
}
