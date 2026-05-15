import { motion } from "framer-motion";
import { Target, Leaf, CheckCircle2 } from "lucide-react";

const MissionSection = () => {
  const points = [
    "Fair and transparent compensation",
    "Sustainable farming practices",
    "Consistent, high-quality coffee beans",
    "Ethical sourcing from farm to cup"
  ];

  return (
    <section id="mission" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-none mb-6"
          >
            <Target className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Our Mission</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 uppercase tracking-tight">
            Quality for Every Discerning Palate
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed italic">
            "To bring the world’s finest Ethiopian coffee to discerning palates while creating sustainable livelihoods for the farmers who grow it."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/25b24299-ca93-4efa-9c3b-7916952734be/ethiopian-coffee-farmer-jpg-c36371cb-1775469301968.webp"
              alt="Ethiopian Coffee Farmer"
              className="rounded-none shadow-xl w-full aspect-video md:aspect-square object-cover border border-primary/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 uppercase tracking-tight">
                <Leaf className="text-primary" />
                Exceptional Farming
              </h3>
              <p className="text-lg text-muted-foreground">
                We work directly with smallholder farmers in the Gera region of Ethiopia, 
                one of the historic birthplaces of coffee cultivation, dating back over a thousand years.
              </p>
            </div>

            <div className="grid gap-4">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-card p-4 rounded-none shadow-sm border border-primary/10"
                >
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-foreground/80">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;