import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-50"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <Coffee className="text-[#3D1F0E] w-8 h-8" />
            </motion.div>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-md">
            Garfee Coffee
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Honoring the past, brewing for the future. Ethiopian heritage in every single bean.
          </p>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-[#3D1F0E] px-8 py-4 rounded-none font-bold text-lg hover:bg-white/90 transition-colors shadow-xl uppercase tracking-widest"
          >
            Discover Our Heritage
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;