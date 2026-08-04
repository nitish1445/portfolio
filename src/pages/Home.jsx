import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGithub,
  FaRegEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import profile from "../assets/photos/profile.png";
import resume from "../assets/pdf/Nitish_Resume.pdf";

const socials = [
  { icon: <FaGithub />, link: "https://github.com/nitish1445" },
  { icon: <FaCode />, link: "https://leetcode.com/u/nitish1445/" },
  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/nitish1445/" },
  { icon: <FaRegEnvelope />, link: "mailto:sarainitish@gmail.com" },
];

const roles = [
  "Full Stack Developer",
  "Specailized in MERN",
  "Team Collaborations",
  "Problem Solver",
];

const TypedRole = () => {
  const [roleIndex, setRoleIndex] = useState(
    () => Math.floor(Math.random() * roles.length),
  );
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isTypingComplete = text === currentRole;
    const isDeletionComplete = text === "";
    const delay = isDeleting ? 60 : 160;

    if (!isDeleting && isTypingComplete) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && isDeletionComplete) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return undefined;
    }

    const timeout = setTimeout(() => {
      setText((currentText) =>
        isDeleting
          ? currentText.slice(0, currentText.length - 1)
          : currentRole.slice(0, currentText.length + 1),
      );
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <h2 className="mb-4 min-h-[1.8rem] text-[17px] sm:text-[19px] font-semibold text-gradient-brand">
      {text}
      <span className="ml-1 inline-block text-blush/60">|</span>
    </h2>
  );
};

const Home = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center px-5">
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:gap-14 px-2 py-10 lg:grid-cols-2">
        {/* IMAGE */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative animate-float">
            <div className="relative">
              <div className="rounded-full bg-gradient-to-br from-coral via-violet to-sky p-[3px] shadow-2xl">
                <div className="h-64 w-64 sm:h-80 sm:w-80 lg:h-[380px] lg:w-[380px] rounded-full overflow-hidden bg-ink-900">
                  <img
                    src={profile}
                    alt="Nitish Kumar"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full glass-strong px-4 py-2 text-xs text-center font-medium text-white whitespace-nowrap">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-moss animate-pulse" />
              Open to Opportunities
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="eyebrow mb-3 inline-flex items-center gap-2 text-sky">
            Hello, I'm
          </p>

          <h1 className="mb-2.5 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white">
            Nitish Kumar
          </h1>

          <div>
            <TypedRole />
          </div>

          <p className="mx-auto mb-6 max-w-xl text-base leading-5 lg:leading-relaxed text-white/55 lg:mx-0 lg:text-lg">
            I build fast, scalable and beautiful web applications with React,
            Node.js, Express.js and MongoDB - turning complex problems into
            clean, elegant products people enjoy using.
          </p>

          <div className="flex justify-center gap-3 lg:justify-start">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full glass text-lg text-blush/80 transition-all duration-300 hover:-translate-y-1 hover:text-coral hover:border-coral/30"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* CTA — full-width, luxe stacked buttons on mobile, inline on larger screens */}
          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3.5 sm:gap-4 sm:justify-center lg:justify-start">
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-coral via-violet to-sky px-6 py-3.5 sm:py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow hover:shadow-violet active:scale-[0.98]"
            >
              <span>View Projects</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/about"
              className="group inline-flex items-center justify-center gap-3 rounded-full glass px-6 py-3.5 sm:py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 active:scale-[0.98]"
            >
              <span>More About Me</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
