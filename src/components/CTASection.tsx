import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nome: "", empresa: "", telefone: "", email: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, empresa, telefone, email, mensagem } = form;
    if (!nome.trim() || !telefone.trim()) {
      toast({ title: "Preencha ao menos seu nome e telefone.", variant: "destructive" });
      return;
    }
    const text = `Olá! Meu nome é ${nome}${empresa ? ` da empresa ${empresa}` : ""}. Telefone: ${telefone}${email ? `. E-mail: ${email}` : ""}${mensagem ? `. Mensagem: ${mensagem}` : ""}`;
    window.open(`https://wa.me/5567981342378?text=${encodeURIComponent(text)}`, "_blank");
    toast({ title: "Redirecionando para o WhatsApp..." });
  };

  return (
    <section id="contato" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card glow-border p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 hero-glow opacity-50" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Fale com a <span className="brand-text">HyCloud</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Solicite um orçamento ou tire suas dúvidas. Respondemos rápido!
              </p>

              <div className="space-y-5 mb-8">
                {[
                  { icon: Phone, label: "WhatsApp", value: "(67) 98134-2378", href: "https://wa.me/5567981342378" },
                  { icon: Mail, label: "E-mail", value: "contato@hycloud.com.br", href: "mailto:contato@hycloud.com.br" },
                  { icon: MapPin, label: "Localização", value: "Campo Grande – MS" },
                ].map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="gap-2 text-base px-8" asChild>
                <a
                  href="https://wa.me/5567981342378?text=Olá! Gostaria de saber mais sobre os serviços da HyCloud."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Seu nome *"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  maxLength={100}
                  className="bg-secondary/50 border-border/60"
                />
                <Input
                  placeholder="Empresa"
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  maxLength={100}
                  className="bg-secondary/50 border-border/60"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Telefone / WhatsApp *"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  maxLength={20}
                  className="bg-secondary/50 border-border/60"
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="bg-secondary/50 border-border/60"
                />
              </div>
              <Textarea
                placeholder="Sua mensagem"
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                maxLength={1000}
                rows={4}
                className="bg-secondary/50 border-border/60"
              />
              <Button type="submit" size="lg" className="w-full gap-2 text-base">
                Enviar via WhatsApp <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
