# Firefly：Windows 开发 + Docker 部署到 VPS（含自动发布）

这份文档适用于以下场景：

- 你先克隆了原作者仓库；
- 现在要切换到你自己的 GitHub 仓库管理；
- 在 VPS 上通过 Docker 部署；
- 之后发文或改配置只需 `git push` 自动上线。

## 0. 目标结构

- `origin`：你的 GitHub 仓库（发布来源）
- `upstream`：原作者仓库（后续同步更新）
- VPS 目录：`/opt/firefly`（可按需改）
- 自动部署：`.github/workflows/deploy-vps.yml`

## 1. Windows 本地：接管仓库到你自己的 GitHub

在 GitHub 先新建一个空仓库（不要初始化 README）。

然后在项目根目录 PowerShell 执行：

```powershell
git branch --show-current
git remote -v
```

如果当前 `origin` 还是原作者仓库，执行：

```powershell
git remote rename origin upstream
git remote add origin git@github.com:<你的用户名>/<你的仓库名>.git
```

推送到你的仓库（按实际分支替换 `master`）：

```powershell
git push -u origin master
```

再次确认：

```powershell
git remote -v
```

预期：`origin` 指向你的仓库，`upstream` 指向原作者仓库。

## 2. 首次提交部署文件

确保仓库已有这些部署文件：

- `Dockerfile`
- `docker-compose.yml`
- `Caddyfile`
- `.env.example`
- `deploy/redeploy.sh`
- `.github/workflows/deploy-vps.yml`

提交并推送：

```powershell
git add .
git commit -m "chore: add vps docker deployment workflow"
git push
```

## 3. VPS 一次性初始化

以下以 Ubuntu 为例。

### 3.1 安装 Docker 与 Compose 插件

```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker $USER
```

重新登录 SSH 让组权限生效。

### 3.2 开放端口

如果你使用 UFW：

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

### 3.3 拉取仓库并初始化环境变量

```bash
sudo mkdir -p /opt/firefly
sudo chown -R $USER:$USER /opt/firefly
cd /opt/firefly
git clone https://github.com/<你的用户名>/<你的仓库名>.git .
cp .env.example .env
```

编辑 `.env`：

```env
DOMAIN=blog.example.com
DEPLOY_BRANCH=master
```

`DEPLOY_BRANCH` 必须与你实际发布分支一致（`master` 或 `main`）。

## 4. 站点域名配置

1. 修改 `src/config/siteConfig.ts`：

```ts
site_url: "https://blog.example.com"
```

2. 在 DNS 控制台添加 A 记录到 VPS 公网 IP。

## 5. 首次部署与验证

在 VPS 执行：

```bash
cd /opt/firefly
bash deploy/redeploy.sh
```

检查状态：

```bash
docker compose ps
docker compose logs -f --tail=100
```

访问：

- `https://你的域名`

Caddy 会自动申请 HTTPS 证书。

## 6. GitHub Actions 自动部署配置

在 GitHub 仓库添加 Secrets：

- `VPS_HOST`
- `VPS_USER`
- `VPS_SSH_KEY`
- `VPS_PORT`（可选，不填默认 22）
- `VPS_DEPLOY_PATH`（例如 `/opt/firefly`）

之后每次 push 到 `master/main` 会触发 `.github/workflows/deploy-vps.yml`，自动 SSH 到 VPS 执行重部署。

## 7. 日常发布（发文章 / 改配置）

### 7.1 发布文章

```powershell
pnpm new-post my-new-post
```

编辑 `src/content/posts/my-new-post.md` 后：

```powershell
git add .
git commit -m "post: publish my-new-post"
git push
```

### 7.2 修改站点设置

修改 `src/config/*.ts` 后：

```powershell
git add .
git commit -m "config: update site settings"
git push
```

GitHub Actions 成功后，线上即更新。

## 8. 与原作者同步更新（可选）

```powershell
git fetch upstream
git checkout master
git merge upstream/master
git push origin master
```

如果你主分支是 `main`，对应替换分支名。

## 9. 常见问题排查

1. HTTPS 失败：
   DNS 未生效，或 80/443 未放行，或端口被其他服务占用。
2. Actions SSH 失败：
   检查 `VPS_HOST/VPS_USER/VPS_SSH_KEY/VPS_PORT`。
3. Actions 成功但未更新：
   登录 VPS 查看 `docker compose logs -f`。
4. 构建失败：
   先在本地执行 `pnpm build` 复现并修复后再 push。
