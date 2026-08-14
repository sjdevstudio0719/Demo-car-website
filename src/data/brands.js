// Brand list used in the "Browse by Brand" and "Explore Our Brands" sections.
// `name` must match the `brand` field used in vehicles.js exactly, so
// brand filtering works automatically.

export const brands = [
  { name: 'Maruti Suzuki' },
  { name: 'Hyundai' },
  { name: 'Tata' },
  { name: 'Mahindra' },
  { name: 'Toyota' },
  { name: 'Honda' },
  { name: 'Kia' },
  { name: 'Volkswagen' },
]

export const carTypes = [
  {
    key: 'hatchback',
    label: 'Hatchbacks',
    tagline: 'Nimble & city-smart',
    bodyType: 'Hatchback',
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'sedan',
    label: 'Sedans',
    tagline: 'Comfort meets style',
    bodyType: 'Sedan',
    image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'suv',
    label: 'SUVs',
    tagline: 'Command every road',
    bodyType: 'SUV',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'muv',
    label: 'MUVs',
    tagline: 'Space for the whole family',
    bodyType: 'MUV',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'luxury',
    label: 'Luxury Cars',
    tagline: 'Premium, unmistakably',
    bodyType: null,
    filter: { minPrice: 2000000 },
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'automatic',
    label: 'Automatic Cars',
    tagline: 'Effortless driving',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'manual',
    label: 'Manual Cars',
    tagline: 'Full control, better value',
    transmission: 'Manual',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'electric',
    label: 'Electric Cars',
    tagline: 'Zero emissions, low cost',
    fuelType: 'Electric',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=900&q=80',
  },
]
