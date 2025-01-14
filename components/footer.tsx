export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col justify-center items-center p-4 text-sm text-zinc-500">
      <p className="text-center">
        Built using Visual Studio Code. Crafted with{" "}
        <span className="font-semibold">Next.js</span> and{" "}
        <span className="font-semibold">Tailwind CSS</span>, deployed seamlessly
        via <span className="font-semibold">Vercel</span>.
      </p>
      <p className="text-center">
        All text displayed here is set in the{" "}
        <span className="font-semibold">Roboto</span> typeface.
      </p>
      <p className="text-center">© {currentYear} All rights reserved.</p>
    </footer>
  );
}
