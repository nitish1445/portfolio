import projects from "../assets/data/projects";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

const Projects = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pt-16 lg:pt-20 pb-8">
        <SectionTitle
          eyebrow="Portfolio"
          title="Projects I've Built"
          description="A collection of things I've built and contributed to, from full-stack applications to small experiments with new ideas."
        />

        <div className="flex flex-col gap-16 lg:gap-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-6 text-center">
        <p className="text-white/35 text-sm">
          A few more projects coming soon...
        </p>
      </section>

      <Footer />
    </>
  );
};

export default Projects;
