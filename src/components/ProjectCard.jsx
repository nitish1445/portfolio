import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index = 0 }) => {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 items-center rounded-[2rem] p-3 lg:p-4 relative`}
    >
      {/* gradient border wrapper */}
      <div
        className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br from-coral/40 via-violet/40 to-sky/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}
      />
      <div className="absolute inset-[1.5px] rounded-[calc(2rem-1.5px)] bg-ink-900 -z-10" />

      <div className="relative w-full lg:w-3/5 overflow-hidden rounded-2xl h-56 sm:h-72 lg:h-80 border border-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      </div>

      <div className="w-full lg:w-2/5 px-2 lg:px-0">
        <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-3 leading-snug">
          {project.title}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1 rounded-full glass text-blush"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full glass text-white/70 hover:text-white hover:border-white/30 transition-all duration-300"
          >
            <FaGithub /> <span>Source</span>
          </a>
          {project.live !== null && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-gradient-to-r from-coral via-violet to-sky text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaExternalLinkAlt size={12} /> <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
