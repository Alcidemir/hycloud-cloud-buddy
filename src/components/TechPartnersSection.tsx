import { motion } from "framer-motion";
import ubiquitiLogo from "@/assets/ubiquiti-logo.png";

const technologies = [
  { name: "FortiGate", category: "Firewall", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg" },
  { name: "MikroTik", category: "Roteamento", logo: "https://mikrotik.com/img/mtv2/newlogo.svg" },
  { name: "UniFi", category: "Redes", logo: ubiquitiLogo },
  { name: "Zabbix", category: "Monitoramento", logo: "https://assets.zabbix.com/img/logo/zabbix_logo_500x131.png" },
  { name: "VMware", category: "Virtualização", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg" },
  { name: "Hyper-V", category: "Virtualização", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Proxmox", category: "Open Source", logo: "https://www.proxmox.com/images/proxmox/Proxmox_logo_standard_hex_400px.png" },
  { name: "Veeam", category: "Backup", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Veeam_logo.png" },
  { name: "Windows Server", category: "Servidor", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Linux", category: "Servidor", logo: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" },
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
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              className="glass-card glow-border p-5 flex flex-col items-center gap-3 group hover:border-primary/30 transition-colors duration-300 bg-card"
            >
              <img
                src={tech.logo}
                alt={`Logo ${tech.name}`}
                className="h-8 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity bg-white rounded p-1"
                loading="lazy"
              />
              <div className="text-center">
                <div className="font-display font-semibold text-foreground text-sm">{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.category}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechPartnersSection;
