import { createClient, type ClientConfig } from '@sanity/client';



export const config: ClientConfig = {
  projectId: 'xjcdjcm9',
  dataset: 'production',
  apiVersion: '2023-06-16',
  useCdn: true,
};

export const client = createClient(config);


// export const getPost = (id: string) => {
//   const query = `*[_type == "post" && slug.current == $id][0]`;
//   const post = client.fetch(query, { id });
//   return post;
// };
