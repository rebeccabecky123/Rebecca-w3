
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiRedux
} from 'react-icons/si';

export const skillsData = [
  {
    name: 'HTML',
    level: 95,
    icon: <SiHtml5 size={32} color="#E34F26" />,
    description: 'Structures all content on a webpage.'
  },
  {
    name: 'CSS',
    level: 90,
    icon: <SiCss3 size={32} color="#264DE4" />,
    description: 'Styles your website beautifully.'
  },
  {
    name: 'JavaScript',
    level: 85,
    icon: <SiJavascript size={32} color="#F7DF1E" />,
    description: 'Adds interactivity and logic.'
  },
  {
    name: 'React',
    level: 90,
    icon: <SiReact size={32} color="#61DAFB" />,
    description: 'Builds fast, interactive UIs.'
  },
  {
    name: 'Next.js',
    level: 80,
    icon: <SiNextdotjs size={32} color="#000000" />,
    description: 'React framework with advanced features.'
  },
  {
    name: 'TypeScript',
    level: 75,
    icon: <SiTypescript size={32} color="#3178C6" />,
    description: 'JavaScript with type safety.'
  },
  {
    name: 'Tailwind CSS',
    level: 90,
    icon: <SiTailwindcss size={32} color="#38BDF8" />,
    description: 'Utility-first CSS framework.'
  },
  {
    name: 'Vite',
    level: 75,
    icon: <SiVite size={32} color="#646CFF" />,
    description: 'Lightning-fast frontend tool.'
  },
  {
    name: 'Redux',
    level: 75,
    icon: <SiRedux size={32} color="#764ABC" />,
    description: 'Predictable state management.'
  }
];

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {skillsData.map((skill) => (
        <div
          key={skill.name}
          className="bg-white rounded-2xl shadow-md p-4 flex items-center space-x-4 hover:shadow-lg transition duration-300"
        >
          <div className="shrink-0">{skill.icon}</div>
          <div>
            <h4 className="text-lg font-semibold">{skill.name}</h4>
            <p className="text-sm text-gray-500">{skill.description}</p>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: 'rgba(59, 130, 246, 0.7)' 
                }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Skill level: {skill.level}%</p>
          </div>
        </div>
      ))}
    </div>
  );
}
