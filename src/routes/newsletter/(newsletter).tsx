import { Component, For } from 'solid-js';
import { A, createRouteData, useRouteData } from 'solid-start';
import { createServerData$ } from 'solid-start/server';
import { getPosts } from '~/utils/posts';

export function routeData() {
  return createServerData$(getPosts);
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
                <article class='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl '>
                  <h2 class='text-md mt-3 text-center font-semibold leading-6 text-zinc-50 hover:text-indigo-500 sm:text-lg '>
                    <A href={`${post.slug.current}`}>
                      <span class='absolute inset-0' />
                      {post.title}
                    </A>
                  </h2>
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
