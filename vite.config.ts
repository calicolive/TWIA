import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import vercel from 'solid-start-vercel';

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      solid({
        ssr: true,
        adapter: vercel({}),
      }),
    ],
  };
});
