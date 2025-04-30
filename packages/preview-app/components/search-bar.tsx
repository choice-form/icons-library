import {
  Button,
  Dropdown,
  DropdownItem,
  SearchInput,
} from "@choiceform/design-system";
import { Folder } from "@choiceform/icons-library";
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
      bg-body mb-4 px-5 flex items-center gap-4
      shadow-[0_16px_24px_var(--color-body)]
      lg:px-2"
    >
      {!isLargeScreen && (
        <Dropdown
          selection={true}
          trigger={(open) => (
            <Button
              active={open}
              size="large"
              variant="secondary"
              className="text-left justify-start"
            >
              <Folder />
              <span className="hidden md:block truncate">{activeCategory}</span>
            </Button>
          )}
        >
          {sortedCategories.map((category) => (
            <DropdownItem
              key={category}
              selected={activeCategory === category}
              onMouseUp={() => handleCategoryClick(category)}
            >
              {category}
            </DropdownItem>
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
