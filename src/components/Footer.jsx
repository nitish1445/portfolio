import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/photos/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="max-w-6xl mx-auto px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to={"/"} className="hidden lg:block">
          <img
            src={logo}
            alt=""
            className="h-7 w-7 object-cover cursor-pointer"
          />
        </Link>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Nitish Kumar. All rights reserved.
        </p>

        <div className="flex items-center gap-5 text-sm text-muted">
          <a
            href="https://github.com/nitish1445"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-light transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/nitish/1445"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-light transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/nitish_yadvv"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-light transition-colors duration-200"
          >
            <FaXTwitter />
          </a>
          <a
            href="mailto:sarainitish@gmail.com"
            className="hover:text-accent-light transition-colors duration-200"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
