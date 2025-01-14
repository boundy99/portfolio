import Heading from "./heading";

export default function About() {
  return (
    <section className="mb-10 px-4 md:px-0 mt-10 md:mt-0">
      <Heading text="About" />
      <div className="text-zinc-500 text-base text-center md:text-left">
        <p>
          I’m a passionate <strong>Software Engineer</strong> with experience in{" "}
          <strong>frontend</strong> and <strong>backend</strong> development,
          building scalable applications and managing <strong>databases</strong>
          .
        </p>
        <p className="mt-4">
          I hold a <strong>Bachelor’s degree in Computer Science</strong> and
          enjoy solving complex problems while staying updated with new
          technologies.
        </p>
        <p className="mt-4">
          Proficient in tools like <strong>React</strong>,{" "}
          <strong>Next.js</strong>, <strong>Java</strong>,{" "}
          <strong>Python</strong>, <strong>SQL</strong>, and{" "}
          <strong>MongoDB</strong>. I create impactful solutions with seamless{" "}
          <strong>user interfaces</strong> and efficient{" "}
          <strong>backend systems</strong>.
        </p>
        <p className="mt-4">
          Beyond coding, I love exploring new ideas, learning emerging trends,
          and broadening my perspective across various topics.
        </p>
      </div>
    </section>
  );
}
