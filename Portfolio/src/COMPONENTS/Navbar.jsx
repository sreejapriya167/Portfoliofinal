import React, { useState, useEffect } from "react";

const Navbar = ({ onLogout, username }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className={`text-2xl font-bold ${
            scrolled ? "text-green-700" : "text-gray-800"
          }`}>
          {username}
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-800 hover:text-green-500 transition-colors">
              {link.name}
            </a>
          ))}
          <button onClick={onLogout} className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full">
            Logout
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white/90 py-4 space-y-4 shadow-lg">
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-green-500">
              {link.name}
            </a>
          ))}
          <button onClick={onLogout} className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
