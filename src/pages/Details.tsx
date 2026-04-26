import { useParams, Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Star, Fuel, Settings, Users, ShieldCheck, MapPin, Calendar, Clock, ChevronRight, Info } from 'lucide-react';
import { format, differenceInDays, addDays } from 'date-fns';
import PageTransition from '../components/PageTransition';
import CalendarPicker from '../components/CalendarPicker';
import { cars } from '../data/cars';

export default function Details() {
  const { id } = useParams();
  const car = cars.find(c => c.id === id);

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(addDays(new Date(), 2));

  const totalDays = useMemo(() => {
    if (startDate && endDate) {
      return Math.max(1, differenceInDays(endDate, startDate));
    }
    return 1;
  }, [startDate, endDate]);

  const baseFare = car ? car.pricePerDay * totalDays : 0;
  const insurance = 999;
  const totalAmount = baseFare + insurance;

  if (!car) return <div className="h-screen flex items-center justify-center">Car not found</div>;

  return (
    <PageTransition>
      <section className="pt-32 pb-24 bg-[#0b0c10]">
        <div className="container mx-auto px-6">
          <Link to="/cars" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
            <ChevronLeft size={20} />
            Back to Collection
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Images & Info */}
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl mb-12"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-brand-primary/20 text-brand-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {car.brand}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star size={14} fill="currentColor" />
                      <span className="text-sm font-bold text-white">{car.rating} (120+ Reviews)</span>
                    </div>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">{car.name}</h1>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs mb-2">Daily Price</p>
                  <span className="text-5xl font-display font-bold text-white">₹{car.pricePerDay}</span>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { label: 'Transmission', val: car.transmission, icon: Settings },
                  { label: 'Fuel Type', val: car.fuelType, icon: Fuel },
                  { label: 'Seats', val: car.seating, icon: Users },
                  { label: 'Power', val: car.specs.power, icon: ShieldCheck },
                ].map((spec, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
                    <spec.icon className="text-brand-primary mb-4" size={24} />
                    <span className="text-[10px] uppercase font-bold text-gray-500 mb-1">{spec.label}</span>
                    <span className="text-white font-bold">{spec.val}</span>
                  </div>
                ))}
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold mb-4">Check Availability</h3>
                <div className="glass-card p-8 rounded-3xl mb-12 flex flex-col md:flex-row gap-12">
                  <div className="flex-1">
                    <CalendarPicker 
                      startDate={startDate} 
                      endDate={endDate} 
                      onChange={(s, e) => {
                        setStartDate(s);
                        setEndDate(e);
                      }} 
                    />
                  </div>
                  <div className="flex-1 space-y-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Info size={16} className="text-brand-primary" />
                        Selected Schedule
                      </h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500 uppercase font-bold">Pickup</span>
                          <span className="text-sm text-white font-medium">
                            {startDate ? format(startDate, 'EEE, dd MMM yyyy') : 'Select Date'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500 uppercase font-bold">Return</span>
                          <span className="text-sm text-white font-medium">
                            {endDate ? format(endDate, 'EEE, dd MMM yyyy') : 'Select Date'}
                          </span>
                        </div>
                        <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                          <span className="text-xs text-gray-500 uppercase font-bold">Duration</span>
                          <span className="text-sm text-brand-primary font-bold">
                            {totalDays} {totalDays === 1 ? 'Day' : 'Days'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed italic">
                      * Dates shown in <span className="text-brand-primary">blue</span> are your selected rental period. Pricing is automatically adjusted based on your selection.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">Vehicle Description</h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-8">
                  The {car.name} is the pinnacle of {car.category} design. Whether you're planning a weekend getaway or a business trip, this {car.brand} masterpiece offers the perfect blend of performance, luxury, and efficiency. Equipped with high-end safety features and {car.transmission} transmission for a smooth driving experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="glass-card p-8 rounded-3xl">
                    <h4 className="text-white font-bold mb-4">Features</h4>
                    <ul className="space-y-3">
                      {['360° Camera', 'Heated Seats', 'GPS Navigation', 'Sunroof'].map(f => (
                        <li key={f} className="flex items-center gap-3 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass-card p-8 rounded-3xl">
                    <h4 className="text-white font-bold mb-4">Guidelines</h4>
                    <ul className="space-y-3">
                      {['No smoking', 'Full to Full Fuel', 'Pets Allowed', 'Age 21+'].map(f => (
                        <li key={f} className="flex items-center gap-3 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 glass-card p-8 rounded-3xl border-t-4 border-t-brand-primary shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8">Booking Summary</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="p-4 rounded-xl bg-white/5 space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-brand-primary" />
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Location</span>
                        <span className="text-sm font-medium text-white">Mumbai, Maharashtra</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar size={18} className="text-brand-primary" />
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Date Range</span>
                        <span className="text-sm font-medium text-white">
                          {startDate && endDate 
                            ? `${format(startDate, 'dd MMM')} - ${format(endDate, 'dd MMM')}`
                            : 'Select Dates'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Base Fare ({totalDays} {totalDays === 1 ? 'Day' : 'Days'})</span>
                      <span className="text-white font-bold">₹{baseFare}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Insurance (Premium)</span>
                      <span className="text-white font-bold">₹{insurance}</span>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div className="flex justify-between text-xl">
                      <span className="font-bold text-white">Total Amount</span>
                      <span className="font-display font-bold text-brand-primary">₹{totalAmount}</span>
                    </div>
                  </div>
                </div>

                <Link 
                  to={startDate && endDate ? `/booking/${car.id}?start=${startDate.toISOString()}&end=${endDate.toISOString()}` : '#'}
                  className={`btn-primary w-full flex items-center justify-center gap-2 group py-5 ${!startDate || !endDate ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  PROCEED TO BOOK
                  <ChevronRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>

                <p className="text-[10px] text-center text-gray-500 uppercase font-bold tracking-widest mt-6">
                  Secure Checkout • Free Cancellation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

