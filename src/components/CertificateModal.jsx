import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const CertificateModal = ({ certificate, onClose }) => {
  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-md flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong rounded-2xl max-w-2xl w-full overflow-hidden"
          >
            <div className="relative">
              <img
                src={certificate.photo}
                alt={certificate.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 glass-strong text-white p-2.5 rounded-full hover:bg-white/20 transition-colors duration-200"
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-white mb-1">
                {certificate.title}
              </h3>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm text-white/50">{certificate.issuer}</p>
                <span className="rounded-full glass px-3 py-1 text-xs font-medium text-blush">
                  {certificate.category}
                </span>
              </div>
              <p className="text-xs text-white/35 mt-1">{certificate.date}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;
