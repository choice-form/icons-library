import { useMemo } from "react";
import { IconItemData } from "../types";

export interface VirtualRow {
  type: "title" | "icons";
  category: string;
  icons?: IconItemData[];
}

export function useVirtualRows(
  sortedCategories: string[],
  groupedAndSortedIcons: Record<string, IconItemData[]>,
  columnCount: number,
) {
  const virtualRows = useMemo(() => {
    const rows: VirtualRow[] = [];

    sortedCategories.forEach((category) => {
      rows.push({ type: "title", category });

      const icons = groupedAndSortedIcons[category];
      if (!icons || icons.length === 0) return;

      for (let i = 0; i < icons.length; i += columnCount) {
        rows.push({
          type: "icons",
          category,
          icons: icons.slice(i, i + columnCount),
        });
      }
    });

    return rows;
  }, [sortedCategories, groupedAndSortedIcons, columnCount]);

  return virtualRows;
}
