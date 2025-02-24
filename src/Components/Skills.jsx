import React from "react";
import CIcon from '../assets/Images/Course_icon/C.png'
import PythonIcon from '../assets/Images/Course_icon/python.png';
import HtmlIcon from '../assets/Images/Course_icon/html.png';
import CssIcon from '../assets/Images/Course_icon/css.png';
import JavascriptIcon from '../assets/Images/Course_icon/JavaScript.png';
import BootstrapIcon from '../assets/Images/Course_icon/bootstrap.png';
import TailwindIcon from '../assets/Images/Course_icon/Tailwind.png';
import ReactIcon from '../assets/Images/Course_icon/React.png';
import UiuxIcon from '../assets/Images/Course_icon/ui.png';
import NodeIcon from '../assets/Images/Course_icon/NodeJS.png';
import ExpressIcon from '../assets/Images/Course_icon/ExpressJS.png';
import MongodbIcon from '../assets/Images/Course_icon/Mongodb.png';

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", img: CIcon },
      { name: "Python", img: PythonIcon },
    ],
  },
  {
    category: "Front-End Development",
    skills: [
      { name: "HTML5", img: HtmlIcon },
      { name: "CSS3", img: CssIcon },
      { name: "JavaScript", img: JavascriptIcon },
      { name: "Bootstrap", img: BootstrapIcon },
      { name: "Tailwind", img: TailwindIcon },
      { name: "React", img: ReactIcon },
      { name: "UI/UX", img: UiuxIcon },
    ],
  },
  {
    category: "Back-End Development",
    skills: [
      { name: "Node.js", img: NodeIcon},
      { name: "Express.js", img: ExpressIcon },
    ],
  },
  {
    category: "Database Management",
    skills: [
      { name: "MongoDB", img: MongodbIcon },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="bg-gray-900 text-white py-10 px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">My Skills</h1>
        <p className="text-gray-400">My Speciality</p>
      </div>

      {skillsData.map((section, index) => (
        <div key={index} className="mt-10">
          <h2 className="text-xl font-semibold text-center">{section.category}</h2>

          {section.category === "Front-End Development" ? (
            <div className="mt-6">
              <div className="flex justify-center gap-[200px] flex-wrap mb-14 max-md:gap-6">
                {section.skills.slice(0, 4).map((skill, idx) => (
                  <SkillCard key={idx} skill={skill} />
                ))}
              </div>
              <div className="flex justify-center gap-[200px] flex-wrap max-md:gap-6 mt-6">
                {section.skills.slice(4).map((skill, idx) => (
                  <SkillCard key={idx} skill={skill} />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-center gap-10 flex-wrap max-md:gap-6 mt-4">
              {section.skills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const SkillCard = ({ skill }) => {
  return (
    <div className="group relative w-16 h-16 bg-gray-800 rounded-xl p-2 shadow-md">
      <img
        src={skill.img}
        alt={skill.name}
        className="w-full h-full rounded-full transition-all duration-300 group-hover:scale-110 group-hover:blur-sm"
      />
      <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        {skill.name}
      </span>
    </div>
  );
};

export default Skills;
