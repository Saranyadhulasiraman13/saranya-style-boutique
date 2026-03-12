import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Sparkles } from "lucide-react";
import aboutStudio from "@/assets/about-studio.jpg";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const values = [
  {
    icon: Sparkles,
    title: "Trendy & Timeless",
    description: "We blend current trends with timeless design so every piece stays relevant season after season.",
  },
  {
    icon: Heart,
    title: "Affordable Luxury",
    description: "Premium quality at fair prices. We believe great style shouldn't break the bank.",
  },
  {
    icon: Leaf,
    title: "Conscious Fashion",
    description: "Sustainably sourced materials and ethical manufacturing are at the core of everything we create.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="container pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">Our Story</p>
            <h1 className="font-display text-3xl md:text-5xl leading-tight mb-6">
              Fashion That
              <br />
              <span className="italic">Speaks to You</span>
            </h1>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              StyleAura was born from a simple idea: everyone deserves to look and feel amazing without overspending. Founded in 2024, we started as a small online boutique with a big vision — to make trendy, high-quality fashion accessible to everyone.
            </p>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
              Today, we curate collections that celebrate individuality, blending contemporary streetwear with elegant classics. Every piece is thoughtfully designed to empower your personal style journey.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm font-medium rounded hover:opacity-90 transition-opacity"
            >
              Shop Our Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <img
              src={aboutStudio}
              alt="StyleAura design studio"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">What We Stand For</p>
            <h2 className="font-display text-2xl md:text-4xl">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center px-6"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <val.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-display text-lg mb-2">{val.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "50K+", label: "Happy Customers" },
            { number: "200+", label: "Styles Available" },
            { number: "15+", label: "Countries Shipped" },
            { number: "4.8", label: "Average Rating" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="font-display text-3xl md:text-4xl mb-1">{stat.number}</p>
              <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default About;
