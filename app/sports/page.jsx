'use client';
import React, { useState } from 'react';
import { BRANDS } from '@/data/brands';
import { Navbar } from '@/components/Navbar';
import { BrandSelector } from '@/components/BrandSelector';
import { SportsHero } from '@/components/SportsHero';
import { ArticleCard } from '@/components/ArticleCard';
import { NEWS_ARTICLES } from '@/data/articles';

export default function SportsPage() {
  const [currentBrand, setCurrentBrand] = useState(BRANDS.MIRROR);
  const sportsArticles = NEWS_ARTICLES.filter(a => a.category === 'Sport');

  return (
    <div className="min-h-screen bg-white">
      <BrandSelector currentBrand={currentBrand} setBrand={setCurrentBrand} />
      <Navbar brand={currentBrand} onHomeClick={() => window.location.href = '/'} />
      
      <SportsHero brand={currentBrand} />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
          <h2 className="text-3xl font-black italic uppercase">Latest Results</h2>
          <div className="flex gap-4">
            {['Football', 'Cricket', 'F1', 'Tennis'].map(tag => (
              <span key={tag} className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-black cursor-pointer">{tag}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map(article => (
            <ArticleCard key={article.id} article={article} brand={currentBrand}  onClick={() => setView('news')}/>
          ))}
        </div>
      </main>
    </div>
  );
}
