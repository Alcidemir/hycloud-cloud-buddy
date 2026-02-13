import hycloudLogo from "@/assets/hycloud-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src={hycloudLogo} alt="HyCloud" className="h-9 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Infraestrutura, segurança e suporte em T.I. para empresas que querem crescer com tranquilidade.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Serviços</h4>
            <ul className="space-y-2.5">
              {["Servidores", "Virtualização", "Firewall", "Backup", "Redes", "Consultoria"].map((link) => (
                <li key={link}>
                  <a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-2.5">
              {["Diferenciais", "Tecnologias", "Contato"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Contato</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://wa.me/5567981342378" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  (67) 98134-2378
                </a>
              </li>
              <li>
                <a href="mailto:contato@hycloud.com.br" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  contato@hycloud.com.br
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Campo Grande – MS
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 HyCloud. Todos os direitos reservados.
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
