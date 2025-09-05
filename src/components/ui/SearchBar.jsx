import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Toggle input visibility
  const handleToggle = () => {
    if (isOpen) setSearchTerm("");
    setIsOpen(!isOpen);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative flex items-center">
      {/* Render when isOpen is true */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex items-center mr-2 overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut", type: "tween" }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="flex"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{
                duration: 0.3,
                delay: 0.1,
                ease: "easeInOut",
              }}
            >
              <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search movies..."
                className="bg-dark border border-gray-500 rounded-sm px-2 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 w-64 md:w-48 h-auto mr-2 text-sm"
                autoFocus
              />
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={handleToggle}
        className="text-white hover:text-gray-300 transition-colors cursor-pointer"
        whileHover={{ scale: 1.051 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? (
            <XMarkIcon className="w-5 h-5" />
          ) : (
            <MagnifyingGlassIcon
              className="w-5 h-5
        "
            />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default SearchBar;
