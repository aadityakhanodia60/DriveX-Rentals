import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronLeft, CreditCard, User, ShieldCheck } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { cars } from '../data/cars';

export default function Booking() {
  const { id } = useParams();
  const car = cars.find(c => c.id === id);

  if (!car) return <div>Car not found</div>;

  return (
    <PageTransition>
      <section className="pt-32 pb-24 bg-[#0b0c10]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link to={`/cars/${id}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
              <ChevronLeft size={20} />
              Return to Car Details
            </Link>

            <h1 className="text-5xl font-display font-bold mb-12">CHECKOUT</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                {/* User Details */}
                <div className="glass-card p-10 rounded-[2rem]">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                      <User size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Drivers Details</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest px-2">First Name</label>
                      <input type="text" placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-brand-primary outline-none text-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest px-2">Last Name</label>
                      <input type="text" placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-brand-primary outline-none text-white transition-all" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest px-2">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-brand-primary outline-none text-white transition-all" />
                    </div>
                  </div>
                </div>

                {/* Payment UI */}
                <div className="glass-card p-10 rounded-[2rem]">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                      <CreditCard size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Payment Method</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {['Credit Card', 'UPI', 'Net Banking'].map(method => (
                      <button key={method} className="p-4 rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-gray-400 hover:border-brand-primary hover:text-white transition-all">
                        {method}
                      </button>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex gap-4">
                    <ShieldCheck className="text-brand-primary shrink-0" />
                    <p className="text-sm text-gray-400">
                      Your payment is 100% secure. We use industry-standard encryption to protect your data.
                    </p>
                  </div>
                </div>

                <button className="btn-primary w-full py-6 text-xl tracking-widest font-display font-bold shadow-2xl">
                  CONFIRM & PAY
                </button>
              </div>

              <div className="lg:col-span-1">
                <div className="glass-card p-8 rounded-3xl sticky top-32">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                    <img src={car.image} className="w-full h-full object-cover" alt={car.name} referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-white mb-2">{car.name}</h4>
                  <p className="text-sm text-gray-500 font-bold mb-6">{car.brand} • {car.category}</p>
                  
                  <div className="space-y-4 border-t border-white/10 pt-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Duration</span>
                      <span className="text-white">2 Days</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">GST (18%)</span>
                      <span className="text-white">₹{Math.round(car.pricePerDay * 2 * 0.18)}</span>
                    </div>
                    <div className="flex justify-between text-xl pt-4 border-t border-white/10 text-brand-primary font-display font-bold">
                      <span>Grand Total</span>
                      <span>₹{Math.round(car.pricePerDay * 2 * 1.18)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
