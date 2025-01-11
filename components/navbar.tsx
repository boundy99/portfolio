export default function Navbar() {
  const navItems = [
    {href: "#about", label: "About"},
    {href: "#experience", label: "Experience"},
    {href: "#projects", label: "Projects"},
  ];

  return (
    <nav>
      <ul className="text-lg font-semibold text-purple-500 space-y-2">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="relative hover:text-green-400 transition duration-300 transform hover:scale-105 active:text-green-700"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 transition-all duration-300 origin-left group-active:scale-x-100"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
