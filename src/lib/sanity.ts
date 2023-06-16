import { createClient, type ClientConfig } from '@sanity/client';

interface Post {
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
}

const config: ClientConfig = {
  projectId: 'xjcdjcm9',
  dataset: 'production',
  apiVersion: '2023-06-15',
  useCdn: true,
};

const client = createClient(config);

export const getPosts = async (): Promise<Post[]> => {
  const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)`;
  const posts = await client.fetch<Post[]>(query);

  return posts;
};

export const getPost = (id: string) => {
  const query = `*[_type == "post" && slug.current == $id][0]`;
  const post = client.fetch(query, { id });
  return post;
};
