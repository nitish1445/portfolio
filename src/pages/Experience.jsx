import React from "react";
import experiences from "../assets/data/experince";
import SectionTitle from "../components/SectionTitle";
import ExperienceCard from "../components/ExperienceCard";
import Footer from "../components/Footer";

const Experience = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto px-5 sm:px-6 py-10 ">
        <SectionTitle
          eyebrow="Professional Journey"
          title="Experience"
          description="My journey of learning, building, and continuously improving through real-world projects."
        />

        <ExperienceCard />
      </section>

      <Footer />
    </>
  );
};

export default Experience;
