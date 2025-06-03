import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white py-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text">
              Rebecca Byamungu
            </h2>
            <p className="text-gray-400 mt-2">Frontend Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <p className="flex items-center text-gray-300 group">
              Made with 
              <Heart size={16} className="mx-2 text-red-500 group-hover:scale-125 transition-transform duration-300" />
              in Kigali
            </p>
            <p className="text-gray-400 text-sm">
              © {currentYear} Rebecca Byamungu. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-center text-gray-400 text-sm max-w-2xl">
              This portfolio was crafted with React, TypeScript, and Tailwind CSS, showcasing modern web development practices and responsive design principles.
            </p>
            <div className="flex space-x-6">
              {['React', 'TypeScript', 'Tailwind CSS', 'Vite'].map((tech) => (
                <span key={tech} className="text-sm text-gray-500">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;