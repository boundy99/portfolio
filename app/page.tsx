import About from "@/components/about";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row justify-center gap-x-12 w-full max-w-5xl px-4 py-14 md:py-0 ">
        <Header />
        <div className="flex flex-col gap-y-10 md:pt-24">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}
