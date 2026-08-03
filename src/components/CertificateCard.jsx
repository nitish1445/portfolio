import { motion } from "framer-motion";
import { FaSearchPlus, FaCertificate } from "react-icons/fa";

const CertificateCard = ({ certificate, onView, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onClick={() => certificate.photo && onView(certificate)}
      className={`group ${certificate.photo ? "cursor-pointer" : ""} glass rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30`}
    >
      <div className="relative h-44 overflow-hidden">
        {certificate.photo ? (
          <>
            <img
              src={certificate.photo}
              alt={certificate.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <FaSearchPlus className="text-white text-xl" />
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-coral/20 via-violet/20 to-sky/20">
            <FaCertificate className="text-4xl text-white/30" />
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-display text-base font-semibold text-white mb-1">
          {certificate.title}
        </h3>
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="text-sm text-white/50">{certificate.issuer}</p>
          <span className="rounded-full glass px-3 py-1 text-xs font-medium text-blush whitespace-nowrap">
            {certificate.category}
          </span>
        </div>
        <p className="mt-1 text-xs text-white/35">{certificate.date}</p>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
