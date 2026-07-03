import hackathons from "../assets/data/hackathons";
import HackathonCard from "../components/HackathonCard";

const Hackathons = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="lg:text-center">
        <p className="text-accent-light font-medium mb-2">Achievements</p>
        <h1 className="font-display text-4xl font-bold text-white mb-4">
          Hackathons
        </h1>
        <p className="text-muted text-lg mb-12">
          A few of the hackathons I've participated in, and what I built along
          the way.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {hackathons.map((hackathon) => (
          <HackathonCard key={hackathon.id} hackathon={hackathon} />
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
