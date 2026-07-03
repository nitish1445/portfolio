import projects from "../assets/data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <div className="lg:text-center">
          <p className="text-accent-light font-medium mb-2">Portfolio</p>
          <h1 className="font-display text-4xl font-bold text-white mb-4">
            Projects I've Built
          </h1>
          <p className="text-muted text-lg leading-[1.15] mb-12">
            A collection of things I've built and contributed, from full-stack
            applications to small experiments with new ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
          <div className="text-center text-muted text-xs">A few more projects comming soon...</div>
      </section>
    </>
  );
}

export default Projects;
