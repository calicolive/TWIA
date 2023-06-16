import { client } from "~/lib/sanity";


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
  