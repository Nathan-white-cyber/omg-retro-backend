# OMG Retro Medusa Backend

Medusa v2 backend for the OMG Retro storefront.

## Required Railway values

The attached Phase 15 brief did not include the actual Railway URLs. Replace these placeholders before running migrations or the seed:

- `.env`:
  - `DATABASE_URL=[DATABASE_PUBLIC_URL]`
  - `REDIS_URL=[REDIS_PUBLIC_URL]`
- `.env.production`:
  - `DATABASE_URL=[DATABASE_URL]`
  - `REDIS_URL=[REDIS_URL]`
  - `MEDUSA_BACKEND_URL=https://[railway-backend-url]`

## Commands

```bash
npm install
npm run db:migrate
npm run seed
npm run user:create
npm run dev
```

## Railway deployment notes

1. Create a new GitHub repository for this backend folder, or add it as a separate Railway service source.
2. Set Railway service variables from `.env.production.example`.
3. Replace `MEDUSA_BACKEND_URL` with the final Railway service URL.
4. Run `npm run db:migrate`, `npm run seed`, and `npm run user:create` after the service can reach Railway PostgreSQL and Redis internally.

Admin user requested for Phase 15:

- Email: `admin@omgretro.com`
- Password: `OmgRetro2026!`

## Local checks

After replacing environment values and starting Medusa:

```bash
curl http://localhost:9000/health
curl http://localhost:9000/store/products
```
