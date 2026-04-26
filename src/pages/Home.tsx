import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Calendar, MapPin, ChevronRight, Shield, Clock, IndianRupee, Star } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import CarCard from '../components/CarCard';
import { cars, testimonials } from '../data/cars';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredCars = cars.slice(0, 3);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Car"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight mb-6">
              DRIVE YOUR <br />
              <span className="text-brand-primary">FREEDOM.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-lg">
              Experience the ultimate self-drive luxury. Premium cars, seamless booking, and the open road waiting for you.
            </p>

            {/* Quick Search Bar */}
            <div className="glass-card p-2 rounded-2xl flex flex-col md:flex-row items-center gap-2 max-w-4xl shadow-2xl">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-white/10 w-full">
                <MapPin className="text-brand-primary" size={20} />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-gray-500">Pickup Location</span>
                  <input type="text" placeholder="Select City" className="bg-transparent border-none outline-none text-white text-sm" />
                </div>
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-white/10 w-full">
                <Calendar className="text-brand-primary" size={20} />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-gray-500">Pickup Date</span>
                  <input type="date" className="bg-transparent border-none outline-none text-white text-sm" />
                </div>
              </div>
              <button className="btn-primary w-full md:w-auto h-full px-10 py-4 flex items-center justify-center gap-2 group">
                SEARCH
                <ChevronRight className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <Shield className="text-brand-primary" size={32} />
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-widest">Verified</h4>
                <p className="text-gray-500 text-[10px]">100% Insured Cars</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="text-brand-primary" size={32} />
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-widest">24/7 Support</h4>
                <p className="text-gray-500 text-[10px]">Round the clock help</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <IndianRupee className="text-brand-primary" size={32} />
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-widest">Transparent</h4>
                <p className="text-gray-500 text-[10px]">No hidden charges</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Star className="text-brand-primary" size={32} />
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-widest">Luxury</h4>
                <p className="text-gray-500 text-[10px]">High-end maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-24 bg-[#0b0c10]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-brand-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Fleet</span>
              <h2 className="text-5xl font-display font-bold">FEATURED CARS</h2>
            </div>
            <Link to="/cars" className="btn-outline flex items-center gap-2 mt-6 md:mt-0">
              View All Collection
              <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1000"
                  alt="Quality"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-3xl hidden md:block">
                <h3 className="text-5xl font-display font-bold text-brand-primary mb-2">500+</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-white">Premium Cars</p>
              </div>
            </div>
            <div>
              <span className="text-brand-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Confidence</span>
              <h2 className="text-5xl font-display font-bold mb-8">WHY CHOOSE DRIVEX?</h2>
              <div className="space-y-8">
                {[
                  { title: 'Anywhere Pickup', desc: 'We deliver the car to your doorstep across 50+ cities.' },
                  { title: 'Clean & Sanitized', desc: 'Highest hygiene standards for every rental.' },
                  { title: 'Zero Security Deposit', desc: 'Book with confidence, no extra security deposits.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full border border-brand-primary flex items-center justify-center shrink-0 font-display font-bold text-brand-primary">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black/40">
        <div className="container mx-auto px-6 text-center">
          <span className="text-brand-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Experience</span>
          <h2 className="text-5xl font-display font-bold mb-16">WHAT OUR DRIVERS SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="glass-card p-10 rounded-3xl text-left border-l-4 border-l-brand-primary">
                <p className="text-xl italic text-gray-300 mb-8">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} className="w-12 h-12 rounded-full object-cover" alt={t.name} referrerPolicy="no-referrer" />
                  <div>
                    <h5 className="font-bold text-white">{t.name}</h5>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass-card bg-brand-primary p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">READY TO HIT THE ROAD?</h2>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                Join thousands of happy travelers. Your journey of a lifetime begins with a single click.
              </p>
              <Link to="/cars" className="bg-white text-brand-primary hover:bg-gray-100 px-12 py-5 rounded-2xl font-bold text-lg shadow-xl inline-block transition-all hover:scale-105 active:scale-95">
                EXPLORE ALL CARS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
