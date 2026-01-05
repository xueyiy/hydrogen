import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type {MetaFunction} from '@remix-run/react';
import stylesheet from './styles/app.css?url';

/**
 * Root component that wraps the entire application
 * @returns {JSX.Element} Root layout component
 */
export const links = () => [
  {rel: 'stylesheet', href: stylesheet},
];

export const meta = () => [
  {title: 'Hydrogen Test Project'},
  {name: 'description', content: 'Simple Hydrogen framework project for testing deployment'},
];

/**
 * Root layout component
 * @returns {JSX.Element} Application root
 */
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

