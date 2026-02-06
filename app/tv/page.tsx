'use client';
import React, { useState } from 'react';
import { BRANDS } from '@/data/brands';
import { Navbar } from '@/components/Navbar';
import { BrandSelector } from '@/components/BrandSelector';
import { TvPlayer } from '@/components/TvPlayer';

export default function TvPage() {
  const [currentBrand, setCurrentBrand] = useState(BRANDS.MIRROR);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <BrandSelector currentBrand={currentBrand} setBrand={setCurrentBrand} />
      <Navbar brand={currentBrand} onHomeClick={() => window.location.href = '/'} />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <TvPlayer brand={currentBrand} />
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-white/5">
            <h3 className="font-bold text-lg mb-4 border-b border-white/10 pb-2">Up Next</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="w-24 h-16 bg-slate-800 rounded overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=200&sig=${i}`} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold group-hover:text-blue-400">Regional Sports Roundup</p>
                    <p className="text-xs text-slate-500">Starts in {i * 15} mins</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}