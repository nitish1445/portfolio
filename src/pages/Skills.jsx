import skills from "../assets/data/skills";

const Skills = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="lg:text-center">
        <p className="text-accent-light font-medium mb-2">What I Know</p>
        <h1 className="font-display text-4xl font-bold text-white mb-4">
          Skills & Technologies
        </h1>
        <p className="text-muted leading-[1.15] text-lg mb-12">
          Tools and technologies I use to bring ideas to life, from the frontend
          to the backend.
        </p>
      </div>

      <div className="flex flex-col gap-14">
        {skills.map((group) => (
          <div key={group.category}>
            <h2 className="font-display text-xl font-semibold text-white mb-6">
              {group.category}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {group.items.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
                  >
                    {Icon && <Icon className="text-[17px] lg:text-xl text-accent-light" />}

                    <span className="text-xs lg:text-sm font-medium text-white">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
