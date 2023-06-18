import { Component, Show } from 'solid-js';
import { PortableText } from 'solid-portabletext';
import { createRouteData, useParams, useRouteData } from 'solid-start';
import { getPost } from '~/lib/sanity';

export function routeData() {
  return createRouteData(() => {
    const params = useParams<{ id: string }>();
    return getPost(params.id);
  });
}
const Issue: Component<{}> = (props) => {
  const post = useRouteData<typeof routeData>();

  return (
    <main class='  min-h-screen justify-center  '>
      <Show when={post()}>
        <section class='md:prose-md container prose prose-sm prose-zinc mx-auto mt-12 p-4 text-zinc-50 lg:prose-lg  prose-h2:text-zinc-300 prose-a:text-indigo-500 prose-a:no-underline hover:prose-a:text-indigo-400'>
          <h1 class=' font-bold text-zinc-50 '>
            {post().title ? post().title : null}
          </h1>
          <PortableText value={post().body ? post().body : null} />
        </section>
      </Show>
    </main>
  );
};

export default Issue;
