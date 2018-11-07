/**
 * Used to load the environment configuration before anyting else.
 */
import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'production') dotenv.config({ path: './.env.production.local' })
else dotenv.config({ path: './.env.development.local' })
