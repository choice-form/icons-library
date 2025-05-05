import { Virtualizer } from "@tanstack/react-virtual";
import { useCallback, useEffect, useMemo, useState } from "react";
import { IconItemData } from "../types";

const TITLE_HEIGHT = 48;
const SCROLL_OFFSET = 128;

interface VirtualRow {
  type: "title" | "icons";
  category: string;
  icons?: IconItemData[];
}

export function useCategorySync<T extends Element>(
  virtualRows: VirtualRow[],
  rowVirtualizer: Virtualizer<T, Element>,
  parentRef: React.RefObject<T>,
) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categoryToIndexMap = useMemo(() => {
    const map = new Map<string, number>();
    virtualRows.forEach((row, index) => {
      if (row.type === "title") {
        map.set(row.category, index);
      }
    });
    return map;
  }, [virtualRows]);

  useEffect(() => {
    if (!parentRef.current) return;

    const handleScroll = () => {
      if (!parentRef.current) return;

      const scrollTop = parentRef.current.scrollTop;
      const visibleTop = scrollTop + SCROLL_OFFSET;

      const visibleItems = rowVirtualizer.getVirtualItems();

      let activeCategory: string | null = null;
      for (const item of visibleItems) {
        const row = virtualRows[item.index];
        if (
          item.start <= visibleTop &&
          visibleTop <= item.end &&
          row.type === "title"
        ) {
          activeCategory = row.category;
          break;
        }
      }

      if (!activeCategory && visibleItems.length > 0) {
        let closestTitleIndex = -1;
        let closestDistance = Infinity;

        for (const item of visibleItems) {
          const row = virtualRows[item.index];
          if (row.type === "title" && item.start <= visibleTop) {
            const distance = visibleTop - item.start;
            if (distance < closestDistance) {
              closestDistance = distance;
              closestTitleIndex = item.index;
            }
          }
        }

        if (closestTitleIndex < 0) {
          for (let i = 0; i < virtualRows.length; i++) {
            const row = virtualRows[i];
            if (row.type === "title") {
              const virtualItem = visibleItems.find((item) => item.index === i);

              if (!virtualItem) {
                const nextVisibleIndex = visibleItems[0]?.index || 0;
                if (i < nextVisibleIndex) {
                  closestTitleIndex = i;
                }
              }
            }
          }
        }

        if (closestTitleIndex >= 0) {
          activeCategory = virtualRows[closestTitleIndex].category;
        }
      }

      if (activeCategory) {
        setActiveCategory(activeCategory);
      }
    };

    const scrollElement = parentRef.current;
    scrollElement.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, [rowVirtualizer, virtualRows, parentRef]);

  const handleCategoryClick = useCallback(
    (category: string) => {
      const index = categoryToIndexMap.get(category);

      if (index !== undefined && parentRef.current) {
        const virtualItems = rowVirtualizer.getVirtualItems();
        const virtualItem = virtualItems.find((item) => item.index === index);

        if (virtualItem) {
          parentRef.current.scrollTo({
            top: Math.max(0, virtualItem.start - SCROLL_OFFSET),
          });
        } else {
          rowVirtualizer.scrollToIndex(index, {
            align: "start",
          });

          setTimeout(() => {
            const updatedVirtualItems = rowVirtualizer.getVirtualItems();
            const updatedItem = updatedVirtualItems.find(
              (item) => item.index === index,
            );

            if (updatedItem && parentRef.current) {
              parentRef.current.scrollTo({
                top: Math.max(0, updatedItem.start - SCROLL_OFFSET),
              });
            }
          }, 100);
        }

        setActiveCategory(category);
      }
    },
    [categoryToIndexMap, rowVirtualizer, parentRef],
  );

  return {
    activeCategory,
    handleCategoryClick,
    TITLE_HEIGHT,
    SCROLL_OFFSET,
  };
}
