import { Car, Instagram, Twitter, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <Car className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter text-white uppercase">
                DRIVEX<span className="text-brand-primary">.</span>
              </span>
            </Link>
            <p className="text-gray-500 leading-relaxed text-sm">
              Providing modern self-drive rental solutions for the discerning traveler. Premium cars, zero hassle.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:border-brand-primary hover:text-brand-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {['Home', 'Fleet', 'Offers', 'Insurance', 'Privacy Policy'].map(item => (
                <li key={item}><Link to="#" className="hover:text-brand-primary transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {['Help Center', 'FAQs', 'Contact Us', 'Fleet Login', 'Sitemap'].map(item => (
                <li key={item}><Link to="#" className="hover:text-brand-primary transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-primary" />
                +91 999 888 7777
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-primary" />
                support@drivex.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-primary" />
                Worli, Mumbai, 400018
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
            © 2026 DriveX Rentals Private Limited. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
