import React from 'react';
interface NavLink {
  name: string;
  href: string;
}
const Header: React.FC = () => {
  const navLinks: NavLink[] = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT US', href: '#' },
    { name: 'CHEFS', href: '#' },
    { name: 'MENU', href: '#' },
    { name: 'GALLERY', href: '#' },
    { name: 'CONTACTS', href: '#' },
  ];
  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-4 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0c-1.657 0-3-.895-3-2s1.343-2 3-2 3-.895 3-2 1.343-2 3-2m0 8c1.11 0 2.08-.402 2.599-1M12 16v-1m0 1v-8" /> {/* Simple placeholder icon */}
           </svg>
           <span className="text-black text-2xl font-bold">RESTFOOD</span>
           <span className="text-green-600 text-xl hidden sm:inline">RESTAURANT</span>
        </div>
        <nav className="hidden md:flex space-x-6 ">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-yellow-900 font-bold hover:text-green-600 transition duration-300 text-lg font-medium" 
            >
              {link.name}
            </a>
          ))}
        </nav>

         
         <div className="md:hidden">
        
             <button className="text-black hover:text-black focus:outline-none">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                 </svg>
             </button>
         </div>
     
      </div>
    </header>
  );
};
export default Header;