import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-styleaura.jpg";
import categoryMen from "@/assets/category-men.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import productAccessories from "@/assets/product-accessories.jpg";
import productFootwear from "@/assets/product-footwear.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const featuredProducts = products.filter((p) => p.tag === "Bestseller" || p.tag === "Trending" || p.tag === "New").slice(0, 4);
const trendingProducts = products.slice(0, 4);

const categories = [
  { name: "Men's Wear", image: categoryMen, slug: "men" },
  { name: "Women's Wear", image: categoryWomen, slug: "women" },
  { name: "Accessories", image: productAccessories, slug: "accessories" },
  { name: "Footwear", image: productFootwear, slug: "footwear" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-[85vh] md:h-[90vh] overflow-hidden">
        <img
          src={heroImage}
          alt="StyleAura latest fashion collection"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
        <div className="relative z-10 container h-full flex flex-col justify-end pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary-foreground/80 mb-3">
              Spring/Summer 2026
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-4">
              Discover Your
              <br />
              <span className="italic">Signature Style</span>
            </h2>
            <p className="font-body text-sm md:text-base text-primary-foreground/70 max-w-md mb-8">
              Curated fashion for those who dare to stand out. New arrivals weekly.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-card text-foreground font-body text-sm font-medium tracking-wide rounded hover:bg-card/90 transition-colors"
            >
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Browse</p>
            <h2 className="font-display text-2xl md:text-4xl">Shop by Category</h2>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-1 font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/shop?category=${cat.slug}`}
                className="group block relative aspect-[4/5] overflow-hidden rounded-lg"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-lg md:text-xl text-primary-foreground">{cat.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Handpicked</p>
              <h2 className="font-display text-2xl md:text-4xl">Featured Products</h2>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-1 font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              See More <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="container py-16 md:py-24">
        <div className="relative overflow-hidden rounded-2xl bg-secondary px-8 py-16 md:px-16 md:py-20 text-center">
          <h2 className="font-display text-3xl md:text-5xl mb-4">Effortless Style,<br /><span className="italic">Everyday</span></h2>
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-md mx-auto mb-8">
            Fashion that moves with you. Timeless pieces designed for real life.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide rounded hover:opacity-90 transition-opacity"
          >
            Explore Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Trending */}
      <section className="container pb-16 md:pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">What's Hot</p>
            <h2 className="font-display text-2xl md:text-4xl">Trending Now</h2>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-1 font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
