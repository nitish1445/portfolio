import { HiOutlineDownload } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import nitishResume from "../assets/pdf/Nitish_Resume.pdf";

const stats = [
  { label: "Years of Experience", value: "1+" },
  { label: "Projects Completed", value: "5+" },
  { label: "DSA Problems", value: "100+" },
  { label: "Certifications", value: "4" },
];

const education = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    school: "IES College of Technology, Bhopal",
    year: "2023 - 2027",
    marks: "CGPA : 7.3/10",
  },
  {
    degree: "Higher Secondary Education",
    school: "Holy Mission Sr. Sec. School, Muzaffarpur",
    year: "2020 - 2022",
    marks: "Mark : 67%",
  },
  {
    degree: "Higher Education",
    school: "St. John's Academy, Bihar",
    year: "2019 - 2020",
    marks: "Mark : 81%",
  },
];

const interests = [
  "Solving DSA Problems",
  "Building Full-Stack Applications",
  "Exploring New Technologies",
  "UI/UX Design",
  "System Design",
  "Cloud Computing",
  "Following National Politics",
  "Playing Cricket",
];

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="lg:text-center">
        <p className="text-accent-light font-medium mb-2">About Me</p>
        <h1 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
          A little about who I am
        </h1>
        <p className="text-muted text-lg leading-[1.15] lg:leading-relaxed mb-10">
          I'm a full stack developer who enjoys turning complex problems into
          simple, elegant products. I care deeply about clean code, thoughtful
          design, and building things that people genuinely enjoy using.
        </p>

        <a
          href={nitishResume}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-brand text-white font-medium px-6 py-3 rounded-full hover:shadow-glow transition-all duration-300 mb-16"
        >
          <HiOutlineDownload /> Download Resume
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-surface border border-border rounded-2xl p-6 text-center hover:border-accent/50 transition-all duration-300"
          >
            <p className="font-display text-3xl font-bold text-transparent bg-clip-text bg-gradient-brand mb-1">
              {stat.value}
            </p>
            <p className="text-muted text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-2xl font-semibold text-white mb-6">
            Education
          </h2>
          <div className="flex flex-col gap-6">
            {education.map((edu) => (
              <div key={edu.degree} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-light border border-border flex items-center justify-center text-accent-light flex-shrink-0">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="text-white font-medium">{edu.degree}</h3>
                  <p className="text-muted text-sm">{edu.school}</p>
                  <p className="text-xs text-muted mt-1">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-white mb-6">
            Interests & Hobbies
          </h2>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="text-sm font-medium px-4 py-2 rounded-full bg-surface border border-border text-muted hover:border-accent hover:text-accent-light transition-all duration-200"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
