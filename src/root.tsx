// @refresh reload
import { For, Suspense } from 'solid-js';
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start';
import './root.css';
import Footer from './components/Footer';

const links = [
  { name: 'Home', href: '/' },

  // { name: 'Advertise', href: '/advertise' },
  { name: 'Newsletter', href: '/newsletter' },
];

export default function Root() {
  return (
    <Html lang='en'>
      <Head>
        <Title>This Week in Audio</Title>
        <Meta charset='utf-8' />
        <Meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Body class=' bg-zinc-950 bg-grain'>
        <Suspense>
          <ErrorBoundary
            fallback={(e: Error) => (
              <div class='flex items-center justify-center'>
                <h2>Oh no! An Error!</h2>
                <details>
                  <summary>Click here to learn more</summary>
                  <p>
                    <strong>{e.name}</strong>: {e.message}
                  </p>
                </details>
              </div>
            )}>
            <nav class='flex items-center justify-center space-x-12   py-4'>
              <For each={links}>
                {(link) => (
                  <A
                    href={link.href}
                    class='group font-bold text-indigo-500 transition duration-300 '>
                    {link.name}
                    <span class='block h-0.5 max-w-0 bg-indigo-500  transition-all duration-500 group-hover:max-w-full'></span>
                  </A>
                )}
              </For>
            </nav>
            <Routes>
              <FileRoutes />
            </Routes>
            <Footer />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
