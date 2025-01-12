import Link from "next/link";
import {FileText} from "lucide-react";
import Navbar from "./navbar";
import Socials from "./socials";

export default function Header() {
  return (
    <div className="flex flex-col w-full md:sticky md:top-0 md:py-24 md:h-screen">
      <div className="flex flex-col sm:justify-between md:h-full">
        <div>
          <p className="text-purple-500 text-2xl sm:text-3xl font-semibold mb-2 whitespace-nowrap">
            Abdoulaye Djikine
          </p>
          <p className="text-purple-500 font-semibold text-lg sm:text-xl mb-2">
            Software Engineer
          </p>
          <p className="text-gray-700 text-sm md:w-72 sm:text-base">
            I design sleek, intuitive web experiences that just work.
          </p>

          <div className="mt-4">
            <Link
              href="/path-to-your-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-500 bg-purple-200 px-4 py-2 rounded-md hover:bg-purple-300 transition duration-300"
            >
              <FileText size={18} />
              <span>View Resume</span>
            </Link>
          </div>

          <div className="hidden md:block md:mt-4">
            <Navbar />
          </div>
        </div>

        <div className="mt-2 md:mt-0">
          <Socials />
        </div>
      </div>
    </div>
  );
}
