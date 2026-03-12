import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import dress2 from "@/assets/dress-2.jpg";
import dress4 from "@/assets/dress-4.jpg";
import dress6 from "@/assets/dress-6.jpg";
import dress1 from "@/assets/dress-1.jpg";

const products = [
  { name: "Ivory Silk Maxi", price: "₹12,500", image: dress2, tag: "New" },
  { name: "Navy Wrap Dress", price: "₹8,900", image: dress4 },
  { name: "Burgundy Velvet Midi", price: "₹10,200", image: dress6, tag: "Bestseller" },
  { name: "Noir Halter Gown", price: "₹15,800", image: dress1 },
];

const NewArrivalsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">Just Arrived</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground">New Arrivals</h2>
          </div>
          <a href="#" className="hidden md:inline-block font-body text-xs tracking-[0.2em] uppercase text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity">
            View All
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground font-body text-[10px] tracking-[0.15em] uppercase">
                    {product.tag}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground">
                  <Heart className="w-3.5 h-3.5" />
                </button>
              </div>
              <h3 className="font-display text-sm md:text-base text-foreground mb-1">{product.name}</h3>
              <p className="font-body text-sm text-primary">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
