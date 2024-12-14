import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function SearchBar() {
  return (
    <div className="relative">
      <MagnifyingGlassIcon className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
      <input
        type="search"
        placeholder="Search Links..."
        className="w-full px-4 py-2 pl-10 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
      />
    </div>
  );
}
