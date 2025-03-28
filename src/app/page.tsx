"use client";
import styles from "./page.module.scss";
import { Button } from "../components";
import StarIcon from "../icons/StarIcon";

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
      <Button  onClick={handleClick}><StarIcon/></Button>
      <Button iconRight={<StarIcon/>} onClick={handleClick}></Button>
      <Button onClick={handleClick}>Button CSV</Button>
      <Button iconLeft={<StarIcon/>}  onClick={handleClick}>Button CSV</Button>
      <Button iconLeft={<StarIcon/>} onClick={handleClick}></Button>
      <Button iconLeft={<StarIcon/>}  onClick={handleClick}>Button CSV</Button>
      <Button iconRight={<StarIcon/>} onClick={handleClick}>Button CSV</Button>
      <Button  rounded={true} iconRight={<StarIcon/>} onClick={handleClick}>Button CSV</Button>
      <Button iconRight={<StarIcon/>} variant="secondary" onClick={handleClick}>Button CSV</Button>
      <Button  iconRight={<StarIcon/>} variant="outline" onClick={handleClick}>Button CSV</Button>
      <Button iconRight={<StarIcon/>} color="#008000" variant="destructive" onClick={handleClick}>Button CSV</Button>
      <Button color="#008000" colorHover="red" onClick={handleClick}>Button CSV</Button>
      <Button   style={{
    fontSize: '20px',  // Apply only fontSize, keeping other styles intact
    color: 'red'     // Apply only color, keeping other styles intact
  }} variant="secondary" color="#008000" onClick={handleClick}>Button CSV</Button>
    </div>
  );
}
