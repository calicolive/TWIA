import { A, createRouteData, useRouteData } from 'solid-start';
import { createServerData$ } from 'solid-start/server';
import EmailSignup from '~/components/EmailSignup';
import Footer from '~/components/Footer';
import server from '~/env/server';
import { getLatestPostSlug } from '~/lib/sanity';

export const routeData = () => {
  return createServerData$(async () => {
    const response = await fetch(
      `https://emailoctopus.com/api/1.6/lists/${server.EMAIL_OCTOPUS_LIST_ID}?api_key=${server.EMAIL_OCTOPUS_API_KEY}`
    );
    const data = await response.json();

    const slug = await getLatestPostSlug();

    return {
      subscriberCount: data.counts.subscribed as number,
      slug: slug,
    };
  });
};
export default function Home() {
  const data = useRouteData<typeof routeData>();
  return (
    <main class='flex h-screen items-center justify-center '>
      <div class='flex flex-col '>
        <div class='relative flex-1 overflow-hidden rounded-xl p-[3px] backdrop-blur-xl'>
          <span class='absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#030712_0%,#6366f1_50%,#030712_100%)] ' />
          <div class='relative h-full w-full'>
            <div class='relative isolate overflow-hidden rounded-xl bg-zinc-950  bg-grain px-6 py-24 shadow-2xl sm:px-24 xl:py-32'>
              <h1 class='bg-zinc-50 bg-grain-dark bg-clip-text text-center text-4xl font-extrabold tracking-tighter text-transparent '>
                This Week in Audio
              </h1>
              <p class=' mx-auto mt-2 max-w-xl text-center leading-8 text-zinc-100'>
                Your Weekly Digest of Audio Deals & News
              </p>
              <p class='mt-2 max-w-xl text-center text-sm text-zinc-300'>
                Tune into 'This Week in Audio' for a curated mix of weekly audio
                news and killer deals on plugins and hardware.
              </p>
              <EmailSignup />
              <p class='mt-6 text-center text-sm text-zinc-300'>
                Join {data()?.subscriberCount} readers for {''}
                <A
                  href={`/newsletter/${data()?.slug}`}
                  class=' group text-indigo-500 '>
                  one weekly email
                </A>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
