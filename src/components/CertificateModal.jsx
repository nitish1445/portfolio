import { FaTimes } from "react-icons/fa";

function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-base/80 backdrop-blur-sm flex items-center justify-center p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-surface border border-border rounded-2xl max-w-2xl w-full overflow-hidden"
      >
        <div className="relative">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-72 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-base/70 text-white p-2 rounded-full hover:bg-accent transition-colors duration-200"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-6">
          <h3 className="font-display text-xl font-semibold text-white mb-1">
            {certificate.title}
          </h3>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm text-muted">{certificate.issuer}</p>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
              {certificate.category}
            </span>
          </div>
          <p className="text-xs text-muted mt-1">{certificate.date}</p>
        </div>
      </div>
    </div>
  );
}

export default CertificateModal;
