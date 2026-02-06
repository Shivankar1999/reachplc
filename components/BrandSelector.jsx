import { BRANDS } from '../data/brands';
export const BrandSelector = ({ currentBrand, setBrand }) => (
  <div className="bg-slate-900 text-white py-2 px-4 flex items-center justify-center gap-6 overflow-x-auto whitespace-nowrap border-b border-slate-800">
    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Our Brands:</span>
    {Object.values(BRANDS).map((b) => (
      <button 
        key={b.id}
        onClick={() => setBrand(b)}
        className={`text-sm font-medium transition-all hover:text-white ${currentBrand.id === b.id ? 'text-white underline underline-offset-8 decoration-2' : 'text-slate-400'}`}
      >
        {b.name}
      </button>
    ))}
  </div>
);