import { Component, For, Show } from 'solid-js';
import { A, useRouteData } from 'solid-start';
import { createServerData$ } from 'solid-start/server';
import { getPosts } from '~/utils/posts';

export function routeData() {
  return createServerData$(async () => await getPosts(), {
    key: 'posts',
    ssrLoadFrom: 'server',
  });
}

const Newsletter: Component<{}> = (props) => {
  const posts = useRouteData<typeof routeData>();
  return (
    <main class='  min-h-screen  justify-center bg-zinc-950 bg-grain '>
      <h1 class='bg-zinc-50 bg-grain-dark bg-clip-text pt-14 text-center text-4xl font-extrabold tracking-tighter text-transparent '>
        Latest Issues
      </h1>
      <div class='container mx-auto mt-12 flex flex-col items-center justify-center space-y-4'>
        <For each={posts()}>
          {(post) => (
            <Show when={post} fallback={'loading...'}>
              <A
                href={`/newsletter/${post.slug}`}
                class='group text-indigo-500 transition duration-100'>
                {post.title}
                <span class='block h-0.5 max-w-0 bg-indigo-500 transition-all duration-500 group-hover:max-w-full'></span>
              </A>
            </Show>
          )}
        </For>
      </div>
    </main>
  );
};

export default Newsletter;
