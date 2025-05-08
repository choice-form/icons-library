import {
  Button,
  Chip,
  Dropdown,
  IconButton,
  Segmented,
  Tabs,
} from "@choiceform/design-system";
import {
  Duplicate,
  FilesDownload,
  Folder,
  RemoveSmall,
} from "@choiceform/icons-react";
import { motion } from "framer-motion";
import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconItemData } from "../types";
import { useThemeContext } from "../context";
import { memo, useMemo, useState } from "react";

const SyntaxHighlighter = Prism as unknown as React.FC<SyntaxHighlighterProps>;

const Grid = memo(({ size }: { size: "small" | "medium" | "large" }) => {
  return (
    <div
      style={
        {
          "--small-circle": "calc(12px * 8)",
          "--small-square": "calc(10px * 8)",
          "--small-rectangle": "calc(6px * 8)",
          "--medium-circle": "calc(14px * 8)",
          "--medium-square": "calc(12px * 8)",
          "--medium-rectangle": "calc(8px * 8)",
          "--large-circle": "calc(18px * 8)",
          "--large-square": "calc(16px * 8)",
          "--large-rectangle": "calc(10px * 8)",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 bg-red-500/10 border-[8px] border-red-500/20 rounded-full m-auto"
        style={{
          width: `var(--${size}-circle)`,
          height: `var(--${size}-circle)`,
        }}
      />
      <div
        className="absolute inset-0 bg-red-500/10 border-[8px] border-red-500/20 m-auto"
        style={{
          width: `var(--${size}-square)`,
          height: `var(--${size}-square)`,
        }}
      />
      <div
        className="absolute inset-0 bg-red-500/10 border-[8px] border-red-500/20 m-auto"
        style={{
          width: `var(--${size}-circle)`,
          height: `var(--${size}-rectangle)`,
        }}
      />
      <div
        className="absolute inset-0 bg-red-500/10 border-[8px] border-red-500/20 m-auto"
        style={{
          width: `var(--${size}-rectangle)`,
          height: `var(--${size}-circle)`,
        }}
      />
    </div>
  );
});

interface SelectedDialogProps {
  selectedIcon: IconItemData;
  handleCloseSelectedIcon: () => void;
  handleCopySVG: () => void;
  handleDownloadSVG: () => void;
  handleCopyReactComponent: () => void;
  handleCopyVueComponent: () => void;
  handleCopyAngularComponent: () => void;
  handleCopySolidComponent: () => void;
  handleCopyJsComponent: () => void;
  handleTagClick: (tag: string) => void;
  ReactCodeExample: string;
  VueCodeExample: string;
  AngularCodeExample: string;
  SolidCodeExample: string;
  JavaScriptCodeExample: string;
}

export const SelectedDialog = (props: SelectedDialogProps) => {
  const {
    selectedIcon,
    handleCloseSelectedIcon,
    handleCopySVG,
    handleDownloadSVG,
    handleCopyReactComponent,
    handleCopyVueComponent,
    handleCopyAngularComponent,
    handleCopySolidComponent,
    handleCopyJsComponent,
    handleTagClick,
    ReactCodeExample,
    VueCodeExample,
    AngularCodeExample,
    SolidCodeExample,
    JavaScriptCodeExample,
  } = props;

  const { theme } = useThemeContext();

  const syntaxTheme = theme === "dark" ? vscDarkPlus : oneLight;

  const [codeTab, setCodeTab] = useState("react");
  const [gridTab, setGridTab] = useState<"small" | "medium" | "large" | "none">(
    "none"
  );

  const codeExamples = useMemo(() => {
    return {
      react: ReactCodeExample,
      vue: VueCodeExample,
      angular: AngularCodeExample,
      solid: SolidCodeExample,
      javascript: JavaScriptCodeExample,
    };
  }, [
    ReactCodeExample,
    VueCodeExample,
    AngularCodeExample,
    SolidCodeExample,
    JavaScriptCodeExample,
  ]);

  return (
    <motion.div
      className="fixed bottom-0 left-4 right-4
      lg:left-(--icon-browser-padding-left)
      lg:right-(--icon-browser-padding-right)
      rounded-t-lg p-4 bg-default-background shadow-xl"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 32 }}
      transition={{ type: "spring", stiffness: 1000, damping: 40 }}
    >
      <div className="grid sm:grid-cols-[auto_1fr] gap-8">
        <div className="flex flex-col gap-4">
          <div
            className="bg-secondary-background rounded-md overflow-hidden
            flex items-center justify-center self-start
            icon-detail__preview-wrapper relative"
            style={{
              width: `calc(${Number(selectedIcon.width) * 8}px - 1px )`,
              height: `calc(${Number(selectedIcon.height) * 8}px - 1px )`,
              boxShadow: "0 0 0 1px var(--color-default-boundary)",
            }}
          >
            <selectedIcon.IconComponent
              width={Number(selectedIcon.width) * 8}
              height={Number(selectedIcon.height) * 8}
              color="var(--icon-color)"
            />
            {gridTab !== "none" && <Grid size={gridTab} />}
          </div>
          <Segmented
            value={gridTab}
            onChange={(value) =>
              setGridTab(value as "small" | "medium" | "large" | "none")
            }
          >
            <Segmented.Item value="none">-</Segmented.Item>
            <Segmented.Item value="small">○</Segmented.Item>
            <Segmented.Item value="medium">◎</Segmented.Item>
          </Segmented>
        </div>

        <IconButton
          className="absolute top-4 right-4"
          onMouseDown={handleCloseSelectedIcon}
        >
          <RemoveSmall />
        </IconButton>

        <div className="flex flex-col items-start gap-4 min-w-0">
          <span className="text-lg font-medium">
            {selectedIcon.filename.replace(".svg", "").replace(/\[.*?\]/g, "")}
          </span>
          <span className="text-sm text-secondary-foreground capitalize flex gap-2 items-center">
            <Folder />
            {selectedIcon.category}
          </span>

          <div className="flex gap-2 flex-wrap">
            {selectedIcon.tags.map((tag) => (
              <Chip key={tag} onClick={() => handleTagClick(tag)}>
                {tag}
              </Chip>
            ))}
          </div>

          <div className="flex gap-2 flex-wrap">
            <Button variant="solid" size="large" onClick={handleCopySVG}>
              <Duplicate />
              Copy SVG
            </Button>
            <Button variant="solid" size="large" onClick={handleDownloadSVG}>
              <FilesDownload />
              Download SVG
            </Button>

            <Dropdown>
              <Dropdown.Trigger size="large">
                <div className="flex items-center gap-1">
                  <Duplicate />
                  Copy Component
                </div>
              </Dropdown.Trigger>
              <Dropdown.Item onMouseUp={handleCopyReactComponent}>
                Copy React
              </Dropdown.Item>
              <Dropdown.Item onMouseUp={handleCopyVueComponent}>
                Copy Vue
              </Dropdown.Item>
              <Dropdown.Item onMouseUp={handleCopyAngularComponent}>
                Copy Angular
              </Dropdown.Item>
              <Dropdown.Item onMouseUp={handleCopySolidComponent}>
                Copy Solid
              </Dropdown.Item>
              <Dropdown.Item onMouseUp={handleCopyJsComponent}>
                Copy JavaScript
              </Dropdown.Item>
            </Dropdown>
          </div>

          <div className="w-full flex flex-col gap-2 items-start">
            <Segmented value={codeTab} onChange={setCodeTab}>
              <Segmented.Item className="px-2" value="react">
                React
              </Segmented.Item>
              <Segmented.Item className="px-2" value="vue">
                Vue
              </Segmented.Item>
              <Segmented.Item className="px-2" value="angular">
                Angular
              </Segmented.Item>
              <Segmented.Item className="px-2" value="solid">
                Solid
              </Segmented.Item>
              <Segmented.Item className="px-2" value="javascript">
                JavaScript
              </Segmented.Item>
            </Segmented>

            <SyntaxHighlighter
              className="w-full"
              language="tsx"
              style={syntaxTheme}
              customStyle={{
                margin: 0,
                borderRadius: "4px",
                fontSize: "12px",
                padding: "1em",
              }}
              wrapLines={true}
              showLineNumbers={false}
            >
              {codeExamples[codeTab as keyof typeof codeExamples]}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
