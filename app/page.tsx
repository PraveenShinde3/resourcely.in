"use client";
import LinkCard from "./components/link-card";
import { links } from "./utils/data/data";
import SearchBar from "./components/search-bar";
import { Suspense, useMemo, useState } from "react";
import { NotFound } from "./components/not-found";
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

  const handleSubmitResource = () => {
    window.open(
      "https://github.com/PraveenShinde3/resourcely.in/issues/new",
      "_blank"
    );
  };

  return (
    <div className="animate-slideUp">
      <Suspense>
        <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
      </Suspense>
      {filteredLinks.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 xl:grid-cols-3 overflow-y-auto max-h-[calc(100vh-11rem)] sm:max-h-[calc(100vh-9rem)] [&::-webkit-scrollbar]:hidden">
          {filteredLinks.map((link) => (
            <LinkCard key={link.title} {...link} />
          ))}
        </div>
      ) : (
        <NotFound onSubmit={handleSubmitResource} searchQuery={searchQuery} />
      )}
    </div>
  );
}
