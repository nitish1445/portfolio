import { FaTrophy, FaLink } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";

function HackathonCard({ hackathon }) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/50 md:flex-row">
      <div className="relative h-44 overflow-hidden rounded-xl md:w-64 flex-shrink-0">
        <img
          src={hackathon.image}
          alt={hackathon.title}
          className="h-full w-full object-cover"
        />

        <a
          href={hackathon.urlDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 backdrop-blur-md text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          <FaLink className="text-sm" />
        </a>
      </div>
      <div className="flex-1">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-white">
            {hackathon.title}
          </h3>

          <span className="text-xs text-slate-400">{hackathon.date}</span>
        </div>

        <div className="mb-3 flex flex-wrap items-baseline gap-2 text-sm lg:gap-4">
          <div className="flex items-center gap-2 font-medium text-emerald-200/60">
            <FaTrophy className="text-emerald-500" />
            {hackathon.result}
          </div>

          <div className="flex items-center gap-2 font-medium text-sky-200/60">
            <HiBuildingOffice2 className="text-sky-500" />
            {hackathon.organizer}
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted">
          {hackathon.description}
        </p>
      </div>
    </div>
  );
}

export default HackathonCard;
