import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const SiteFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <footer className="border-t border-border bg-card mt-20">
      {/* Newsletter */}
      <div className="container py-16 text-center">
        <h3 className="font-display text-2xl md:text-3xl mb-2">Stay in the Loop</h3>
        <p className="font-body text-sm text-muted-foreground mb-6 max-w-md mx-auto">
          Subscribe for exclusive drops, style tips, and 10% off your first order.
        </p>
        <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 bg-background border border-border rounded font-body text-sm outline-none focus:border-foreground transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="border-t border-border">
        <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-lg">
              Style<span className="italic">Aura</span>
            </span>
            <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
              Trendy, affordable fashion for everyone. Redefining style since 2024.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-wider uppercase font-semibold mb-3">Shop</h4>
            <ul className="space-y-2">
              {["Men's Wear", "Women's Wear", "Accessories", "Footwear"].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-wider uppercase font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-wider uppercase font-semibold mb-3">Follow</h4>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
                <a key={i} href="#" className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center">
        <p className="font-body text-xs text-muted-foreground">
          © 2026 StyleAura. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
