import { motion } from "framer-motion";
import { BiArrowBack, BiSearch } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-12 px-6 min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl text-center"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-coral via-violet to-sky">
          <BiSearch className="text-3xl text-white" />
        </div>

        <span className="mb-4 inline-block rounded-full glass px-5 py-1.5 text-xs font-semibold text-blush eyebrow">
          Error 404
        </span>

        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
          Page Not Found
        </h1>

        <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/50">
          The page you're looking for doesn't exist, may have been moved,
          renamed, or the URL might be incorrect.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-coral via-violet to-sky px-7 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow hover:shadow-violet"
          >
            <GoHomeFill size={18} />
            <span className="text-[15px] font-semibold text-white">
              Back to Home
            </span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center gap-3 rounded-full glass px-7 py-3 transition-all duration-300 hover:border-white/30"
          >
            <BiArrowBack size={18} />
            <span className="text-[15px] font-medium text-white/70">
              Go Back
            </span>
          </button>
        </div>

        <p className="mt-8 text-sm text-white/35">
          Lost? Explore my projects & about me from the homepage.
        </p>
      </motion.div>
    </section>
  );
};

export default NotFound;
