import { AiFillThunderbolt } from "react-icons/ai";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaJava,
  FaLaptopCode,
  FaDatabase,
  FaLock,
  FaPlug,
  FaClock,
  FaLightbulb,
  FaComments,
  FaUsers,
  FaUserFriends,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiVercel } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "C Language", icon: FaLaptopCode },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaJs },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "RESTful APIs", icon: FaLaptopCode },
      { name: "JWT Authentication", icon: FaLock },
      { name: "WebSocket", icon: FaPlug },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Responsive Web Design", icon: FaLaptopCode },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: FaDatabase },
    ],
  },
  {
    category: "Libraries & Tools",
    items: [
      { name: "Mongoose", icon: FaDatabase },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Eclipse IDE", icon: FaLaptopCode },
      { name: "Vercel", icon: SiVercel },
      { name: "Thunder Client", icon: AiFillThunderbolt },
    ],
  },
  {
    category: "Core Concepts",
    items: [
      { name: "OOPs", icon: FaLaptopCode },
      { name: "DBMS", icon: FaDatabase },
      { name: "Computer Network", icon: FaLaptopCode },
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
