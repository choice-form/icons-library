import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const ICON_SIZE = 56;
const GAP = 8;

export function useGridLayout() {
  const [gridWidth, setGridWidth] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (gridRef.current) {
        setGridWidth(gridRef.current.offsetWidth);
      }
    };
    handleResize();

    if (typeof ResizeObserver !== "undefined" && gridRef.current) {
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(gridRef.current);
      return () => resizeObserver.disconnect();
    } else {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const columnCount = useMemo(() => {
    const MAX_LAYOUT_WIDTH = 1536;
    const SIDE_PADDING = 0;

    const effectiveWidth =
      Math.min(gridWidth || MAX_LAYOUT_WIDTH, MAX_LAYOUT_WIDTH) - SIDE_PADDING;

    return Math.max(1, Math.floor(effectiveWidth / (ICON_SIZE + GAP)));
  }, [gridWidth]);

  return {
    gridRef,
    columnCount,
    ICON_SIZE,
    GAP,
  };
}
