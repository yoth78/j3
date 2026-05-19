import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Activity, Heart, Award, Globe, Users, History, Coffee } from "lucide-react";

const ValuesSection = () => {
  const beliefs = [
    {
      title: "Origin",
      description: "Gera & Yirgacheffe regions",
      icon: MapPin,
    },
    {
      title: "Quality Focus",
      description: "Hand-selected, carefully processed beans",
      icon: ShieldCheck,
    },
    {
      title: "Market",
      description: "Global Export Market",
      icon: Globe,
    },
    {
      title: "Approach",
      description: "Direct trade & quality control at every stage",
      icon: Activity,
    },
  ];

  const benefits = [
    {
      title: "Century of Heritage",
      text: "Nearly 100 years of coffee knowledge passed through generations.",
      icon: History,
    },
    {
      title: "Direct Relationships",
      text: "We work hand-in-hand with our farmers to ensure mutual growth.",
      icon: Users,
    },
    {
      title: "Authentic Origins",
      text: "Sourced from the very roots of coffee history.",
      icon: Award,
    },
    {
      title: "Trusted Quality",
      text: "The gold standard for the local Ethiopian market.",
      icon: Heart,
    },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* What We Believe */}
        <div id="believe" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4 uppercase tracking-tight">What We Believe</h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-card p-8 rounded-none text-center flex flex-col items-center group transition-colors hover:bg-primary hover:text-primary-foreground border border-primary/10 shadow-sm hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-white">
                  <belief.icon className="w-7 h-7 text-primary group-hover:text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary-foreground uppercase tracking-tight">{belief.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed">{belief.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Garfe Coffee */}
        <div id="coffee" className="relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 opacity-5 pointer-events-none text-primary">
             <Coffee size={400} />
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4 uppercase tracking-tight">Why Garfe Coffee</h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-8 bg-card border border-primary/10 rounded-none items-start hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-none flex items-center justify-center flex-shrink-0 border border-primary/10">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 uppercase tracking-tight">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
