import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import resume from "../assets/pdf/Nitish_Resume.pdf";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Hackathons", path: "/hackathons" },
  { name: "Certificates", path: "/certificates" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-base/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <NavLink
          to="/"
          className="font-display font-semibold text-lg text-white tracking-tight"
        >
          Nitish<span className="text-accent">.</span>
        </NavLink>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 relative py-1 ${
                    isActive ? "text-accent" : "text-muted hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block text-sm font-medium px-6 py-1.5 rounded-full bg-white/5 border border-border hover:border-accent/20 hover:text-accent-light transition-all duration-200"
        >
          Resume
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? "text-accent-light" : "text-muted hover:text-white"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-accent-light/80"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
