import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contato" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card glow-border p-12 md:p-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 hero-glow opacity-50" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Pronto para ter um T.I.{" "}
                <span className="gradient-text">sem preocupações?</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Entre em contato e descubra como podemos transformar a tecnologia da sua empresa.
              </p>
              <Button size="lg" className="gap-2 text-base px-8">
                Solicitar Orçamento <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "Telefone", value: "(11) 9999-9999" },
                { icon: Mail, label: "E-mail", value: "contato@hycloud.com.br" },
                { icon: MapPin, label: "Localização", value: "São Paulo, SP" },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{info.label}</div>
                    <div className="text-sm font-medium text-foreground">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
