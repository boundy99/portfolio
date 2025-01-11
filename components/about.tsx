import Heading from "./heading";

export default function About() {
  return (
    <>
      <Heading text="About" />
      <div className="text-gray-700 text-base lg:text-lg">
        <p>
          I’m a passionate{" "}
          <span className="text-orange-500">Software Engineer</span> who loves
          programming and thrives on solving real-world challenges. With
          experience in both <span className="text-orange-500">frontend</span>{" "}
          and <span className="text-orange-500">backend</span> development, I’ve
          had the chance to build impactful applications and work with{" "}
          <span className="text-orange-500">databases</span> to create
          efficient, scalable solutions.
        </p>
        <p className=" mt-4">
          I hold a <span className="text-orange-500 ">Bachelor’s degree</span>{" "}
          in <span className="text-orange-500 ">Computer Science.</span>{" "}
          Throughout my career, I’ve enjoyed tackling complex problems and
          continuously learning new technologies to stay on the cutting edge.
        </p>
        <p className=" mt-4">
          From building seamless{" "}
          <span className="text-orange-500">user interfaces</span> with tools
          such as <span className="text-orange-500">React</span>,{" "}
          <span className="text-orange-500">Next.js</span> to handling complex
          backend systems with <span className="text-orange-500">Node.js</span>{" "}
          and
          <span className="text-orange-500"> Python</span> and managing{" "}
          <span className="text-orange-500">databases</span> like{" "}
          <span className="text-orange-500">SQL</span> and{" "}
          <span className="text-orange-500">MongoDB</span>, I’ve had the chance
          to contribute to a variety of projects that solve real-world problems.
          I’m passionate about making technology work for people and
          continuously growing as a developer.
        </p>

        <p className=" mt-4">
          Outside of coding, I have a strong passion for acquiring knowledge on
          a variety of topics. I enjoy exploring new ideas, reading about
          emerging trends, and diving deep into subjects that pique my
          curiosity. Whether it’s understanding new technologies or learning
          about different industries, I’m always eager to broaden my perspective
          and grow.
        </p>
      </div>
    </>
  );
}
