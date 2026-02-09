import { motion } from "framer-motion";
import { ArrowRight, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-glow-cyan/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-glow-violet/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container relative z-10 mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground mb-8"
        >
          <Headset className="h-3.5 w-3.5 text-primary" />
          Suporte especializado em T.I.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-6"
        >
          Tecnologia que
          <br />
          <span className="gradient-text">impulsiona seu negócio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto max-w-xl text-lg text-muted-foreground mb-10"
        >
          Soluções completas em suporte técnico, infraestrutura e segurança de T.I. 
          para sua empresa crescer com tranquilidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="gap-2 text-base px-8">
            Solicitar Orçamento <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8">
            Nossos Serviços
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "500+", label: "Clientes Atendidos" },
            { value: "24/7", label: "Suporte Disponível" },
            { value: "99.9%", label: "Satisfação" },
            { value: "10+", label: "Anos de Experiência" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-display font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
