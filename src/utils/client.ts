import { createClient } from '@sanity/client';

export const projectId = 'xjcdjcm9';
export const dataset = 'production';
export const apiVersion = '2023-01-01';

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion,
});
