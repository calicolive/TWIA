import { createClient, type ClientConfig } from '@sanity/client';
import server$ from 'solid-start/server';

const config: ClientConfig = {
  projectId: 'xjcdjcm9',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-06-15',
};

const client = createClient(config);

export default client;
