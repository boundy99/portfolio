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
    <div className=" mb-4">
      <h3 className="text-xl font-semibold mb-2">
        {title} at{" "}
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:text-purple-700"
        >
          {company}
        </Link>
      </h3>
      <p className="text-sm text-gray-500 mb-2">{duration}</p>
      <p className="text-gray-700 mb-4">{responsibilities}</p>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="text-sm text-gray-500 bg-purple-200 px-2 py-1 rounded"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
