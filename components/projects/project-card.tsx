import Link from "next/link";
import {ProjectCardProps} from "@/types";
import {Github, Globe, ImageIcon} from "lucide-react";

export default function ProjectCard({
  title,
  description,
  github,
  website,
  pictures,
  tools,
}: ProjectCardProps) {
  return (
    <div className="relative card p-6 border rounded-lg shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white">
      <div className="absolute top-4 right-4 flex space-x-3">
        {website && (
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200"
          >
            <Globe size={20} />
          </Link>
        )}
        {github && (
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200"
          >
            <Github size={20} />
          </Link>
        )}
      </div>

      {pictures && (
        <div className="mb-4">
          <Link
            href={pictures}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-white hover:text-gray-200"
          >
            <ImageIcon size={20} />
            <span className="text-sm font-medium">View Pictures</span>
          </Link>
        </div>
      )}

      <h3 className="text-2xl font-semibold mb-3">{title}</h3>

      <p className="text-sm md:text-base mb-5">{description}</p>

      <div className="flex items-center flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="text-sm bg-white text-purple-700 rounded-full px-3 py-1 font-medium shadow-md"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
