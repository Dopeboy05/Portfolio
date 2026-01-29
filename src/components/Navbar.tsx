import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-neo-yellow border-b-8 border-neo-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-bold tracking-tighter hover:text-neo-pink transition-colors">
              SUPRIYA05<span className="text-neo-pink">.TECH</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-bold hover:underline decoration-4 decoration-neo-pink underline-offset-4 px-3 py-2 transition-all hover:-translate-y-1"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://github.com/DopeBoy05" 
                target="_blank" 
                rel="noreferrer"
                className="bg-neo-black text-neo-white p-2 border-2 border-neo-black hover:bg-neo-white hover:text-neo-black transition-all hover:shadow-neo-sm"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-neo-white border-2 border-neo-black hover:bg-neo-pink transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-4 border-neo-black bg-neo-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-2xl font-bold border-b-2 border-neo-black hover:bg-neo-pink hover:pl-6 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
