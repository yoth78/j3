import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const ProductSection = () => {
  const displayedProducts = products.slice(0, 3);

  return (
    <section className="py-32 bg-background" id="products">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-sm font-black uppercase tracking-[0.3em] text-accent mb-4">
            Handpicked &amp; Roasted
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 uppercase tracking-tight leading-none">
            Our Premium<br />Collection
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed italic">
            "Straight from the cradle of coffee, handpicked and meticulously roasted to honor our heritage."
          </p>
        </motion.div>

        {/* Product Grid — 2 cols on tablet, 3 on desktop with real gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {displayedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-muted-foreground/60 font-medium italic text-lg">
            Each roast tells a story of the highlands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;