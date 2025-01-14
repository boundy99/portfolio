"use client";

import Link from "next/link";
import { ProjectCardProps } from "@/types";
import { Github, Globe, BookOpen } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

export default function ProjectCard({
  title,
  description,
  github,
  website,
  reading,
  tools,
}: ProjectCardProps) {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div className="relative card p-6 rounded-md shadow-sm border-[1px] border-green-300/50 hover:bg-green-100">
      <div className="hidden sm:flex absolute top-7 right-4  space-x-3">
        {website && (
          <Link href={website} className=" text-green-400 hover:text-green-500">
            <Globe size={20} />
          </Link>
        )}
        {github && (
          <Link href={github} className=" text-green-400 hover:text-green-500">
            <Github size={20} />
          </Link>
        )}
      </div>

      {reading && (
        <div className="mb-4">
          <Link
            href={reading}
            className="inline-flex items-center space-x-2 text-green-400 hover:text-green-500"
          >
            <BookOpen size={20} />
            <span className="text-sm font-medium">Read article</span>
          </Link>
        </div>
      )}

      <div className="flex flex-col gap-3 items-start mb-3">
        <h3 className="text-xl md:text-2xl font-semibold  text-zinc-700">
          {title}
        </h3>
        {isMobile && (
          <div className="flex items-center justify-center gap-2 bg-green-200 p-2 rounded-md shadow-sm hover:bg-green-300 hover:cursor-pointer">
            {website && (
              <Link
                href={website}
                className=" text-green-400   rounded-md shadow-sm"
              >
                <Globe className="size-5" />
              </Link>
            )}
            {github && (
              <Link href={github} className=" text-green-400 ">
                <Github size={20} />
              </Link>
            )}
          </div>
        )}
      </div>

      <p className="text-sm md:text-base mb-8 text-zinc-500">{description}</p>

      <div className="flex items-center flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="text-sm bg-green-50 text-green-400 rounded-md px-3 py-1 font-normal shadow-sm"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
