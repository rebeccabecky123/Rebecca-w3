import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-400 via-indigo-400 to-blue-500 dark:from-indigo-800 dark:via-purple-900 dark:to-gray-900 opacity-90"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/30 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="text-center">
          <div className="inline-block animate-fadeInDown">
            <p className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/20 shadow-lg">
              Frontend Developer
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-3xl font-bold text-white/90 animate-fadeInUp">Hi, I'm</h3>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight animate-fadeInUp delay-200">
              Rebecca  Byamungu
            </h2>
            <p className="text-xl sm:text-2xl font-light text-white/80 animate-fadeInUp delay-300">
              Frontend Developer | UI/UX Enthusiast
            </p>
          </div>

          <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-white/70 leading-relaxed font-light animate-fadeInUp delay-400">
            Crafting exceptional digital experiences through clean code and innovative design solutions. Specializing in React, Next.js, and modern web technologies.
          </p>

          <div className="mt-10 animate-fadeInUp delay-500">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-indigo-600 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
            >
              Let's Collaborate
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        
        <div className="mt-16 animate-fadeInUp delay-600">
          <div className="relative">
            <div className="absolute -inset-4 bg-white/20 rounded-full blur-md"></div>
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <img
                src="/b1.jpg"
                alt="Rebecca"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80 hover:text-white transition-colors animate-bounce"
        >
          <span className="text-sm font-medium mb-2">Explore More</span>
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
