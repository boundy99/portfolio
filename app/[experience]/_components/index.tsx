import { articles } from "@/articles";
import { Introduction } from "./introduction";
import { Objectives } from "./objectives";
import { Challenges } from "./challenges";
import { Visuals } from "./visuals";
import { FuturePlans } from "./future-plans";
import Heading from "@/components/heading";
import Image from "next/image";

export default function ExperienceDetail({
  experience,
}: {
  experience: string;
}) {
  const article = articles.find(
    (article) => article.name.toLowerCase() === experience
  );

  if (!article) return;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-14 px-10 lg:px-0">
      <p className="text-green-400 text-2xl sm:text-3xl font-semibold mb-2 whitespace-nowrap">
        {article.name}
      </p>

      <Image
        src="/omniscolaire/landing.jpg"
        alt="Omniscolaire Landing Image"
        width={800}
        height={500}
      />

      {article.content.map((section, index) => (
        <div key={index} className="w-full max-w-3xl py-4 space-y-5">
          <Heading text={section.title} />
          {section.title === "Introduction" && (
            <Introduction text={section.text} />
          )}
          {section.title === "Objectives" && <Objectives text={section.text} />}
          {section.title === "Challenges" && <Challenges text={section.text} />}
          {section.title === "Visuals" && (
            <Visuals text={section.text} images={section.images || []} />
          )}
          {section.title === "Future Plans" && (
            <FuturePlans text={section.text} />
          )}
        </div>
      ))}
    </div>
  );
}
