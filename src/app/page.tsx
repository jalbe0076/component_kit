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

      <Button  iconRight={<StarIcon/>} onClick={handleClick}></Button>
      <Button  onClick={handleClick}>Button CSV</Button>
      <Button  iconLeft={<StarIcon/>} iconRight={<StarIcon/>} onClick={handleClick}><StarIcon/></Button>
      <Button  iconLeft={<StarIcon/>} onClick={handleClick}></Button>
      <Button  iconLeft={<StarIcon/>}  onClick={handleClick}>Button CSV</Button>
      <Button  iconRight={<StarIcon/>} onClick={handleClick}>Button CSV</Button>
      <Button   rounded={true} iconRight={<StarIcon/>} onClick={handleClick}>Button CSV</Button>
      <Button  iconRight={<StarIcon/>} color="green" colorHover="green" variant="secondary" onClick={handleClick}>Button CSV</Button>
      <Button  iconRight={<StarIcon/>} variant="outline" onClick={handleClick}>Button CSV</Button>
      <Button  iconRight={<StarIcon/>} color="#008000" variant="destructive" onClick={handleClick}>Button CSV</Button>
      <Button  iconLeft={<StarIcon/>} size="sm" onClick={handleClick}>Button CSV</Button>
      <Button  iconLeft={<StarIcon/>} size="md" onClick={handleClick}>Button CSV</Button>
      <Button  iconLeft={<StarIcon/>} size="lg" onClick={handleClick}>Button CSV</Button>
      <Button  iconLeft={<StarIcon/>} size="xl" onClick={handleClick}>Button CSV</Button>
      <Button  iconLeft={<StarIcon/>} size="sm" variant="link-color" onClick={handleClick}>Button CSV</Button>
      <Button  iconLeft={<StarIcon/>} size="md" variant="link-color" onClick={handleClick}>Button CSV</Button>
      <Button  iconLeft={<StarIcon/>} size="lg" variant="link-color" onClick={handleClick}>Button CSV</Button>
      <Button  iconLeft={<StarIcon/>} size="xl" variant="link-color" onClick={handleClick}>Button CSV</Button>
      <Button  iconLeft={<StarIcon/>} size="sm" variant="link-grey" onClick={handleClick}>Button CSV</Button>
      <Button  iconLeft={<StarIcon/>} size="md" variant="link-grey" onClick={handleClick}>Button CSV</Button>
      <Button  iconLeft={<StarIcon/>} size="lg" variant="link-grey" onClick={handleClick}>Button CSV</Button>
      <Button  iconLeft={<StarIcon/>} size="xl" onClick={handleClick}>Button CSV</Button>

    </div>
  );
}
