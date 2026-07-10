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
  SiPython,
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
      // { name: "C Language", icon: FaLaptopCode },
    ],
  },
  {
    category: "Web & Backend",
    items: [
      { name: "React", icon: FaReact },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      // { name: "TypeScript", icon: SiTypescript },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      // { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  ,
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
      { name: "REST Architecture", icon: FaLaptopCode },
      { name: "DBMS", icon: FaDatabase },
      { name: "System Design", icon: FaLaptopCode },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Leadership Quality", icon: FaUsers },
      { name: "Communication", icon: FaComments },
      { name: "Problem Solving", icon: FaLightbulb },
      { name: "Team Collaboration", icon: FaUserFriends },
      { name: "Time Management", icon: FaClock },
    ],
  },
];

export default skills;
