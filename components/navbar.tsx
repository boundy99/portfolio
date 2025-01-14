export default function Navbar() {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav>
      <ul className="text-base font-medium text-zinc-50 space-y-2">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="hover:text-red-500 transition transform hover:translate-x-4"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
