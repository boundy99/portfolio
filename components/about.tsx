import Heading from "./heading";

export default function About() {
  return (
    <section className="mb-10 px-4 md:px-0 mt-10 md:mt-0">
      <Heading text="About" />
      <div className="text-zinc-500 text-base text-center md:text-left">
        <p>
          I’m a passionate <strong>Software Engineer</strong> who loves
          programming and thrives on solving real-world challenges. With
          experience in both <strong>frontend</strong> and{" "}
          <strong>backend</strong> development, I’ve had the chance to build
          impactful applications and work with <strong>databases</strong> to
          create efficient, scalable solutions.
        </p>
        <p className=" mt-4">
          I hold a <strong>Bachelor’s degree</strong> in{" "}
          <strong>Computer Science.</strong> Throughout my career, I’ve enjoyed
          tackling complex problems and continuously learning new technologies
          to stay on the cutting edge.
        </p>
        <p className=" mt-4">
          From building seamless <strong>user interfaces</strong> with tools
          such as <strong>React</strong>, <strong>Next.js</strong> to handling
          complex backend systems with <strong>Node.js</strong> and
          <strong> Python</strong> and managing <strong>databases</strong> like{" "}
          <strong>SQL</strong> and <strong>MongoDB</strong>, I’ve had the chance
          to contribute to a variety of projects that solve real-world problems.
          I’m passionate about making technology work for people and
          continuously growing as a developer.
        </p>

        <p className="mt-4">
          Outside of coding, I have a strong passion for acquiring knowledge on
          a variety of topics. I enjoy exploring new ideas, reading about
          emerging trends, and diving deep into subjects that pique my
          curiosity. Whether it’s understanding new technologies or learning
          about different industries, I’m always eager to broaden my perspective
          and grow.
        </p>
      </div>
    </section>
  );
}
