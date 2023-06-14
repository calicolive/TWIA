import { config } from 'dotenv';
import { z } from 'zod';

if (typeof window !== 'undefined') {
  throw new Error('This file should only be imported into a server bundle');
}

config();

export const serverSchema = z.object({
  NOTION_API_KEY: z.string(),
  NOTION_DATABASE_ID: z.string(),
  PUBLIC_URL: z.optional(z.string()),
  EMAIL_OCTOPUS_LIST_ID: z.string(),
  EMAIL_OCTOPUS_API_KEY: z.string(),
});

const _serverEnv = serverSchema.safeParse(process.env);

if (!_serverEnv.success) {
  throw new Error('Invalid server environment variables');
}

export default _serverEnv.data;
