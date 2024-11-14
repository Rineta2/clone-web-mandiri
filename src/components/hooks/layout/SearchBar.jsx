import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-100 w-2/6 rounded-lg border focus-within:border-primary transition-all">
      <Search aria-hidden="true" />
      <input
        type="search"
        aria-label="Search"
        placeholder="Search"
        className="bg-transparent focus:outline-none text-foreground placeholder:text-gray-500 w-full"
      />
    </div>
  );
}
