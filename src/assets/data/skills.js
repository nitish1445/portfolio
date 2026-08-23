import { AiFillThunderbolt } from "react-icons/ai";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaJs,
  FaJava,
  FaDocker,
  FaGithub,
  FaLaptopCode,
  FaDatabase,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaUserFriends,
  FaClock,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiRedux,
  SiTypescript,
  SiNextdotjs,
  SiPostman,
  SiEclipseide,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaJs },
      { name: "SQL", icon: FaDatabase },
      // { name: "C Language", icon: FaLaptopCode },
    ],
  },
  {
    category: "Web & Backend",
    items: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      // { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: FaDatabase },
    ],
  },
  {
    category: "IDE & Platforms",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Thunder Client", icon: AiFillThunderbolt },
      { name: "VSCode", icon: VscVscode },
      { name: "EclipseIDE", icon: SiEclipseide },
    ],
  },
  {
    category: "Core Concepts",
    items: [
      { name: "DSA", icon: FaLaptopCode },
      { name: "OOPs", icon: FaLaptopCode },
      { name: "DBMS", icon: FaDatabase },
      { name: "System Design", icon: FaLaptopCode },
      { name: "REST Architecture", icon: FaLaptopCode },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem Solving", icon: FaLightbulb },
      { name: "Communication", icon: FaComments },
      { name: "Leadership Quality", icon: FaUsers },
      { name: "Team Collaboration", icon: FaUserFriends },
      { name: "Time Management", icon: FaClock },
    ],
  },
];

export default skills;
