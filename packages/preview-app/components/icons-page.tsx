import { Scroll } from "@choiceform/design-system";
import { useVirtualizer } from "@tanstack/react-virtual";
import { AnimatePresence } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { toast } from "sonner";
import {
  useCategorySync,
  useGridLayout,
  useIconSearch,
  useVirtualRows,
} from "../hooks";
import type { IconItemData } from "../types";
import { IconItem } from "./icon-item";
import { SearchBar } from "./search-bar";
import { SearchEmpty } from "./search-empty";
import { SelectedDialog } from "./selected-dialog";
import { CategorySidebar } from "./sidebar";

export const IconBrowser = () => {
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

  const handleCopySVG = useCallback(() => {
    if (selectedIcon) {
      const formattedSVG = selectedIcon.optimizedSvg;
      navigator.clipboard.writeText(formattedSVG);
      toast.success("SVG copied to clipboard");
    }
  }, [selectedIcon]);

  const handleDownloadSVG = useCallback(() => {
    if (selectedIcon) {
      const formattedSVG = selectedIcon.optimizedSvg;
      const blob = new Blob([formattedSVG], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${selectedIcon.name}.svg`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success("SVG downloaded");
    }
  }, [selectedIcon]);

  const dashedName = selectedIcon?.name
    .replace(/([A-Z])/g, (match) =>
      match === match.toUpperCase() ? `-${match}` : match
    )
    .toLowerCase()
    .replace(/^-/, "");

  const handleCopyReactComponent = useCallback(() => {
    if (selectedIcon) {
      const reactComponent = `<${selectedIcon.name} />`;
      navigator.clipboard.writeText(reactComponent);
      toast.success("React component copied to clipboard");
    }
  }, [selectedIcon]);

  const handleCloseSelectedIcon = useCallback(() => {
    setSelectedIcon(null);
  }, []);

  const handleCopyVueComponent = useCallback(() => {
    if (selectedIcon) {
      const vueComponent = `<${selectedIcon.name} />`;
      navigator.clipboard.writeText(vueComponent);
      toast.success("Vue component copied to clipboard");
    }
  }, [selectedIcon]);

  const handleCopyAngularComponent = useCallback(() => {
    if (selectedIcon) {
      const angularComponent = `<cf-${dashedName}>
      </cf-${dashedName}>`;
      navigator.clipboard.writeText(angularComponent);
      toast.success("Angular component copied to clipboard");
    }
  }, [selectedIcon]);

  const handleCopySolidComponent = useCallback(() => {
    if (selectedIcon) {
      const solidComponent = `<${selectedIcon.name} />`;
      navigator.clipboard.writeText(solidComponent);
      toast.success("Solid component copied to clipboard");
    }
  }, [selectedIcon]);

  const handleCopyJsComponent = useCallback(() => {
    if (selectedIcon) {
      const jsComponent = `<i data-icon="${dashedName}"></i>`;
      navigator.clipboard.writeText(jsComponent);
      toast.success("JavaScript component copied to clipboard");
    }
  }, [selectedIcon]);

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
    <cf-${dashedName} />
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
  <i data-icon="${dashedName}"></i>

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
        <Scroll className="h-screen">
          <Scroll.Viewport className="h-full">
            <CategorySidebar
              sortedCategories={sortedCategories}
              activeCategory={activeCategory}
              handleCategoryClick={handleCategoryClick}
              groupedAndSortedIcons={groupedAndSortedIcons}
            />
          </Scroll.Viewport>
        </Scroll>
      </aside>

      <div className="fixed inset-0">
        <Scroll>
          <Scroll.Viewport
            className="flex-1 h-screen min-w-0 overflow-auto pt-16 pb-64
             pl-(--icon-browser-padding-left)
             pr-(--icon-browser-padding-right)"
            ref={parentRef}
          >
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
                         px-5 lg:px-3"
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
          </Scroll.Viewport>
        </Scroll>
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
