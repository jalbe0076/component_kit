"use client";
import { useState } from "react";
import { Button } from "../../components";
import StarIcon from "../../icons/StarIcon";
import SendIcon from "../../icons/SendIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import CodeBlock from "../../utils/CodeBlock";
import styles from "./buttonPage.module.scss";

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
  const [isDisabled, setIsDisabled] = useState(false);
  const [openPreviews, setOpenPreviews] = useState<{ [key: string]: boolean }>(
    {}
  );

  const sampleStyleInline = `
<Button
    style={{
        backgroundColor: "#0070f3",
        padding: "12px 24px",
        fontSize: "16px",
        borderRadius: "8px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)"
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
    isDisabled ||
    rounded ||
    showLeftIcon ||
    showRightIcon
      ? `${variant !== "primary" ? `\n    variant="${variant}"` : ""}${
          color !== "" ? `\n    color="${color}"` : ""
        }${colorHover !== "" ? `\n    colorHover="${colorHover}"` : ""}${
          size !== "md" ? `\n    size="${size}"` : ""
        }${rounded ? `\n    rounded="${rounded}"` : ""}${
          isDisabled ? `\n    disabled` : ""
        }${showLeftIcon ? `\n    iconLeft={<StarIcon />}` : ""}${
          showRightIcon ? `\n    iconRight={<StarIcon />}` : ""
        }\n`
      : ""
  }>
    ${text}
</Button>
`;

  const togglePreview = (id: string) => {
    if (!openPreviews[id]) {
      setOpenPreviews((prev) => ({
        ...prev,
        [id]: true,
      }));
    } else {
      setOpenPreviews((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    }
  };

  const showButton = (toggle: string, textDefault: string = "hide code") => {
    const stateChangeText =
      textDefault === "show code" ? "hide code" : "show code";

    return (
      <Button
        variant="outline"
        id="test"
        size="sm"
        className={styles.previewShowBtn}
        onClick={() => togglePreview(toggle)}
        aria-expanded={!!openPreviews[toggle]}
        aria-controls="code-preview-playground"
      >
        {openPreviews[toggle] ? stateChangeText : textDefault}
      </Button>
    );
  };

  return (
    <article className={styles.container}>
      <section>
        <h1 className={styles.titleH1}>Button</h1>
        <p>
          The Button component is a versatile interactive UI element that
          responds to user input. It’s used to trigger actions within your
          application and can be customized in style, size, and behavior.
        </p>
      </section>

      <section>
        <h2 className={styles.titleH2}>Playground</h2>
        <div className={styles.previewContainerBottom}>
          <div
            className={`${styles.previewBtn} ${
              openPreviews["previewPlaground"] ? styles.previewCodeExpanded : ""
            }`}
          >
            <Button
              variant={variant}
              size={size}
              rounded={rounded}
              iconLeft={showLeftIcon ? <StarIcon /> : undefined}
              iconRight={showRightIcon ? <StarIcon /> : undefined}
              color={color}
              colorHover={colorHover}
              disabled={isDisabled}
            >
              {text}
            </Button>
            {showButton("previewPlaground", "show code")}
          </div>
          <CodeBlock
            id="code-preview-playground"
            className={`${styles.previewCode} ${
              openPreviews["previewPlaground"] ? styles.previewCodeExpanded : ""
            }`}
            code={defaultButtonCode}
            aria-hidden={!openPreviews["previewPlaground"]}
          />
        </div>

        <h3 className={styles.titleH3}>Props and Controls</h3>
        <div className={styles.tableWrapper}>
          <table>
            <thead className={styles.tableHeader}>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Controls</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              <tr>
                <td className={styles.tableNameRow}>children</td>
                <td>
                  <code className={styles.codeSnippet}>{"'string' | SVG"}</code>
                </td>
                <td>The content of the component.</td>
                <td>
                  <label htmlFor="buttonText" className={styles.srOnly}>
                    children
                  </label>
                  <input
                    id="buttonText"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className={styles.tableNameRow}>variant</td>
                <td>
                  <code className={styles.codeSnippet}>
                    <div>{"'primary'"}</div>
                    <div>{"| 'secondary'"} </div>
                    <div>{"| 'outline'"} </div>
                    <div>{"| 'destructive'"} </div>
                    <div>{"| 'link-color'"} </div>
                    <div>{"| 'link-grey'"}</div>
                  </code>
                </td>
                <td>Defines the button style variant.</td>
                <td>
                  <label htmlFor="variant" className={styles.srOnly}>
                    Variant
                  </label>
                  <select
                    id="variant"
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
                </td>
              </tr>
              <tr>
                <td className={styles.tableNameRow}>color</td>
                <td>
                  <code className={styles.codeSnippet}>{"'string'"}</code>
                </td>
                <td>Overrides the default primary color.</td>
                <td>
                  <label htmlFor="color" className={styles.srOnly}>
                    Color
                  </label>
                  <input
                    id="color"
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className={styles.tableNameRow}>colorHover</td>
                <td>
                  <code className={styles.codeSnippet}>{"'string'"}</code>
                </td>
                <td>Overrides the hover color.</td>
                <td>
                  <label htmlFor="colorHover" className={styles.srOnly}>
                    Hover Color
                  </label>
                  <input
                    id="colorHover"
                    type="text"
                    value={colorHover}
                    onChange={(e) => setHoverColor(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className={styles.tableNameRow}>disabled</td>
                <td>
                  <code className={styles.codeSnippet}>boolean</code>
                </td>
                <td>
                  If present and true, the column will be disabled. You can
                  write just {"'disabled'"} to disable it.
                </td>
                <td>
                  <label htmlFor="isDisabled" className={styles.checkboxInput}>
                    <input
                      id="isDisabled"
                      type="checkbox"
                      checked={isDisabled}
                      onChange={(e) => setIsDisabled(e.target.checked)}
                    />{" "}
                    Disabled
                  </label>
                </td>
              </tr>
              <tr>
                <td className={styles.tableNameRow}>rounded</td>
                <td>
                  <code className={styles.codeSnippet}>boolean</code>
                </td>
                <td>Applies pill-shaped border radius if true.</td>
                <td>
                  <label htmlFor="rounded" className={styles.checkboxInput}>
                    <input
                      id="rounded"
                      type="checkbox"
                      checked={rounded}
                      onChange={(e) => setRounded(e.target.checked)}
                    />{" "}
                    Rounded
                  </label>
                </td>
              </tr>
              <tr>
                <td className={styles.tableNameRow}>size</td>
                <td>
                  <code className={styles.codeSnippet}>
                    {"'sm' "}
                    <br />
                    {"| 'md' "}
                    <br />
                    {"| 'lg' "}
                    <br />
                    {"| 'xl'"}
                  </code>
                </td>
                <td>Adjusts padding and font size.</td>
                <td>
                  <label htmlFor="size" className={styles.srOnly}>
                    Size
                  </label>
                  <select
                    id="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value as Size)}
                  >
                    <option value="sm">sm</option>
                    <option value="md">md</option>
                    <option value="lg">lg</option>
                    <option value="xl">xl</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className={styles.tableNameRow}>iconLeft</td>
                <td>
                  <code className={styles.codeSnippet}>
                    ReactElement&lt;SVGProps&gt;
                  </code>
                </td>
                <td>Left-side SVG icon.</td>
                <td>
                  <label htmlFor="leftIcon" className={styles.checkboxInput}>
                    <input
                      id="leftIcon"
                      type="checkbox"
                      checked={showLeftIcon}
                      onChange={(e) => setShowLeftIcon(e.target.checked)}
                    />{" "}
                    Show Left Icon
                  </label>
                </td>
              </tr>
              <tr>
                <td className={styles.tableNameRow}>iconLeftClassName</td>
                <td>
                  <code className={styles.codeSnippet}>{"'string'"}</code>
                </td>
                <td>ClassName applied to the left icon wrapper.</td>
                <td>-</td>
              </tr>
              <tr>
                <td className={styles.tableNameRow}>iconRight</td>
                <td>
                  <code className={styles.codeSnippet}>
                    ReactElement&lt;SVGProps&gt;
                  </code>
                </td>
                <td>Right-side SVG icon.</td>
                <td>
                  <label htmlFor="rightIcon" className={styles.checkboxInput}>
                    <input
                      id="rightIcon"
                      type="checkbox"
                      checked={showRightIcon}
                      onChange={(e) => setShowRightIcon(e.target.checked)}
                    />{" "}
                    Show Right Icon
                  </label>
                </td>
              </tr>
              <tr>
                <td className={styles.tableNameRow}>iconRightClassName</td>
                <td>
                  <code className={styles.codeSnippet}>{"'string'"}</code>
                </td>
                <td>ClassName applied to the right icon wrapper.</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.container}>
        <h2 className={styles.titleH2}>Button Previews</h2>

        {/* === Variants === */}
        <section>
          <h3 className={styles.titleH3}>Variants</h3>
          <p className={styles.paragraphSpacing}>
            The <code className={styles.codeSnippet}>variant</code> prop
            controls the visual style of the button and comes in six options:{" "}
            <strong> primary</strong> (default), <strong>secondary</strong>,{" "}
            <strong>outline</strong>, <strong>destructive</strong>,{" "}
            <strong>link-color</strong>, and <strong>link-grey</strong>. Each
            variant serves a different purpose and should be used accordingly.
          </p>
          <div
            className={`${styles.previewBtn} ${styles.previewContainerBottom}`}
          >
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link-color">Link Color</Button>
            <Button variant="link-grey">Link Grey</Button>
          </div>

          <h4 className={styles.titleH4}>Primary</h4>
          <p className={styles.paragraphSpacing}>
            Use for the main call-to-action on a screen.
          </p>
          <div className={styles.previewContainerBottom}>
            <div
              className={`${styles.previewBtn} ${
                !openPreviews["previewPrimary"]
                  ? styles.previewCodeExpanded
                  : ""
              }`}
            >
              <Button variant="primary">Primary</Button>
              <Button variant="primary" disabled>
                Primary Disabled
              </Button>
              {showButton("previewPrimary")}
            </div>
            <CodeBlock
              className={`${styles.previewCode} ${
                !openPreviews["previewPrimary"]
                  ? styles.previewCodeExpanded
                  : ""
              }`}
              code={`<Button variant="primary">Primary</Button> \n<Button variant="primary" disabled>Primary</Button>`}
            />
          </div>

          <h4 className={styles.titleH4}>Secondary</h4>
          <p className={styles.paragraphSpacing}>
            Use for less prominent actions or to support a primary button.
          </p>
          <div className={styles.previewContainerBottom}>
            <div
              className={`${styles.previewBtn} ${
                !openPreviews["previewSecondary"]
                  ? styles.previewCodeExpanded
                  : ""
              }`}
            >
              <Button variant="secondary">Secondary</Button>
              <Button variant="secondary" disabled>
                Secondary Disabled
              </Button>
              {showButton("previewSecondary")}
            </div>
            <CodeBlock
              className={`${styles.previewCode} ${
                !openPreviews["previewSecondary"]
                  ? styles.previewCodeExpanded
                  : ""
              }`}
              code={`<Button variant="secondary">Secondary</Button> \n<Button variant="secondary" disabled>Secondary</Button>`}
            />
          </div>

          <h4 className={styles.titleH4}>Outline</h4>
          <p className={styles.paragraphSpacing}>
            An unfilled button with a border — great for secondary actions
            without too much visual weight.
          </p>
          <div className={styles.previewContainerBottom}>
            <div
              className={`${styles.previewBtn} ${
                !openPreviews["previewOutline"]
                  ? styles.previewCodeExpanded
                  : ""
              }`}
            >
              <Button variant="outline">Outline</Button>
              <Button variant="outline" disabled>
                Outline Disabled
              </Button>
              {showButton("previewOutline")}
            </div>
            <CodeBlock
              className={`${styles.previewCode} ${
                !openPreviews["previewOutline"]
                  ? styles.previewCodeExpanded
                  : ""
              }`}
              code={`<Button variant="outline">Outline</Button> \n<Button variant="outline" disabled>Outline</Button>`}
            />
          </div>

          <h4 className={styles.titleH4}>Destructive</h4>
          <p className={styles.paragraphSpacing}>
            Use to indicate actions with potentially dangerous consequences,
            like deletions.
          </p>
          <div className={styles.previewContainerBottom}>
            <div
              className={`${styles.previewBtn} ${
                !openPreviews["previewDestructive"]
                  ? styles.previewCodeExpanded
                  : ""
              }`}
            >
              <Button variant="destructive">Destructive</Button>
              <Button variant="destructive" disabled>
                Destructive Disabled
              </Button>
              {showButton("previewDestructive")}
            </div>
            <CodeBlock
              className={`${styles.previewCode} ${
                !openPreviews["previewDestructive"]
                  ? styles.previewCodeExpanded
                  : ""
              }`}
              code={`<Button variant="destructive">Destructive</Button> \n<Button variant="destructive" disabled>Destructive</Button>`}
            />
          </div>

          <h4 className={styles.titleH4}>Link - Color</h4>
          <p className={styles.paragraphSpacing}>
            A button styled like a link with color emphasis.
          </p>
          <div className={styles.previewContainerBottom}>
            <div
              className={`${styles.previewBtn} ${
                !openPreviews["previewLinkColor"]
                  ? styles.previewCodeExpanded
                  : ""
              }`}
            >
              <Button variant="link-color">Link Color</Button>
              <Button variant="link-color" disabled>
                Link Color Disabled
              </Button>
              {showButton("previewLinkColor")}
            </div>
            <CodeBlock
              className={`${styles.previewCode} ${
                !openPreviews["previewLinkColor"]
                  ? styles.previewCodeExpanded
                  : ""
              }`}
              code={`<Button variant="link-color">Link Color</Button> \n<Button variant="link-color" disabled>Link Color</Button>`}
            />
          </div>

          <h4 className={styles.titleH4}>Link - Grey</h4>
          <p className={styles.paragraphSpacing}>
            A neutral link-style button, suitable for low-emphasis actions.
          </p>
          <div className={styles.previewContainerBottom}>
            <div
              className={`${styles.previewBtn} ${
                !openPreviews["previewLinkGrey"]
                  ? styles.previewCodeExpanded
                  : ""
              }`}
            >
              <Button variant="link-grey">Link Grey</Button>
              <Button variant="link-grey" disabled>
                Link Grey Disabled
              </Button>
              {showButton("previewLinkGrey")}
            </div>
            <CodeBlock
              className={`${styles.previewCode} ${
                !openPreviews["previewLinkGrey"]
                  ? styles.previewCodeExpanded
                  : ""
              }`}
              code={`<Button variant="link-grey">Link Grey</Button> \n<Button variant="link-grey" disabled>Link Grey</Button>`}
            />
          </div>
        </section>

        {/* === Sizes === */}
        <section>
          <h3 className={styles.titleH3}>Sizes</h3>
          <p className={styles.paragraphSpacing}>
            The <code className={styles.codeSnippet}>size</code> prop adjusts
            the button’s padding and font size. Choose from{" "}
            <code className={styles.codeSnippet}>{"'sm'"}</code>,{" "}
            <code className={styles.codeSnippet}>{"'md'"}</code> (default),{" "}
            <code className={styles.codeSnippet}>{"'lg'"}</code>, and{" "}
            <code className={styles.codeSnippet}>{"'xl'"}</code>.
          </p>
          <div className={styles.previewContainerBottom}>
            <div
              className={`${styles.previewBtn} ${
                !openPreviews["previewSizes"] ? styles.previewCodeExpanded : ""
              }`}
            >
              <div className={styles.verticalSpacing}>
                <Button size="sm">Small</Button>
              </div>
              <div className={styles.verticalSpacing}>
                <Button size="md">Medium</Button>
              </div>
              <div className={styles.verticalSpacing}>
                <Button size="lg">Large</Button>
              </div>
              <div className={styles.verticalSpacing}>
                <Button size="xl">Extra Large</Button>
              </div>
              {showButton("previewSizes")}
            </div>
            <CodeBlock
              className={`${styles.previewCode} ${
                !openPreviews["previewSizes"] ? styles.previewCodeExpanded : ""
              }`}
              code={`<Button size="sm">Small</Button> \n<Button>Medium</Button> \n<Button size="lg">Large</Button> \n<Button size="xl">Extra Large</Button>`}
            />
          </div>
        </section>

        {/* === OnClick === */}
        <section>
          <h3 className={styles.titleH3}>Click Actions</h3>
          <p className={styles.paragraphSpacing}>
            Use the <code className={styles.codeSnippet}>onClick</code> prop to
            define what happens when the button is clicked. This is typically a
            function that runs in response to the user’s interaction.
          </p>
          <div className={styles.previewContainerBottom}>
            <div
              className={`${styles.previewBtn} ${
                !openPreviews["previewClickAction"]
                  ? styles.previewCodeExpanded
                  : ""
              }`}
            >
              <Button onClick={() => alert("You clicked me!")}>Click Me</Button>
              {showButton("previewClickAction")}
            </div>
            <CodeBlock
              className={`${styles.previewCode} ${
                !openPreviews["previewClickAction"]
                  ? styles.previewCodeExpanded
                  : ""
              }`}
              code={`<Button onClick={() => alert("You clicked me!")}>Click Me</Button>`}
            />
          </div>
        </section>

        {/* === Buttons with icons and label === */}
        <section>
          <h3 className={styles.titleH3}>Buttons with icons and label</h3>
          <p className={styles.paragraphSpacing}>
            Add SVG icons to your button using{" "}
            <code className={styles.codeSnippet}>iconLeft</code> or{" "}
            <code className={styles.codeSnippet}>iconRight</code>. These accept
            a React element, typically an inline SVG or component. Use{" "}
            <code className={styles.codeSnippet}>iconLeftClassName</code> and{" "}
            <code className={styles.codeSnippet}>iconRightClassName</code> to
            apply custom styles through your stylesheet or utility classes.
          </p>
          <div className={styles.previewContainerBottom}>
            <div
              className={`${styles.previewBtn} ${
                !openPreviews["previewIconAndLabel"]
                  ? styles.previewCodeExpanded
                  : ""
              }`}
            >
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
              {showButton("previewIconAndLabel")}
            </div>
            <CodeBlock
              className={`${styles.previewCode} ${
                !openPreviews["previewIconAndLabel"]
                  ? styles.previewCodeExpanded
                  : ""
              }`}
              code={`<Button variant="destructive" iconLeft={<DeleteIcon />} iconLeftClassName="left-icon">Delete</Button> \n<Button iconRight={<SendIcon />} iconRightClassName="right-icon">Send</Button>`}
            />
          </div>
        </section>

        {/* === Icon button === */}
        <section>
          <h3 className={styles.titleH3}>Icon Button</h3>
          <p className={styles.paragraphSpacing}>
            Create an icon-only button by passing an SVG element as the child
            instead of a text label. This is ideal for compact interfaces like
            toolbars or action menus.
            <br />
            <strong>Note:</strong> For accessibility, include an{" "}
            <code className={styles.codeSnippet}>aria-label</code> that clearly
            describes the button’s purpose for screen readers.
          </p>

          <div className={styles.previewContainerBottom}>
            <div
              className={`${styles.previewBtn} ${
                !openPreviews["previewIcon"] ? styles.previewCodeExpanded : ""
              }`}
            >
              <Button variant="destructive" aria-label="delete">
                <DeleteIcon />
              </Button>
              <Button variant="outline" aria-label="send">
                <SendIcon />
              </Button>
              <Button aria-label="favourite">
                <StarIcon />
              </Button>
              {showButton("previewIcon")}
            </div>
            <CodeBlock
              className={`${styles.previewCode} ${
                !openPreviews["previewIcon"] ? styles.previewCodeExpanded : ""
              }`}
              code={`<Button variant="destructive" aria-label="delete"><DeleteIcon /></Button> \n<Button variant="outline" aria-label="send"><SendIcon /></Button> \n<Button aria-label="favourite"><StarIcon /></Button>`}
            />
          </div>
        </section>

        {/* === Colors & Rounded === */}
        <section>
          <h3 className={styles.titleH3}>Custom Colors & Rounded</h3>
          <p className={styles.paragraphSpacing}>
            You can easily customize your button’s appearance by using one of
            the built in props <code className={styles.codeSnippet}>color</code>
            , <code className={styles.codeSnippet}>colorHover</code>, and{" "}
            <code className={styles.codeSnippet}>rounded</code>. The{" "}
            <code className={styles.codeSnippet}>color</code> props support any
            valid color value, such as hex codes, color names, or RGB/HSL
            formats. Enabling{" "}
            <code className={styles.codeSnippet}>rounded</code> gives the button
            a smooth, pill-like shape.
          </p>
          <div className={styles.previewContainerBottom}>
            <div
              className={`${styles.previewBtn} ${
                !openPreviews["previewColor"] ? styles.previewCodeExpanded : ""
              }`}
            >
              <Button color="#0070f3" colorHover="#0051a2">
                Custom Color
              </Button>
              <Button color="#1e293b" colorHover="#334155" rounded>
                Rounded Button
              </Button>
              {showButton("previewColor")}
            </div>
            <CodeBlock
              className={`${styles.previewCode} ${
                !openPreviews["previewColor"] ? styles.previewCodeExpanded : ""
              }`}
              code={`<Button color="#0070f3" colorHover="#0051a2">Custom Color</Button> \n<Button color="#1e293b" colorHover="#334155" rounded>Rounded Button</Button>`}
            />
          </div>
        </section>
      </section>

      <section>
        <h2 className={styles.titleH2}>Styling</h2>
        <div className={styles.paragraphSpacing}>
          <p>
            You can customize the {"button's"} appearance using the{" "}
            <code className={styles.codeSnippet}>style</code> prop, which
            accepts standard CSS properties. This allows you to directly set
            values like{" "}
            <code className={styles.codeSnippet}>backgroundColor</code>,{" "}
            <code className={styles.codeSnippet}>padding</code>, and{" "}
            <code className={styles.codeSnippet}>fontSize</code> in your JSX.
          </p>
          <ul className={styles.listSpacing}>
            <li>
              Inline styles do not support pseudo-classes like{" "}
              <code className={styles.codeSnippet}>:hover</code> or{" "}
              <code className={styles.codeSnippet}>:focus</code>.
            </li>
            <li>
              If you define properties like{" "}
              <code className={styles.codeSnippet}>backgroundColor</code>{" "}
              inline, they can override prop-based styles such as{" "}
              <code className={styles.codeSnippet}>colorHover</code>.
            </li>
            <li>
              For more complex interactions or responsive design, {"it's"} better to
              use CSS classes or styled components.
            </li>
          </ul>
        </div>
        <div className={styles.previewContainerBottom}>
          <div
            className={`${styles.previewBtn} ${
              !openPreviews["previewStyleInline"]
                ? styles.previewCodeExpanded
                : ""
            }`}
          >
            <Button
              style={{
                backgroundColor: "#0070f3",
                padding: "12px 24px",
                fontSize: "16px",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              Custom Inline Style
            </Button>
            {showButton("previewStyleInline")}
          </div>
          <CodeBlock
            className={`${styles.previewCode} ${
              !openPreviews["previewStyleInline"]
                ? styles.previewCodeExpanded
                : ""
            }`}
            code={sampleStyleInline}
          />
        </div>
      </section>
    </article>
  );
}
