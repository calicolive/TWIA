import solid from 'solid-start/vite';
import { defineConfig, loadEnv } from 'vite';
import vercel from 'solid-start-vercel';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      solid({
        ssr: true,
        adapter: vercel({
          prerender: {
            expiration: 60 * 60 * 24,
          },
        }),
      }),
    ],
    // Vite config
    define: {
      'process.env.EMAIL_OCTOPUS_LIST_ID': env.VITE_EMAIL_OCTOPUS_LIST_ID,
      'process.env.VITE_EMAIL_OCTOPUS_API_KEY': env.VITE_EMAIL_OCTOPUS_API_KEY,
      'process.env.VITE_NOTION_DATABASE_ID': env.VITE_NOTION_DATABASE_ID,
      'process.env.VITE_NOTION_API_KEY': env.VITE_NOTION_API_KEY,
    },
  };
});
