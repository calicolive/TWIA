import { client } from '~/utils/client';

interface Post {
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
}

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
