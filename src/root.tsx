// @refresh reload
import { Suspense } from 'solid-js';
import {
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

export default function Root() {
  return (
    <Html lang='en'>
      <Head>
        <Title>This Week in Audio</Title>
        <Meta charset='utf-8' />
        <Meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Body>
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
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
