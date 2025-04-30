import { useMemo, useState } from "react";
import * as Icons from "@choiceform/icons-library";
import { iconMetadata } from "@choiceform/icons-library";
import type { IconComponentProps, IconItemData, IconMetadata } from "../types";

export function useIconSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  // Process icons search and categorization - memoize to reduce unnecessary recalculations
  const groupedAndSortedIcons = useMemo(() => {
    const groups: Record<string, IconItemData[]> = {};
    const lowerSearch = searchTerm.toLowerCase();

    (iconMetadata as IconMetadata[]).forEach((meta) => {
      if (
        !searchTerm ||
        meta.name.toLowerCase().includes(lowerSearch) ||
        meta.category.toLowerCase().includes(lowerSearch) ||
        meta.tags.some((tag) => tag.toLowerCase().includes(lowerSearch))
      ) {
        if (
          Object.prototype.hasOwnProperty.call(Icons, meta.name) &&
          typeof (Icons as any)[meta.name] === "function" &&
          meta.name !== "iconMetadata"
        ) {
          const component = (Icons as any)[
            meta.name
          ] as React.FC<IconComponentProps>;
          const categoryKey =
            meta.category === "."
              ? "General"
              : meta.category.replace(/^\.?\/?/, "");

          if (!groups[categoryKey]) {
            groups[categoryKey] = [];
          }
          groups[categoryKey].push({ ...meta, IconComponent: component });
        }
      }
    });

    // Sort icons in all categories
    for (const categoryKey in groups) {
      groups[categoryKey].sort((a, b) => a.name.localeCompare(b.name));
    }

    return groups;
  }, [searchTerm]);

  // Sort categories - General always first
  const sortedCategories = useMemo(() => {
    return Object.keys(groupedAndSortedIcons).sort((a, b) => {
      if (a === "General") return -1;
      if (b === "General") return 1;
      return a.localeCompare(b);
    });
  }, [groupedAndSortedIcons]);

  // Calculate total icon count
  const totalIcons = useMemo(
    () =>
      Object.values(groupedAndSortedIcons).reduce(
        (sum, icons) => sum + icons.length,
        0,
      ),
    [groupedAndSortedIcons],
  );

  return {
    searchTerm,
    setSearchTerm,
    groupedAndSortedIcons,
    sortedCategories,
    totalIcons,
  };
}
