Full guide: [Troubleshooting](https://dynamic-api-platform.github.io/Dynamic-API-Platform/troubleshooting/)

## Port in use

Change ports in `docker-compose.yml`.

## API errors in frontend

Check `curl http://localhost:3001/api/health` and `CORS_ORIGIN`.

## Login returns "Endpoint not found" (port 8080)

Nginx may strip the API path. Use `proxy_pass http://backend:3001;` in `frontend/nginx.conf` (no URI suffix with variables). Rebuild frontend: `docker compose build frontend && docker compose up -d frontend`.

## Login fails (wrong password)

Default: `admin` / `Admin123!`. Check lockout in Settings.

## Network access denied (403)

Caller IP or `Origin` does not match configured rules. See [Network Access](Network-Access).

## Database menu missing

Requires `manage_users` permission (Admin / Super Admin group).

## Reset all data

```bash
docker compose down -v
docker compose up -d
```
