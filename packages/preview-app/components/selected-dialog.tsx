import { Button, IconButton } from "@choiceform/design-system";
import {
  Duplicate,
  FilesDownload,
  Folder,
  RemoveSmall,
} from "@choiceform/icons-generate";
import { motion } from "framer-motion";
import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconItemData } from "../types";
import { useThemeContext } from "../context";

const SyntaxHighlighter = Prism as unknown as React.FC<SyntaxHighlighterProps>;

interface SelectedDialogProps {
  selectedIcon: IconItemData;
  handleCloseSelectedIcon: () => void;
  handleCopySVG: () => void;
  handleDownloadSVG: () => void;
  handleCopyReactComponent: () => void;
  codeExample: string;
}

export const SelectedDialog = (props: SelectedDialogProps) => {
  const {
    selectedIcon,
    handleCloseSelectedIcon,
    handleCopySVG,
    handleDownloadSVG,
    handleCopyReactComponent,
    codeExample,
  } = props;

  const { theme } = useThemeContext();

  const syntaxTheme = theme === "dark" ? vscDarkPlus : oneLight;

  return (
    <motion.div
      className="fixed bottom-0 left-4 right-4
      lg:left-(--icon-browser-padding-left)
      lg:right-(--icon-browser-padding-right)
      rounded-t-lg p-4 bg-default_bg shadow-xl"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 32 }}
      transition={{ type: "spring", stiffness: 1000, damping: 40 }}
    >
      <div className="grid sm:grid-cols-[auto_1fr] gap-8">
        <div
          className="bg-secondary_bg rounded-md overflow-hidden p-4
          flex items-center justify-center self-start
          icon-detail__preview-wrapper"
          style={{
            width: `calc(${Number(selectedIcon.width) * 8}px - 1px + 32px)`,
            height: `calc(${Number(selectedIcon.height) * 8}px - 1px + 32px)`,
            boxShadow: "0 0 0 1px var(--color-default_border)",
          }}
        >
          <selectedIcon.IconComponent
            width={Number(selectedIcon.width) * 8}
            height={Number(selectedIcon.height) * 8}
            color="var(--icon-color)"
          />
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
          <span className="text-sm text-secondary_text capitalize flex gap-2 items-center">
            <Folder />
            {selectedIcon.category}
          </span>

          <div className="flex gap-2 flex-wrap">
            {selectedIcon.tags.map((tag) => (
              <span
                key={tag}
                className="bg-secondary_bg rounded-full px-1.5 h-field-small"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-2 flex-wrap">
            <Button variant="solid" onClick={handleCopySVG}>
              <Duplicate />
              Copy SVG
            </Button>
            <Button variant="solid" onClick={handleDownloadSVG}>
              <FilesDownload />
              Download SVG
            </Button>
            <Button variant="solid" onClick={handleCopyReactComponent}>
              <Duplicate />
              Copy React Component
            </Button>
          </div>

          <div className="w-full">
            <SyntaxHighlighter
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
              {codeExample}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
