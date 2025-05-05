import React, { useState } from 'react';

interface NavLink {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '#' },
    { name: 'CHEFS', href: '#' },
    { name: 'MENU', href: '/products' },
    { name: 'GALLERY', href: '#' },
    { name: 'CART', href: '/cart' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 lg:px-16 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0c-1.657 0-3-.895-3-2s1.343-2 3-2 3-.895 3-2 1.343-2 3-2m0 8c1.11 0 2.08-.402 2.599-1M12 16v-1m0 1v-8" />
          </svg>
          <div className="flex flex-col leading-tight">
            <span className="text-black text-2xl font-bold">RESTFOOD</span>
            <span className="text-green-600 text-sm sm:text-base">RESTAURANT</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-yellow-900 font-bold hover:text-green-600 transition duration-300 text-lg"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black hover:text-green-600 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-yellow-900 font-semibold hover:text-green-600 transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
