import SearchBar from "./components/search-bar";
import Sidebar from "./components/sidebar";
import LinkCard from "./components/link-card";
import Image from "next/image";
import icon from "../public/devlinks.svg";
import { SubmitLinkForm } from "./components/submit-form";
import { links } from "./utils/data/data";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <header className="flex items-center justify-between px-6 h-14 border-b">
        <div className="flex items-center gap-2 relative">
          <Image
            src={icon}
            alt="DevLinks Logo"
            width={8}
            height={8}
            className="w-6 h-6"
          />
          <span className="font-bold">LINKSFORDEV</span>
          <span className="text-[10px] font-medium bg-zinc-100 px-2 py-[1px] rounded-xl absolute -top-1 -right-10">
            Beta
          </span>
        </div>
        <SubmitLinkForm />
      </header>

      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <SearchBar />
          <div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-3 overflow-y-scroll h-[calc(100vh-9rem)]">
            {links.map((link) => (
              <LinkCard key={link.title} {...link} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
