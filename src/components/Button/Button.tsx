"use client";
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
    iconLeft?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    iconRight?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    // Size property will affect the padding and font size
    size?: "sm" | "md" | "lg" | "xl";
    // Overwriting the default style of the button so that custom css properties can be applied
    style?: React.CSSProperties;
}

interface CSSPropertiesWithVariables extends React.CSSProperties {
    "--btn-primary-color"?: string;
    "--btn-primary-color-hover"?: string;
    "--btn-secondary-color"?: string;
    "--btn-border-radius"?: string;
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
    size = "md",
    style,
    ...htmlBtnProps
}) => {

    const btnColorsStyles: CSSPropertiesWithVariables = {
        "--btn-primary-color": color,
        "--btn-primary-color-hover": colorHover,
        "--btn-secondary-color": "#FFF",
        "--btn-border-radius": rounded ? "9999px" : "0.25rem",
        ...style
    };

    return (
        <button 
            className={`${styles.btn} ${variant && styles[variant]}`} 
            onClick={onClick} 
            data-size={size}
            style={btnColorsStyles}
            {...htmlBtnProps}
        >
            {iconLeft && <span>{iconLeft}</span>}
            {children}
            {iconRight && <span>{iconRight}</span>}
        </button>
    );
}

export default Button;