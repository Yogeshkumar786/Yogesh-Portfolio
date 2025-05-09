
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <NavLink to="/" className="text-portfolio-green font-playfair text-3xl md:text-4xl font-bold">
          Yogesh Kumar
        </NavLink>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-inter ${
                  isActive ? 'text-portfolio-green font-medium' : 'text-gray-700 hover:text-portfolio-green'
                } transition-colors`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-40 pt-20 md:hidden animate-fade-in">
            <div className="flex flex-col items-center space-y-6 p-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-xl ${
                      isActive ? 'text-portfolio-green font-medium' : 'text-gray-700'
                    } hover:text-portfolio-green transition-colors`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
