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
          The Button component is a versatile interactive UI element that
          responds to user input. It’s used to trigger actions within your
          application and can be customized in style, size, and behavior.
        </p>
      </section>
      <section>
        <h2>Props</h2>
        <p>
          The Button component extends the native <code>&lt;button&gt;</code>{" "}
          element and accepts all standard props via{" "}
          <code>React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt;</code>. It
          also supports additional props to customize its appearance and
          behavior. Below is a list of additional props:
        </p>

        <div>
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>variant</code>
                </td>
                <td>
                  <code>
                    "primary" | "secondary" | "outline" | "destructive" |
                    "link-color" | "link-grey"
                  </code>
                </td>
                <td>
                  <code>"primary"</code>
                </td>
                <td>Defines the button style variant.</td>
              </tr>
              <tr>
                <td>
                  <code>color</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>
                  <code>"#463ACB"</code>
                </td>
                <td>
                  Overrides the default primary color (not applicable to the
                  "destructive" variant).
                </td>
              </tr>
              <tr>
                <td>
                  <code>colorHover</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>
                  <code>"#3730A3"</code>
                </td>
                <td>
                  Overrides the hover color (not applicable to the "destructive"
                  variant).
                </td>
              </tr>
              <tr>
                <td>
                  <code>rounded</code>
                </td>
                <td>
                  <code>boolean</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>
                  Applies a pill-shaped border radius if <code>true</code>.
                </td>
              </tr>
              <tr>
                <td>
                  <code>size</code>
                </td>
                <td>
                  <code>"sm" | "md" | "lg" | "xl"</code>
                </td>
                <td>
                  <code>"md"</code>
                </td>
                <td>Adjusts padding and font size of the button.</td>
              </tr>
              <tr>
                <td>
                  <code>iconLeft</code>
                </td>
                <td>
                  <code>ReactElement&lt;SVGProps&gt;</code>
                </td>
                <td>-</td>
                <td>SVG icon placed to the left of the button content.</td>
              </tr>
              <tr>
                <td>
                  <code>iconLeftClassName</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>Additional className applied to the left icon wrapper.</td>
              </tr>
              <tr>
                <td>
                  <code>iconRight</code>
                </td>
                <td>
                  <code>ReactElement&lt;SVGProps&gt;</code>
                </td>
                <td>-</td>
                <td>SVG icon placed to the right of the button content.</td>
              </tr>
              <tr>
                <td>
                  <code>iconRightClassName</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>Additional className applied to the right icon wrapper.</td>
              </tr>
            </tbody>
          </table>
        </div>
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
