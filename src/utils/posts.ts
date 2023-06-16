import server$ from 'solid-start/server'
import { client } from "~/lib/sanity";


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
  