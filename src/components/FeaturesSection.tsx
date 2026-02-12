import { motion } from "framer-motion";
import { Server, Shield, Wifi, HardDrive, Monitor, Settings } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Servidores Windows & Linux",
    description: "Implantação, configuração e manutenção de servidores físicos e virtuais com alta disponibilidade.",
  },
  {
    icon: Monitor,
    title: "Virtualização",
    description: "Ambientes Hyper-V, VMware e Proxmox — consolidação de servidores com performance e economia.",
  },
  {
    icon: Shield,
    title: "Firewall & Segurança",
    description: "FortiGate e MikroTik para proteção de perímetro, VPN, controle de acesso e políticas de segurança.",
  },
  {
    icon: Wifi,
    title: "Redes & Conectividade",
    description: "Projeto, instalação e manutenção de redes cabeadas e Wi-Fi corporativas com monitoramento.",
  },
  {
    icon: HardDrive,
    title: "Backup & Recuperação",
    description: "Soluções Veeam para backup local e em nuvem, garantindo a segurança dos seus dados críticos.",
  },
  {
    icon: Settings,
    title: "Consultoria em T.I.",
    description: "Análise estratégica para alinhar a tecnologia aos objetivos do seu negócio com eficiência.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="servicos" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Infraestrutura, segurança e suporte técnico especializado para empresas de todos os portes.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="glass-card glow-border p-6 group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/15 transition-colors">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
