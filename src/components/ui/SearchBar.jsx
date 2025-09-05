import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
      console.log("Searching for:", searchTerm);
    }
  };

  return (
    <div className="relative flex items-center">
      {/* Render when isOpen is true */}
      <AnimatePresence>
        {isOpen && (
          <motion.form
            onSubmit={handleSubmit}
            className="flex mr-2"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search movies..."
              className="bg-dark border border-gray-500 rounded-sm px-2 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 w-64 md:w-48 h-auto mr-2 text-sm"
              autoFocus
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            />
          </motion.form>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={handleToggle}
        className="text-white hover:text-gray-300 transition-colors cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
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
