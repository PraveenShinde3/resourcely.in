"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialQuery: string;
}

export default function SearchBar({ onSearch, initialQuery }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    onSearch(debouncedSearchQuery);

    const params = new URLSearchParams(searchParams.toString());
    if (debouncedSearchQuery) {
      params.set("q", debouncedSearchQuery);
    } else {
      params.delete("q");
    }
    if (params.toString() !== searchParams.toString()) {
      router.push(`?${params.toString()}`, { scroll: false });
    }
  }, [debouncedSearchQuery, onSearch, router, searchParams]);

  return (
    <div className="relative">
      <MagnifyingGlassIcon className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
      <input
        type="search"
        placeholder="Search Links..."
        className="w-full px-4 py-2 pl-10 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
        onChange={handleInputChange}
        value={searchQuery}
      />
    </div>
  );
}
