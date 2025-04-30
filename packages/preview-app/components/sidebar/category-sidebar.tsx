import type { IconItemData } from "../../types";
import { CategoryItem } from "./category-item";
import { Customizer } from "./customizer";

interface CategorySidebarProps {
  sortedCategories: string[];
  activeCategory: string | null;
  handleCategoryClick: (category: string) => void;
  groupedAndSortedIcons: Record<string, IconItemData[]>;
}

export const CategorySidebar = (props: CategorySidebarProps) => {
  const {
    sortedCategories,
    activeCategory,
    handleCategoryClick,
    groupedAndSortedIcons,
  } = props;
  return (
    <div className="pt-[var(--nav-height)] flex flex-col gap-4 pb-32">
      <Customizer />
      <div className="text-sm font-medium mb-1 px-1 text-secondary">
        Categories
      </div>
      <nav className="flex flex-col gap-1 pr-4">
        {sortedCategories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <CategoryItem
              key={category}
              category={category}
              isActive={isActive}
              handleCategoryClick={handleCategoryClick}
              groupedAndSortedIcons={groupedAndSortedIcons}
            />
          );
        })}
      </nav>
    </div>
  );
};
