import { tcx, Tooltip } from "@choiceform/design-system";
import { memo } from "react";
import { IconItemData } from "../types";

interface IconItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconItemData;
  name: string;
  isSelected: boolean;
  IconComponent: React.ComponentType<any>;
  onIconSelect: (icon: IconItemData) => void;
}

export const IconItem = memo(function IconItem(props: IconItemProps) {
  const { icon, name, IconComponent, isSelected, onIconSelect, ...rest } =
    props;

  return (
    <Tooltip content={name}>
      <div {...rest} className="flex items-center justify-center">
        <div
          className={tcx(
            "flex h-12 w-12 items-center justify-center rounded-md border-2 border-transparent",
            "bg-secondary_bg hover:bg-secondary_bg/50",
            isSelected && "border-selected_border"
          )}
          onMouseDown={() => onIconSelect(icon)}
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
  );
});

IconItem.displayName = "IconItem";
