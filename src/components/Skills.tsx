import { useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            
            const cards = entry.target.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('opacity-100', 'translate-y-0', 'scale-100');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 sm:py-32 relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 opacity-0 transition duration-1000"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <SectionTitle>Skills</SectionTitle>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card opacity-0 translate-y-8 scale-95 transform transition-all duration-500 ease-out"
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 p-3 text-white shadow-lg group-hover:scale-110 transform transition duration-300">
                      {skill.icon}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {skill.name}
                    </h3>
                    
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transform origin-left scale-x-0 animate-[slideRight_1s_ease-out_forwards]"
                        style={{ 
                          animationDelay: `${index * 100}ms`,
                          transform: `scaleX(${skill.level / 100})`
                        }}
                      ></div>
                    </div>
                    
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;