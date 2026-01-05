import {RemixBrowser} from '@remix-run/react';
import {startTransition, StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';

/**
 * Client-side entry point for the application
 * Handles hydration of the React application
 */
startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>,
  );
});

