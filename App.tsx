import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import { PRODUCTS } from './constants';
import { Product, CartItem, Category } from './types';
import { X, Trash2, ArrowRight, ShoppingBag, Instagram, Facebook, Youtube, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Handle Add to Cart
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  // Handle Remove from Cart
  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Handle Checkout / Claim via WhatsApp
  const handleCheckout = () => {
    const phoneNumber = '6281337672046';
    
    let message = "Halo, saya ingin klaim pesanan ini:\n\n";
    cart.forEach(item => {
      const priceStr = 'GIFTAWAY';
      message += `${item.name} (Qty: ${item.quantity}) - ${priceStr}\n`;
    });
    
    // Use https instead of http for better compatibility
    const url = `https://wa.me/${6281337672046}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Filter Products
  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const categories = ['All', ...Object.values(Category)];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar cartCount={cart.reduce((a, b) => a + b.quantity, 0)} onCartClick={() => setIsCartOpen(true)} />
      
      {/* Main Content */}
      <main>
        <Hero />

        {/* Categories Section */}
        <section className="py-10 md:py-16 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 md:mb-12">
                 <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3 md:mb-4">Kategori Pilihan</h2>
                 <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">Temukan gaya terbaik Anda melalui koleksi kategori kami yang telah dikurasi dengan cermat untuk setiap kesempatan.</p>
              </div>
              
              <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-8 md:mb-10 pointer-events-none">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                      activeCategory === cat 
                        ? 'bg-secondary text-white shadow-md' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 md:gap-x-6 md:gap-y-10">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                ))}
              </div>
           </div>
        </section>

        {/* Product Highlights Section (New) */}
        <section className="py-12 md:py-20 bg-[#f9f7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-10 md:mb-16 text-gray-900">Produk Umama Scarves</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {/* Card 1: Jacquard Voile */}
              <div className="flex flex-col items-center text-center">
                 <div className="w-full max-w-[300px] aspect-[4/5] rounded-t-[100px] md:rounded-t-[150px] overflow-hidden mb-4 md:mb-6 relative shadow-lg bg-white mx-auto">
                    <img 
                      src="https://www.umamascarves.co.id/wp-content/uploads/2024/07/ummama-rev-1.png" 
                      alt="Jacquard Voile" 
                      className="w-full h-full object-cover" 
                    />
                 </div>
                 <h3 className="text-lg font-bold mb-2 md:mb-3 font-serif">Jacquard Voile</h3>
                 <p className="text-xs text-gray-500 leading-relaxed px-2 max-w-sm">
                   Jacquard Voile dibuat dengan pola timbul, menambah keanggunan pada pakaian Anda. Setiap pembelian akan disertakan dengan box yang sesuai dengan warna hijab, termasuk Premium Signature Brooch dan Thank You Card.
                 </p>
              </div>

              {/* Card 2: Digital Scarf */}
              <div className="flex flex-col items-center text-center">
                 <div className="w-full max-w-[300px] aspect-[4/5] rounded-t-[100px] md:rounded-t-[150px] overflow-hidden mb-4 md:mb-6 relative shadow-lg bg-white mx-auto">
                    <img 
                      src="https://www.umamascarves.co.id/wp-content/uploads/2024/07/ummama-rev-3.png" 
                      alt="Digital Scarf" 
                      className="w-full h-full object-cover" 
                    />
                 </div>
                 <h3 className="text-lg font-bold mb-2 md:mb-3 font-serif">Digital Scarf</h3>
                 <p className="text-xs text-gray-500 leading-relaxed px-2 max-w-sm">
                   Digital scarf premium mengacu pada koleksi hijab kelas atas yang dapat memberikan warna-warna cerah dan detail yang tepat, menghasilkan pola yang akan menarik perhatian. Setiap pembelian akan disertakan dengan box yang sesuai dengan warna dan motif hijab, Premium Signature Brooch dan Thank You Card.
                 </p>
              </div>

              {/* Card 3: Paris Original Posh Syar'i */}
              <div className="flex flex-col items-center text-center">
                 <div className="w-full max-w-[300px] aspect-[4/5] rounded-t-[100px] md:rounded-t-[150px] overflow-hidden mb-4 md:mb-6 relative shadow-lg bg-white mx-auto">
                    <img 
                      src="https://www.umamascarves.co.id/wp-content/uploads/2024/07/ummama-rev-2.png" 
                      alt="Paris Original Posh Syar'i" 
                      className="w-full h-full object-cover" 
                    />
                 </div>
                 <h3 className="text-lg font-bold mb-2 md:mb-3 font-serif">Paris Original Posh Syar'i</h3>
                 <p className="text-xs text-gray-500 leading-relaxed px-2 max-w-sm">
                   Pilihan hijab syar'i untuk mengekspresikan gaya pribadi Anda dengan tetap mengikuti pedoman berpakaian yang sopan.
                 </p>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="py-12 md:py-16 bg-[#e8e2da] pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile: Stack vertically, Desktop: Horizontal row */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 overflow-hidden">
               {/* Feed Item 1 */}
               <div className="bg-white rounded-lg shadow-md max-w-[320px] w-full shrink-0">
                  <div className="p-3 flex items-center justify-between border-b border-gray-100">
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                           <img src="https://www.umamascarves.co.id/wp-content/uploads/2024/04/Cover-4-8-300x300.jpg" alt="profile" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs font-semibold">umamascarves</span>
                     </div>
                     <MoreHorizontal size={16} className="text-gray-500" />
                  </div>
                  <div className="aspect-square bg-gray-100">
                     <img src="https://www.umamascarves.co.id/wp-content/uploads/2025/04/ginee_20241120091038258_2951882380-1-300x300.jpeg" alt="feed" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3">
                     <div className="flex justify-between mb-2">
                        <div className="flex gap-3">
                           <Heart size={20} className="text-gray-700" />
                           <MessageCircle size={20} className="text-gray-700" />
                           <Send size={20} className="text-gray-700" />
                        </div>
                        <Bookmark size={20} className="text-gray-700" />
                     </div>
                     <p className="text-xs font-semibold mb-1">1,234 likes</p>
                     <p className="text-xs text-gray-600"><span className="font-semibold text-gray-900">umamascarves</span> Koleksi terbaru sudah tersedia!</p>
                  </div>
               </div>

               {/* Feed Item 2 */}
               <div className="bg-white rounded-lg shadow-md max-w-[320px] w-full shrink-0">
                  <div className="p-3 flex items-center justify-between border-b border-gray-100">
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                           <img src="https://www.umamascarves.co.id/wp-content/uploads/2024/04/Cover-4-8-300x300.jpg" alt="profile" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs font-semibold">umamascarves</span>
                     </div>
                     <MoreHorizontal size={16} className="text-gray-500" />
                  </div>
                  <div className="aspect-square bg-gray-100">
                     <img src="https://www.umamascarves.co.id/wp-content/uploads/2024/04/cover-summer-08-300x300.jpg" alt="feed" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3">
                     <div className="flex justify-between mb-2">
                        <div className="flex gap-3">
                           <Heart size={20} className="text-gray-700" />
                           <MessageCircle size={20} className="text-gray-700" />
                           <Send size={20} className="text-gray-700" />
                        </div>
                        <Bookmark size={20} className="text-gray-700" />
                     </div>
                     <p className="text-xs font-semibold mb-1">2,845 likes</p>
                     <p className="text-xs text-gray-600"><span className="font-semibold text-gray-900">umamascarves</span> Summer collection is here ✨</p>
                  </div>
               </div>

               {/* Feed Item 3 */}
               <div className="bg-white rounded-lg shadow-md max-w-[320px] w-full shrink-0">
                  <div className="p-3 flex items-center justify-between border-b border-gray-100">
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                           <img src="https://www.umamascarves.co.id/wp-content/uploads/2024/04/Cover-4-8-300x300.jpg" alt="profile" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs font-semibold">umamascarves</span>
                     </div>
                     <MoreHorizontal size={16} className="text-gray-500" />
                  </div>
                  <div className="aspect-square bg-gray-100">
                     <img src="https://www.umamascarves.co.id/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-07-at-15.33.55-300x300.jpeg" alt="feed" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3">
                     <div className="flex justify-between mb-2">
                        <div className="flex gap-3">
                           <Heart size={20} className="text-gray-700" />
                           <MessageCircle size={20} className="text-gray-700" />
                           <Send size={20} className="text-gray-700" />
                        </div>
                        <Bookmark size={20} className="text-gray-700" />
                     </div>
                     <p className="text-xs font-semibold mb-1">3,120 likes</p>
                     <p className="text-xs text-gray-600"><span className="font-semibold text-gray-900">umamascarves</span> Tampil elegan setiap saat.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white pt-10 pb-8 md:pt-16 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
             <div className="col-span-1 md:col-span-1 text-center md:text-left">
               <h3 className="text-2xl font-serif font-bold mb-4 md:mb-6">UMAMA</h3>
               <p className="text-gray-400 text-sm leading-relaxed mb-6">
                 Menghadirkan keindahan dan kenyamanan dalam setiap helai hijab untuk wanita Indonesia yang elegan dan percaya diri.
               </p>
               <div className="flex justify-center md:justify-start space-x-4">
                 <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                 <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                 <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
               </div>
             </div>
             
             <div className="text-center md:text-left">
               <h4 className="text-sm font-bold uppercase tracking-wider mb-4 md:mb-6 text-gray-200">Bantuan</h4>
               <ul className="space-y-3 text-sm text-gray-400">
                 <li><a href="#" className="hover:text-white transition-colors">Konfirmasi Pembayaran</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Panduan Ukuran</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Pengiriman</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
               </ul>
             </div>

             <div className="text-center md:text-left">
               <h4 className="text-sm font-bold uppercase tracking-wider mb-4 md:mb-6 text-gray-200">Newsletter</h4>
               <p className="text-gray-400 text-sm mb-4">Dapatkan info terbaru tentang produk dan promo spesial.</p>
               <div className="flex">
                 <input type="email" placeholder="Email Anda" className="bg-[#333] border-none text-white text-sm px-4 py-2 w-full focus:ring-1 focus:ring-secondary outline-none" />
                 <button className="bg-secondary px-4 py-2 text-white hover:bg-[#7a6d5d] transition-colors">
                   <ArrowRight size={16} />
                 </button>
               </div>
             </div>
           </div>
           
           <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
             &copy; {new Date().getFullYear()} Umama Scarves. All rights reserved.
           </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[60] overflow-hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsCartOpen(false)}
          ></div>
          
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-md bg-white shadow-xl flex flex-col h-full animate-slide-in-right">
              
              {/* Cart Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h2 className="text-lg font-serif font-bold text-gray-900">Keranjang Belanja</h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingBag size={48} className="text-gray-300 mb-4" />
                    <p className="text-gray-500">Keranjang belanja Anda kosong.</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 text-secondary font-medium hover:underline"
                    >
                      Mulai Belanja
                    </button>
                  </div>
                ) : (
                  <ul className="space-y-6">
                    {cart.map((item) => (
                      <li key={item.id} className="flex py-2 animate-fade-in-up">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3 className="line-clamp-1 mr-4"><a href="#">{item.name}</a></h3>
                              <button 
                                type="button" 
                                onClick={() => removeFromCart(item.id)}
                                className="font-medium text-gray-400 hover:text-red-500"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="font-bold text-red-600">
                              GIFTAWAY
                            </p>
                            <p className="text-gray-500">Qty: {item.quantity}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="border-t border-gray-100 px-6 py-6 bg-gray-50">
                  <p className="mt-0.5 text-sm text-gray-500 mb-6">
                    Ongkos kirim dihitung saat checkout.
                  </p>
                  <button
                    onClick={handleCheckout}
                    className="flex w-full items-center justify-center rounded-none bg-primary px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-gray-800 transition-colors"
                  >
                    CLAIM
                  </button>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      atau{' '}
                      <button
                        type="button"
                        className="font-medium text-secondary hover:text-gray-800"
                        onClick={() => setIsCartOpen(false)}
                      >
                        Lanjut Belanja
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;