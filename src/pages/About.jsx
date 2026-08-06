import { useState, useEffect } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import SectionTitle from "../components/SectionTitle";
import nitishResume from "../assets/pdf/Nitish_Resume.pdf";
import Footer from "../components/Footer";
import profile from "../assets/photos/profile.png";
import hackNK from "../assets/photos/hackathonNk.jpeg";
import { FiArrowUpRight } from "react-icons/fi";

const stats = [
  { label: "Projects Built", value: "5+" },
  { label: "DSA Problems", value: "100+" },
  { label: "Certifications", value: "5+" },
  { label: "Graduating", value: "2027" },
];

const education = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    school: "IES College of Technology, Bhopal",
    year: "2023 - 2027",
    marks: "CGPA: 7.5 / 10",
  },
  {
    degree: "Higher Secondary Education",
    school: "Holy Mission Sr. Sec. School, Muzaffarpur",
    year: "2020 - 2022",
    marks: "67%",
  },
  {
    degree: "Higher Education",
    school: "St. John's Academy, Bihar",
    year: "2019 -2020",
    marks: "81%",
  },
];

const interests = [
  "Solving DSA Problems",
  "Building Full-Stack Apps",
  "Exploring New Tech",
  "UI/UX Design",
  "System Design",
  "Cloud Computing",
  "National Politics",
  "Playing Cricket",
];

const About = () => {
  const galleryImages = [
    { src: profile, caption: "Meet the Developer" },
    { src: hackNK, caption: "Hackathon Journey" },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [galleryImages.length]);

  return (
    <>
      {/* Main Section */}

      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* LEFT — editorial intro */}
          <div>
            <span className="eyebrow text-sky mb-4 flex items-center gap-2">
              About Me
            </span>

            <h1 className="font-display text-3xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
              Turning complex problems into simple, elegant products.
            </h1>

            <p className="text-white/55 text-base lg:text-lg mb-6">
              I'm a full stack developer who cares deeply about clean code,
              thoughtful design, and building things people genuinely enjoy
              using. Currently sharpening both my engineering craft and my
              problem-solving instincts, one project and one hackathon at a
              time.
            </p>
            <a
              href={nitishResume}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-coral px-6 py-3 font-display text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_-8px_rgba(255,111,97,0.6)]"
            >
              View Resume{" "}
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* RIGHT — floating tech + quick facts glass card */}
          <div className="space-y-10">
            <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-2 justify-center lg:justify-start">
              <span className="text-coral text-2xl leading-none">❝</span>

              <blockquote className="font-display lg:text-xl font-semibold text-white italic">
                Every project is an opportunity to transform an idea into an
                experience people genuinely enjoy using.
              </blockquote>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-4 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-coral font-semibold mb-2">
                  Problem Solver
                </h3>
                <p className="text-white/60 text-sm ">
                  Breaking complex challenges into scalable and elegant
                  solutions.
                </p>
              </div>

              <div className="glass rounded-2xl p-4 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-sky font-semibold mb-2">Clean Code</h3>
                <p className="text-white/60 text-sm">
                  Writing maintainable, reusable, and performance-focused
                  applications.
                </p>
              </div>

              <div className="glass rounded-2xl p-4 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-violet font-semibold mb-2">
                  Continuous Learner
                </h3>
                <p className="text-white/60 text-sm">
                  Constantly exploring AI, modern web technologies, and system
                  design.
                </p>
              </div>

              <div className="glass rounded-2xl p-4 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-moss font-semibold mb-2">User First</h3>
                <p className="text-white/60 text-sm">
                  Creating intuitive digital experiences that solve real-world
                  problems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-24">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
            >
              <p className="font-display text-3xl font-bold text-gradient-brand mb-1">
                {stat.value}
              </p>
              <p className="text-white/45 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* EDUCATION + INTERESTS */}
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-2xl font-semibold text-white mb-8">
              Education
            </h2>
            <div className="relative flex flex-col gap-8 border-l border-white/10 pl-8">
              {education.map((edu, i) => (
                <div key={edu.degree} className="relative">
                  <span className="absolute -left-[38px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-coral via-violet to-sky text-white text-xs">
                    <FaGraduationCap />
                  </span>
                  <h3 className="text-white font-medium">{edu.degree}</h3>
                  <p className="text-white/45 text-sm">{edu.school}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-xs text-white/35">{edu.year}</p>
                    <span className="text-xs text-blush font-medium">
                      {edu.marks}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-white mb-8">
              Interests & Hobbies
            </h2>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, i) => (
                <span
                  key={interest}
                  className="text-sm font-medium px-4 py-2 rounded-full glass text-white/60 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photos Gallery */}

      <section className="max-w-5xl mx-auto px-5 sm:px-6 py-12 lg:pb-16">
        {/* Section Header */}

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-coral">
            Gallery
          </span>

          <h2 className="mt-5 text-2xl font-bold tracking-tight text-white md:text-4xl">
            Moments Behind
            <span className="bg-gradient-to-r from-coral via-violet to-sky bg-clip-text text-transparent">
              {" "}
              The Work
            </span>
          </h2>
        </div>

        {/* Desktop — two editorial photographs */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {galleryImages.map((img) => (
            <figure
              key={img.caption}
              className="group relative overflow-hidden rounded-[32px] aspect-square"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/0 to-transparent" />
              <figcaption className="absolute bottom-5 left-5 text-blush tracking-[0.12em] font-display text-base font-semibold uppercase">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Mobile — auto-sliding single image */}
        <div className="md:hidden relative overflow-hidden rounded-[16px] aspect-[3/4]">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {galleryImages.map((img) => (
              <div
                key={img.caption}
                className="relative h-full w-full shrink-0"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/0 to-transparent" />
                <figcaption className="absolute bottom-5 left-5 text-blush tracking-[0.12 em] font-display text-base font-semibold uppercase">
                  {img.caption}
                </figcaption>
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 right-5 flex gap-1.5">
            {galleryImages.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeSlide ? "w-5 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
