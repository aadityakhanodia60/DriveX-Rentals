import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, SlidersHorizontal, Search, ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import CarCard from '../components/CarCard';
import { cars } from '../data/cars';

export default function Listing() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'SUV' | 'Sedan' | 'Luxury' | 'Hatchback'>('All');
  
  const categories = ['All', 'SUV', 'Sedan', 'Luxury', 'Hatchback'];
  
  const filteredCars = activeCategory === 'All' 
    ? cars 
    : cars.filter(c => c.category === activeCategory);

  return (
    <PageTransition>
      <section className="pt-32 pb-24 bg-[#0b0c10]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-brand-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Marketplace</span>
              <h1 className="text-5xl md:text-6xl font-display font-bold">OUR FLEET</h1>
              <p className="text-gray-400 mt-4">
                Choose from our handpicked collection of top-rated vehicles for your next journey.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeCategory === cat 
                    ? 'bg-brand-primary text-white' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 space-y-8">
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <SlidersHorizontal size={18} className="text-brand-primary" />
                  <h3 className="font-bold text-white uppercase text-xs tracking-widest">Filters</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-white text-sm font-bold mb-4">Transmission</h4>
                    <div className="space-y-3">
                      {['Automatic', 'Manual'].map(t => (
                        <label key={t} className="flex items-center gap-3 cursor-pointer group">
                          <div className="w-5 h-5 rounded border border-white/20 flex items-center justify-center transition-colors group-hover:border-brand-primary">
                            <div className="w-2 h-2 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100" />
                          </div>
                          <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{t}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white text-sm font-bold mb-4">Price Range</h4>
                    <input type="range" className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-primary" min="1000" max="20000" />
                    <div className="flex justify-between mt-2">
                      <span className="text-[10px] uppercase font-bold text-gray-500">Min: ₹1000</span>
                      <span className="text-[10px] uppercase font-bold text-gray-500">Max: ₹20k+</span>
                    </div>
                  </div>

                  <button className="btn-primary w-full text-xs py-3 mt-4">APPLY FILTERS</button>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl bg-brand-primary/10 border-brand-primary/20">
                <h4 className="text-brand-primary text-sm font-bold mb-2">Need Custom Help?</h4>
                <p className="text-xs text-gray-400 mb-4">Can't find what you're looking for? Our executive is here to help.</p>
                <button className="text-white text-xs font-bold flex items-center gap-2 hover:underline">
                  Chat with Expert <ChevronRight size={14} />
                </button>
              </div>
            </aside>

            {/* Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car, idx) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <CarCard car={car} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
