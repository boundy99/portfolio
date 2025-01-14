import Link from "next/link";
import { FileText, Mail } from "lucide-react";
import Navbar from "./navbar";
import Socials from "./socials";

export default function Header() {
  return (
    <div
      className={`flex flex-col w-full md:sticky md:top-0 md:py-24 md:h-screen p-5 md:p-10 bg-green-400 rounded-md md:rounded-none`}
    >
      <div className="flex flex-col sm:justify-between md:h-full">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-zinc-50 text-4xl font-bold mb-2 whitespace-nowrap drop-shadow-sm">
            Abdoulaye Djikine
          </p>
          <p className="text-zinc-50 font-medium md:font-semibold text-xl sm:text-xl mb-2 drop-shadow-sm">
            Software Engineer
          </p>
          <p className="text-green-50/75 text-sm w-72 text-center md:text-start">
            I design sleek, intuitive web experiences that just work.
          </p>

          <div className="flex items-center gap-2 md:mt-4">
            <div className="mt-4">
              <Link
                href="https://docs.google.com/document/d/130Ffr5eRAU5IUD7nzM5rBWSWMxuwB5d6SavI6d1BKyk/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-green-500 bg-green-100 px-4 py-2 rounded-md hover:bg-green-300 transition duration-300 shadow-sm"
              >
                <FileText size={18} />
                <span>Resume</span>
              </Link>
            </div>

            <div className="mt-4">
              <Link
                href="mailto:abdoulayeboundydjikine@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-green-500 bg-green-100 px-4 py-2 rounded-md hover:bg-green-300 transition duration-300 shadow-sm"
              >
                <Mail size={18} />
                <span>Email</span>
              </Link>
            </div>
          </div>

          <div className="hidden md:block md:mt-10">
            <Navbar />
          </div>
        </div>

        <div className="mt-6 md:mt-0 w-full">
          <Socials />
        </div>
      </div>
    </div>
  );
}
