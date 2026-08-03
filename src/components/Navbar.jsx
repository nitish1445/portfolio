import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiBars3, HiXMark, HiArrowUpRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/pdf/Nitish_Resume.pdf";
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

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      {/* DeskTop Nav */}

      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-glass" : "glass"
        }`}
      >
        <NavLink to="/" className="flex items-center gap-2 shrink-0 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-coral via-violet to-sky font-display text-sm font-bold text-white">
            NK
          </span>
          <div className="hidden sm:block ">
            <h1 className="font-display text-sm font-semibold text-white tracking-tight">
              Nitish Kumar
            </h1>
            <p className="text-[8px] uppercase tracking-[0.25em] text-coral">
              MERN Developer
            </p>
          </div>
        </NavLink>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/55 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-coral via-violet to-sky text-white transition-transform duration-300 hover:scale-[1.04]"
        >
          Let's Connect <HiArrowUpRight />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-2xl p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiXMark /> : <HiBars3 />}
        </button>
      </nav>

      {/* Mobile Nav */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mx-auto max-w-5xl mt-3 glass-strong rounded-3xl px-6 py-6 flex flex-col gap-3"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink key={link.path} to={link.path}>
                  {({ isActive }) => (
                    <div
                      className={`group flex items-center gap-2 transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {Icon && (
                        <Icon
                          className={`h-[18px] w-[18px] transition-all duration-300 ${
                            isActive
                              ? "text-coral"
                              : "text-white/60 "
                          }`}
                        />
                      )}

                      <span
                        className={
                          isActive
                            ? "text-coral"
                            : "text-white/60 "
                        }
                      >
                        {link.name}
                      </span>
                    </div>
                  )}
                </NavLink>
              );
            })}

            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-full bg-gradient-to-r from-coral via-violet to-sky text-white"
            >
              Let's Connect <HiArrowUpRight />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
