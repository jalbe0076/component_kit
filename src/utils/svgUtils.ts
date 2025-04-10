import React, { ReactNode } from "react";

export const isSvgElement = (child: ReactNode) => {
  return React.isValidElement(child) && child.type === "svg";
};

function isFunctionComponent(
  type: React.JSX.Element["type"]
): type is React.FunctionComponent<any> {
  return (
    typeof type === "function" &&
    !(type.prototype && type.prototype.isReactComponent)
  );
}

export const isSvgComponent = (child: React.ReactNode): boolean => {
  if (!React.isValidElement(child)) return false;

  const type = child.type;

  if (isFunctionComponent(type)) {
    try {
      const rendered = type(child.props);
      return React.isValidElement(rendered) && rendered.type === "svg";
    } catch {
      return false;
    }
  }

  return false;
};
