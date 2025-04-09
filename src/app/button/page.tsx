"use client";
import CodeBlock from "../../utils/CodeBlock";

export default function ButtonDocs() {
  const sampleCode = `
<Button
    style={{
        backgroundColor: "#0070f3",
        padding: "12px 24px",
        fontSize: "16px",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
    }}
>
    Custom Styled Button
</Button>
`;

  return (
    <div>
      <section>
        <h1>Button</h1>
        <p>
        The Button component is a versatile interactive UI element that responds to user input. 
        It’s used to trigger actions within your application and can be customized in style, size, and behavior.
        </p>
      </section>
      <section>
        <h2>Styling</h2>
        <p>
          You can easily customize the button's appearance using inline styles
          by passing a `style` prop with standard CSS properties. This allows
          you to set properties like background color, padding, font size, and
          more directly within your JSX:
        </p>
        <CodeBlock className="code-content" code={sampleCode} />
      </section>
    </div>
  );
}
