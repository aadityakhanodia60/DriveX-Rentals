import { Star, Fuel, Settings, Users, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Car } from '../types';

export default function CarCard({ car }: { car: Car }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-card rounded-2xl overflow-hidden group transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-bold text-white">{car.rating}</span>
        </div>
        <div className="absolute top-4 right-4 bg-brand-primary px-3 py-1 rounded-full">
          <span className="text-xs font-bold text-white">{car.category}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-1">{car.brand}</p>
            <h3 className="text-xl font-display font-bold text-white">{car.name}</h3>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-white">₹{car.pricePerDay}</span>
            <p className="text-[10px] text-gray-500 uppercase font-bold">Per Day</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5">
            <Fuel size={14} className="text-brand-primary" />
            <span className="text-[10px] text-gray-400">{car.fuelType}</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5">
            <Settings size={14} className="text-brand-primary" />
            <span className="text-[10px] text-gray-400">{car.transmission}</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5">
            <Users size={14} className="text-brand-primary" />
            <span className="text-[10px] text-gray-400">{car.seating} Seats</span>
          </div>
        </div>

        <Link
          to={`/cars/${car.id}`}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-brand-primary transition-all duration-300 text-sm font-bold text-white group/btn"
        >
          View Details
          <ChevronRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
