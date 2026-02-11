

## Gerar novo docker-compose.yml para produção

O arquivo `docker-compose.yml` atual já está bem configurado com Traefik + SSL. Vou gerar uma versão atualizada e otimizada para o ambiente de produção Docker.

### O que será feito

Reescrever o `docker-compose.yml` com as seguintes melhorias:

- **Rede dedicada** (`hycloud-network`) para isolar os containers
- **Healthcheck** no serviço do site para monitoramento
- **Limites de recursos** (CPU e memória) para evitar consumo excessivo
- **Logs configurados** com rotação automática para não encher o disco
- **Traefik com dashboard desabilitado** e configuração de segurança
- Manter o SSL automático via Let's Encrypt
- Manter redirecionamento HTTP para HTTPS

### Arquivos alterados

| Arquivo | Ação |
|---------|------|
| `docker-compose.yml` | Reescrito com melhorias de produção |

### Instruções de deploy (no plano, para referência)

```text
1. git clone do repositório no servidor
2. cp .env.example .env (editar com domínio e e-mail reais)
3. docker compose up -d --build
```

### Detalhes técnicos

- Rede bridge customizada para comunicação entre Traefik e o site
- Logging com `json-file` limitado a 3 arquivos de 10MB cada
- Healthcheck via curl no container Nginx a cada 30s
- Deploy com `restart_policy` e limites de `memory: 256M` para o site e `memory: 128M` para o Traefik

