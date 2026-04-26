import { Car, Testimonial } from '../types';

export const cars: Car[] = [
  {
    id: '1',
    name: 'Thar 4x4',
    brand: 'Mahindra',
    category: 'SUV',
    pricePerDay: 4500,
    transmission: 'Manual',
    fuelType: 'Diesel',
    seating: 4,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=800',
    specs: {
      mileage: '12 kmpl',
      power: '130 bhp',
      engine: '2.2L mHawk'
    }
  },
  {
    id: '2',
    name: 'Fortuner Legender',
    brand: 'Toyota',
    category: 'SUV',
    pricePerDay: 9500,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    seating: 7,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1594563703937-fdc640497dcd?auto=format&fit=crop&q=80&w=800',
    specs: {
      mileage: '10 kmpl',
      power: '201 bhp',
      engine: '2.8L Diesel'
    }
  },
  {
    id: '3',
    name: 'Creta N-Line',
    brand: 'Hyundai',
    category: 'SUV',
    pricePerDay: 3500,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seating: 5,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    specs: {
      mileage: '16 kmpl',
      power: '158 bhp',
      engine: '1.5L Turbo'
    }
  },
  {
    id: '4',
    name: 'C-Class',
    brand: 'Mercedes-Benz',
    category: 'Luxury',
    pricePerDay: 15000,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seating: 5,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=800',
    specs: {
      mileage: '12 kmpl',
      power: '201 bhp',
      engine: '2.0L Turbo'
    }
  },
  {
    id: '5',
    name: 'Swift VXI',
    brand: 'Maruti Suzuki',
    category: 'Hatchback',
    pricePerDay: 1800,
    transmission: 'Manual',
    fuelType: 'Petrol',
    seating: 5,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?auto=format&fit=crop&q=80&w=800',
    specs: {
      mileage: '22 kmpl',
      power: '88 bhp',
      engine: '1.2L K-Series'
    }
  },
  {
    id: '6',
    name: 'Slavia',
    brand: 'Skoda',
    category: 'Sedan',
    pricePerDay: 3000,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seating: 5,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1621285853634-913c473022fb?auto=format&fit=crop&q=80&w=800',
    specs: {
      mileage: '18 kmpl',
      power: '114 bhp',
      engine: '1.0L TSI'
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ananya Sharma',
    role: 'Travel Blogger',
    content: 'The Thar was in pristine condition. DriveX makes self-drive rentals feel like a premium concierge service.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    name: 'Rahul Verma',
    role: 'Corporate Executive',
    content: 'Rented the Mercedes for a business weekend. Flawless delivery and pickup experience. Highly recommended.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];
