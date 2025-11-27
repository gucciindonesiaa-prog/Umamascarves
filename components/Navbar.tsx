import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, User, Heart, MessageCircle } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleUserClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoginModalOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '6283170566978';
    const message = 'Halo Admin Registrasi, saya ingin mendaftar akun kerja.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-primary p-2 pointer-events-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none md:justify-start">
              <a href="#" className="font-serif text-3xl font-bold tracking-tighter text-primary pointer-events-auto">
                UMAMA
              </a>
              <a href="#" className="ml-4 text-xs font-bold bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 transition-colors pointer-events-auto">
                HOME
              </a>
            </div>

            {/* Center Promo Text (Desktop) */}
            <div className="hidden md:flex flex-1 justify-center">
              <button 
                onClick={handleWhatsAppClick}
                className="text-red-600 font-bold text-lg tracking-wide hover:opacity-80 transition-opacity pointer-events-auto"
              >
                CLAIM HADIAH VOUCHER SEKARANG JUGA
              </button>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <button className="text-gray-500 hover:text-primary transition-colors hidden sm:block pointer-events-none">
                <Search size={20} />
              </button>
              <button 
                className="text-gray-500 hover:text-primary transition-colors hidden sm:block pointer-events-none"
              >
                <Heart size={20} />
              </button>
              <button 
                onClick={handleUserClick}
                className="text-gray-500 hover:text-primary transition-colors hidden sm:block pointer-events-none"
              >
                <User size={20} />
              </button>
              <button 
                onClick={onCartClick}
                className="text-gray-500 hover:text-primary transition-colors relative pointer-events-none"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg animate-fade-in-down">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <button 
                onClick={handleWhatsAppClick}
                className="block w-full px-3 py-3 text-center text-lg font-bold text-red-600 bg-red-50 rounded-lg border border-red-100 pointer-events-auto"
              >
                CLAIM HADIAH VOUCHER SEKARANG JUGA
              </button>
              <div className="pt-2 flex justify-center space-x-6 border-t border-gray-50 mt-2">
                 <button onClick={handleUserClick} className="text-gray-600 flex flex-col items-center gap-1 text-xs pointer-events-none">
                    <User size={20}/> Akun
                 </button>
                 <button className="text-gray-600 flex flex-col items-center gap-1 text-xs pointer-events-none">
                    <Search size={20}/> Cari
                 </button>
                 <button 
                   className="text-gray-600 flex flex-col items-center gap-1 text-xs pointer-events-none"
                 >
                    <Heart size={20}/> Wishlist
                 </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Login Notification Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsLoginModalOpen(false)}
          ></div>
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative z-10 animate-fade-in-up">
            <button 
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="text-center pt-2">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <User size={32} className="text-red-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">Akses Terbatas</h3>
              
              <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-6">
                <p className="text-red-800 font-medium text-sm leading-relaxed">
                  Silahkan menghubungi Admin Registrasi kami untuk mendaftarkan akun kerja.
                </p>
              </div>

              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle size={20} />
                Klik Hubungi Admin Registrasi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;