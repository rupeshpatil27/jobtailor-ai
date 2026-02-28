import Link from "next/link";
import { Upload } from "lucide-react";

import { Button } from "./ui/button";

export const Header = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm transition-all md:top-4 md:mx-auto md:max-w-5xl md:rounded-full">
      <div className="flex h-16 items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            JobTailor
          </span>
          <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
            AI
          </span>
        </Link>

        <Button className="rounded-full bg-blue-600 px-6 font-semibold shadow-sm transition-all hover:bg-blue-700 hover:shadow-md">
          <Upload className="mr-2 h-4 w-4" />
          Upload Resume
        </Button>
      </div>
    </nav>
  );
};
