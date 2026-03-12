import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import type { Product } from "@/data/products";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { isInWishlist, toggleItem } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden rounded-lg bg-muted mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-card/90 backdrop-blur-sm text-foreground font-body text-[10px] tracking-wider uppercase rounded-full">
            {product.tag}
          </span>
        )}
      </Link>
      <div className="flex items-start justify-between gap-2">
        <Link to={`/product/${product.id}`} className="min-w-0">
          <h3 className="font-body text-sm font-medium text-foreground truncate group-hover:text-muted-foreground transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="font-body text-sm font-semibold">${product.price}</span>
            {product.originalPrice && (
              <span className="font-body text-xs text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </Link>
        <button
          onClick={() => toggleItem(product)}
          className="shrink-0 p-1.5 mt-0.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Heart className={`w-4 h-4 ${wishlisted ? "fill-accent text-accent" : ""}`} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
