import { useState } from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  X,
} from 'lucide-react';
export const Navbar = ({ brand, onHomeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["News", "Sports", "TV", "Celebs", "Life", "Money"];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className={`h-1 ${brand.primary} w-full`} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <button onClick={() => setIsOpen(true)} className="p-1 hover:bg-gray-100 rounded-md lg:hidden transition-colors">
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
              <h1 onClick={onHomeClick} className={`text-3xl font-black tracking-tighter ${brand.accent} italic cursor-pointer`}>
                {brand.logo}
              </h1>
              <div className="hidden lg:flex gap-6 ml-8 items-center border-l pl-8 border-gray-200">
                {navItems.map(cat => (
                  <a key={cat} href={ cat === 'News' ? '/' : `/${cat.toLowerCase()}`} className="text-sm font-bold uppercase hover:text-gray-500 transition-colors">{cat}</a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
              <button className={`${brand.primary} text-white px-4 py-2 text-sm font-bold rounded-sm hidden md:block`}>NEWSLETTER</button>
              <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />
      <div className={`fixed top-0 left-0 z-[70] h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className={`h-1 ${brand.primary} w-full`} />
        <div className="p-4 flex justify-between items-center border-b">
          <span className={`text-2xl font-black italic ${brand.accent}`}>{brand.logo}</span>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full"><X className="w-6 h-6 text-gray-500" /></button>
        </div>
        <div className="flex flex-col py-4">
          {navItems.map((item) => (
            <a key={item} href={ item === 'News' ? '/' : `/${item.toLowerCase()}`} className="px-6 py-4 text-lg font-bold uppercase tracking-tight hover:bg-gray-50 border-b border-gray-50 last:border-0" onClick={() => setIsOpen(false)}>{item}</a>
          ))}
        </div>
      </div>
    </>
  );
};