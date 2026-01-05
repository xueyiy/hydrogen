import type {EntryContext} from '@remix-run/server-runtime';
import {RemixServer} from '@remix-run/react';
import {renderToString} from 'react-dom/server';

/**
 * Server-side entry point for the application
 * Handles server-side rendering of the React application
 * 
 * @param {Request} request - The incoming request
 * @param {number} responseStatusCode - HTTP response status code
 * @param {Headers} responseHeaders - HTTP response headers
 * @param {EntryContext} remixContext - Remix entry context
 * @returns {Promise<Response>} Rendered HTML response
 */
export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />,
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}

