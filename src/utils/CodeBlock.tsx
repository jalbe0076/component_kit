"use client";
import { useEffect, useState } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";
import vsLight from "prism-react-renderer/themes/vsLight";

type CodeBlockProps = {
  code: string;
  language?: Language;
  className?: string;
  isThemeDark?: boolean;
  style?: React.CSSProperties;
  variant?: "inline" | "block";
} & React.HTMLAttributes<HTMLElement>;

export default function CodeBlock({
  code,
  language = "jsx",
  className = "",
  isThemeDark,
  style: customStyle,
  variant = "block",
  ...props
}: CodeBlockProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      if (isThemeDark !== undefined) {
        setIsDark(isThemeDark);
      } else {
        setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    }
  }, [isThemeDark]);

  if (!mounted) {
    // Prevent the component from rendering before the theme is applied
    return null;
  }

  const selectedTheme = isDark ? vsDark : vsLight;

  return (
    <Highlight
      {...defaultProps}
      code={code.trim()}
      language={language}
      theme={selectedTheme}
    >
      {({
        className: innerClassName,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) =>
        variant === "inline" ? (
          <code
            className={`${innerClassName} ${className}`}
            style={{ ...style, ...customStyle }}
            {...props}
          >
            {tokens[0].map((token, j) => {
              const { key, ...tokenProps } = getTokenProps({ token });
              return <span key={j} {...tokenProps} />;
            })}
          </code>
        ) : (
          <pre
            className={`${innerClassName} ${className}`}
            style={{ ...style, ...customStyle }}
            {...props}
          >
            {tokens.map((line, i) => {
              const { key, ...lineProps } = getLineProps({ line });
              return (
                <div key={i} {...lineProps}>
                  {line.map((token, j) => {
                    const { key, ...tokenProps } = getTokenProps({ token });
                    return <span key={j} {...tokenProps} />;
                  })}
                </div>
              );
            })}
          </pre>
        )
      }
    </Highlight>
  );
}
