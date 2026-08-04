import { motion } from "framer-motion";
import { HiOutlineDownload } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import SectionTitle from "../components/SectionTitle";
import nitishResume from "../assets/pdf/Nitish_Resume.pdf";
import Footer from "../components/Footer";

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const About = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 lg:py-20">
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
              download="Nitish_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-coral via-violet to-sky text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              <HiOutlineDownload /> Download Resume
            </a>
          </div>

          {/* RIGHT — floating tech + quick facts glass card */}
          <div className="space-y-10 hidden lg:block">
            <div className="flex items-start gap-3">
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

      <Footer />
    </>
  );
};

export default About;
