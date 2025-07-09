import { ScrollArea } from "@choiceform/design-system";
import { useVirtualizer } from "@tanstack/react-virtual";
import { AnimatePresence } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { toast } from "sonner";
import { IconItem } from "../components/icon-item";
import { SearchBar } from "../components/search-bar";
import { SearchEmpty } from "../components/search-empty";
import { SelectedDialog } from "../components/selected-dialog";
import { CategorySidebar } from "../components/sidebar";
import {
  useCategorySync,
  useGridLayout,
  useIconSearch,
  useVirtualRows,
} from "../hooks";
import type { IconItemData } from "../types";
import { createRoot } from "react-dom/client";

// 辅助函数：从React组件生成SVG字符串
const generateSvgFromComponent = (
  IconComponent: React.ComponentType<any>,
  props: any = {}
): Promise<string> => {
  return new Promise((resolve) => {
    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.left = "-9999px";
    container.style.top = "-9999px";
    document.body.appendChild(container);

    const root = createRoot(container);

    root.render(<IconComponent {...props} />);

    // 使用requestAnimationFrame确保DOM更新完成
    requestAnimationFrame(() => {
      const svgElement = container.querySelector("svg");
      if (svgElement) {
        resolve(svgElement.outerHTML);
      } else {
        resolve("");
      }
      root.unmount();
      document.body.removeChild(container);
    });
  });
};

export const Icons = () => {
  const [selectedIcon, setSelectedIcon] = useState<IconItemData | null>(null);

  const parentRef = useRef<HTMLDivElement>(null);

  const {
    searchTerm,
    setSearchTerm,
    groupedAndSortedIcons,
    sortedCategories,
    totalIcons,
  } = useIconSearch();
  const { gridRef, columnCount, ICON_SIZE, GAP } = useGridLayout();

  const virtualRows = useVirtualRows(
    sortedCategories,
    groupedAndSortedIcons,
    columnCount
  );

  const rowVirtualizer = useVirtualizer({
    count: virtualRows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: (index) => {
      if (index >= virtualRows.length) return ICON_SIZE + GAP;
      const row = virtualRows[index];
      return row.type === "title" ? 48 : ICON_SIZE + GAP;
    },
    overscan: 5,
  });

  const { activeCategory, handleCategoryClick, TITLE_HEIGHT } = useCategorySync(
    virtualRows,
    rowVirtualizer,
    parentRef
  );

  const handleIconSelect = useCallback((iconData: IconItemData) => {
    setSelectedIcon(iconData);
  }, []);

  const handleCopySVG = useCallback(
    async (icon: IconItemData | null) => {
      const iconToUse = icon || selectedIcon;
      if (iconToUse) {
        try {
          const svgString = await generateSvgFromComponent(
            iconToUse.IconComponent,
            {
              width: iconToUse.width,
              height: iconToUse.height,
              color: "currentColor",
            }
          );
          navigator.clipboard.writeText(svgString);
          toast.success("SVG copied to clipboard");
        } catch (error) {
          console.error("Failed to generate SVG:", error);
          toast.error("Failed to copy SVG");
        }
      }
    },
    [selectedIcon]
  );

  const handleDownloadSVG = useCallback(
    async (icon: IconItemData | null) => {
      const iconToUse = icon || selectedIcon;
      if (iconToUse) {
        try {
          const svgString = await generateSvgFromComponent(
            iconToUse.IconComponent,
            {
              width: iconToUse.width,
              height: iconToUse.height,
              color: "currentColor",
            }
          );
          const blob = new Blob([svgString], { type: "image/svg+xml" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `${iconToUse.name}.svg`;
          a.click();
          URL.revokeObjectURL(url);
          toast.success("SVG downloaded");
        } catch (error) {
          console.error("Failed to generate SVG:", error);
          toast.error("Failed to download SVG");
        }
      }
    },
    [selectedIcon]
  );

  const getDashedName = useCallback((name: string) => {
    return name
      .replace(/([A-Z])/g, (match) =>
        match === match.toUpperCase() ? `-${match}` : match
      )
      .toLowerCase()
      .replace(/^-/, "");
  }, []);

  const handleCopyReactComponent = useCallback(
    (icon: IconItemData | null) => {
      const iconToUse = icon || selectedIcon;
      if (iconToUse) {
        const reactComponent = `<${iconToUse.name} />`;
        navigator.clipboard.writeText(reactComponent);
        toast.success("React component copied to clipboard");
      }
    },
    [selectedIcon]
  );

  const handleCloseSelectedIcon = useCallback(() => {
    setSelectedIcon(null);
  }, []);

  const handleCopyVueComponent = useCallback(
    (icon: IconItemData | null) => {
      const iconToUse = icon || selectedIcon;
      if (iconToUse) {
        const vueComponent = `<${iconToUse.name} />`;
        navigator.clipboard.writeText(vueComponent);
        toast.success("Vue component copied to clipboard");
      }
    },
    [selectedIcon]
  );

  const handleCopyAngularComponent = useCallback(
    (icon: IconItemData | null) => {
      const iconToUse = icon || selectedIcon;
      if (iconToUse) {
        const dashedName = getDashedName(iconToUse.name);
        const angularComponent = `<cf-${dashedName}>
      </cf-${dashedName}>`;
        navigator.clipboard.writeText(angularComponent);
        toast.success("Angular component copied to clipboard");
      }
    },
    [getDashedName, selectedIcon]
  );

  const handleCopySolidComponent = useCallback(
    (icon: IconItemData | null) => {
      const iconToUse = icon || selectedIcon;
      if (iconToUse) {
        const solidComponent = `<${iconToUse.name} />`;
        navigator.clipboard.writeText(solidComponent);
        toast.success("Solid component copied to clipboard");
      }
    },
    [selectedIcon]
  );

  const handleCopyJsComponent = useCallback(
    (icon: IconItemData | null) => {
      const iconToUse = icon || selectedIcon;
      if (iconToUse) {
        const dashedName = getDashedName(iconToUse.name);
        const jsComponent = `<i data-icon="${dashedName}"></i>`;
        navigator.clipboard.writeText(jsComponent);
        toast.success("JavaScript component copied to clipboard");
      }
    },
    [getDashedName, selectedIcon]
  );

  const reactCodeExample = selectedIcon
    ? `
import { ${selectedIcon.name} } from "@choiceform/icons-react";

const MyComponent = () => {
  return (
    <${selectedIcon.name} />
  );
};

export default MyComponent;
`.trim()
    : "";

  const vueCodeExample = selectedIcon
    ? `
<template>
  <${selectedIcon.name} />
</template>

<script setup>
  import { ${selectedIcon.name} } from "@choiceform/icons-vue";
</script>
`.trim()
    : "";

  const angularCodeExample = selectedIcon
    ? `
import { ${selectedIcon.name}Component } from '@choiceform/icons-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ${selectedIcon.name}Component,
  ],
  template: \`
    <cf-${selectedIcon ? getDashedName(selectedIcon.name) : ""} />
  \`
})

export class AppComponent {
  title = 'angular';
}
`.trim()
    : "";

  const solidCodeExample = selectedIcon
    ? `
import { ${selectedIcon.name} } from "@choiceform/icons-solid";

function App() {
  return (
    <${selectedIcon.name} />
  );
}
`.trim()
    : "";

  const jsCodeExample = selectedIcon
    ? `
<body>
  <i data-icon="${selectedIcon ? getDashedName(selectedIcon.name) : ""}"></i>

  <script src="https://unpkg.com/@choiceform/icons-js@latest/dist/umd/icons-js.js"></script>

  <script>
    iconsJs.createIcons({
      icons: iconsJs.default,
    });
  </script>
</body>
`.trim()
    : "";

  const handleTagClick = useCallback(
    (tag: string) => {
      setSearchTerm(tag);
    },
    [setSearchTerm]
  );

  const renderIconRow = useCallback(
    (
      icons: IconItemData[],
      isSelected: (name: string) => boolean,
      onIconSelect: (icon: IconItemData) => void,
      colCount: number
    ) => {
      return (
        <div className="flex flex-row px-3 lg:px-0">
          {icons.map((icon) => (
            <div
              key={icon.name}
              className="flex items-center justify-center"
              style={{
                width: `${100 / colCount}%`,
                height: `${ICON_SIZE + GAP}px`,
              }}
            >
              <IconItem
                icon={icon}
                name={icon.name}
                IconComponent={icon.IconComponent}
                isSelected={isSelected(icon.name)}
                onIconSelect={onIconSelect}
                handleCopySVG={handleCopySVG}
                handleDownloadSVG={handleDownloadSVG}
                handleCopyReactComponent={handleCopyReactComponent}
                handleCopyVueComponent={handleCopyVueComponent}
                handleCopyAngularComponent={handleCopyAngularComponent}
                handleCopySolidComponent={handleCopySolidComponent}
                handleCopyJsComponent={handleCopyJsComponent}
              />
            </div>
          ))}
        </div>
      );
    },
    [ICON_SIZE, GAP]
  );

  return (
    <>
      <aside
        className="fixed z-10 bg-secondary-background left-0 inset-y-0
         w-(--sidebar-container-width)
         pl-(--sidebar-padding-left) hidden lg:block"
      >
        <ScrollArea className="h-screen">
          <ScrollArea.Viewport className="h-full">
            <ScrollArea.Content>
              <CategorySidebar
                sortedCategories={sortedCategories}
                activeCategory={activeCategory}
                handleCategoryClick={handleCategoryClick}
                groupedAndSortedIcons={groupedAndSortedIcons}
              />
            </ScrollArea.Content>
          </ScrollArea.Viewport>
        </ScrollArea>
      </aside>

      <div className="fixed inset-0">
        <ScrollArea>
          <ScrollArea.Viewport
            className="flex-1 h-screen min-w-0 overflow-auto pt-16 pb-128
             pl-(--icon-browser-padding-left)
             pr-(--icon-browser-padding-right)"
            ref={parentRef}
          >
            <ScrollArea.Content>
              <SearchBar
                totalIcons={totalIcons}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                sortedCategories={sortedCategories}
                activeCategory={activeCategory}
                handleCategoryClick={handleCategoryClick}
              />

              {sortedCategories.length === 0 && searchTerm && (
                <SearchEmpty
                  searchTerm={searchTerm}
                  onClear={() => setSearchTerm("")}
                />
              )}
              <div
                ref={gridRef}
                className="w-full relative"
                style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                  const row = virtualRows[virtualRow.index];

                  return (
                    <div
                      key={virtualRow.index}
                      data-index={virtualRow.index}
                      data-category={
                        row.type === "title" ? row.category : undefined
                      }
                      id={row.type === "title" ? row.category : undefined}
                      className="absolute w-full"
                      style={{
                        height: `${virtualRow.size}px`,
                        transform: `translateY(${virtualRow.start}px)`,
                      }}
                    >
                      {row.type === "title" ? (
                        <div
                          className="w-full h-12 flex items-center
                         font-medium text-base text-secondary-foreground
                         px-5 lg:px-3 capitalize"
                        >
                          {row.category}
                        </div>
                      ) : (
                        renderIconRow(
                          row.icons || [],
                          (name) => selectedIcon?.name === name,
                          handleIconSelect,
                          columnCount
                        )
                      )}
                    </div>
                  );
                })}
              </div>
            </ScrollArea.Content>
          </ScrollArea.Viewport>
        </ScrollArea>
      </div>

      <AnimatePresence mode="wait">
        {selectedIcon && (
          <SelectedDialog
            selectedIcon={selectedIcon}
            handleCloseSelectedIcon={handleCloseSelectedIcon}
            handleCopySVG={handleCopySVG}
            handleDownloadSVG={handleDownloadSVG}
            handleCopyReactComponent={handleCopyReactComponent}
            handleCopyVueComponent={handleCopyVueComponent}
            handleCopyAngularComponent={handleCopyAngularComponent}
            handleCopySolidComponent={handleCopySolidComponent}
            handleCopyJsComponent={handleCopyJsComponent}
            ReactCodeExample={reactCodeExample}
            VueCodeExample={vueCodeExample}
            AngularCodeExample={angularCodeExample}
            SolidCodeExample={solidCodeExample}
            JavaScriptCodeExample={jsCodeExample}
            handleTagClick={handleTagClick}
          />
        )}
      </AnimatePresence>
    </>
  );
};
