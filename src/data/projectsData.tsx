import { Book, Utensils, ShoppingBag } from 'lucide-react';

export const projectsData = [
  {
    title: 'Book Management',
    description: 'A fully responsive platform for managing books using Next.js and TypeScript. Features include book categorization, search functionality, and user library management.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: <Book size={48} className="text-white" />
  },
  {
    title: 'Recipes App',
    description: 'Dynamic recipe viewer built with static site generation. Users can browse recipes, filter by ingredients, and save favorites. Includes detailed step-by-step instructions.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: <Utensils size={48} className="text-white" />
  },
  {
    title: 'Product Card',
    description: 'Interactive product showcase with responsive layout. Features include image galleries, product variations, and seamless checkout integration.',
    technologies: ['JavaScript', 'Tailwind CSS'],
    icon: <ShoppingBag size={48} className="text-white" />
  }
];