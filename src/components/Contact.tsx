import { useEffect, useRef, useState } from 'react';
import SectionTitle from './SectionTitle';
import { Mail, Phone, Linkedin, Github, Facebook } from 'lucide-react';

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: 'rebeccabyamungu6@gmail.com',
    href: 'mailto:rebeccabyamungu6@gmail.com',
    icon: <Mail size={20} />
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+250 786 790 245',
    href: 'tel:+250786790245',
    icon: <Phone size={20} />
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'rebecca-byamungu',
    href: 'https://linkedin.com/in/rebecca-byamungu',
    icon: <Linkedin size={20} />
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'rebeccabecky123',
    href: 'https://github.com/rebeccabecky123',
    icon: <Github size={20} />
  },
  {
    id: 'facebook',
    label: 'Facebook',
    value: 'moi.rebecca.2025',
    href: 'https://facebook.com/moi.rebecca.2025',
    icon: <Facebook size={20} />
  }
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
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
      id="contact" 
      ref={sectionRef}
      className="py-24 sm:py-32 relative bg-gradient-to-b from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-0 translate-y-8 transition duration-1000"
    >
   
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-400/20 to-purple-400/20 dark:from-violet-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <SectionTitle>Get in Touch</SectionTitle>
        
        <p className="text-lg mt-8 text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          I'm always excited to collaborate on new projects and explore innovative ideas. Let's build something amazing together!
        </p>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactLinks.map(link => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="flex items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group/link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white mr-4 transform group-hover/link:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{link.label}</p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  My Location
                </h4>
                <p className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white mr-3">
                    📍
                  </span>
                  Kigali, Rwanda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;