import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiArduino, SiCplusplus, SiJavascript, SiAndroid } from 'react-icons/si';

export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 85, icon: FaReact },
      { name: 'HTML5', level: 90, icon: FaHtml5 },
      { name: 'CSS3 / Tailwind', level: 88, icon: SiTailwindcss },
      { name: 'JavaScript', level: 85, icon: SiJavascript },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', level: 75, icon: FaNodeJs },
      { name: 'MongoDB', level: 70, icon: SiMongodb },
      { name: 'Python', level: 78, icon: FaPython },
    ],
  },
  {
    title: 'IoT, Mobile & Tools',
    skills: [
      { name: 'Arduino / IoT', level: 72, icon: SiArduino },
      { name: 'Android', level: 68, icon: SiAndroid },
      { name: 'C / C++', level: 75, icon: SiCplusplus },
      { name: 'Git & GitHub', level: 85, icon: FaGitAlt },
    ],
  },
];
