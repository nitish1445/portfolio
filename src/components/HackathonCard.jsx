import { FaTrophy } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";

function HackathonCard({ hackathon }) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/50 md:flex-row">
      <div className="h-44 overflow-hidden rounded-xl md:w-64 flex-shrink-0">
        <img
          src={hackathon.image}
          alt={hackathon.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex-1">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-white">
            {hackathon.title}
          </h3>

          <span className="text-xs text-muted">
            {hackathon.date}
          </span>
        </div>

        <div className="mb-3 flex flex-wrap items-center gap-2 lg:gap-4 text-sm">
          <div className="flex items-center gap-2 text-green-300/80 font-medium">
            <FaTrophy />
            {hackathon.result}
          </div>

          <div className="flex items-center gap-2 text-orange-50">
            <HiBuildingOffice2 />
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