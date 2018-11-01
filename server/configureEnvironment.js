/**
 * Used to load the environment configuration before anyting else.
 */
import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: './.env.development.local' })
} else {
  dotenv.config({ path: './env.production.local' })
}
