import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGithub,
  FaRegEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import profile from "../assets/photos/profile.png";
import resume from "../assets/pdf/Nitish_Resume.pdf";

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pt-28 pb-4 lg:grid-cols-2">
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative">
            {/* Outer Ring */}
            <div className="absolute inset-0 scale-110 rounded-full border border-white/10"></div>

            {/* Glow */}
            <div className="absolute inset-0 scale-110 rounded-full bg-accent/20 blur-3xl"></div>

            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white/10 bg-card shadow-2xl sm:h-80 sm:w-80 lg:h-[430px] lg:w-[430px]">
              <img
                src={profile}
                alt="Nitish Kumar"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-card/90 px-4 py-2 text-xs text-center font-medium text-white backdrop-blur-lg lg:-bottom-6">
              🚀 Open to Opportunities
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent-light">
            Hello, I'm
          </p>

          <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Nitish Kumar
          </h1>

          <h2 className="mb-6 bg-gradient-brand bg-clip-text text-xl font-semibold text-transparent sm:text-2xl ">
            Full Stack Developer
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-base leading-[1.3] text-muted lg:mx-0 lg:text-lg">
            I build fast, scalable and beautiful web applications with React,
            Node.js and MongoDB. Passionate about creating clean user
            experiences and solving real-world problems through technology.
          </p>

          {/* Buttons */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/projects"
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3 lg:py-2 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              View Projects
              <FaArrowRight />
            </Link>

            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3 lg:py-2 font-medium text-white transition-all duration-300 hover:border-accent hover:text-accent-light"
            >
              <HiOutlineDownload />
              Resume
            </a>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-4 lg:justify-start">
            {[
              { icon: <FaGithub />, link: "https://github.com/nitish1445" },
              { icon: <FaCode />, link: "https://leetcode.com/u/nitish1445/" },
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/in/nitish1445/",
              },
              { icon: <FaRegEnvelope />, link: "mailto:sarainitish@gmail.com" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-white/10 bg-card text-[22px] text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-white"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
