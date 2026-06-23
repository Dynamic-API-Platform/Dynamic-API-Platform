Full guide: [Network Access](https://dynamic-api-platform.github.io/Dynamic-API-Platform/network-access/)

**Summary:** Restrict dynamic API calls by **allowed domains** (`Origin` / `Referer` / `Host`) and **IPv4/CIDR pools**. Configure on **Endpoint Groups** or per-endpoint **Network Access** tab. Separate from JWT access types.

**Quick example:**
- Group: domains `app.example.com`, IPs `10.0.0.0/8`
- Endpoint inherits group rules by default
- Blocked callers get `403 Forbidden: network access denied`
