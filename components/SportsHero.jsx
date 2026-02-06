import { Trophy, Timer, ChevronRight } from 'lucide-react';

export const SportsHero = ({ brand }) => {
  return (
    <section className="relative h-[60vh] flex items-end pb-12 overflow-hidden bg-slate-900">
      <img 
        src="https://images.unsplash.com/photo-1485395037613-e83d5c1f5290?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        alt="Stadium background"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="text-yellow-400 w-5 h-5" />
          <span className="text-white font-black uppercase tracking-widest text-xs">Premier League Update</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">
          The Title Race <br /> <span className={brand.accent}>Heats Up</span>
        </h1>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white text-black px-6 py-3 font-black text-sm uppercase flex items-center gap-2 hover:bg-gray-200 cursor-pointer transition-colors">
            Full Match Report <ChevronRight className="w-4 h-4" />
          </div>
          <div className="bg-transparent border border-white/30 text-white px-6 py-3 font-black text-sm uppercase flex items-center gap-2 hover:bg-white/10 cursor-pointer transition-colors">
            Video Highlights
          </div>
        </div>
      </div>
    </section>
  );
};