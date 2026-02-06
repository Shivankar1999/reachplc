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
export const ArticleCard = ({ article, brand, size = "small", onClick }) => {
  if (size === "large") {
    return (
      <div className="group cursor-pointer" onClick={onClick}>
        <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
          <img src={article.image} alt={article.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
          {article.isBreaking && (
            <span className={`absolute top-4 left-4 ${brand.primary} text-white text-xs font-bold px-2 py-1 uppercase tracking-widest animate-pulse`}>Breaking</span>
          )}
        </div>
        <h2 className="text-3xl font-black text-gray-900 group-hover:underline leading-tight mb-3">{article.title}</h2>
        <p className="text-gray-600 text-lg mb-4 line-clamp-3">{article.excerpt}</p>
        <div className="flex items-center gap-4 text-sm font-bold">
          <span className={brand.accent}>{article.category}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-400">{article.time}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 group cursor-pointer border-b pb-4 last:border-0" onClick={onClick}>
      <div className="flex-1">
        <span className={`text-[10px] font-black uppercase ${brand.accent} tracking-wider`}>{article.category}</span>
        <h3 className="font-bold text-gray-900 group-hover:underline leading-snug mt-1 line-clamp-2">{article.title}</h3>
        <div className="flex items-center gap-2 mt-2 text-[10px] text-gray-500 font-medium">
          <Clock className="w-3 h-3" /> {article.time}
        </div>
      </div>
      <div className="w-24 h-24 overflow-hidden rounded-md flex-shrink-0">
        <img src={article.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
    </div>
  );
};