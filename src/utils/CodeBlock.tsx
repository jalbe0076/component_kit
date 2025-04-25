"use client";
import { useEffect, useState } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";

type CodeBlockProps = {
  code: string;
  language?: Language;
  className?: string;
  style?: React.CSSProperties;
  variant?: "inline" | "block";
} & React.HTMLAttributes<HTMLElement>;

export default function CodeBlock({
  code,
  language = "jsx",
  className = "",
  style: customStyle,
  variant = "block",
  ...props
}: CodeBlockProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent the component from rendering before the theme is applied
    return null;
  }

  return (
    <Highlight
      {...defaultProps}
      code={code.trim()}
      language={language}
      theme={vsDark}
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
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { key, ...lineProps } = getLineProps({ line });
              return (
                <div key={i} {...lineProps}>
                  {line.map((token, j) => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
