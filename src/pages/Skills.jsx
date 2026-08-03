import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skills from "../assets/data/skills";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";

const categories = ["All", ...skills.map((g) => g.category)];

const Skills = () => {
  const [active, setActive] = useState("All");

  const groups =
    active === "All" ? skills : skills.filter((g) => g.category === active);

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 lg:py-20">
        <SectionTitle
          eyebrow="What I Know"
          title="Skills & Technologies"
          description="Tools and technologies I use to bring ideas to life, from the frontend to the backend."
        />

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "text-white"
                  : "text-white/50 glass hover:text-white hover:border-white/25"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="skill-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-coral via-violet to-sky"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-16"
          >
            {groups.map((group) => (
              <div key={group.category}>
                <h2 className="font-display text-xl font-semibold text-white mb-6">
                  {group.category}
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {group.items.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.04 }}
                        className="group flex items-center gap-3 rounded-xl glass p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30"
                      >
                        {Icon && (
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-lg text-sky transition-colors duration-300 group-hover:text-coral">
                            <Icon />
                          </span>
                        )}
                        <span className="text-xs lg:text-sm font-medium text-white">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <Footer />
    </>
  );
};

export default Skills;
