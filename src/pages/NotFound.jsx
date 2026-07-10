import { BiArrowBack, BiSearch } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="max-w-xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
          <BiSearch className="text-3xl text-accent-light" />
        </div>

        <span className="mb-3 inline-block rounded-full border border-accent/20 bg-accent/10 px-6 py-1 text-sm font-medium text-accent-light">
          Error 404
        </span>

        <h1 className="font-display text-5xl font-bold text-white">
          Page Not Found
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-muted">
          The page you're looking for doesn't exist, may have been moved,
          renamed, or the URL might be incorrect.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_3px_5px_rgba(245,158,11,0.18)]"
          >
            <GoHomeFill size={20} />
            <span className="text-[15px] font-medium text-white">
              Back to Home
            </span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-3 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-white/10 hover:text-accent"
          >
            <BiArrowBack size={20} />
            <span className="text-[15px] font-medium text-text">Go Back</span>
          </button>
        </div>
        <div className="mt-6 border-white/10 pt-6 text-sm text-muted">
          Lost? <div>Explore my projects & about me from the homepage.</div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
