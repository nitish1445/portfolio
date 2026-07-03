import { FaSearchPlus } from "react-icons/fa";

function CertificateCard({ certificate, onView }) {
  return (
    <div
      onClick={() => onView(certificate)}
      className="group cursor-pointer bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={certificate.photo}
          alt={certificate.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-base/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <FaSearchPlus className="text-white text-xl" />
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-base font-semibold text-white mb-1">
          {certificate.title}
        </h3>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm text-muted">{certificate.issuer}</p>
          <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
            {certificate.category}
          </span>
        </div>
        <p className="mt-1 text-xs text-muted">{certificate.date}</p>
      </div>
    </div>
  );
}

export default CertificateCard;
