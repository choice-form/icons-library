import { ContextMenu, tcx, Tooltip } from "@choiceform/design-system";
import { memo } from "react";
import { IconItemData } from "../types";

interface IconItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconItemData;
  name: string;
  isSelected: boolean;
  IconComponent: React.ComponentType<any>;
  onIconSelect: (icon: IconItemData) => void;
  handleCopySVG: (icon: IconItemData) => void;
  handleDownloadSVG: (icon: IconItemData) => void;
  handleCopyReactComponent: (icon: IconItemData) => void;
  handleCopyVueComponent: (icon: IconItemData) => void;
  handleCopyAngularComponent: (icon: IconItemData) => void;
  handleCopySolidComponent: (icon: IconItemData) => void;
  handleCopyJsComponent: (icon: IconItemData) => void;
}

export const IconItem = memo(function IconItem(props: IconItemProps) {
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

  return (
    <Tooltip content={name}>
      <ContextMenu>
        <ContextMenu.Trigger>
          <div {...rest} className="flex items-center justify-center">
            <div
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
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Label>{icon.name}</ContextMenu.Label>
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
          <ContextMenu.Item onClick={() => handleCopySVG(icon)}>
            Copy SVG
          </ContextMenu.Item>
          <ContextMenu.Item onClick={() => handleDownloadSVG(icon)}>
            Download SVG
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    </Tooltip>
  );
});

IconItem.displayName = "IconItem";
