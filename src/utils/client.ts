import { Client } from '@notionhq/client';

export const notion = new Client({
  auth: process.env.VITE_NOTION_API_KEY,
});
