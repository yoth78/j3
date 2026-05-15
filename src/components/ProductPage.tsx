import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Coffee, Leaf, Shield, History } from "lucide-react";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/" className="text-primary hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section for Product */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <Link 
          to="/" 
          className="absolute top-28 left-6 bg-background p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-lg z-10 border border-primary/20"
        >
          <ArrowLeft size={24} />
        </Link>
      </div>

      <div className="container mx-auto px-6 -mt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Product Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card p-8 md:p-12 rounded-none shadow-xl border border-primary/10"
          >
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < product.rating ? "fill-accent text-accent" : "text-muted-foreground/30"}
                />
              ))}
              <span className="text-muted-foreground ml-2 font-medium">(4.9/5)</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 uppercase tracking-tight">
              {product.name}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed italic">
              "{product.description}"
            </p>

            {product.details && (
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-secondary p-4 rounded-none border border-primary/10">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Origin</p>
                  <p className="font-bold text-foreground">{product.details.origin}</p>
                </div>
                <div className="bg-secondary p-4 rounded-none border border-primary/10">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Altitude</p>
                  <p className="font-bold text-foreground">{product.details.altitude}</p>
                </div>
                <div className="bg-secondary p-4 rounded-none border border-primary/10">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Roast</p>
                  <p className="font-bold text-foreground">{product.details.roast}</p>
                </div>
                <div className="bg-secondary p-4 rounded-none border border-primary/10">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Flavor Profile</p>
                  <p className="font-bold text-foreground">{product.details.profile}</p>
                </div>
              </div>
            )}

            <div className="pt-8 border-t border-primary/10">
              <p className="text-sm text-muted-foreground mb-4 font-medium">To inquire about wholesale or local delivery:</p>
              <a 
                href="tel:0921555888" 
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-none font-black text-xl hover:bg-primary/90 transition-all shadow-xl active:scale-95 uppercase tracking-widest"
              >
                Call to Order: 0921555888
              </a>
            </div>
          </motion.div>

          {/* Right Column: Heritage/Details */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-none border border-primary/10 shadow-md"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                <History className="text-primary" />
                Heritage Quality
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                This roast is part of our century-long tradition. Every bean is handpicked from the highlands and roasted in small batches to preserve the delicate aromatic oils that define Ethiopian coffee.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {[
                { icon: Coffee, title: "Artisanal", text: "Small Batch" },
                { icon: Leaf, title: "Organic", text: "Fair Trade" },
                { icon: Shield, title: "Pure", text: "No Additives" }
              ].map((item, i) => (
                <div key={i} className="bg-secondary p-6 rounded-none text-center border border-primary/10">
                  <item.icon className="mx-auto mb-3 text-primary" size={24} />
                  <p className="font-bold text-foreground text-sm mb-1">{item.title}</p>
                  <p className="text-muted-foreground text-xs">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;