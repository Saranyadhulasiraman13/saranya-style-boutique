import productMen1 from "@/assets/product-men-1.jpg";
import productMen2 from "@/assets/product-men-2.jpg";
import productMen3 from "@/assets/product-men-3.jpg";
import productWomen1 from "@/assets/product-women-1.jpg";
import productWomen2 from "@/assets/product-women-2.jpg";
import productWomen3 from "@/assets/product-women-3.jpg";
import productAccessories from "@/assets/product-accessories.jpg";
import productFootwear from "@/assets/product-footwear.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "men" | "women" | "accessories" | "footwear";
  tag?: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  description: string;
  rating: number;
  reviews: { name: string; rating: number; comment: string; date: string }[];
};

export const products: Product[] = [
  {
    id: "1",
    name: "Linen Casual Shirt",
    price: 59.99,
    originalPrice: 79.99,
    image: productMen1,
    category: "men",
    tag: "Sale",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Beige", hex: "#D4C5A9" },
      { name: "White", hex: "#FAFAFA" },
      { name: "Navy", hex: "#1B2A4A" },
    ],
    description: "A relaxed-fit linen shirt perfect for warm days. Crafted from 100% premium linen with a soft hand feel and breathable construction. Features a classic collar and single chest pocket.",
    rating: 4.5,
    reviews: [
      { name: "Alex M.", rating: 5, comment: "Perfect summer shirt. Love the fabric quality!", date: "2026-02-15" },
      { name: "Jordan K.", rating: 4, comment: "Fits great, slightly wrinkles but that's linen.", date: "2026-01-28" },
    ],
  },
  {
    id: "2",
    name: "Modern Fit Blazer",
    price: 149.99,
    image: productMen2,
    category: "men",
    tag: "Trending",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Charcoal", hex: "#36454F" },
    ],
    description: "A contemporary blazer with a modern slim fit. Constructed from premium wool-blend fabric with half-canvas lining. Perfect for both business and smart-casual occasions.",
    rating: 4.8,
    reviews: [
      { name: "Chris D.", rating: 5, comment: "Stunning blazer. The fit is impeccable.", date: "2026-03-01" },
      { name: "Sam R.", rating: 5, comment: "Worth every penny. High quality construction.", date: "2026-02-20" },
    ],
  },
  {
    id: "3",
    name: "Oversized Comfort Hoodie",
    price: 69.99,
    image: productMen3,
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Olive", hex: "#6B7B3A" },
      { name: "Black", hex: "#1A1A1A" },
      { name: "Grey", hex: "#9E9E9E" },
    ],
    description: "An oversized hoodie in heavyweight cotton fleece. Features a kangaroo pocket, ribbed cuffs, and a relaxed drop-shoulder silhouette for effortless streetwear styling.",
    rating: 4.3,
    reviews: [
      { name: "Tyler B.", rating: 4, comment: "Super comfortable and warm. Great color.", date: "2026-02-10" },
    ],
  },
  {
    id: "4",
    name: "Blush Knit Sweater",
    price: 89.99,
    image: productWomen1,
    category: "women",
    tag: "New",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Blush", hex: "#E8B4B8" },
      { name: "Cream", hex: "#FFF5E1" },
    ],
    description: "A cozy chunky-knit sweater in a beautiful blush tone. Crafted from a soft wool-blend yarn with a relaxed mock-neck silhouette. Pair with a pleated skirt or jeans.",
    rating: 4.7,
    reviews: [
      { name: "Emma L.", rating: 5, comment: "So soft and the color is beautiful!", date: "2026-03-05" },
      { name: "Sophie W.", rating: 4, comment: "Lovely sweater, runs slightly large.", date: "2026-02-28" },
    ],
  },
  {
    id: "5",
    name: "Cream Blazer Dress",
    price: 129.99,
    image: productWomen2,
    category: "women",
    tag: "Bestseller",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Cream", hex: "#F5F0E8" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    description: "An elegant blazer dress that transitions effortlessly from office to evening. Tailored from crepe fabric with a flattering belted waist and structured shoulders.",
    rating: 4.9,
    reviews: [
      { name: "Olivia R.", rating: 5, comment: "Absolutely gorgeous. Got so many compliments!", date: "2026-03-08" },
      { name: "Maya T.", rating: 5, comment: "The perfect workwear-to-evening piece.", date: "2026-02-25" },
      { name: "Ava P.", rating: 5, comment: "Luxurious fabric and perfect fit.", date: "2026-01-30" },
    ],
  },
  {
    id: "6",
    name: "Turtleneck & Trouser Set",
    price: 109.99,
    originalPrice: 139.99,
    image: productWomen3,
    category: "women",
    tag: "Sale",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black/Camel", hex: "#1A1A1A" },
      { name: "Navy/Grey", hex: "#1B2A4A" },
    ],
    description: "A chic two-piece set featuring a fitted turtleneck and wide-leg pleated trousers. Made from stretch-jersey top and structured woven trousers for a polished modern look.",
    rating: 4.6,
    reviews: [
      { name: "Zara K.", rating: 5, comment: "Love this set! So versatile and comfortable.", date: "2026-03-02" },
    ],
  },
  {
    id: "7",
    name: "Gold Accessories Set",
    price: 79.99,
    image: productAccessories,
    category: "accessories",
    tag: "Popular",
    sizes: ["One Size"],
    colors: [
      { name: "Gold", hex: "#D4A574" },
      { name: "Silver", hex: "#C0C0C0" },
    ],
    description: "A curated set of minimalist gold accessories including a chain necklace, hoop earrings, and a sleek bangle. Made from 18k gold-plated stainless steel for lasting shine.",
    rating: 4.4,
    reviews: [
      { name: "Grace H.", rating: 4, comment: "Beautiful pieces. Great for everyday wear.", date: "2026-02-18" },
    ],
  },
  {
    id: "8",
    name: "Classic White Sneakers",
    price: 99.99,
    image: productFootwear,
    category: "footwear",
    tag: "Essential",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    colors: [
      { name: "White", hex: "#FAFAFA" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    description: "Timeless white leather sneakers with a clean minimal design. Features a cushioned insole, durable rubber outsole, and premium full-grain leather upper. The wardrobe essential.",
    rating: 4.7,
    reviews: [
      { name: "Noah S.", rating: 5, comment: "Perfect everyday shoes. Clean and comfortable.", date: "2026-03-10" },
      { name: "Liam J.", rating: 4, comment: "Great quality leather. Takes a few days to break in.", date: "2026-02-22" },
    ],
  },
];
