import React from "react";
import Heading from "../heading";
import {experiences} from "@/items";
import ExperienceCard from "./experience-card";

export default function Experience() {
  return (
    <section>
      <Heading text="Experience" />
      <div className="flex flex-col gap-y-4">
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
