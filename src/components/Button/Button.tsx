"use client";
import styles from "./button.module.scss";
import { lightenColor } from "../../utils/colorUtil";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    // Variants alter the button's style, no value is the default style for a bold colour button
    variant?: "primary" | "secondary" | "outline" | "destructive";
    // Default color is #463ACB, color accepts a HEX value and will customize the button color
    color?: string;
    // The lighten prop will overide the default lighghening value of 8
    lighten?: number;
    // This will round the button's corners to a rounded, pill-like shape
    rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant= "primary",
    color = "#463ACB",
    lighten = 8,
    rounded = false,
}) => {

    const btnColorsStyles: {[key: string]: string} = {
        "--btn-primary-color": color,
        "--btn-primary-color-hover": lightenColor(color, lighten),
        "--btn-secondary-color": "#FFF",
        "--btn-secondary-color-hover": color,
        "--btn-border-radius": rounded ? "9999px" : "4px",
    };

  return (
    <button 
        className={`${styles.btn} ${variant && styles[variant]}`} 
        onClick={onClick} 
        style={btnColorsStyles}
    >
        {children}
    </button>
  );
}

export default Button;