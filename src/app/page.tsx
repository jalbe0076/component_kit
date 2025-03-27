"use client";
import styles from "./page.module.scss";
import { Button } from "../components";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div style={{margin: "20px"}}>
      <Button disabled onClick={handleClick}>Button CSV</Button>
      <Button disabled  rounded={true}  onClick={handleClick}>Button CSV</Button>
      <Button disabled variant="secondary" onClick={handleClick}>Button CSV</Button>
      <Button  disabled variant="outline" onClick={handleClick}>Button CSV</Button>
      <Button disabled color="#008000" variant="destructive" onClick={handleClick}>Button CSV</Button>
      <Button disabled color="#008000" onClick={handleClick}>Button CSV</Button>
      <Button disabled variant="secondary" color="#008000" onClick={handleClick}>Button CSV</Button>
      <Button onClick={handleClick}>Button CSV</Button>
      <Button  rounded={true}  onClick={handleClick}>Button CSV</Button>
      <Button variant="secondary" onClick={handleClick}>Button CSV</Button>
      <Button  variant="outline" onClick={handleClick}>Button CSV</Button>
      <Button color="#008000" variant="destructive" onClick={handleClick}>Button CSV</Button>
      <Button color="#008000" onClick={handleClick}>Button CSV</Button>
      <Button variant="secondary" color="#008000" onClick={handleClick}>Button CSV</Button>
    </div>
  );
}
