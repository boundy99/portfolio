import Heading from "../heading";
import ProjectCard from "./project-card";
import {projects} from "../../items";
import {ProjectCardProps} from "@/types";

export default function Projects() {
  return (
    <section>
      <Heading text="Projects" />
      <div className="flex flex-col gap-6">
        {projects.map((project: ProjectCardProps, index: number) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
