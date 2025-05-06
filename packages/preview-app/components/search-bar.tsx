import { Dropdown, SearchInput } from "@choiceform/design-system";
import { Folder } from "@choiceform/icons-react";
import { memo, useEffect, useMemo, useState } from "react";

interface SearchBarProps {
  totalIcons: number;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  children?: React.ReactNode;
  sortedCategories: string[];
  activeCategory: string | null;
  handleCategoryClick: (category: string) => void;
}

export const SearchBar = memo((props: SearchBarProps) => {
  const {
    totalIcons,
    searchTerm,
    setSearchTerm,
    sortedCategories,
    activeCategory,
    handleCategoryClick,
  } = props;
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const searchPlaceholder = useMemo(() => {
    return `Search ${totalIcons} icons... (by name, category, or tag)`;
  }, [totalIcons]);

  return (
    <div
      className="sticky top-0 z-10
      bg-default_bg mb-4 px-5 flex items-center gap-4
      shadow-[0_16px_24px_var(--color-default_bg)]
      lg:px-2"
    >
      {!isLargeScreen && (
        <Dropdown selection={true}>
          <Dropdown.Trigger
            size="large"
            variant="secondary"
            className="text-left justify-start"
          >
            <Folder />
            <span className="hidden md:block truncate">{activeCategory}</span>
          </Dropdown.Trigger>
          {sortedCategories.map((category) => (
            <Dropdown.Item
              key={category}
              selected={activeCategory === category}
              onMouseUp={() => handleCategoryClick(category)}
            >
              {category}
            </Dropdown.Item>
          ))}
        </Dropdown>
      )}
      <SearchInput
        className="flex-1"
        size="large"
        value={searchTerm}
        onChange={(value) => setSearchTerm(value)}
        placeholder={searchPlaceholder}
      />
    </div>
  );
});

SearchBar.displayName = "SearchBar";
