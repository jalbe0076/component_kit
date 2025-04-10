"use client";
import { useState } from "react";
import { Button } from "../../components";
import StarIcon from "../../icons/StarIcon";
import SendIcon from "../../icons/SendIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import CodeBlock from "../../utils/CodeBlock";

export default function ButtonDocs() {
  type Variant =
    | "primary"
    | "secondary"
    | "outline"
    | "destructive"
    | "link-color"
    | "link-grey";
  type Size = "sm" | "md" | "lg" | "xl";

  const [text, setText] = useState("Default Button");
  const [variant, setVariant] = useState<Variant>("primary");
  const [size, setSize] = useState<Size>("md");
  const [rounded, setRounded] = useState(false);
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(false);
  const [color, setColor] = useState("");
  const [colorHover, setHoverColor] = useState("");

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

  const defaultButtonCode = `
<Button${
    variant !== "primary" ||
    color !== "" ||
    colorHover !== "" ||
    size !== "md" ||
    rounded ||
    showLeftIcon ||
    showRightIcon
      ? `${variant !== "primary" ? `\n    variant="${variant}"` : ""}${
          color !== "" ? `\n    color="${color}"` : ""
        }${colorHover !== "" ? `\n    colorHover="${colorHover}"` : ""}${
          size !== "md" ? `\n    size="${size}"` : ""
        }${rounded ? `\n    rounded="${rounded}"` : ""}${
          showLeftIcon ? `\n    iconLeft={<StarIcon />}` : ""
        }${showRightIcon ? `\n    iconRight={<StarIcon />}` : ""}\n`
      : ""
  }>
    ${text}
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
        <h2>Playground</h2>
        <div>
          <div>
            <Button
              variant={variant}
              size={size}
              rounded={rounded}
              iconLeft={showLeftIcon ? <StarIcon /> : undefined}
              iconRight={showRightIcon ? <StarIcon /> : undefined}
              color={color}
              colorHover={colorHover}
            >
              {text}
            </Button>
          </div>
          <div>
            <label>
              Button Text
              <input value={text} onChange={(e) => setText(e.target.value)} />
            </label>

            <label>
              Colour
              <input value={color} onChange={(e) => setColor(e.target.value)} />
            </label>

            <label>
              Hover Colour
              <input
                value={colorHover}
                onChange={(e) => setHoverColor(e.target.value)}
              />
            </label>

            <label>
              Variant
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value as Variant)}
              >
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="outline">outline</option>
                <option value="destructive">destructive</option>
                <option value="link-color">link-color</option>
                <option value="link-grey">link-grey</option>
              </select>
            </label>

            <label>
              Size
              <select
                value={size}
                onChange={(e) => setSize(e.target.value as Size)}
              >
                <option value="sm">sm</option>
                <option value="md">md</option>
                <option value="lg">lg</option>
                <option value="xl">xl</option>
              </select>
            </label>

            <label>
              <input
                type="checkbox"
                checked={rounded}
                onChange={(e) => setRounded(e.target.checked)}
              />
              Rounded
            </label>

            <label>
              <input
                type="checkbox"
                checked={showLeftIcon}
                onChange={(e) => setShowLeftIcon(e.target.checked)}
              />
              Left Icon
            </label>

            <label>
              <input
                type="checkbox"
                checked={showRightIcon}
                onChange={(e) => setShowRightIcon(e.target.checked)}
              />
              Right Icon
            </label>
          </div>
          <CodeBlock code={defaultButtonCode}></CodeBlock>
        </div>
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
                <td>-</td>
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
                <td>-</td>
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
        <h2>Button Previews</h2>

        {/* === Variants === */}
        <section>
          <h3>Variants</h3>
          <p>
            The <code>variant</code> prop controls the visual style of the
            button and comes in six options, primary (default), secondary,
            outline, destructive, link-color, and link-grey. Each variant serves
            a different purpose and should be used accordingly.
          </p>
          <div>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link-color">Link Color</Button>
            <Button variant="link-grey">Link Grey</Button>
          </div>

          <h4>Primary</h4>
          <p>Use for the main call-to-action on a screen.</p>
          <Button variant="primary">Primary</Button>
          <Button variant="primary" disabled>
            Primary Disabled
          </Button>
          <CodeBlock code={`<Button variant="primary">Primary</Button>`} />
          <CodeBlock
            code={`<Button variant="primary" disabled>Primary</Button>`}
          />

          <h4>Secondary</h4>
          <p>Use for less prominent actions or to support a primary button.</p>
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" disabled>
            Secondary Disabled
          </Button>
          <CodeBlock code={`<Button variant="secondary">Secondary</Button>`} />
          <CodeBlock
            code={`<Button variant="secondary" disabled>Secondary</Button>`}
          />

          <h4>Outline</h4>
          <p>
            An unfilled button with a border — great for secondary actions
            without too much visual weight.
          </p>
          <Button variant="outline">Outline</Button>
          <Button variant="outline" disabled>
            Outline Disabled
          </Button>
          <CodeBlock code={`<Button variant="outline">Outline</Button>`} />
          <CodeBlock
            code={`<Button variant="outline" disabled>Outline</Button>`}
          />

          <h4>Destructive</h4>
          <p>
            Use to indicate actions with potentially dangerous consequences,
            like deletions.
          </p>
          <Button variant="destructive">Destructive</Button>
          <Button variant="destructive" disabled>
            Destructive Disabled
          </Button>
          <CodeBlock
            code={`<Button variant="destructive">Destructive</Button>`}
          />
          <CodeBlock
            code={`<Button variant="destructive" disabled>Destructive</Button>`}
          />

          <h4>Link - Color</h4>
          <p>A button styled like a link with color emphasis.</p>
          <Button variant="link-color">Link Color</Button>
          <Button variant="link-color" disabled>
            Link Color Disabled
          </Button>
          <CodeBlock
            code={`<Button variant="link-color">Link Color</Button>`}
          />
          <CodeBlock
            code={`<Button variant="link-color" disabled>Link Color</Button>`}
          />

          <h4>Link - Grey</h4>
          <p>A neutral link-style button, suitable for low-emphasis actions.</p>
          <Button variant="link-grey">Link Grey</Button>
          <Button variant="link-grey" disabled>
            Link Grey Disabled
          </Button>
          <CodeBlock code={`<Button variant="link-grey">Link Grey</Button>`} />
          <CodeBlock
            code={`<Button variant="link-grey" disabled>Link Grey</Button>`}
          />
        </section>

        {/* === Sizes === */}
        <section>
          <h3>Sizes</h3>
          <p>
            The <code>size</code> prop adjusts the button’s padding and font
            size. Choose from <code>"sm"</code>, <code>"md"</code>,{" "}
            <code>"lg"</code>, and <code>"xl"</code>.
          </p>
          <div>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
          <div>
            <CodeBlock code={`<Button size="sm">Small</Button>`} />
            <CodeBlock code={`<Button size="md">Medium</Button>`} />
            <CodeBlock code={`<Button size="lg">Large</Button>`} />
            <CodeBlock code={`<Button size="xl">Extra Large</Button>`} />
          </div>
        </section>

        {/* === OnClick === */}
        <section>
          <h3>Click Actions</h3>
          <p>
            Use the <code>onClick</code> prop to define what happens when the
            button is clicked. This is typically a function that runs in
            response to the user’s interaction.
          </p>

          <Button onClick={() => alert("You clicked me!")}>Click Me</Button>
          <CodeBlock
            code={`<Button onClick={() => alert("You clicked me!")}>Click Me</Button>`}
          />
        </section>

        {/* === Buttons with icons and label === */}
        <section>
          <h3>Buttons with icons and label</h3>
          <p>
            Add SVG icons to your button using <code>iconLeft</code> or{" "}
            <code>iconRight</code>. These accept a React element, typically an
            inline SVG or component. Use <code>iconLeftClassName</code> and{" "}
            <code>iconRightClassName</code> to apply custom styles through your
            stylesheet or utility classes.
          </p>

          <div>
            <Button
              variant="destructive"
              iconLeft={<DeleteIcon />}
              iconLeftClassName="left-icon"
            >
              Delete
            </Button>
            <Button iconRight={<SendIcon />} iconRightClassName="right-icon">
              Send
            </Button>
          </div>
          <div>
            <CodeBlock
              code={`<Button variant="destructive" iconLeft={<DeleteIcon />} iconLeftClassName="left-icon">Delete</Button>`}
            />
            <CodeBlock
              code={`<Button iconRight={<SendIcon />} iconRightClassName="right-icon">Send</Button>`}
            />
          </div>
        </section>

        {/* === Icon button === */}
        <section>
          <h3>Icon Button</h3>
          <p>
            Create an icon-only button by passing an SVG element as the child
            instead of a text label. This is ideal for compact interfaces like
            toolbars or action menus.
            <strong>Note:</strong> For accessibility, include an{" "}
            <code>aria-label</code> that clearly describes the button’s purpose
            for screen readers.
          </p>

          <div>
            <Button aria-label="delete">
              <DeleteIcon />
            </Button>
            <Button aria-label="send">
              <SendIcon />
            </Button>
            <Button aria-label="favourite">
              <StarIcon />
            </Button>
          </div>
          <div>
            <CodeBlock
              code={`<Button aria-label="delete"><DeleteIcon /></Button>`}
            />
            <CodeBlock
              code={`<Button aria-label="send"><SendIcon /></Button>`}
            />
            <CodeBlock
              code={`<Button aria-label="favourite"><StarIcon /></Button>`}
            />
          </div>
        </section>

        {/* === Colors & Rounded === */}
        <section>
          <h3>Custom Colors & Rounded</h3>
          <p>
            Customize your button’s appearance using <code>color</code>,{" "}
            <code>colorHover</code>, and <code>rounded</code>. The{" "}
            <code>color</code> props support any valid color value, such as hex
            codes, color names, or RGB/HSL formats. Enabling{" "}
            <code>rounded</code> gives the button a smooth, pill-like shape.
          </p>

          <div>
            <Button color="#0070f3" colorHover="#0051a2">
              Custom Color
            </Button>
            <Button color="#1e293b" colorHover="#334155" rounded>
              Rounded Button
            </Button>
          </div>
          <div>
            <CodeBlock
              code={`<Button color="#0070f3" colorHover="#0051a2">Custom Color</Button>`}
            />
            <CodeBlock
              code={`<Button color="#1e293b" colorHover="#334155" rounded>Rounded Button</Button>`}
            />
          </div>
        </section>
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
