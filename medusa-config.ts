import { defineConfig } from '@medusajs/utils'

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL || "postgresql://postgres:jRLHPKDvoZByxAYIvFiCqKemGYBranln@postgres.railway.internal:5432/railway?connection_limit=3&pool_timeout=60",
    databaseDriverOptions: {
      pool: {
        min: 1,
        max: 3,
        acquireTimeoutMillis: 60000,
        idleTimeoutMillis: 30000,
      },
    },
    redisUrl: process.env.REDIS_URL || "redis://default:OpcyFXaRzKwTYwoTqpWzJBmHyPljcfHP@redis.railway.internal:6379",
    http: {
      storeCors: process.env.STORE_CORS || "https://omg-retro.vercel.app",
      adminCors: process.env.ADMIN_CORS || "https://omg-retro.vercel.app",
      authCors: process.env.STORE_CORS || "https://omg-retro.vercel.app",
      jwtSecret: process.env.JWT_SECRET || "omgretro-jwt-secret-2026-secure",
      cookieSecret: process.env.COOKIE_SECRET || "omgretro-cookie-secret-2026-secure",
    },
  },
  admin: {
    disable: false,
  },
})
