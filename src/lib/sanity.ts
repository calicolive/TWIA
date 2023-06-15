import { createClient } from '@sanity/client';

const projectId = 'xjcdjcm9';
const dataset = 'production';
const apiVersion = '2023-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
});
