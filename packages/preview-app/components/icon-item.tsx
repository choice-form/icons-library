import { ContextMenu, tcx, Tooltip } from "@choiceform/design-system";
import { forwardRef, memo, useRef, useState } from "react";
import { IconItemData } from "../types";

interface IconItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconItemData;
  name: string;
  isSelected: boolean;
  IconComponent: React.ComponentType<any>;
  onIconSelect: (icon: IconItemData) => void;
  handleCopySVG: (icon: IconItemData | null) => Promise<void>;
  handleDownloadSVG: (icon: IconItemData | null) => Promise<void>;
  handleCopyReactComponent: (icon: IconItemData | null) => void;
  handleCopyVueComponent: (icon: IconItemData | null) => void;
  handleCopyAngularComponent: (icon: IconItemData | null) => void;
  handleCopySolidComponent: (icon: IconItemData | null) => void;
  handleCopyJsComponent: (icon: IconItemData | null) => void;
}

export const IconItem = memo(
  forwardRef<HTMLDivElement, IconItemProps>(function IconItem(props, ref) {
    const {
      icon,
      name,
      IconComponent,
      isSelected,
      onIconSelect,
      handleCopySVG,
      handleDownloadSVG,
      handleCopyReactComponent,
      handleCopyVueComponent,
      handleCopyAngularComponent,
      handleCopySolidComponent,
      handleCopyJsComponent,
      ...rest
    } = props;

    const [contextMenuOpen, setContextMenuOpen] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    return (
      <>
        <Tooltip content={name} disabled={contextMenuOpen}>
          <div {...rest} ref={ref} className="flex items-center justify-center">
            <div
              ref={containerRef}
              className={tcx(
                "flex h-12 w-12 items-center justify-center rounded-md border-2 border-transparent",
                "bg-secondary-background hover:bg-secondary-background/50",
                isSelected && "border-selected-boundary"
              )}
              onMouseDown={() => onIconSelect(icon)}
              onContextMenu={() => {
                onIconSelect(icon);
              }}
            >
              <IconComponent
                color="var(--icon-color)"
                style={{
                  strokeWidth: "var(--icon-stroke-style)",
                  width: "var(--icon-size)",
                  height: "var(--icon-size)",
                }}
              />
            </div>
          </div>
        </Tooltip>

        <ContextMenu
          open={contextMenuOpen}
          onOpenChange={setContextMenuOpen}
          triggerRef={containerRef}
        >
          <ContextMenu.Content>
            <ContextMenu.Label>{name}</ContextMenu.Label>
            <ContextMenu.Divider />
            <ContextMenu.Item onClick={() => handleCopyReactComponent(icon)}>
              Copy React
            </ContextMenu.Item>
            <ContextMenu.Item onClick={() => handleCopyVueComponent(icon)}>
              Copy Vue
            </ContextMenu.Item>
            <ContextMenu.Item onClick={() => handleCopyAngularComponent(icon)}>
              Copy Angular
            </ContextMenu.Item>
            <ContextMenu.Item onClick={() => handleCopySolidComponent(icon)}>
              Copy Solid
            </ContextMenu.Item>
            <ContextMenu.Item onClick={() => handleCopyJsComponent(icon)}>
              Copy JS
            </ContextMenu.Item>
            <ContextMenu.Divider />
            <ContextMenu.Item onClick={async () => await handleCopySVG(icon)}>
              Copy SVG
            </ContextMenu.Item>
            <ContextMenu.Item
              onClick={async () => await handleDownloadSVG(icon)}
            >
              Download SVG
            </ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu>
      </>
    );
  })
);

IconItem.displayName = "IconItem";
