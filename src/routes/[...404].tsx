import { A } from 'solid-start';

export default function NotFound() {
  return (
    <main class=' flex  min-h-screen flex-col items-center justify-center  '>
      <h1 class='bg-zinc-50 bg-grain-dark bg-clip-text text-center text-4xl font-extrabold tracking-tighter text-transparent '>
        Page Not Found
      </h1>

      <p class='my-4 text-zinc-300'>
        <A href='/' class='text-zinc-300 hover:underline'>
          Go Home
        </A>
      </p>
    </main>
  );
}
