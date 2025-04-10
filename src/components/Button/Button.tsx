"use client";
import { isSvgComponent, isSvgElement } from "../../utils/svgUtils";
import styles from "./button.module.scss";
// import React, { ReactNode, FunctionComponent } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: () => void;
  // Variants alter the button's style, no value is the default style for a bold colour button
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "destructive"
    | "link-color"
    | "link-grey";
  className?: string;
  // Default color is #463ACB, overwriting will customize the button color, not applicable for the destructive variant
  color?: string;
  // Default hover color isrgb(180, 180, 183), overwriting will customize the button color on hover, not applicable for the destructive variant
  colorHover?: string;
  // This will round the button's corners to a rounded, pill-like shape
  rounded?: boolean;
  iconLeft?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  iconLeftClassName?: string;
  iconRight?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  iconRightClassName?: string;
  // Size property will affect the padding and font size
  size?: "sm" | "md" | "lg" | "xl";
  // Overwriting the default style of the button so that custom css properties can be applied
  style?: React.CSSProperties;
}

interface CSSPropertiesWithVariables extends React.CSSProperties {
  "--btn-primary-color"?: string;
  "--btn-primary-color-hover"?: string;
  "--btn-border-radius"?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className,
  color,
  colorHover,
  rounded = false,
  iconLeft,
  iconLeftClassName,
  iconRight,
  iconRightClassName,
  size = "md",
  style,
  ...htmlBtnProps
}) => {

  const isIconOnly = isSvgElement(children) || isSvgComponent(children);

  const combinedClassNames = `${styles.btn} ${variant && styles[variant]} ${
    className || ""
  }`;
  const btnColorsStyles: CSSPropertiesWithVariables = {
    "--btn-primary-color": color,
    "--btn-primary-color-hover": colorHover,
    "--btn-border-radius": rounded ? "9999px" : "0.25rem",
    ...style,
  };

  return (
    <button
      className={combinedClassNames.trim()}
      onClick={onClick}
      data-size={size}
      data-icon-only={isIconOnly ? true : undefined}
      style={btnColorsStyles}
      {...htmlBtnProps}
    >
      {iconLeft && <span className={iconLeftClassName}>{iconLeft}</span>}
      {children}
      {iconRight && <span className={iconRightClassName}>{iconRight}</span>}
    </button>
  );
};

export default Button;
