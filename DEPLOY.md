# Deploy automático (GitHub Actions + Docker)

Cada `push` na branch `main` roda o workflow `.github/workflows/deploy.yml`:
1. Valida o build (`npm ci` + `npm run build`).
2. Conecta no servidor por SSH, atualiza o código e recria os containers.

## 1. Preparar o servidor

```bash
# como usuário de deploy (ex.: deploy ou root)
git clone https://github.com/<sua-conta>/<seu-repo>.git /opt/hycloud-site
cd /opt/hycloud-site
cp .env.example .env
nano .env   # DOMAIN=hycloud.com.br  ACME_EMAIL=alcidemir.dantas@hycloud.com.br
docker compose up -d --build
```

O usuário do deploy precisa estar no grupo docker:

```bash
sudo usermod -aG docker $USER
```

## 2. Criar a chave SSH para o GitHub

No servidor:

```bash
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_actions -N ""
cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
cat ~/.ssh/github_actions        # copie TODO o conteúdo (chave privada)
```

## 3. Cadastrar os secrets no GitHub

Repositório → **Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Valor |
|---|---|
| `SSH_HOST` | IP ou hostname do servidor |
| `SSH_USER` | usuário do deploy (ex.: `deploy`) |
| `SSH_PRIVATE_KEY` | conteúdo de `~/.ssh/github_actions` |
| `SSH_PORT` | porta SSH (opcional, padrão 22) |
| `PROJECT_PATH` | `/opt/hycloud-site` |

## 4. Testar

Faça um push em `main` ou rode manualmente em **Actions → Deploy → Run workflow**.
Os logs mostram o resultado de `docker compose ps` no final.

## Rollback

No servidor:

```bash
cd /opt/hycloud-site
git log --oneline -5
git reset --hard <commit-anterior>
docker compose up -d --build
```
