import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: 'xjcdjcm9',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-06-15',
};

const client = createClient(config);

export { client };
