# Dynamic API Platform Wiki

> This folder mirrors the GitHub Wiki content (v1.4.0).  
> Full documentation: [GitHub Pages](https://dynamic-api-platform.github.io/Dynamic-API-Platform/).  
> Changelog: [CHANGELOG.md](https://github.com/Dynamic-API-Platform/Dynamic-API-Platform/blob/main/CHANGELOG.md)

## Pages

| Wiki Page | Description |
|-----------|-------------|
| [Home](Home.md) | Project overview, v1.4.0 highlights |
| [Installation](Installation.md) | Three deployment variants — setup |
| [Quick-Start-Guide](Quick-Start-Guide.md) | First endpoint in 5 minutes |
| [Deployment](Deployment.md) | Production deploy, upgrade |
| [Deployment-Variants](Deployment-Variants.md) | Docker / replica set / K8s comparison |
| [MongoDB-Replica-Set](MongoDB-Replica-Set.md) | Variant 2 — 3-node MongoDB in Docker |
| [Kubernetes](Kubernetes.md) | Variant 3 — K8s cluster |
| [Testing](Testing.md) | Unit tests, load test, CI |
| [Architecture](Architecture.md) | System design |
| [API-Reference](API-Reference.md) | REST API docs |
| [RBAC-and-Permissions](RBAC-and-Permissions.md) | Access control |
| [Dynamic-API-Engine](Dynamic-API-Engine.md) | Runtime engine |
| [API-Schema](API-Schema.md) | ER diagram of endpoints |
| [Network-Access](Network-Access.md) | Domain and IP/CIDR restrictions |
| [Database-Explorer](Database-Explorer.md) | Raw MongoDB admin UI |
| [Configuration](Configuration.md) | Env vars & settings |
| [Screenshots](Screenshots.md) | UI gallery (v1.4) |
| [FAQ](FAQ.md) | Common questions |
| [Troubleshooting](Troubleshooting.md) | Problem solving |
| [Contributing](Contributing.md) | How to contribute |

## Importing to GitHub Wiki

```bash
git clone https://github.com/Dynamic-API-Platform/Dynamic-API-Platform.wiki.git
cp wiki/*.md Dynamic-API-Platform.wiki/
cd Dynamic-API-Platform.wiki
git add .
git commit -m "docs: sync wiki with v1.4.0"
git push
```

Or copy pages manually via the [GitHub Wiki](https://github.com/Dynamic-API-Platform/Dynamic-API-Platform/wiki) web editor.
