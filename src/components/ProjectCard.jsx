import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-glow transition-all duration-300">
      <div className="overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1 rounded-full bg-surface-light border border-border text-accent-light"
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
            className="flex items-center gap-2 text-sm font-medium text-muted hover:text-white transition-colors duration-200"
          >
            <FaGithub size={15} /> <span>Source Code</span>
          </a>
          {project.live !== null && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted hover:text-white transition-colors duration-200"
            >
              <FaExternalLinkAlt size={13} /> <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
