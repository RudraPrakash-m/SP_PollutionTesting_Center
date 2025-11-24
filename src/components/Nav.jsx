import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = ({ scrollToSection, refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navLinks = [
    { name: "Home", ref: refs.heroRef },
    { name: "About", ref: refs.aboutRef },
    { name: "Services", ref: refs.servicesRef },
    { name: "Gallery", ref: refs.sliderRef },
    { name: "Book Slot", ref: refs.contactRef },
    { name: "Contact", ref: refs.contactInfoRef },
  ];

  // Detect currently visible section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // offset for navbar height
      for (let link of navLinks) {
        if (link.ref.current) {
          const sectionTop = link.ref.current.offsetTop;
          const sectionHeight = link.ref.current.offsetHeight;
          if (
            scrollPos >= sectionTop &&
            scrollPos < sectionTop + sectionHeight
          ) {
            setActiveSection(link.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.img
          src="../../public/logo.png"
          alt="Logo"
          className="w-12 h-12 rounded-full cursor-pointer object-cover" // smaller size
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection(refs.heroRef)}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className="relative cursor-pointer text-gray-800 font-medium"
              onClick={() => scrollToSection(link.ref)}
            >
              <span
                className={`transition-colors ${
                  activeSection === link.name
                    ? "text-blue-600"
                    : "hover:text-blue-600"
                }`}
              >
                {link.name}
              </span>

              {/* Active underline */}
              {activeSection === link.name && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 rounded"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 p-2 rounded-md hover:bg-gray-200 transition"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg"
        >
          <ul className="flex flex-col gap-4 p-6">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                className={`cursor-pointer font-medium transition ${
                  activeSection === link.name
                    ? "text-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  scrollToSection(link.ref);
                  setMenuOpen(false);
                }}
              >
                {link.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
