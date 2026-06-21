Welcome to the **Dynamic API Platform** wiki.

Create, manage, and test REST APIs without writing backend code.

## About

Endpoints are stored in MongoDB and served **at runtime** — add or change a route in the admin UI and it is callable immediately, with **no server restart or redeploy**. This is the main difference from Strapi, Directus, and typical custom backends where new APIs usually require code changes and a rebuild or restart.

## What's new (recent)

| Feature | Description |
|---------|-------------|
| **`reference` fields** | Foreign keys between endpoints; `?populate=` on GET |
| **Zero-downtime routes** | New endpoints live immediately after save |
| **Auth fixes** | Refresh token permissions, redirect to login on session expiry |
| **System endpoint tests** | Tester uses real RBAC routes for `/api/users`, `/api/groups`, `/api/profile` |
| **License** | Apache License 2.0 |

Full list: [CHANGELOG.md](https://github.com/Developer-RU/Dynamic-API-Platform/blob/main/CHANGELOG.md)

## Quick links

- [Installation](Installation)
- [Quick Start Guide](Quick-Start-Guide)
- [Dynamic API Engine](Dynamic-API-Engine)
- [Screenshots](Screenshots)
- [API Reference](API-Reference)
- [RBAC & Permissions](RBAC-and-Permissions)
- [Deployment](Deployment)
- [FAQ](FAQ)
- [Troubleshooting](Troubleshooting)

## Online documentation

Full docs with search: **https://developer-ru.github.io/Dynamic-API-Platform/**

## Repository

https://github.com/Developer-RU/Dynamic-API-Platform

## Default credentials (development)

| Field | Value |
|-------|-------|
| Login | `admin` |
| Password | `Admin123!` |

Change immediately after first login in production.
