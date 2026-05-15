import { motion } from "framer-motion";
import { History } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-[#D4A373] mb-4">
              <History className="w-6 h-6" />
              <span className="font-bold tracking-widest uppercase text-sm">Our Legacy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#4B2C20] mb-8 leading-tight">
              About Us
            </h2>
            <div className="space-y-6 text-lg text-[#4B2C20]/80 leading-relaxed">
              <p>
                Garfe Coffee is a proudly Ethiopian coffee company with
                roots that stretch back nearly a century.
              </p>
              <p>
                Our story began in <span className="text-[#4B2C20] font-semibold">1930 E.C.</span>, when our grandparents
                cultivated and traded coffee as a family tradition. Passed
                down through generations, this passion for coffee grew
                stronger when our father began selling Yirgacheffe coffee
                beans in Addis Ababa.
              </p>
              <p>
                Building on this legacy, Garfe Coffee Company was
                officially established in <span className="text-[#4B2C20] font-semibold">2008 E.C.</span> Today, we serve the
                Ethiopian market with a deep commitment to quality,
                heritage, and sustainability.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl relative">
                  <img
                    src="https://storage.googleapis.com/dala-prod-public-storage/dala-video/references/8125c7aa-d9dd-4e40-b993-5621fdf4e946/1778502193554_692699b7_4_2.jpg"
                    alt="Garfe Coffee Bean Selection"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4B2C20]/40 to-transparent" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                   <img
                    src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/25b24299-ca93-4efa-9c3b-7916952734be/ethiopian-coffee-farmer-jpg-c36371cb-1775469301968.webp"
                    alt="Traditional Coffee Farming"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-12 space-y-4">
                 <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative">
                  <img
                    src="https://storage.googleapis.com/dala-prod-public-storage/attachments/8125c7aa-d9dd-4e40-b993-5621fdf4e946/1778342801946_4__2_.jpg"
                    alt="Garfe Coffee Heritage and Artisanal Production"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4B2C20]/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-sm font-bold uppercase tracking-wider opacity-80 mb-1">Our Heritage</p>
                    <h3 className="text-xl font-bold">Time-honored quality</h3>
                  </div>
                </div>
                <div className="bg-[#D4A373] aspect-square rounded-3xl flex items-center justify-center p-6 shadow-xl text-center">
                    <p className="text-white font-black text-lg leading-tight uppercase tracking-tighter">100 Years of Passion</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;