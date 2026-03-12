import { motion } from "framer-motion";
import heroDress from "@/assets/hero-dress.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroDress}
        alt="Elegant red evening gown from Saranya's Fashion collection"
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="eager"
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-lg"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Spring / Summer 2026
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-tight text-foreground mb-6">
            Timeless
            <br />
            <span className="italic gold-text">Elegance</span>
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-8 max-w-sm">
            Discover our curated collection of exquisite dresses crafted for the modern woman who embraces sophistication.
          </p>
          <motion.a
            href="#collections"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 border border-primary text-primary font-body text-xs tracking-[0.25em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Explore Collection
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-primary/40 animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
