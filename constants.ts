import { Product, Category } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Jacquard Voile Umama',
    category: Category.PLAIN_SCARF,
    price: 45000,
    originalPrice: 65000,
    image: 'https://www.umamascarves.co.id/wp-content/uploads/2024/04/Cover-4-8-300x300.jpg',
    isNew: true,
    colors: ['#e3a9a9', '#f2dcdb', '#000000']
  },
  {
    id: 2,
    name: 'Umama Scarves - Ciput Kaos Tali',
    category: Category.MOTIF_SCARF,
    price: 12500,
    image: 'https://www.umamascarves.co.id/wp-content/uploads/2025/04/ginee_20241120091038258_2951882380-1-300x300.jpeg',
    colors: ['#d4af37', '#ffffff']
  },
  {
    id: 3,
    name: 'Hijab Voal Premium Tryspan Icon LC Umama',
    category: Category.PLAIN_SCARF,
    price: 35000,
    originalPrice: 50000,
    image: 'https://www.umamascarves.co.id/wp-content/uploads/2024/04/Cover-4-300x300.jpg',
    colors: ['#9dc183', '#000000', '#808080']
  },
  {
    id: 4,
    name: 'Summer Umama',
    category: Category.APPAREL,
    price: 185000,
    image: 'https://www.umamascarves.co.id/wp-content/uploads/2024/04/cover-summer-08-300x300.jpg',
    isNew: true,
    colors: ['#ffc0cb', '#ffffff']
  },
  {
    id: 5,
    name: 'Voal Plain Scarf by Texla Scarves Umama',
    category: Category.ACCESSORIES,
    price: 15000,
    image: 'https://www.umamascarves.co.id/wp-content/uploads/2024/04/id-11134207-7r98p-lovyat593yxa9f-300x300.jpg',
    colors: ['#000000', '#ffffff', '#808080', '#e3a9a9']
  },
  {
    id: 6,
    name: 'Hijab Syari Texla Scary by Umama',
    category: Category.PLAIN_SCARF,
    price: 55000,
    image: 'https://www.umamascarves.co.id/wp-content/uploads/2024/04/IMG-20231214-WA0008-300x300.jpg',
    colors: ['#000080', '#800000']
  },
  {
    id: 7,
    name: 'Umama Scarves - Voal Exclusive 4C',
    category: Category.MOTIF_SCARF,
    price: 199000,
    image: 'https://www.umamascarves.co.id/wp-content/uploads/2025/04/ginee_20250415150647079_3096112240-300x300.jpeg',
    isNew: true,
    colors: ['#000000', '#8c7e6e']
  },
  {
    id: 8,
    name: 'Umamascarves Box Motif Digital - US Series',
    category: Category.APPAREL,
    price: 250000,
    originalPrice: 350000,
    image: 'https://www.umamascarves.co.id/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-07-at-15.33.55-300x300.jpeg',
    colors: ['#e6e6fa', '#ffb6c1']
  }
];