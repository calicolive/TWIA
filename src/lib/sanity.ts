import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'xjcdjcm9',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});
