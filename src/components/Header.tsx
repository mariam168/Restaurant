import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface NavLink {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { cart } = useCart();

  const navLinks: NavLink[] = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'CHEFS', href: '/chefs' },
    { name: 'MENU', href: '/products' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900 shadow-md transition">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0c-1.657 0-3-.895-3-2s1.343-2 3-2 3-.895 3-2 1.343-2 3-2m0 8c1.11 0 2.08-.402 2.599-1M12 16v-1m0 1v-8" />
          </svg>
          <div className="flex flex-col leading-tight">
            <span className="text-black dark:text-white text-2xl font-bold">RESTFOOD</span>
            <span className="text-green-600 dark:text-yellow-400 text-sm sm:text-base">RESTAURANT</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-yellow-900 dark:text-yellow-200 font-bold hover:text-green-600 dark:hover:text-green-400 transition text-lg"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">

          <button onClick={toggleDarkMode} className="text-xl text-gray-700 dark:text-white hover:text-yellow-500 transition">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <Link to="/favorites" className="relative text-red-500 hover:text-yellow-500 transition text-xl">
            <FaHeart />
          </Link>


          <Link to="/cart" className="relative text-green-700 hover:text-yellow-500 transition text-xl">
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-yellow-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cart.length}
              </span>
            )}
          </Link>
          <Link
            to="/signin"
            className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-white border border-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Sign In
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black dark:text-white hover:text-green-600 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block text-yellow-900 dark:text-yellow-100 font-semibold hover:text-green-600 dark:hover:text-green-300 transition duration-300"
            >
              {link.name}
            </Link>
          ))}

          <Link to="/favorites" className="flex items-center gap-2 text-red-500 font-semibold hover:text-yellow-500">
            <FaHeart />
            <span>Favorites</span>
          </Link>

          <Link to="/cart" className="flex items-center gap-2 text-green-700 font-semibold hover:text-yellow-500">
            <FaShoppingCart />
            <span>Cart ({cart.length})</span>
          </Link>

          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 text-gray-800 dark:text-white font-semibold hover:text-yellow-500"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>

          <Link
            to="/signin"
            className="block text-gray-800 dark:text-white font-semibold hover:text-green-600"
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
