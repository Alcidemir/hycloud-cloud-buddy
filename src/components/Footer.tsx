import { Cloud } from "lucide-react";

const footerLinks = {
  Serviços: ["Suporte Técnico", "Gestão de T.I.", "Segurança Digital", "Redes", "Backup"],
  Empresa: ["Sobre Nós", "Diferenciais", "Blog", "Trabalhe Conosco"],
  Suporte: ["Central de Ajuda", "Abrir Chamado", "SLA", "Status"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <Cloud className="h-6 w-6 text-primary" />
              <span className="text-lg font-display font-bold">
                Hy<span className="text-primary">Cloud</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Suporte em T.I. para empresas que querem crescer com segurança e eficiência.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 HyCloud. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {["Privacidade", "Termos", "LGPD"].map((item) => (
              <a key={item} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
