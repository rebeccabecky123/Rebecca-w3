import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  centered?: boolean;
}

const SectionTitle = ({ children, centered = true }: SectionTitleProps) => {
  return (
    <div className={`relative ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-300 inline-block relative z-10 transition transform hover:scale-105 duration-300">
        {children}
      </h2>
      <div className="absolute bottom-0 left-0 w-full h-3 bg-blue-200/30 dark:bg-blue-900/30 -z-10 transform -rotate-1"></div>
    </div>
  );
};

export default SectionTitle;