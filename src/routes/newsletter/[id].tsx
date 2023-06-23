import { Component, Show } from 'solid-js';
import { PortableText } from 'solid-portabletext';
import {
  Head,
  Title,
  createRouteData,
  useParams,
  useRouteData,
} from 'solid-start';
import EmailSignup from '~/components/EmailSignup';
import Spinner from '~/components/Spinner';
import { getPost } from '~/lib/sanity';

export function routeData() {
  return createRouteData(async () => {
    const params = useParams<{ id: string }>();
    return await getPost(params.id);
  });
}
const Issue: Component<{}> = (props) => {
  const post = useRouteData<typeof routeData>();

  return (
    <>
      <Show when={post()} fallback={<Spinner />}>
        <Head>
          <Title>{post().title}</Title>
        </Head>
        <main class='  container mx-auto flex min-h-screen flex-col items-center justify-center '>
          <div class='mt-6 flex w-full grow flex-col items-center justify-center text-center'>
            <h1 class='bg-zinc-50 bg-grain-dark bg-clip-text  text-4xl font-extrabold tracking-tighter text-transparent '>
              This Week in Audio
            </h1>
            <p class='mt-2 leading-8 text-zinc-100'>
              Your Weekly Digest of Audio Deals & News
            </p>
            <EmailSignup />
          </div>
          <section class='md:prose-md container prose prose-sm prose-zinc mx-auto mt-12 p-4 text-zinc-50 lg:prose-lg  prose-h2:text-zinc-300 prose-a:text-indigo-500 prose-a:no-underline hover:prose-a:text-indigo-400'>
            <h1 class=' font-bold text-zinc-50 '>{post().title}</h1>
            <PortableText value={post().body} />
          </section>
        </main>
      </Show>
    </>
  );
};

export default Issue;
