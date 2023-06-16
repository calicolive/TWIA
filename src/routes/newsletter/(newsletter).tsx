import { Component, For } from 'solid-js';
import { A, createRouteData, useRouteData } from 'solid-start';
import { getPosts } from '~/lib/sanity';


export function routeData() {
  return createRouteData(getPosts);
}

const Newsletter: Component<{}> = (props) => {
  const posts = useRouteData<typeof routeData>();

  return (
    <main class='  min-h-screen  justify-center bg-zinc-950 bg-grain '>
      <h1 class='bg-zinc-50 bg-grain-dark bg-clip-text pt-14 text-center text-4xl font-extrabold tracking-tighter text-transparent '>
        Latest Issues
      </h1>
      <section class=' container mx-auto mt-12 flex flex-col items-center justify-center space-y-4'>
        <ul>
          <For each={posts()}>
            {(post) => {
              const createdAt = new Date(post._createdAt);
              const formattedDate = createdAt.toLocaleDateString('en-US', {
                month: 'numeric',
                day: 'numeric',
                year: 'numeric',
              });
              return (
                <article class='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 '>
                    <A  class='text-md mt-3 text-center group font-semibold leading-6 text-zinc-50  hover:text-indigo-500 sm:text-lg' href={`${post.slug.current}`}>
                      {post.title}
                      <span class='block h-0.5 max-w-0 bg-indigo-500 transition-all duration-500 group-hover:max-w-full'></span>
                    </A>
                </article>
              );
            }}
          </For>
        </ul>
      </section>
    </main>
  );
};

export default Newsletter;