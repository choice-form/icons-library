import { tcx } from "@choiceform/design-system";
import { Folder, FolderOpen } from "@choiceform/icons-react";
import { forwardRef, memo, useMemo } from "react";
import type { IconItemData } from "../../types";

interface CategoryItemProps {
  category: string;
  isActive: boolean;
  handleCategoryClick: (category: string) => void;
  groupedAndSortedIcons: Record<string, IconItemData[]>;
}

export const CategoryItem = memo(
  forwardRef<HTMLDivElement, CategoryItemProps>((props, ref) => {
    const { category, isActive, handleCategoryClick, groupedAndSortedIcons } =
      props;

    const categoryName = useMemo(() => {
      return category
        .replace(/-/g, " ")
        .split("/")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" / ");
    }, [category]);

    const iconCount = useMemo(() => {
      return groupedAndSortedIcons[category].length;
    }, [groupedAndSortedIcons, category]);

    return (
      <div
        ref={ref}
        className={tcx(
          "flex items-center gap-2 cursor-default select-none rounded-md px-2 py-1",
          isActive
            ? "text-accent_text bg-accent_bg/10"
            : "hover:bg-secondary-active_bg active:bg-accent_bg/10"
        )}
        onMouseDown={() => handleCategoryClick(category)}
      >
        {isActive ? <FolderOpen /> : <Folder />}
        <span className="flex-1 truncate">{categoryName}</span>
        <span
          className={tcx(
            isActive ? "text-accent_text/50" : "text-secondary_text"
          )}
        >
          {iconCount}
        </span>
      </div>
    );
  })
);

CategoryItem.displayName = "CategoryItem";
