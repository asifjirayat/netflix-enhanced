import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div className="px-4 md:px-16 py-4 flex items-center justify-between">
        {/* Left - Logo & Navigation */}
        <div className="flex items-center space-x-8">
          <img src="/netflix.svg" alt="Netflix" className="h-6 md:h-8" />
          <nav className="hidden md:flex space-x-6 font-netflix text-sm">
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
          <div className="w-8 h-8 bg-netflix-red rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-netflix font-medium">
              U
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
