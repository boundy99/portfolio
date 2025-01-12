import React from "react";
import {Github, Linkedin} from "lucide-react";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex space-x-1 mb-4 md:mb-0 ">
      <Link
        href="https://www.linkedin.com/in/abdoulaye-boundy-djikine-0391b1220/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-purple-500"
      >
        <Linkedin className="size-5 md:size-7" />
      </Link>

      <Link
        href="https://github.com/boundy99/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-purple-500"
      >
        <Github className="size-5 md:size-7" />
      </Link>
    </div>
  );
}
