export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  colors: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export enum Category {
  PLAIN_SCARF = 'Polos',
  MOTIF_SCARF = 'Motif',
  APPAREL = 'Pakaian',
  ACCESSORIES = 'Aksesoris'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}