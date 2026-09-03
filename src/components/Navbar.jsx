import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";
import {
  HiHome,
  HiUser,
  HiRectangleStack,
  HiBriefcase,
  HiTrophy,
  HiAcademicCap,
} from "react-icons/hi2";
import { FaLaptopCode } from "react-icons/fa";

export const navLinks = [
  {
    name: "Home",
    path: "/",
    icon: HiHome,
  },
  {
    name: "About",
    path: "/about",
    icon: HiUser,
  },
  {
    name: "Skills",
    path: "/skills",
    icon: FaLaptopCode,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: HiRectangleStack,
  },
  {
    name: "Experience",
    path: "/experience",
    icon: HiBriefcase,
  },
  {
    name: "Hackathons",
    path: "/hackathons",
    icon: HiTrophy,
  },
  {
    name: "Certificates",
    path: "/certificates",
    icon: HiAcademicCap,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        {/* Desktop Nav */}
        <nav
          className={`mx-auto max-w-6xl flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-glass" : "glass"
          }`}
        >
          <NavLink to="/" className="flex items-center gap-2 shrink-0 group">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-coral via-violet to-sky font-display text-sm font-bold text-white">
              NK
            </span>

            <div className="hidden sm:block">
              <h1 className="font-display text-sm font-semibold text-white tracking-tight">
                Nitish Kumar
              </h1>

              <p className="text-[8px] uppercase tracking-[0.2em] text-sky">
                MERN Developer
              </p>
            </div>
          </NavLink>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 ${
                      isActive
                        ? "text-coral/90"
                        : "text-white/55 hover:text-blush/90"
                    }`
                  }
                >
                  <span className="relative z-10">{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white text-2xl p-1"
            aria-label="Open menu"
          >
            <HiBars3 />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* Mobile Right Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-screen w-[75%] glass-strong px-6 py-6 lg:hidden transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between mb-10">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-coral via-violet to-sky font-display text-sm font-bold text-white">
              NK
            </span>

            <div>
              <h1 className="font-display text-sm font-semibold text-white">
                Nitish Kumar
              </h1>

              <p className="text-[8px] uppercase tracking-[0.2em] text-sky">
                MERN Developer
              </p>
            </div>
          </NavLink>

          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl p-1"
            aria-label="Close menu"
          >
            <HiXMark />
          </button>
        </div>

        {/* Mobile Links */}
        <nav>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-3 py-3 text-[16px] transition-all duration-300 ${
                        isActive
                          ? "bg-white/10 text-coral"
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                    {Icon && <Icon className="text-lg" />}

                    <span>{link.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;