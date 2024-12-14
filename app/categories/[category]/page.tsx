import React from "react";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import SearchBar from "@/app/components/search-bar";
import LinkCard from "@/app/components/link-card";
import { links } from "@/app/utils/data/data";

interface DynamicPageProps {
  params: {
    category: string;
  };
}

const page: React.FC<DynamicPageProps> = ({ params }) => {
  const filteredLinks = links.filter(
    (link) => link.category.toLowerCase() === params.category.toLowerCase()
  );
  return (
    <div>
      <div className="flex gap-1 items-center pb-2">
        <button className="inline-flex hover:bg-zinc-100 px-2 items-center gap-1 py-1 text-sm font-semibold rounded-full hover:underline underline-offset-4">
          <ArrowLeftIcon className="w-4 h-4" />
        </button>
        <p className="capitalize font-medium">{params.category}</p>
      </div>
      <SearchBar />
      <div className="grid grid-cols-1 gap-4 py-4 lg:grid-cols-3 overflow-y-auto h-[calc(100vh-9rem)]">
        {filteredLinks.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </div>
    </div>
  );
};

export default page;
