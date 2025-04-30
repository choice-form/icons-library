import { Button } from "@choiceform/design-system";
import { Search } from "@choiceform/icons-library";

interface SearchEmptyProps {
  searchTerm: string;
  onClear: () => void;
}

export const SearchEmpty = ({ searchTerm, onClear }: SearchEmptyProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 text-secondary">
      <Search width={64} height={64} />
      <p className="p-8 text-base">No icons found matching "{searchTerm}".</p>

      <Button variant="secondary" size="large" onClick={onClear}>
        Clear
      </Button>
    </div>
  );
};
