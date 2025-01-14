import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  link: string;
  duration: string;
  responsibilities: string;
  tools: string[];
}

export default function ExperienceCard({
  title,
  company,
  link,
  duration,
  responsibilities,
  tools,
}: ExperienceCardProps) {
  return (
    <div className="mb-4">
      <h3 className="text-base md:text-xl text-zinc-500 font-semibold ">
        {title} at{" "}
        <Link
          href={link}
          className="text-green-400  inline-flex items-center hover:text-green-600 transition-all duration-150"
        >
          {company}

          <MoveUpRight className="size-4" />
        </Link>
      </h3>
      <p className="text-sm text-zinc-400 mb-4">{duration}</p>
      <p className="text-zinc-600 mb-4">{responsibilities}</p>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="text-sm text-zinc-100 bg-green-400 px-2 py-1 rounded-md"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
