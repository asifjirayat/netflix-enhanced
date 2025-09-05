import { useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition.js";
import {
  MagnifyingGlassIcon,
  BellIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../ui/SearchBar.jsx";

const Header = () => {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Trending", href: "/trending" },
    { name: "Popular", href: "/popular" },
    { name: "Top Rated", href: "/top-rated" },
    { name: "Now Playing", href: "/now-playing" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark/95 backdrop-blur-sm"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="h-20 px-4 md:px-16 py-4 flex items-center justify-between">
        {/* Left - Logo & Navigation */}
        <div className="flex items-center space-x-8">
          <Link to="/">
            <img
              src="/streamflix-logo-full.svg"
              alt="Streamflix"
              className="w-auto h-[32px]"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6 font-helvetica text-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-white font-medium"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right - User Actions */}
        <div className="flex items-center space-x-4">
          <SearchBar />
          <button className="text-white hover:text-gray-300 transition-colors">
            <BellIcon className="w-5 h-5" />
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>

          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-helvetica font-medium">
              U
            </span>
          </div>
        </div>
      </div>

      {/* Mobile navigation - slides below header */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-sm border-t border-gray-700">
          <nav className="px-4 py-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-helvetica text-sm transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-white font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
