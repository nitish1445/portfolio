import react from "react";
import { Link } from "react-router-dom";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import { FaGithub, FaRegEnvelope, FaLinkedinIn } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import profile from "../assets/photos/profile.png";
import resume from "../assets/pdf/Nitish_Resume.pdf";
import Footer from "../components/Footer";

const PROFILE = {
  name: "Nitish Kumar",
  title: "MERN Stack Developer",
  intro:
    "I build fast, accessible web products end to end - from clean React interfaces to solid Node APIs. Currently exploring problems worth solving.",
  photo: profile,
  resumeHref: resume,
  socials: [
    { icon: <FaGithub />, link: "https://github.com/nitish1445" },
    { icon: <FaCode />, link: "https://leetcode.com/u/nitish1445/" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/nitish1445/" },
    { icon: <FaRegEnvelope />, link: "mailto:sarainitish@gmail.com" },
  ],
};

const HIGHLIGHTS = [
  {
    label: "MERN Stack Developer",
    accent: "text-coral",
    ring: "hover:ring-coral/40",
  },
  {
    label: "Hackathon Finalist",

    accent: "text-moss",
    ring: "hover:ring-moss/40",
  },
  {
    label: "100+ DSA Problems Solved",
    accent: "text-violet",
    ring: "hover:ring-violet/40",
  },
  {
    label: "Continuous Learner",
    accent: "text-blush",
    ring: "hover:ring-blush/40",
  },
];

const TECH_BADGES = [
  {
    icon: SiReact,
    color: "text-sky",
    position: "left-0 top-10",
    animation: "animate-float",
  },
  {
    icon: SiNodedotjs,
    color: "text-moss",
    position: "right-0 top-16",
    animation: "animate-float-delayed",
  },
  {
    icon: SiMongodb,
    color: "text-moss",
    position: "bottom-12 left-[-6px]",
    animation: "animate-float-delayed",
  },
  {
    icon: SiExpress,
    color: "text-sky",
    position: "bottom-2 right-6",
    animation: "animate-float",
  },
];

const Home = () => {
  return (
    <div className="relative overflow-hidden text-white font-sans">
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 pt-12 lg:pt-0">
        <Hero />
        <Quoets />
        <Highlights />
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

// Hero Section
const Hero = () => {
  return (
    <section className="grid min-h-[92vh] grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
      {/* Left: copy */}

      <div className="order-2 lg:order-1">
        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-blush/70">
          Hello, I'm
        </p>

        <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {PROFILE.name}
        </h1>

        <p className="mt-3 font-display text-xl font-semibold text-sky/80 sm:text-2xl">
          {PROFILE.title}
        </p>

        <p className="mt-4 max-w-lg text-base lg:leading-relaxed text-white/55 sm:text-lg">
          {PROFILE.intro}
        </p>

        {/* availability badge */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-moss/30 bg-moss/10 px-4 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss" />
          </span>
          <span className="text-sm font-medium text-moss">
            Available for opportunities
          </span>
        </div>

        {/* primary actions */}
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={PROFILE.resumeHref}
            download
            className="group inline-flex items-center gap-2 rounded-xl bg-coral px-6 py-3 font-display text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_14px_-8px_rgba(255,111,97,0.6)]"
          >
            <FiDownload className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            Resume
          </a>
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 font-display text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.06]"
          >
            About Me
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* socials */}
        <div className="mt-9 flex justify-start gap-3 ">
          {PROFILE.socials.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-coral/40 hover:text-coral"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right: portrait composition */}
      <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
        <div className="relative h-[340px] w-[340px] sm:h-[400px] sm:w-[400px]">
          {/* soft gradient backdrop */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-coral/25 via-violet/20 to-transparent blur-2xl" />

          {/* slow-rotating dashed ring — minimal geometric decoration */}
          <div className="absolute -inset-1 rounded-full border border-dashed border-white/10 animate-spin-slow" />

          {/* photo */}
          <div className="glass absolute inset-4 overflow-hidden rounded-full">
            <img
              src={PROFILE.photo}
              alt={PROFILE.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* floating glass tech badges */}

          {TECH_BADGES.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className={`glass absolute flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg shadow-black/30 ${badge.position} ${badge.animation}`}
              >
                <Icon className={`h-6 w-6 ${badge.color}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

//Quoets
const Quoets = () => {
  return (
    <div className="px-4 py-12 text-center max-w-3xl mx-auto">
      <span
        aria-hidden="true"
        className="block text-center font-serif text-4xl md:text-6xl font-bold leading-none bg-gradient-to-b from-coral via-coral/60 to-transparent bg-clip-text text-transparent select-none"
      >
       ❝
      </span>

      <blockquote className="mt-1 mx-auto font-display text-lg lg:text-[22px] font-medium italic text-sky/80 leading-5 lg:leading-none">
        Great software is created through curiosity, consistency, and a
        commitment to solving meaningful problems.
      </blockquote>
    </div>
  );
};

// Highlights
const Highlights = () => {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map(({ label, accent, ring }) => (
          <div
            key={label}
            className={`group rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center ring-1 ring-transparent transition-all duration-300 hover:-translate-y-0.5 ${ring}`}
          >
            <p className={`font-display text-sm font-semibold ${accent}`}>
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// CTA
const CTA = () => {
  return (
    <section className="py-12">
      <div className="relative overflow-hidden rounded-3xl text-center sm:px-16">
        <div className="relative">
          <h2 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
            Let's build something amazing together, starting today.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/55 leading-5 sm:text-base">
            Got a role, a project, or just an idea worth talking through? I'd
            love to hear it. Let's connect, collaborate, and create something.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 font-display text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30"
            >
              <span>View Projects</span>
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 rounded-xl bg-coral px-6 py-3 font-display text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_-8px_rgba(255,111,97,0.6)]"
            >
              <span>More About Me</span>
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
