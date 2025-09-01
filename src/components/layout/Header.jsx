import useScrollPosition from "../../hooks/useScrollPosition.js";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark/95 backdrop-blur-sm"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="px-4 md:px-16 py-4 flex items-center justify-between">
        {/* Left - Logo & Navigation */}
        <div className="flex items-center space-x-8">
          <img
            src="/streamflix-logo-full.svg"
            alt="Streamflix"
            className="w-auto h-[32px]"
          />
          <nav className="hidden md:flex space-x-6 font-helvetica text-sm">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              TV Shows
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Movies
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              New & Popular
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              My List
            </a>
          </nav>
        </div>

        {/* Right - User Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300 transition-colors">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
          <button className="text-white hover:text-gray-300 transition-colors">
            <BellIcon className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-helvetica font-medium">
              U
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
