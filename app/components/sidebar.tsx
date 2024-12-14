"use client";
import Link from "next/link";
import { categories } from "../utils/data/data";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 border-r h-[calc(100vh-3.5rem)]">
      <nav className="p-4 space-y-1">
        {categories.map((category, index) => (
          <div key={`${category.name}-${index}`}>
            <Link
              href={category.url}
              className={`flex items-center justify-between w-full px-3 py-1.5 text-sm rounded-lg ${
                pathname === category.url ? "bg-gray-100" : ""
              } hover:bg-gray-100`}
            >
              <span>{category.name}</span>
              <span className="text-gray-800 py-[1px] px-3 rounded-xl bg-zinc-100">
                {category.count}
              </span>
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  );
}
