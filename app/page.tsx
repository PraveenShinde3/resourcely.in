import LinkCard from "./components/link-card";
import { links } from "./utils/data/data";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-3 overflow-y-scroll h-[calc(100vh-9rem)]">
      {links.map((link) => (
        <LinkCard key={link.title} {...link} />
      ))}
    </div>
  );
}
