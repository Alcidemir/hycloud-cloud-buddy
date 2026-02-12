import { motion } from "framer-motion";
import { ArrowRight, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import cartoriosImg from "@/assets/cartorios.jpg";

const CartoriosSection = () => {
  return (
    <section id="cartorios" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card glow-border overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs text-primary mb-6 w-fit">
                <Scale className="h-3.5 w-3.5" />
                Segmento Cartórios
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Implantação do{" "}
                <span className="gradient-text">Provimento 74</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Adequação completa da infraestrutura de T.I. do seu cartório às
                exigências do Provimento 74 do CNJ — segurança da informação,
                backup, firewall, controle de acesso e conformidade.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nossa equipe conduz todo o processo de implantação e acompanhamento,
                garantindo que seu cartório esteja em conformidade com as normas vigentes.
              </p>
              <Button size="lg" className="gap-2 text-base px-8 w-fit" asChild>
                <a
                  href="https://wa.me/5567981342378?text=Olá! Tenho interesse na implantação do Provimento 74 para meu cartório."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Consultoria <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="hidden lg:block">
              <img
                src={cartoriosImg}
                alt="Ambiente de cartório com sistema digital"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CartoriosSection;
