import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="bg-card overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 border border-primary/10 flex flex-col group relative"
    >
      <Link to={`/products/${product.id}`} className="flex flex-col h-full">
        {/* Image — taller and more dramatic */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {/* Dark gradient at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Badge */}
          <div className="absolute top-5 left-5 bg-primary text-primary-foreground px-4 py-1.5 text-xs font-black uppercase tracking-widest">
            Premium
          </div>

          {/* Arrow icon top-right */}
          <div className="absolute top-5 right-5 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="text-white w-5 h-5" />
          </div>

          {/* Stars overlaid on image bottom */}
          <div className="absolute bottom-5 left-5 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={13}
                className={i < product.rating ? "fill-amber-400 text-amber-400" : "text-white/30"}
              />
            ))}
            <span className="text-white/80 text-xs ml-1 font-semibold">4.9</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 flex flex-col flex-grow">
          <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors uppercase tracking-tight leading-tight">
            {product.name}
          </h3>

          <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-auto pt-5 border-t border-primary/10 flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">
              Ethiopian Origin
            </span>
            <span className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
              View Details
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;