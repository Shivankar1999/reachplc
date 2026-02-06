import { useState } from 'react';
import { 
  TrendingUp, 
  Menu, 
  Search, 
  Bell, 
  Clock,
  X,
  Play,
  Calendar,
  User,
  ArrowLeft
} from 'lucide-react';
import { NEWS_ARTICLES } from '../data/articles';
export const NewsPage = ({ brand, onBack }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  if (selectedArticle) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button onClick={() => setSelectedArticle(null)} className="flex items-center gap-2 text-gray-500 font-bold mb-8 hover:text-black transition-colors">
          <ArrowLeft className="w-4 h-4" /> BACK TO NEWS
        </button>
        <article>
          <header className="mb-8">
            <span className={`text-xs font-black uppercase tracking-[0.2em] ${brand.accent} mb-4 block`}>{selectedArticle.category}</span>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">{selectedArticle.title}</h1>
            <div className="flex items-center gap-6 border-y py-4 border-gray-100">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-bold">By {selectedArticle.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-500">{selectedArticle.time}</span>
              </div>
            </div>
          </header>
          <img src={selectedArticle.image} alt="" className="w-full rounded-xl mb-8 object-cover max-h-[500px]" />
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
            <p className="font-bold text-xl leading-relaxed italic border-l-4 pl-6 border-gray-200">{selectedArticle.excerpt}</p>
            <p>{selectedArticle.content}</p>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700">
      <section className="relative h-[70vh] w-full overflow-hidden bg-black flex items-center">
        <div className="absolute inset-0 opacity-60">
          <img src="https://images.unsplash.com/photo-1585829365234-781fcd69130b?q=80&w=2000" className="w-full h-full object-cover" alt="News background" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 flex items-center gap-2 px-3 py-1 rounded-full animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Live Coverage</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
              Reporting What <br /> 
              <span className={brand.accent}>Matters</span> To You.
            </h1>
            <div className="flex gap-4">
              <button className={`${brand.primary} text-white px-8 py-4 font-black rounded-sm flex items-center gap-2 hover:brightness-110 transition-all`}><Play className="fill-current" /> WATCH LIVE</button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 font-black rounded-sm hover:bg-white/20 transition-all">LATEST STORIES</button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-12 border-b-2 border-gray-100 pb-6">Feature Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {NEWS_ARTICLES.map(article => (
            <div key={article.id} className="group cursor-pointer" onClick={() => setSelectedArticle(article)}>
              <div className="relative overflow-hidden aspect-[4/3] rounded-lg mb-6">
                <img src={article.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <span className={`text-xs font-black uppercase tracking-widest ${brand.accent} mb-3 block`}>{article.category}</span>
              <h3 className="text-2xl font-bold leading-tight group-hover:underline mb-3">{article.title}</h3>
              <p className="text-gray-500 line-clamp-3 text-sm mb-4">{article.excerpt}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};