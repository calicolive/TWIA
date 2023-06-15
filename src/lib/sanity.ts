import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: 'xjcdjcm9',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-06-15', // use current date (YYYY-MM-DD) to target the latest API version
};

const client = createClient(config);

export default client;
