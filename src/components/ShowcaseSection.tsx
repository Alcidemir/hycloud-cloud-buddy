import { motion } from "framer-motion";
import showcaseImg from "@/assets/showcase-infra.jpg";

const ShowcaseSection = () => {
  return (
    <section className="relative py-8 -mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card glow-border overflow-hidden"
        >
          <img
            src={showcaseImg}
            alt="Profissional HyCloud configurando infraestrutura de rede"
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
