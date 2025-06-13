
import { Book, Utensils, ShoppingBag } from 'lucide-react';
import { JSX } from 'react';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  icon: JSX.Element;
  image: string;
  liveUrl: string;
  githubUrl: string;
};

export const projectsData: Project[] = [
  {
    title: 'Hair style',
    description: 'A fully responsive platform for managing books using Next.js and TypeScript.',
    technologies: ['HTML', 'TypeScript', 'Tailwind CSS'],
    icon: <Book size={48} className="text-white" />,
    image: '/b2.jpg',
    liveUrl: 'https://hair-2025.netlify.app/',
    githubUrl: 'https://github.com/rebeccabecky123/my-hair-style.git',
  },
  {
    title: 'Recipe viewer',
    description: 'Dynamic recipe viewer built with static site generation.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: <Utensils size={48} className="text-white" />,
    image: '/b4.jpg',
    liveUrl: 'https://magical-elf-86e1a9.netlify.app/',
    githubUrl: 'https://github.com/rebeccabecky123/recipe-viwe.git',
  },
  {
    title: 'Personal Journal',
    description: 'Interactive product showcase with image galleries.',
    technologies: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    icon: <ShoppingBag size={48} className="text-white" />,
    image: '/b3.jpg',
    liveUrl: 'https://journal-ap.netlify.app/',
    githubUrl: 'https://github.com/rebeccabecky123/journal-app.git',
  },
];
