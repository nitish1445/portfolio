import hackathons from "../assets/data/hackathons";
import Footer from "../components/Footer";
import HackathonCard from "../components/HackathonCard";
import SectionTitle from "../components/SectionTitle";

const Hackathons = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto px-5 sm:px-6 py-16 lg:py-20 ">
        <SectionTitle
          eyebrow="Achievements"
          title="Hackathons"
          description="A few of the hackathons I've participated in, and what I built along the way."
        />

        <div className="relative flex flex-col gap-8 before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
          {hackathons.map((hackathon, i) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Hackathons;
