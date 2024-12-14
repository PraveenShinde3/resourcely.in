import { categories } from "../utils/data/data";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r h-[calc(100vh-3.5rem)]">
      <nav className="p-4">
        {categories.map((category, index) => (
          <div key={`${category.name}-${index}`}>
            <button className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100">
              <span>{category.name}</span>
              <span className="text-gray-500">{category.count}</span>
            </button>
          </div>
        ))}
      </nav>
    </aside>
  );
}
