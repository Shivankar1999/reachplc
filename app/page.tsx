'use client';
import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { BRANDS } from '@/data/brands';
import { NEWS_ARTICLES } from '@/data/articles';
import { Navbar } from '@/components/Navbar';
import { BrandSelector } from '@/components/BrandSelector';
import { ArticleCard } from '@/components/ArticleCard';
import { NewsPage } from '@/components/NewsPage';

export default function App() {
  const [currentBrand, setCurrentBrand] = useState(BRANDS.MIRROR);
  const [view, setView] = useState('home');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-yellow-200">
      <BrandSelector currentBrand={currentBrand} setBrand={setCurrentBrand} />
      <Navbar brand={currentBrand} onHomeClick={() => setView('home')} />

      {view === 'news' ? (
        <NewsPage brand={currentBrand} onBack={() => setView('home')} />
      ) : (
        <>
          {/* Custom CSS Ticker replacing <marquee> */}
          <div className="bg-gray-100 border-b border-gray-200 py-2 overflow-hidden relative">
             <div className="max-w-7xl mx-auto px-4 flex items-center gap-3 relative z-10 bg-gray-100">
                <div className="flex items-center gap-2 bg-gray-100 pr-4 z-20">
                  <TrendingUp className="w-4 h-4 text-red-600" />
                  <span className="text-[10px] font-black uppercase text-red-600 whitespace-nowrap">Live Updates</span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="animate-ticker whitespace-nowrap inline-block text-xs font-medium text-gray-600 uppercase tracking-widest">
                    +++ Major infrastructure project announced for northern cities +++ Premier League giants eye record transfer +++ Exclusive: New local community hub to open in Manchester +++
                  </div>
                </div>
            </div>
          </div>
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-10">
              <p className={`text-sm font-bold uppercase tracking-[0.2em] mb-2 ${currentBrand.accent}`}>
                {currentBrand.slogan}
              </p>
              <div className={`h-1 w-20 ${currentBrand.primary} mb-6`} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-12">
                <ArticleCard 
                  article={NEWS_ARTICLES[0]} 
                  brand={currentBrand} 
                  size="large" 
                  onClick={() => setView('news')} 
                />
              </div>
              <aside className="lg:col-span-4">
                <div className={`border-l-4 ${currentBrand.border} pl-4`}>
                  <h4 className="text-xl font-black uppercase italic mb-6">Trending Now</h4>
                  {NEWS_ARTICLES.slice(1).map((art, i) => (
                    <div key={art.id} className="mb-6 group cursor-pointer" onClick={() => setView('news')}>
                      <span className="text-3xl font-black text-gray-200 mb-2 block group-hover:text-gray-300">0{i+1}</span>
                      <h5 className="font-bold leading-tight group-hover:underline">{art.title}</h5>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </main>
        </>
      )}
    </div>
  );
}
