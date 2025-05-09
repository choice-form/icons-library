import { Scroll } from "@choiceform/design-system";
import React from "react";
import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import {
  oneLight,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useThemeContext } from "../context";

const SyntaxHighlighter = Prism as unknown as React.FC<SyntaxHighlighterProps>;

export const Guide = () => {
  const { theme } = useThemeContext();

  const syntaxTheme = theme === "dark" ? vscDarkPlus : oneLight;

  return (
    <div className="fixed inset-0">
      <Scroll className="h-full">
        <Scroll.Viewport
          className="px-8 pb-16 pt-32 w-full h-full max-w-none
          prose dark:prose-invert"
        >
          <div className="mx-auto xl:container xl:px-8">
            <h1>Usage Guide</h1>

            <section>
              <h2>Introduction</h2>
              <p>
                @choiceform/icons-react is an SVG icon library for the
                Choiceform project.
              </p>
              <p>
                This package automatically generates React components from SVG
                files stored in the <code>icons/</code> directory, providing a
                consistent and performant way to use icons across different
                Choiceform applications.
              </p>

              <h3>Features</h3>
              <ul>
                <li>
                  <strong>Automatic Component Generation:</strong> SVGs in the{" "}
                  <code>icons/</code> directory are automatically converted into
                  React components.
                </li>
                <li>
                  <strong>Tree-Shaking Support:</strong> Import individual icon
                  components directly for optimal bundle size in production.
                </li>
                <li>
                  <strong>Metadata & Search:</strong> Generated metadata
                  includes categories (based on folder structure) and tags (from
                  filenames like <code>icon-name[tag1,tag2].svg</code>) to
                  facilitate searching and organization.
                </li>
                <li>
                  <strong>SVG Optimization:</strong> SVGs are optimized using
                  SVGO during the build process.
                </li>
                <li>
                  <strong>Color Customization:</strong> By default, black (
                  <code>#000</code>) strokes/fills are converted to{" "}
                  <code>currentColor</code>, allowing color control via CSS.
                </li>
              </ul>
            </section>

            <section>
              <h2>Installation</h2>
              <p>
                Within the Choiceform monorepo, add this package as a dependency
                to the target package's <code>package.json</code>:
              </p>
              <div className="not-prose mb-4">
                <SyntaxHighlighter
                  language="json"
                  style={syntaxTheme}
                  customStyle={{
                    borderRadius: "6px",
                    fontSize: "14px",
                    padding: "1em",
                  }}
                >
                  {`{
  "dependencies": {
    "@choiceform/icons-react": "workspace:*"
  }
}`}
                </SyntaxHighlighter>
              </div>
              <p>
                Then, run <code>pnpm install</code> from the monorepo root.
              </p>
            </section>

            <section>
              <h2>Usage</h2>
              <p>There are two primary ways to use the icons:</p>

              <h3>Direct Import (Recommended for Tree-Shaking)</h3>
              <p>
                Import the specific icon component you need directly. This
                ensures that only the icons you use are included in your final
                bundle.
              </p>
              <div className="not-prose mb-4">
                <SyntaxHighlighter
                  language="tsx"
                  style={syntaxTheme}
                  customStyle={{
                    borderRadius: "6px",
                    fontSize: "14px",
                    padding: "1em",
                  }}
                >
                  {`import { CheckCircle14, User } from "@choiceform/icons-react";

function MyComponent() {
  return (
    <div>
      <User className="w-5 h-5 text-blue-500" />
      <CheckCircle14 size={32} />
    </div>
  );
}`}
                </SyntaxHighlighter>
              </div>
              <p>
                Component names are generated in PascalCase based on the SVG
                filename (excluding tags in <code>[]</code>). Folder structure
                translates to prefixes (e.g., <code>icons/ui/check.svg</code>{" "}
                becomes <code>UiCheck</code>).
              </p>
            </section>

            <section>
              <h2>Adding Icons</h2>
              <ol>
                <li>
                  Place your new <code>.svg</code> file inside the{" "}
                  <code>packages/icons-generate/icons/</code> directory. You can
                  create subdirectories for categorization (e.g.,{" "}
                  <code>icons/ui/</code>, <code>icons/logos/</code>).
                </li>
                <li>
                  <strong>Naming Convention:</strong> Use kebab-case for
                  filenames (e.g., <code>arrow-right.svg</code>).
                </li>
                <li>
                  <strong>Tags (Optional):</strong> To add search tags, include
                  them in square brackets before the <code>.svg</code>{" "}
                  extension, separated by commas:{" "}
                  <code>arrow-right[navigation,direction,next].svg</code>.
                </li>
                <li>
                  <strong>Run Generation:</strong> From the{" "}
                  <strong>monorepo root</strong>, run{" "}
                  <code>pnpm --filter @choiceform/icons-react generate</code>
                  (or <code>
                    pnpm --filter @choiceform/icons-react build
                  </code>{" "}
                  which includes generation).
                </li>
              </ol>
            </section>

            <section>
              <h2>Available Scripts</h2>
              <ul>
                <li>
                  <code>pnpm generate</code>: Generates icon components and
                  metadata into <code>src/generated/</code>.
                </li>
                <li>
                  <code>pnpm build:pkg</code>: Builds the library distributables
                  (<code>.js</code>, <code>.mjs</code>, <code>.d.ts</code>) into{" "}
                  <code>dist/</code> using Vite.
                </li>
                <li>
                  <code>pnpm build</code>: Runs <code>generate</code> and{" "}
                  <code>build:pkg</code>.
                </li>
                <li>
                  <code>pnpm dev</code>: Watches the <code>icons/</code>{" "}
                  directory for changes and runs <code>generate</code>{" "}
                  automatically.
                </li>
              </ul>
            </section>
          </div>
        </Scroll.Viewport>
      </Scroll>
    </div>
  );
};
