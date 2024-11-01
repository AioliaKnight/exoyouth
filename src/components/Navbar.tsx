import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavItem {
  href: string;
  label: string;
  children?: { href: string; label: string; id: string; }[];
}

const NAV_ITEMS: NavItem[] = [
  { href: '#about', label: '關於我們' },
  { 
    href: '#products', 
    label: '產品系列',
    children: [
      { id: 'featured-products', href: '#products', label: '精選產品' },
      { id: 'all-products', href: '#products-all', label: '全系列產品' }
    ]
  },
  { href: '#features', label: '產品特色' },
  { href: '#quality', label: '品質保證' }
];

const NavLink: React.FC<{
  item: NavItem;
  isActive: boolean;
  scrolled: boolean;
  onClick?: () => void;
}> = ({ item, isActive, scrolled, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(item.href);
    if (element) {
      // 調整滾動位置，考慮 navbar 高度
      const navHeight = 80; // navbar 高度
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
      onClick?.();
    }
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href={item.href}
        onClick={handleClick}
        className={cn(
          "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
          "relative overflow-hidden",
          isActive 
            ? "text-blue-600 bg-blue-50/80" 
            : scrolled 
              ? "text-gray-700 hover:text-blue-600" 
              : "text-white hover:text-white",
          "hover:bg-blue-50/20"
        )}
      >
        <span className="relative z-10">{item.label}</span>
        {/* Hover effect background */}
        <span className={cn(
          "absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 transform scale-x-0 transition-transform duration-300",
          "group-hover:scale-x-100 origin-left"
        )} />
        
        {item.children && (
          <svg
            className={cn(
              "ml-1 h-4 w-4 transition-transform duration-200",
              isOpen ? "rotate-180" : ""
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        )}
      </a>

      {item.children && isOpen && (
        <div 
          className={cn(
            "absolute left-0 mt-2 w-48 rounded-lg shadow-lg",
            "bg-white/95 backdrop-blur-sm",
            "ring-1 ring-black/5",
            "transform opacity-0 scale-95 transition-all duration-200",
            "group-hover:opacity-100 group-hover:scale-100",
            "divide-y divide-gray-100"
          )}
        >
          {item.children.map((child) => (
            <a
              key={child.id}
              href={child.href}
              onClick={handleClick}
              className={cn(
                "block px-4 py-2.5 text-sm text-gray-700",
                "hover:bg-blue-50 transition-colors duration-200",
                "first:rounded-t-lg last:rounded-b-lg"
              )}
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // 降低觸發閾值
      
      // 更新當前活動區段，考慮 navbar 高度
      const navHeight = 80;
      const sections = NAV_ITEMS.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= navHeight + 20 && rect.bottom >= navHeight;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-300",
        "h-16 sm:h-20", // 明確設定導航欄高度
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md z-40" 
          : "bg-transparent z-40",
        isOpen && "bg-white/95 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/" 
              className={cn(
                "flex items-center space-x-2 group",
                "transform transition-transform duration-200 hover:scale-105"
              )}
            >
              <Sparkles className={cn(
                "h-6 w-6 transition-all duration-200",
                scrolled ? "text-blue-600" : "text-white",
                "group-hover:text-blue-400 group-hover:rotate-12"
              )} />
              <span className={cn(
                "text-xl sm:text-2xl font-bold transition-colors duration-200",
                scrolled ? "text-gray-900" : "text-white",
                "group-hover:text-blue-600"
              )}>
                ExoYouth
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                isActive={activeSection === item.href.slice(1)}
                scrolled={scrolled}
              />
            ))}
            
            <a
              href="#contact"
              className={cn(
                "inline-flex items-center px-4 py-2 rounded-full",
                "text-sm font-medium text-white",
                "bg-gradient-to-r from-blue-600 to-blue-500",
                "hover:from-blue-700 hover:to-blue-600",
                "transition-all duration-200",
                "transform hover:-translate-y-0.5 hover:scale-105",
                "shadow-md hover:shadow-lg",
                "ml-2"
              )}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              預約諮詢
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 rounded-md transition-all duration-200",
              scrolled ? "text-gray-600" : "text-white",
              "hover:bg-blue-50/20",
              "focus:outline-none focus:ring-2 focus:ring-blue-500"
            )}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-[64px] sm:top-[80px]",
          "bg-white/95 backdrop-blur-sm shadow-lg",
          "transition-all duration-300 ease-in-out",
          "border-t border-gray-100",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(item.href);
                if (element) {
                  const navHeight = 80;
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({
                    top: elementPosition - navHeight,
                    behavior: 'smooth'
                  });
                  handleMobileNavClick();
                }
              }}
              className={cn(
                "block px-4 py-2.5 rounded-lg text-base font-medium",
                "transition-all duration-200",
                "hover:bg-blue-50",
                activeSection === item.href.slice(1)
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600"
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#contact');
              if (element) {
                const navHeight = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                  top: elementPosition - navHeight,
                  behavior: 'smooth'
                });
                handleMobileNavClick();
              }
            }}
            className={cn(
              "block px-4 py-2.5 rounded-lg",
              "text-blue-600 font-medium",
              "bg-blue-50/50 hover:bg-blue-50",
              "transition-all duration-200"
            )}
          >
            預約諮詢
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;