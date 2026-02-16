#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEPLOY_BRANCH="${DEPLOY_BRANCH:-master}"

cd "$REPO_DIR"

echo "[deploy] using branch: ${DEPLOY_BRANCH}"

git fetch --prune origin
if git show-ref --verify --quiet "refs/heads/${DEPLOY_BRANCH}"; then
  git checkout "${DEPLOY_BRANCH}"
else
  git checkout -b "${DEPLOY_BRANCH}" "origin/${DEPLOY_BRANCH}"
fi
git pull --ff-only origin "${DEPLOY_BRANCH}"

if [[ ! -f ".env" && -f ".env.example" ]]; then
  cp .env.example .env
  echo "[deploy] .env was missing and has been created from .env.example"
  echo "[deploy] update DOMAIN in .env before production traffic."
fi

docker compose pull caddy
docker compose up -d --build --remove-orphans

echo "[deploy] deployment completed"
