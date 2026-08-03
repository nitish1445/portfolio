import React from "react";
import { motion } from "framer-motion";
import experiences from "../assets/data/experince";
import { FaLink } from "react-icons/fa";

const ExperienceCard = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-6 sm:space-y-10">
      {experiences.map((exp, index) => (
        <motion.article
          key={exp.id}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="group relative glass rounded-2xl sm:rounded-[2rem] p-[1.5px]"
        >
          <div className="relative p-4 sm:p-6 lg:p-8">
            {/* Title */}
            <div className="relative flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-3 sm:gap-4">
              <div className="min-w-0">
                <span className="eyebrow text-coral text-xs sm:text-sm">
                  {exp.type}
                </span>

                <h2 className="mt-2 font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white break-words">
                  {exp.company}
                </h2>

                <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-white/60">
                  <span>{exp.title}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{exp.duration}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{exp.year}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:flex-wrap">
                <span className="rounded-full bg-green-500/15 px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-medium text-green-300 backdrop-blur whitespace-nowrap">
                  ● {exp.status}
                </span>

                {exp.live && (
                  <a
                    href={exp.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-coral/20 backdrop-blur-xl text-white transition hover:bg-coral/60"
                  >
                    <FaLink className="text-xs" />
                  </a>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="mt-5 sm:mt-7 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {/* Left - Description */}
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                  Overview
                </span>

                <p className="text-sm sm:text-base leading-6 text-white/60">
                  {exp.description}
                </p>

                {/* tech */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="glass rounded-full px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Desktop Button */}

                <div className="hidden lg:flex mt-8">
                  {exp.live && (
                    <a
                      href={exp.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-coral via-violet to-sky px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <FaLink />
                      Visit Website
                    </a>
                  )}
                </div>
              </div>

              {/* Right - Achievements */}

              <div>
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                  Key Highlights
                </span>

                <div className="space-y-2.5">
                  {exp.achievements.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-3.5 sm:px-4 py-2 sm:py-1.5 transition-all duration-300 hover:border-coral/20 hover:bg-white/10"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                      <p className="text-sm sm:text-base text-white/65">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile and Tab */}

            <div className=" lg:hidden mt-8 flex flex-wrap gap-4">
              {exp.live && (
                <a
                  href={exp.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-coral via-violet to-sky px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  <FaLink />
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default ExperienceCard;
