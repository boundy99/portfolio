import Navbar from "./navbar";

export default function Header() {
  return (
    <div className="flex flex-col w-full">
      <p className="text-purple-500 text-3xl lg:text-4xl font-semibold mb-2 whitespace-nowrap">
        Abdoulaye Djikine
      </p>
      <p className="text-purple-500 font-semibold text-lg lg:text-xl mb-2">
        Software Engineer
      </p>
      <p className=" text-gray-700 text-sm md:w-72 lg:text-base mb-4">
        I design sleek, intuitive web experiences that just work
      </p>

      <div className="hidden md:block">
        <Navbar />
      </div>
    </div>
  );
}
