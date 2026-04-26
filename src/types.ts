export interface Car {
  id: string;
  name: string;
  brand: string;
  category: 'SUV' | 'Sedan' | 'Luxury' | 'Hatchback';
  pricePerDay: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Diesel' | 'Electric';
  seating: number;
  rating: number;
  image: string;
  specs: {
    mileage: string;
    power: string;
    engine: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
