import server$  from 'solid-start/server';
import PicoSanity from 'picosanity'


interface Post {
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
}

const client = new PicoSanity({
    projectId: 'xjcdjcm9',
    dataset: 'production',
    apiVersion: '2023-06-16',
    useCdn: true,
  })

  export const getPost = async (id: string) => {
  const query = `*[_type == "post" && slug.current == $id][0]`;
  const post = client.fetch(query, { id });
  return post;
};



export const getPosts = async (): Promise<Post[]> => {
    const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)`;
    const posts = await client.fetch<Post[]>(query);
  
    return posts;
  };
  

  export const getLatestPostSlug = async (): Promise<string> => {
    const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0].slug.current`;
    const slug = await client.fetch<string>(query);
  
    return slug;
};