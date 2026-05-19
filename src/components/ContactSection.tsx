import { motion } from "framer-motion";
import { Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-24 pb-12 w-full border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-black mb-8 uppercase tracking-tight">Our Contact</h2>
            <p className="text-primary-foreground/80 text-xl mb-12 max-w-md mx-auto">
              Whether you're looking for wholesale partners or just want to talk coffee, we're here.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12">
              <a
                href="tel:0921555888,0973346333"
                className="flex items-center gap-6 group hover:translate-x-2 transition-transform"
              >
                <div className="w-14 h-14 bg-background rounded-none flex items-center justify-center border border-primary/20 group-hover:bg-accent group-hover:text-white transition-colors shadow-sm">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-primary-foreground/60 font-bold uppercase tracking-widest">Call Us</p>
                  <p className="text-2xl font-black uppercase">0921555888,0973346333</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-background rounded-none flex items-center justify-center border border-primary/20 group-hover:bg-accent group-hover:text-white transition-colors shadow-sm">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-primary-foreground/60 font-bold uppercase tracking-widest">Location</p>
                  <p className="text-2xl font-black uppercase">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        <div className="pt-12 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter uppercase">Garfee Coffee</span>
          </div>
          <p className="text-primary-foreground/60 text-sm uppercase tracking-tighter">
            © {new Date().getFullYear()} Garfe Coffee Company. All rights reserved.
          </p>
          <div className="text-2xl font-black text-white/5 uppercase tracking-tighter">
            THANK YOU
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
