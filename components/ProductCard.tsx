import React from 'react';
import { Plus, Heart } from 'lucide-react';
import { FORMAT_CURRENCY } from '../constants';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 cursor-pointer">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-white/90 text-primary text-[10px] font-bold px-2 py-1 uppercase tracking-wider shadow-sm">
            New
          </div>
        )}
        {product.originalPrice && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider shadow-sm">
            Sale
          </div>
        )}

        {/* Hover Actions */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-4">
          <button 
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-white text-primary py-2 text-sm font-medium shadow-md hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <Plus size={16} />
            KERANJANG
          </button>
          <button className="p-2 bg-white text-primary shadow-md hover:bg-secondary hover:text-white transition-colors">
            <Heart size={18} />
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col flex-grow">
        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">{product.category}</div>
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>
        
        <div className="mt-auto flex items-center gap-2">
           <span className="font-bold text-red-600 text-sm uppercase">
             Claim Hadiah
           </span>
        </div>

        {/* Color Swatches */}
        {product.colors && (
          <div className="flex gap-1 mt-3">
            {product.colors.map((color, idx) => (
              <div 
                key={idx} 
                className="w-3 h-3 rounded-full border border-gray-200" 
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;