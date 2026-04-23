import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gold/15"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        
        {/* Logo */}
        <a href="#" className="flex items-center group focus-gold rounded">
          <img
            src={scrolled ? "src\\assets\\logo-dark.png" : "src\\assets\\logo-light.png"} // use one or two logos
            alt="Logo"
            className="h-10 w-auto transition-all duration-500 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className={`font-sans text-sm hover:text-gold transition-colors duration-200 tracking-wide focus-gold rounded ${
                scrolled ? "text-juniper/70" : "text-ivory/80"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNav("#contact")}
            className={`font-sans text-sm px-5 py-2.5 rounded-full transition-all duration-200 focus-gold border ${
              scrolled
                ? "text-juniper border-juniper/20 hover:border-gold hover:text-gold"
                : "text-ivory/80 border-ivory/25 hover:border-gold hover:text-gold"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => handleNav("#contact")}
            className="font-sans text-sm font-medium text-white bg-gold hover:bg-gold-light px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg focus-gold"
          >
            Book Free Trial
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 focus-gold rounded transition-colors ${
            scrolled ? "text-juniper" : "text-ivory"
          }`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gold/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="font-sans text-base text-juniper/80 hover:text-gold text-left transition-colors focus-gold rounded py-1"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gold/10 flex flex-col gap-3">
                <button
                  onClick={() => handleNav("#contact")}
                  className="w-full font-sans text-sm font-medium text-white bg-gold px-5 py-3 rounded-full transition-all"
                >
                  Book Free Trial
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}