import React from "react";
import Heading from "../heading";
import { experiences } from "@/items";
import ExperienceCard from "./experience-card";

export default function Experience() {
  return (
    <section className="mb-10 px-4 md:px-0">
      <Heading text="Experience" />
      <div className="flex flex-col gap-y-6">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.title}
            title={experience.title}
            company={experience.company}
            link={experience.link}
            duration={experience.duration}
            responsibilities={experience.responsibilities}
            tools={experience.tools}
          />
        ))}
      </div>
    </section>
  );
}
