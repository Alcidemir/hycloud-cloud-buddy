import { motion } from "framer-motion";

const technologies = [
  { name: "FortiGate", category: "Firewall" },
  { name: "MikroTik", category: "Roteamento" },
  { name: "VMware", category: "Virtualização" },
  { name: "Hyper-V", category: "Virtualização" },
  { name: "Proxmox", category: "Open Source" },
  { name: "Veeam", category: "Backup" },
  { name: "Windows Server", category: "Servidor" },
  { name: "Linux", category: "Servidor" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const TechPartnersSection = () => {
  return (
    <section id="tecnologias" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Tecnologias que <span className="gradient-text">dominamos</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Trabalhamos com as principais plataformas do mercado para entregar soluções robustas e confiáveis.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              className="glass-card glow-border p-5 text-center group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="font-display font-semibold text-foreground mb-1">{tech.name}</div>
              <div className="text-xs text-muted-foreground">{tech.category}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechPartnersSection;
