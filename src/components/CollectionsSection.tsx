import { motion } from "framer-motion";
import dress1 from "@/assets/dress-1.jpg";
import dress3 from "@/assets/dress-3.jpg";
import dress5 from "@/assets/dress-5.jpg";

const collections = [
  { name: "Evening Wear", image: dress1, description: "Captivating silhouettes" },
  { name: "Cocktail", image: dress3, description: "Bold & refined" },
  { name: "Bridal", image: dress5, description: "Enchanting romance" },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">Curated For You</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">Our Collections</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {collections.map((col, i) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <img
                src={col.image}
                alt={`${col.name} collection from Saranya's Fashion`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 card-overlay" />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-1">{col.description}</p>
                <h3 className="font-display text-2xl md:text-3xl text-foreground">{col.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
