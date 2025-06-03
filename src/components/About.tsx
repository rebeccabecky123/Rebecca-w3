import { useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
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
      id="about" 
      ref={sectionRef}
      className="py-24 sm:py-32 opacity-0 translate-y-8 transition duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm Rebecca, a passionate frontend developer with a keen eye for creating elegant, user-friendly web applications. I specialize in React, Next.js, TypeScript, and Vite.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My approach to development focuses on creating responsive, accessible, and performant user interfaces that provide exceptional user experiences.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm constantly learning and exploring new technologies to stay at the forefront of web development trends and best practices.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                My Development Philosophy
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Clean, maintainable code architecture",
                  "User-centered design thinking",
                  "Performance optimization",
                  "Accessibility as a priority",
                  "Continuous learning and improvement"
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-3 mt-1 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-full transform group-hover:scale-110 transition-transform">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;