"use client";
import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    // Variants alter the button's style, no value is the default style for a bold colour button
    variant?: "primary" | "secondary" | "outline" | "destructive";
    // Default color is #463ACB, color accepts a HEX value and will customize the button color
    color?: string;
    // Default hover color is #3730a3, color accepts a HEX value and will customize the button color on hover
    colorHover?: string;
    // This will round the button's corners to a rounded, pill-like shape
    rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant= "primary",
    color = "#463ACB",
    colorHover = "#3730a3",
    rounded = false,
    ...htmlBtnProps
}) => {

    const btnColorsStyles: {[key: string]: string} = {
        "--btn-primary-color": color,
        "--btn-primary-color-hover": colorHover,
        "--btn-secondary-color": "#FFF",
        "--btn-secondary-color-hover": color,
        "--btn-border-radius": rounded ? "9999px" : "4px",
    };

  return (
    <button 
        className={`${styles.btn} ${variant && styles[variant]}`} 
        onClick={onClick} 
        style={btnColorsStyles}
        {...htmlBtnProps}
    >
        {children}
    </button>
  );
}

export default Button;