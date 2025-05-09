
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-portfolio-green font-playfair text-2xl font-bold">Yogesh Kumar</p>
            <p className="text-gray-600 mt-1">Computer Science Engineer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Yogeshkumar786" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-portfolio-green transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/yogesh-kumar-b93817257" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-green transition-colors" 
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:yogeshkumarmaliksinghjat200@gmail.com"
              className="text-gray-600 hover:text-portfolio-green transition-colors" 
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Yogesh Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
