import { Client } from '@notionhq/client';
import server from '~/env/server';

export const notion = new Client({
  auth: server.NOTION_API_KEY,
});
