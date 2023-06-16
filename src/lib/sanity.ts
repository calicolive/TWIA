import server$  from 'solid-start/server';
import PicoSanity from 'picosanity'

const client = new PicoSanity({
    projectId: 'xjcdjcm9',
    dataset: 'production',
    apiVersion: '2023-06-16',
    useCdn: true,
  })

  export const getPost =server$(async (id: string) => {
  const query = `*[_type == "post" && slug.current == $id][0]`;
  const post = client.fetch(query, { id });
  return post;
});


interface Post {
    _createdAt: string;
    title: string;
    slug: {
      current: string;
    };
  }

export const getPosts = server$(async (): Promise<Post[]> => {
    const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)`;
    const posts = await client.fetch<Post[]>(query);
  
    return posts;
  });
  