import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { products } from "@/data/products";

type SearchModalProps = {
  open: boolean;
  onClose: () => void;
};

const SearchModal = ({ open, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  if (!open) return null;

  const filtered = query.trim().length > 1
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (id: string) => {
    onClose();
    setQuery("");
    navigate(`/product/${id}`);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-foreground/30 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="container pt-24 md:pt-32" onClick={(e) => e.stopPropagation()}>
        <div className="bg-card rounded-lg shadow-2xl max-w-2xl mx-auto overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
            <Search className="w-5 h-5 text-muted-foreground shrink-0" />
            <input
              autoFocus
              type="text"
              placeholder="Search for products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent font-body text-sm outline-none placeholder:text-muted-foreground"
            />
            <button onClick={onClose}>
              <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </button>
          </div>
          {filtered.length > 0 && (
            <div className="max-h-80 overflow-y-auto py-2">
              {filtered.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleSelect(p.id)}
                  className="flex items-center gap-4 w-full px-5 py-3 hover:bg-secondary transition-colors text-left"
                >
                  <img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">{p.name}</p>
                    <p className="font-body text-xs text-muted-foreground capitalize">{p.category} · ${p.price}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
          {query.trim().length > 1 && filtered.length === 0 && (
            <div className="px-5 py-8 text-center">
              <p className="font-body text-sm text-muted-foreground">No products found for "{query}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
