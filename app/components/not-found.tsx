import { ArrowLeftIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface NotFoundProps {
  onSubmit: () => void;
  searchQuery: string;
}

export function NotFound({ onSubmit, searchQuery }: NotFoundProps) {
  return (
    <div className="flex-1 h-[calc(100vh-11rem)]  text-center space-y-6 flex flex-col justify-center items-center max-w-2xl mx-auto px-6">
      <div>
        <p className="text-gray-600 text-lg">
          We couldn&apos;t find any resources matching &quot;{searchQuery}
          &quot;.
        </p>
        <p className="text-sm text-gray-500 py-1 ">
          Submit/Open an issue and we&apos;ll add it if it fits our criteria!
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/" className="w-full sm:w-auto">
            <button className="w-full flex items-center px-3 py-1.5 border border-zinc-200 rounded-lg text-sm">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to all categories
            </button>
          </Link>
          <button
            onClick={onSubmit}
            className="w-full flex gap-2 items-center sm:w-auto text-sm px-3 py-1.5 bg-gray-800 text-zinc-50 rounded-lg font-medium"
          >
            Submit missing resource
            <ArrowTopRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
