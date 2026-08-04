import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail, HiArrowUp } from "react-icons/hi";
import { Link } from "react-router-dom";

const socials = [
  {
    icon: <FaGithub />,
    link: "https://github.com/nitish1445",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/nitish1445/",
    label: "LinkedIn",
  },
  {
    icon: <FaXTwitter />,
    link: "https://x.com/nitish_yadvv",
    label: "Twitter",
  },
  {
    icon: <HiOutlineMail />,
    link: "mailto:sarainitish@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  return (
    <footer className="relative mt-12">
      {/* Border Top */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative h-px w-full overflow-hidden rounded-full bg-white/8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky/60 to-transparent" />
        </div>
      </div>

      {/* Details Footer */}

      <div className="flex flex-col lg:flex-row lg:items-end items-center justify-between gap-2 pt-2 pb-4 lg:px-28">
        <Link to={"/"} className="hidden lg:block text-center md:text-left">
          <h1 className="font-display text-sm font-semibold text-blush/80 tracking-tight">
            Nitish Kumar
          </h1>
          <p className="text-[8px] uppercase tracking-[0.2em] text-sky">
            MERN Developer
          </p>
        </Link>

        <p className="text-white/50 text-xs">
          © {new Date().getFullYear()} Nitish Kumar. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-sm text-blush/60 lg:text-base transition-all duration-300 hover:-translate-y-0.5 hover:text-coral"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
