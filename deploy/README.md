# Firefly VPS Docker Deployment

This deployment path uses Docker Compose + Caddy on VPS and GitHub Actions for auto deploy.

For Chinese instructions, including Windows-first workflow:
- [`README.zh.md`](README.zh.md)

## 1. If you cloned upstream first (recommended remote layout)

Set `origin` to your own repository and keep the template repository as `upstream`.

```bash
git remote rename origin upstream
git remote add origin git@github.com:<your-name>/<your-repo>.git
git push -u origin master
```

If your default branch is `main`, replace `master` with `main`.

## 2. One-time VPS setup

1. Install Docker Engine and Docker Compose plugin.
2. Open inbound ports `80` and `443`.
3. Point your domain A record to your VPS public IP.
4. Clone your repository on VPS:

```bash
sudo mkdir -p /opt/firefly
sudo chown -R "$USER":"$USER" /opt/firefly
cd /opt/firefly
git clone <your-repo-url> .
cp .env.example .env
```

5. Edit `.env`:

```env
DOMAIN=blog.example.com
DEPLOY_BRANCH=master
```

6. Update `site_url` in `src/config/siteConfig.ts`:

```ts
site_url: "https://blog.example.com"
```

7. First deployment:

```bash
bash deploy/redeploy.sh
```

## 3. GitHub Actions auto deploy

Create repository secrets:

- `VPS_HOST`: VPS IP or domain
- `VPS_USER`: SSH user
- `VPS_SSH_KEY`: private key content
- `VPS_PORT`: SSH port (optional, default `22`)
- `VPS_DEPLOY_PATH`: absolute repository path on VPS, e.g. `/opt/firefly`

Pushing to `master` or `main` triggers `.github/workflows/deploy-vps.yml`.

## 4. Daily publish workflow

### Publish a new post

```bash
pnpm new-post my-new-post
git add .
git commit -m "post: publish my-new-post"
git push
```

### Update blog settings

```bash
git add .
git commit -m "config: update site settings"
git push
```

Any push to deploy branch triggers redeploy.

## 5. Manual fallback on VPS

```bash
cd /opt/firefly
bash deploy/redeploy.sh
```
