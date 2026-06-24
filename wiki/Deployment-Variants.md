# Deployment variants

**v1.4.0** ships three deployment options. This page is a wiki summary — full details on [GitHub Pages](https://dynamic-api-platform.github.io/Dynamic-API-Platform/deployment-variants/).

## Comparison

| | Docker single | Docker replica set | Kubernetes |
|--|---------------|-------------------|------------|
| **Compose / manifests** | `docker-compose.yml` | `docker-compose.replica.yml` | `k8s/` |
| **MongoDB** | 1 node | 3 nodes, `rs0` | StatefulSet ×3 |
| **Backend scale** | 1 container | 1 container | Deployment ×2+ |
| **DB failover** | No | Yes | Yes |
| **API horizontal scale** | No | No | Yes |

## Quick start

```bash
# 1 — default
docker compose up -d --build

# 2 — HA MongoDB
npm run docker:replica:up

# 3 — cluster
npm run k8s:deploy
```

## npm scripts

| Script | Variant |
|--------|---------|
| `npm run docker:up` / `docker:down` | 1 |
| `npm run docker:replica:up` / `docker:replica:down` / `docker:replica:status` | 2 |
| `npm run k8s:build` / `k8s:deploy` / `k8s:status` / `k8s:teardown` | 3 |
| `npm run screenshots` | Capture UI screenshots |

## Related wiki pages

- [Installation](Installation)
- [Deployment](Deployment)
- [MongoDB Replica Set](MongoDB-Replica-Set)
- [Kubernetes](Kubernetes)
