"use client";
import { Button } from "../components";
import styles from "./page.module.scss";
import StarIcon from "../icons/StarIcon";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div style={{margin: "20px"}}>
      <Button className={styles.test} iconLeftClassName={styles.test2} disabled onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} disabled  rounded={true}  onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} disabled variant="secondary" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2}  disabled variant="outline" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} disabled color="#008000" variant="destructive" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} disabled color="#008000" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} disabled variant="secondary" color="#008000" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2}  onClick={handleClick}><span><StarIcon/></span></Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconRight={<StarIcon/>} onClick={handleClick}></Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconLeft={<StarIcon/>} iconRight={<StarIcon/>} onClick={handleClick}><StarIcon/></Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconLeft={<StarIcon/>} onClick={handleClick}></Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconLeft={<StarIcon/>}  onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconRight={<StarIcon/>} onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2}  rounded={true} iconRight={<StarIcon/>} onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconRight={<StarIcon/>} variant="secondary" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconRight={<StarIcon/>} color="#008000" variant="destructive" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconLeft={<StarIcon/>} size="sm" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconLeft={<StarIcon/>} size="md" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconLeft={<StarIcon/>} size="lg" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconLeft={<StarIcon/>} size="xl" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconLeft={<StarIcon/>} size="sm" variant="link-color" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconLeft={<StarIcon/>} size="md" variant="link-color" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconLeft={<StarIcon/>} size="lg" variant="link-color" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconLeft={<StarIcon/>} size="xl" variant="link-color" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconLeft={<StarIcon/>} size="sm" variant="link-grey" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconLeft={<StarIcon/>} size="md" variant="link-grey" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconLeft={<StarIcon/>} size="lg" variant="link-grey" onClick={handleClick}>Button CSV</Button>
      <Button className={styles.test} iconLeftClassName={styles.test2} iconLeft={<StarIcon/>} size="xl" onClick={handleClick}>Button CSV</Button>

    </div>
  );
}
