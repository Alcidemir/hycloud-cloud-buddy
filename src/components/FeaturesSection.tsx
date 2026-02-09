import { motion } from "framer-motion";
import { Server, Shield, Globe, Gauge, Code2, Database } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Edge Network",
    description: "Deploy to 40+ regions worldwide. Your content, closer to every user.",
  },
  {
    icon: Gauge,
    title: "Instant Scaling",
    description: "Automatic scaling from zero to millions. Pay only for what you use.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with built-in DDoS protection and encryption at rest.",
  },
  {
    icon: Code2,
    title: "Developer First",
    description: "CLI tools, SDKs, and APIs designed for seamless developer experience.",
  },
  {
    icon: Server,
    title: "Managed Infrastructure",
    description: "Fully managed servers, load balancers, and automated failovers.",
  },
  {
    icon: Database,
    title: "Cloud Databases",
    description: "Managed PostgreSQL, Redis, and object storage with automatic backups.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="products" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Everything you need to <span className="gradient-text">ship faster</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A complete cloud platform built for modern teams that demand performance and reliability.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="glass-card glow-border p-6 group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
