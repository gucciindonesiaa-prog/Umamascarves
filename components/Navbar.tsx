import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, User, Heart, MessageCircle, ChevronDown, Video, Store, Instagram, MapPin, Mail, Phone, Send } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

// Data Lokasi Toko Offline
const storeLocations = [
  {
    name: "Umama Scarves Tanah Abang",
    address: "Ruko Blok F3 no. 9 Agropek, Tanah Abang",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/gulsoy-768x1024-162x174.jpg" 
  },
  {
    name: "Baltos",
    address: "Balubur Town Square Lt. 2 blok G-01",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/04/baltos-umamascarves1-162x174.jpg"
  },
  {
    name: "Banda",
    address: "Jl. Banda No. 21",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Banda-1-162x174.jpg"
  },
  {
    name: "Bandar Lampung",
    address: "Jl. Teuku Umar No. 7 (Depan Makam Pahlawan)",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Bandar-Lampung-162x174.jpg"
  },
  {
    name: "Bogor",
    address: "Ruko Villa Indah Pajajaran, Blok AN",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Bogor-162x174.jpg"
  },
  {
    name: "Cianjur",
    address: "Jl. KH Abdullah Bin Nuh Ruko No. 7, Pamoyanan",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Cianjur-162x174.jpg"
  },
  {
    name: "Cilacap",
    address: "Jl. Gatot Subroto, Perum. Pertamina, Gunungsimping, Cilacap",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Cilacap-162x174.jpg"
  },
  {
    name: "Cirebon",
    address: "Jl. Dr. Cipto Mangunkusumo no. 55A",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Cirebon-162x174.jpg"
  },
  {
    name: "Garut",
    address: "Jl. Siliwangi no. 18",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Garut-162x174.jpeg"
  },
  {
    name: "Gresik",
    address: "Jl. Panglima Sudirman no. 25, Sumberrejo, Gresik",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Gresik-162x174.jpg"
  },
  {
    name: "Jember",
    address: "Jl. Trunojoyo no. 83",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Jember-162x174.jpg"
  },
  {
    name: "Karawang (Ahmad Yani)",
    address: "Jl. Jendral Ahmad Yani no. 103B (Seberang GOR Panatayudha)",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Umama-Gallery-Karawang-162x174.jpg"
  },
  {
    name: "Karawang (Kertabumi)",
    address: "Jl. Kertabumi no. 59, Karawang Kulon",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Umama-Store-Karawang-162x174.jpg"
  },
  {
    name: "Kediri",
    address: "Jl. Joyoboyo No. 15A, Dandangan, Kec. Kota, Kediri",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Kediri-162x174.jpg"
  },
  {
    name: "Kudus",
    address: "Jl. Sunan Muria No. 4A, Barongan, Kota Kudus",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Kudus-1-162x174.jpg"
  },
  {
    name: "Malang",
    address: "Jl. Kawi Atas no. 36",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Umama-Store-Malang-162x174.jpg"
  },
  {
    name: "Medan",
    address: "Jl. Ir. H. Juanda No. 49 Ruko D, Sukaraja",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Medan-162x174.jpg"
  },
  {
    name: "Palembang",
    address: "Jl. Sumpah Pemuda no. 3A, Lorok Pakjo",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Palembang-1-162x174.jpg"
  },
  {
    name: "Purwakarta Super Store",
    address: "Jl. Laks. Laut RE. Martadinata no. 66",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Purwakarta-162x174.jpg"
  },
  {
    name: "Pekanbaru",
    address: "Jl. Tuanku Tambusai no. 147",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Pekanbaru-1-162x174.jpg"
  },
  {
    name: "Semarang",
    address: "Jl. Brigjen Katamso no. 20 (Toko Fashion Hijab Accessories)",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Semarang-162x174.jpg"
  },
  {
    name: "Purwakarta",
    address: "Jl. Laks. Laut RE. Martadinata No. 50, Nagri Tengah",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Umama-Store-Purwakarta-162x174.jpg"
  },
  {
    name: "Purwokerto",
    address: "Jl. Prof. HR. Boenyamin, Pakembaran, Bancarkembar",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Purwokerto-162x174.jpg"
  },
  {
    name: "Subang",
    address: "Jl. Otto Iskandardinata no. 40, Karanganyar, Kec. Subang",
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/05/Subang-1024x768-162x174.jpg"
  }
];

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAboutSubmenuOpen, setIsAboutSubmenuOpen] = useState(false);
  const [isOnlineStoreOpen, setIsOnlineStoreOpen] = useState(false);
  const [isOfflineStoreOpen, setIsOfflineStoreOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  // Notification State for Online Store
  const [showPromoNotification, setShowPromoNotification] = useState(false);

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

  // Handle click on "SHOP NOW" in Online Store
  const handleShopNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPromoNotification(true);
    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowPromoNotification(false);
    }, 3000);
  };

  // Handle click on the Notification itself
  const handlePromoRedirect = () => {
    window.open("https://wa.me/6281337672046", "_blank");
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Mobile Menu Button - Visible on all screens now */}
            <div className="flex items-center relative z-50 mr-4">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-600 hover:text-primary p-4 pointer-events-auto"
                aria-label="Open Menu"
              >
                <Menu size={28} />
              </button>
            </div>

            {/* Logo - Clickable to refresh/home */}
            <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none md:justify-start">
              <a href="/" className="font-serif text-3xl font-bold tracking-tighter text-primary pointer-events-auto">
                UMAMA
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
                className="text-gray-500 hover:text-primary transition-colors hidden sm:block"
              >
                <Heart size={20} />
              </button>
              <button 
                onClick={handleUserClick}
                className="text-gray-500 hover:text-primary transition-colors hidden sm:block pointer-events-auto"
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
      </nav>

      {/* Mobile Menu Drawer (Side Menu) */}
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer Container with Skew Effect */}
      <div 
        className={`fixed inset-y-0 left-0 z-[70] flex transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '85%' }} // Container width covers mostly half to 3/4 screen
      >
        {/* White Background with Skew */}
        <div className="relative w-full h-full">
           {/* The Skewed Shape Background */}
           <div className="absolute inset-y-0 left-0 w-[90%] bg-white transform -skew-x-6 origin-top-left -ml-4 shadow-2xl"></div>
           
           {/* Content Container (Un-skewed) */}
           <div className="relative h-full w-[90%] bg-transparent px-6 py-8 flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center mb-10 pl-2">
                <span className="font-serif text-2xl font-bold text-primary">MENU</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-red-500 transition-colors pointer-events-auto"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col space-y-6 pl-4">
                
                {/* ABOUT Menu with Submenu */}
                <div>
                  <button 
                    onClick={() => setIsAboutSubmenuOpen(!isAboutSubmenuOpen)}
                    className="flex items-center justify-between w-full text-left text-xl font-bold text-gray-800 hover:text-secondary tracking-wide pointer-events-auto group"
                  >
                    ABOUT
                    <ChevronDown size={20} className={`transform transition-transform duration-200 ${isAboutSubmenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Content */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isAboutSubmenuOpen ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col space-y-4 pl-4 border-l-2 border-gray-100 ml-1">
                      <button 
                        onClick={() => {
                          setIsAboutOpen(true);
                          setIsMenuOpen(false);
                        }}
                        className="text-left text-sm font-bold text-gray-600 hover:text-secondary tracking-wider pointer-events-auto uppercase"
                      >
                        PERJALANAN UMAMA SCARVES
                      </button>
                      <button 
                        onClick={() => {
                          setIsOnlineStoreOpen(true);
                          setIsMenuOpen(false);
                        }}
                        className="text-left text-sm font-bold text-gray-600 hover:text-secondary tracking-wider pointer-events-auto uppercase"
                      >
                        ONLINE STORE
                      </button>
                      <button 
                         onClick={() => {
                          setIsOfflineStoreOpen(true);
                          setIsMenuOpen(false);
                        }}
                        className="text-left text-sm font-bold text-gray-600 hover:text-secondary tracking-wider pointer-events-auto uppercase"
                      >
                        OFFLINE STORE UMAMA
                      </button>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gray-100 w-full"></div>
                
                <button 
                  onClick={() => {
                    setIsContactOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-xl font-bold text-gray-800 hover:text-secondary tracking-wide pointer-events-auto"
                >
                  CONTACT US
                </button>
                <div className="h-px bg-gray-100 w-full"></div>

                <a href="#" className="text-xl font-bold text-gray-800 hover:text-secondary tracking-wide pointer-events-none">
                  MY ACCOUNT
                </a>
              </div>

              {/* Promo Button in Menu */}
              <div className="mt-auto pb-8 pl-2">
                 <button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg shadow-md pointer-events-auto text-sm"
                >
                  CLAIM HADIAH
                </button>
              </div>
           </div>
        </div>
      </div>

      {/* About Us Modal */}
      {isAboutOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsAboutOpen(false)}
          ></div>
          
          {/* Content */}
          <div className="bg-[#E6DED6] w-full max-w-5xl h-[90vh] md:h-auto md:max-h-[90vh] overflow-hidden rounded-xl shadow-2xl relative z-10 flex flex-col md:flex-row animate-fade-in-up">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsAboutOpen(false)}
              className="absolute top-4 right-4 z-20 bg-white/50 hover:bg-white text-gray-800 p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {/* Left Column: Text */}
            <div className="flex-1 p-6 md:p-12 overflow-y-auto">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#2C2C2C] mb-8 leading-tight">
                Perjalanan Umama<br />Scarves
              </h2>
              <div className="w-16 h-1 bg-black mb-8"></div>

              <div className="space-y-6 text-sm md:text-base text-[#4A4A4A] leading-relaxed font-sans text-justify">
                <p>
                  Umama Scarves by Umama Scarf adalah sebuah pendekatan terhadap high end and luxury scarves by Umama Group. Perjalanan Umama Scarves dimulai dengan sudah mendominasinya Umama Scarf di lower sector to upper middle sector selama bertahun-tahun.
                </p>
                <p>
                  Sekarang, Umama Group ingin membuat sebuah gebrakan baru untuk high end and luxury sector tetapi masih dengan harga yang terjangkau. Barang-barang kami sudah tersebar di Indonesia dan luar negeri, seperti Malaysia, Hong Kong, dan Taiwan.
                </p>
                <p>
                  Dengan Umama Scarves, kami dapat memberikan jaminan bahwa para pembeli akan mendapatkan barang yang bagus dengan harga yang terjangkau. Karena di setiap bagian yang kami buat berasal dari pengalaman dan sejarah Umama Scarves selama bertahun-tahun.
                </p>
                <p>
                  Umama Scarves sangat memahami tipe syal yang disukai oleh wanita dari segala jenis usia. Untuk produk kami, Umama Scarves membutuhkan waktu lebih dari 1,5 tahun hingga perpaduan sempurna, kelembutan bahan atau mudah dibentuk. Umama Scarves juga memiliki anti budek material.
                </p>
                <p>
                  Seluruh produk Umama Scarves sudah memenuhi standar syal yang telah dikombinasikan dengan pengalaman UmamaScarves selama bertahun-tahun di bidangnya.
                </p>
              </div>

              <div className="mt-12 flex flex-col items-center md:items-start">
                <span className="font-serif text-3xl font-bold text-white drop-shadow-md">S</span>
                <span className="font-serif text-sm tracking-[0.3em] font-bold text-white uppercase mt-1">umamascarves</span>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="md:w-[45%] h-[300px] md:h-auto relative">
               <div className="absolute inset-0 bg-gradient-to-t from-[#E6DED6] to-transparent md:bg-gradient-to-l opacity-20 z-10"></div>
               <img 
                 src="https://www.umamascarves.co.id/wp-content/uploads/2024/04/journey-umamascraves1.jpg" 
                 alt="Umama Model" 
                 className="w-full h-full object-cover object-top"
               />
            </div>
          </div>
        </div>
      )}

      {/* Online Store Modal */}
      {isOnlineStoreOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOnlineStoreOpen(false)}
          ></div>

          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative z-10 animate-fade-in-up">
              {/* Header */}
              <div className="p-8 text-center border-b border-gray-100 relative">
                   <button 
                    onClick={() => setIsOnlineStoreOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2"
                  >
                    <X size={24} />
                  </button>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Online Shop Umama Scarves</h2>
                  <p className="text-gray-500 text-sm">Dapatkan produk favoritmu di Online Shop Umama Scarves ini!</p>
              </div>

              {/* Grid Links */}
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Shopee */}
                  <a href="#" onClick={handleShopNowClick} className="flex items-center justify-between bg-[#EE4D2D] text-white p-5 md:p-6 rounded-lg shadow-md hover:opacity-90 transition-opacity group">
                      <div className="flex items-center gap-4">
                          <ShoppingBag size={32} />
                          <span className="font-bold text-lg">Shopee</span>
                      </div>
                      <span className="bg-white text-[#EE4D2D] px-4 py-2 rounded-full text-xs font-bold group-hover:scale-105 transition-transform">SHOP NOW</span>
                  </a>

                  {/* WhatsApp */}
                  <a href="#" onClick={handleShopNowClick} className="flex items-center justify-between bg-[#25D366] text-white p-5 md:p-6 rounded-lg shadow-md hover:opacity-90 transition-opacity group">
                      <div className="flex items-center gap-4">
                          <MessageCircle size={32} />
                          <div className="text-left">
                              <span className="font-bold text-lg block">WhatsApp</span>
                              <span className="text-xs opacity-90 block">+62 823-1543-7848</span>
                          </div>
                      </div>
                      <span className="bg-white text-[#25D366] px-4 py-2 rounded-full text-xs font-bold group-hover:scale-105 transition-transform">SHOP NOW</span>
                  </a>

                  {/* Lazada */}
                  <a href="#" onClick={handleShopNowClick} className="flex items-center justify-between bg-[#0f146d] text-white p-5 md:p-6 rounded-lg shadow-md hover:opacity-90 transition-opacity group">
                      <div className="flex items-center gap-4">
                          <Store size={32} />
                          <span className="font-bold text-lg">Lazada</span>
                      </div>
                      <span className="bg-white text-[#0f146d] px-4 py-2 rounded-full text-xs font-bold group-hover:scale-105 transition-transform">SHOP NOW</span>
                  </a>

                  {/* Tokopedia */}
                  <a href="#" onClick={handleShopNowClick} className="flex items-center justify-between bg-[#42b549] text-white p-5 md:p-6 rounded-lg shadow-md hover:opacity-90 transition-opacity group">
                      <div className="flex items-center gap-4">
                          <ShoppingBag size={32} />
                          <span className="font-bold text-lg">Tokopedia</span>
                      </div>
                      <span className="bg-white text-[#42b549] px-4 py-2 rounded-full text-xs font-bold group-hover:scale-105 transition-transform">SHOP NOW</span>
                  </a>

                   {/* Instagram */}
                  <a href="#" onClick={handleShopNowClick} className="flex items-center justify-between text-white p-5 md:p-6 rounded-lg shadow-md hover:opacity-90 transition-opacity group bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
                      <div className="flex items-center gap-4">
                          <Instagram size={32} />
                          <span className="font-bold text-lg">Instagram</span>
                      </div>
                      <span className="bg-white text-[#E1306C] px-4 py-2 rounded-full text-xs font-bold group-hover:scale-105 transition-transform">SHOP NOW</span>
                  </a>

                  {/* TikTok */}
                  <a href="#" onClick={handleShopNowClick} className="flex items-center justify-between bg-[#000000] text-white p-5 md:p-6 rounded-lg shadow-md hover:opacity-90 transition-opacity group">
                      <div className="flex items-center gap-4">
                          <Video size={32} />
                          <span className="font-bold text-lg">TikTok</span>
                      </div>
                      <span className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold group-hover:scale-105 transition-transform">SHOP NOW</span>
                  </a>
              </div>
          </div>
        </div>
      )}

      {/* Offline Store Modal */}
      {isOfflineStoreOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOfflineStoreOpen(false)}
          ></div>

          <div className="bg-white w-full max-w-7xl max-h-[90vh] overflow-hidden rounded-xl shadow-2xl relative z-10 animate-fade-in-up flex flex-col">
              {/* Header */}
              <div className="p-6 md:p-8 text-center border-b border-gray-100 relative bg-white z-20">
                   <button 
                    onClick={() => setIsOfflineStoreOpen(false)}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 p-2"
                  >
                    <X size={28} />
                  </button>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">Offline Store Umama Scarves</h2>
                  <p className="text-gray-500 text-sm">Temukan lokasi toko kami yang terdekat dengan Anda</p>
              </div>

              {/* Grid Content */}
              <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                   {storeLocations.map((store, index) => (
                     <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full group">
                        {/* Image */}
                        <div className="h-48 overflow-hidden relative">
                           <img 
                             src={store.image} 
                             alt={store.name} 
                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                           />
                           <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col">
                           <h3 className="font-bold text-lg text-gray-900 mb-2">{store.name}</h3>
                           <div className="flex gap-2 items-start text-gray-500 text-sm mt-auto">
                              <MapPin size={16} className="shrink-0 mt-0.5 text-secondary" />
                              <p className="leading-relaxed">{store.address}</p>
                           </div>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
          </div>
        </div>
      )}

      {/* Contact Us Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsContactOpen(false)}
          ></div>

          <div className="bg-white w-full max-w-5xl overflow-y-auto max-h-[95vh] rounded-xl shadow-2xl relative z-10 animate-fade-in-up">
             {/* Close Button */}
             <button 
                onClick={() => setIsContactOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 z-20"
              >
                <X size={24} />
              </button>

             <div className="flex flex-col md:flex-row">
                {/* Left Column: Contact Info */}
                <div className="w-full md:w-5/12 p-8 md:p-12">
                   <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Contact</h2>
                   <div className="w-10 h-0.5 bg-black mb-6"></div>
                   
                   <p className="text-gray-600 text-sm mb-8">Untuk informasi lebih lanjut, silakan menghubungi:</p>

                   <div className="space-y-4 mb-10">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                            <Phone size={18} />
                         </div>
                         <div>
                            <p className="text-xs text-gray-500">Whatsapp</p>
                            <p className="text-sm font-medium text-gray-800">+62 823-1543-7848</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                            <Mail size={18} />
                         </div>
                         <div>
                            <p className="text-sm font-medium text-gray-800">marketing@umamascarves.co</p>
                         </div>
                      </div>
                   </div>

                   <h3 className="font-bold text-gray-900 mb-4">Follow us</h3>
                   <div className="flex gap-2 mb-10">
                      <div className="w-8 h-8 bg-[#EE4D2D] rounded text-white flex items-center justify-center cursor-pointer hover:opacity-80">
                         <ShoppingBag size={16} />
                      </div>
                      <div className="w-8 h-8 bg-[#42b549] rounded text-white flex items-center justify-center cursor-pointer hover:opacity-80">
                         <ShoppingBag size={16} />
                      </div>
                      <div className="w-8 h-8 bg-[#0f146d] rounded text-white flex items-center justify-center cursor-pointer hover:opacity-80">
                         <Store size={16} />
                      </div>
                      <div className="w-8 h-8 bg-black rounded text-white flex items-center justify-center cursor-pointer hover:opacity-80">
                         <Video size={16} />
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded text-white flex items-center justify-center cursor-pointer hover:opacity-80">
                         <Instagram size={16} />
                      </div>
                      <div className="w-8 h-8 bg-[#25D366] rounded text-white flex items-center justify-center cursor-pointer hover:opacity-80">
                         <MessageCircle size={16} />
                      </div>
                   </div>

                   <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                   <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                      Ruko Blok F3, No.9 Agropek, Tanah Abang DKI Jakarta Pusat, Indonesia 10240
                   </p>
                </div>

                {/* Right Column: Form */}
                <div className="w-full md:w-7/12 border-l border-gray-100 p-8 md:p-12">
                   <h2 className="text-xl font-sans text-gray-800 mb-8">Send your message</h2>
                   
                   <form className="space-y-6">
                      <div>
                         <label htmlFor="name" className="block text-xs text-gray-500 mb-1">Name</label>
                         <input type="text" id="name" className="w-full border-b border-gray-200 py-2 focus:border-black outline-none transition-colors" />
                      </div>
                      <div>
                         <label htmlFor="email" className="block text-xs text-gray-500 mb-1">E-mail</label>
                         <input type="email" id="email" className="w-full border-b border-gray-200 py-2 focus:border-black outline-none transition-colors" />
                      </div>
                      <div>
                         <label htmlFor="phone" className="block text-xs text-gray-500 mb-1">Phone Number</label>
                         <input type="tel" id="phone" className="w-full border-b border-gray-200 py-2 focus:border-black outline-none transition-colors" />
                      </div>
                      <div>
                         <label htmlFor="message" className="block text-xs text-gray-500 mb-1">Message</label>
                         <textarea id="message" rows={4} className="w-full border-b border-gray-200 py-2 focus:border-black outline-none transition-colors resize-none"></textarea>
                      </div>

                      <div className="pt-4">
                         <button type="button" className="border border-gray-300 px-8 py-2 rounded text-sm text-gray-600 hover:bg-black hover:text-white transition-all">
                            Send
                         </button>
                      </div>
                   </form>
                </div>
             </div>
          </div>
        </div>
      )}

      {/* PROMO NOTIFICATION (3 Seconds) */}
      {showPromoNotification && (
        <div 
          onClick={handlePromoRedirect}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] w-[90%] max-w-md cursor-pointer pointer-events-auto animate-fade-in-up"
        >
          <div className="bg-white/95 backdrop-blur-md border-2 border-red-600 rounded-xl shadow-2xl p-6 text-center transform transition-all hover:scale-105">
            <div className="flex justify-center mb-3">
              <div className="bg-red-100 p-3 rounded-full">
                <MessageCircle size={32} className="text-red-600" />
              </div>
            </div>
            <h3 className="text-red-600 font-extrabold text-lg md:text-xl mb-2 leading-tight">
              CLAIM HADIAH PADA<br/>ADMIN REGISTRASI SEKARANG JUGA
            </h3>
            <p className="text-gray-500 text-xs font-semibold animate-pulse">
              (Klik di sini untuk terhubung ke WhatsApp)
            </p>
          </div>
        </div>
      )}

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