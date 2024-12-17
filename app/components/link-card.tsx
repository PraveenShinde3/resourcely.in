import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface LinkCardProps {
  title: string;
  category: string;
  subcategory: string;
  description: string;
  icon: string;
  link: string;
}

export default function LinkCard({
  title,
  category,
  subcategory,
  description,
  icon,
  link,
}: LinkCardProps) {
  return (
    <div className="p-6 border rounded-xl hover:border-gray-400 transition-colors">
      <div className="flex w-ful flex-col items-start justify-between gap-4">
        <div className=" w-full flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <a
                href={link}
                target="_blank"
                className="outline-none font-medium hover:underline underline-offset-4"
              >
                {title}
              </a>
              <ArrowTopRightIcon className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
              <span>{category}</span>
              <span className="text-gray-300">•</span>
              <span>{subcategory}</span>
            </div>
          </div>
          <Image
            src={icon}
            alt="logo"
            width={8}
            height={8}
            className="w-8 h-8"
          />
        </div>
        <div className=" w-full">
          <hr></hr>
        </div>
        <div>
          <p className="text-sm text-gray-600 text-pretty">{description}</p>
        </div>
      </div>
    </div>
  );
}
