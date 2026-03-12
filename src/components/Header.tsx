import { useState } from "react";
import { Menu, X, ShoppingBag, Search, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["New In", "Collections", "Evening Wear", "Bridal", "Sale"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <h1 className="font-display text-xl md:text-2xl tracking-widest uppercase gold-text font-semibold">
            Saranya's Fashion
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 ml-12">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Search className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          <Heart className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors hidden sm:block" />
          <div className="relative">
            <ShoppingBag className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-primary text-primary-foreground text-[9px] flex items-center justify-center font-bold">
              0
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border overflow-hidden bg-background"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="px-6 py-3 font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
