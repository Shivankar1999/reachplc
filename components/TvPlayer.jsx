import { Play, Volume2, Users, Radio } from 'lucide-react';

export const TvPlayer = ({ brand }) => {
  return (
    <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
      <div className="relative aspect-video bg-slate-900 flex items-center justify-center group">
        {/* Placeholder for Video Stream */}
        <img 
          src="[https://images.unsplash.com/photo-1526678910277-0fcb35800f9e?q=80&w=1200](https://images.unsplash.com/photo-1526678910277-0fcb35800f9e?q=80&w=1200)" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="Live Stream"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        <button className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform">
          <Play className="text-white fill-current w-8 h-8 ml-1" />
        </button>

        <div className="absolute top-4 left-4 flex gap-2">
          <div className="bg-red-600 text-white px-3 py-1 rounded text-xs font-black flex items-center gap-2 animate-pulse">
            <Radio className="w-3 h-3" /> LIVE
          </div>
          <div className="bg-black/50 text-white px-3 py-1 rounded text-xs font-bold flex items-center gap-2 backdrop-blur-md">
            <Users className="w-3 h-3" /> 12.4k watching
          </div>
        </div>
      </div>
      <div className="p-6 border-t border-white/10 bg-slate-900 text-white">
        <h2 className="text-2xl font-bold mb-2">{brand.name} News Tonight: Live Investigations</h2>
        <p className="text-slate-400 text-sm">Streaming live across the UK - Discussion on the latest regional developments.</p>
      </div>
    </div>
  );
};

export default TvPlayer;