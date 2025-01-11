import About from "@/components/about";
import Header from "@/components/header";
import Projects from "@/components/projects";

export default function Portfolio() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row justify-center gap-x-12 w-full max-w-5xl h-full px-4">
        <Header />
        <div className="flex flex-col gap-y-2">
          <About />
          <Projects />
        </div>
      </div>
    </div>
  );
}
