import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const differentials = [
  "Atendimento humanizado e personalizado",
  "Equipe certificada e em constante atualização",
  "Resposta rápida — SLA de até 2 horas",
  "Monitoramento proativo 24/7",
  "Relatórios mensais de desempenho",
  "Sem fidelidade — confiança que se conquista",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Quem é a <span className="gradient-text">HyCloud?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A HyCloud nasceu com a missão de simplificar a tecnologia para empresas. 
              Acreditamos que T.I. não deve ser uma dor de cabeça, mas sim uma aliada estratégica 
              para o crescimento do seu negócio.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Com mais de 10 anos de experiência no mercado, oferecemos suporte técnico 
              especializado, infraestrutura robusta e consultoria personalizada para empresas 
              que querem focar no que realmente importa: seus resultados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            id="diferenciais"
          >
            <h3 className="text-xl font-display font-semibold mb-6">
              Nossos Diferenciais
            </h3>
            <div className="space-y-4">
              {differentials.map((diff) => (
                <div
                  key={diff}
                  className="flex items-start gap-3 glass-card p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-secondary-foreground">{diff}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
