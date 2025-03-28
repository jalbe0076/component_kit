"use client";
import { SVGProps } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode; // Wrap SVG's in a span to set proper line-height
    onClick?: () => void;
    // Variants alter the button's style, no value is the default style for a bold colour button
    variant?: "primary" | "secondary" | "outline" | "destructive";
    // Default color is #463ACB, overwriting will customize the button color, not applicable for the destructive variant
    color?: string;
    // Default hover color is #3730a3, overwriting will customize the button color on hover, not applicable for the destructive variant
    colorHover?: string;
    // This will round the button's corners to a rounded, pill-like shape
    rounded?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant= "primary",
    color = "#463ACB",
    colorHover = "#3730a3",
    rounded = false,
    iconLeft,
    iconRight,
    ...htmlBtnProps
}) => {

    const btnColorsStyles: {[key: string]: string} = {
        "--btn-primary-color": color,
        "--btn-primary-color-hover": colorHover,
        "--btn-secondary-color": "#FFF",
        "--btn-border-radius": rounded ? "9999px" : "4px",
    };

  return (
    <button 
        className={`${styles.btn} ${variant && styles[variant]}`} 
        onClick={onClick} 
        style={btnColorsStyles}
        {...htmlBtnProps}
    >
        {iconLeft}
        {children}
        {iconRight}
    </button>
  );
}

export default Button;