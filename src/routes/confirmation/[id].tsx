import { ConfettiExplosion } from 'solid-confetti-explosion';
import { A } from 'solid-start';

export default function Confirmation() {
  return (
    <main class='bg-bg-gradient flex min-h-screen items-center justify-center bg-zinc-950 bg-grain'>
      <div class='relative overflow-hidden rounded-xl p-[3px] backdrop-blur-xl '>
        <span class='absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#030712_0%,#6366f1_50%,#030712_100%)] ' />
        <div class='relative h-full w-full'></div>
        <div class='flex justify-center'>
          <ConfettiExplosion
            force={1}
            particlesShape='mix'
            colors={['#fafafa', '#6366f1', '#f43f5e', '#d946ef']}
          />
        </div>
        <div class='relative  isolate overflow-hidden rounded-xl bg-zinc-950  bg-grain px-6 py-24 shadow-2xl sm:px-24 xl:py-32'>
          <h1 class='bg-zinc-50 bg-grain-dark bg-clip-text text-center text-4xl font-extrabold tracking-tighter text-transparent '>
            Thank You!
          </h1>
          <p class=' mx-auto mt-2 max-w-xl text-center leading-8 text-zinc-100'>
            You subscribe to the newsletter!
          </p>
          <p class='mt-4 max-w-xl text-center text-sm text-zinc-300'>
            You will receive an email from us asking you to confirm your
            newsletter subscription.
          </p>

          <A
            href='/newsletter'
            class='mt-6 flex flex-col justify-center text-center text-sm text-indigo-500 underline'>
            <div class='flex-1'></div>
            <p> Catch up on last weeks newsletter issue here </p>
          </A>
        </div>
      </div>
    </main>
  );
}
