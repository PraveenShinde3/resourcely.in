"use client";
import LinkCard from "./components/link-card";
import { links } from "./utils/data/data";
import SearchBar from "./components/search-bar";
import { useMemo, useState } from "react";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLinks = useMemo(() => {
    return links.filter((link) => {
      const searchContent =
        `${link.title} ${link.category} ${link.subcategory} `.toLowerCase();
      return searchContent.includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="animate-slideUp">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 xl:grid-cols-3 overflow-y-auto max-h-[calc(100vh-9rem)]">
        {filteredLinks.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </div>
    </div>
  );
}
