import { Instagram, Facebook, Twitter } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          <div>
            <h3 className="font-display text-lg gold-text mb-4 tracking-wider">Saranya's Fashion</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Crafting timeless elegance for the modern woman since 2020.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-4">Shop</h4>
            <ul className="space-y-2">
              {["New Arrivals", "Evening Wear", "Cocktail Dresses", "Bridal"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-4">Help</h4>
            <ul className="space-y-2">
              {["Shipping & Returns", "Size Guide", "Contact Us", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Instagram className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground tracking-wider">
            © 2026 Saranya's Fashion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
