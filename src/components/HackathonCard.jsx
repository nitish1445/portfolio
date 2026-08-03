import { motion } from "framer-motion";
import { FaTrophy, FaLink } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";

const HackathonCard = ({ hackathon, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className="relative md:pl-14"
    >
      <span className="hidden absolute left-0 top-2 md:flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-coral via-violet to-sky text-white text-xs shadow-glow-violet">
        <FaTrophy />
      </span>

      <div className="flex flex-col gap-6 rounded-2xl glass p-4 lg:p-6 transition-all duration-300 hover:border-white/25 md:flex-row">
        <div className="relative h-44 overflow-hidden rounded-xl md:w-64 flex-shrink-0 border border-white/10">
          <img
            src={hackathon.image}
            alt={hackathon.title}
            className="h-full w-full object-cover"
          />
          <a
            href={hackathon.urlDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full glass-strong text-white hover:text-sky transition-all duration-300"
          >
            <FaLink className="text-sm" />
          </a>
        </div>
        <div className="flex-1">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-lg font-semibold text-white">
              {hackathon.title}
            </h3>
            <span className="text-xs text-white/40">{hackathon.date}</span>
          </div>

          <div className="mb-3 flex flex-wrap items-baseline gap-3 text-sm lg:gap-4">
            <div className="flex items-center gap-2 font-medium text-moss">
              <FaTrophy className="text-moss" />
              {hackathon.result}
            </div>
            <div className="flex items-center gap-2 font-medium text-sky">
              <HiBuildingOffice2 className="text-sky" />
              {hackathon.organizer}
            </div>
          </div>

          <p className="text-sm lg:leading-relaxed text-white/55">
            {hackathon.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HackathonCard;
