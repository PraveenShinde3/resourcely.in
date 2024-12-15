"use client";
import { useMemo, useState } from "react";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import SearchBar from "@/app/components/search-bar";
import LinkCard from "@/app/components/link-card";
import { links } from "@/app/utils/data/data";
import Link from "next/link";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const category = params.category as string;
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLinks = useMemo(() => {
    return links.filter((link) => {
      const searchContent =
        `${link.title} ${link.category} ${link.subcategory} ${link.description}`.toLowerCase();
      return (
        searchContent.includes(searchQuery.toLowerCase()) &&
        link.category.toLowerCase() === category.toLowerCase()
      );
    });
  }, [searchQuery, category]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="animate-slideUp">
      <div className="flex gap-1 items-center pb-2">
        <Link
          href="/"
          className="inline-flex hover:bg-zinc-100 px-2 items-center gap-1 py-1 text-sm font-semibold rounded-full hover:underline underline-offset-4"
        >
          <ArrowLeftIcon className="w-4 h-4" />
        </Link>
        <p className="capitalize font-medium">{category}</p>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className=" grid grid-cols-1 gap-4 py-4 md:grid-cols-2 xl:grid-cols-3 overflow-y-auto max-h-[calc(100vh-9rem)]">
        {filteredLinks.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </div>
    </div>
  );
};

export default Page;
