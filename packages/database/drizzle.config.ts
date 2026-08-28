import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: '.env', override: true })

export default defineConfig({
  schema: ['./src/schemas'],
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env['DATABASE_URL']!,
  },
})
