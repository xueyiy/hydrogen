import type {MetaFunction} from '@remix-run/react';

/**
 * Home page route component
 * @returns {JSX.Element} Home page component
 */
export const meta: MetaFunction = () => {
  return [
    {title: 'Hydrogen Test Project - Home'},
    {name: 'description', content: 'Welcome to the Hydrogen test project'},
  ];
};

/**
 * Home page component
 * @returns {JSX.Element} Home page
 */
export default function Index() {
  return (
    <div className="container">
      <header>
        <h1>Hydrogen Test Project</h1>
        <p>Simple project for testing deployment processes</p>
      </header>
      <main>
        <section>
          <h2>Welcome</h2>
          <p>
            This is a minimal Hydrogen framework project set up for testing
            deployment workflows.
          </p>
        </section>
        <section>
          <h2>Status</h2>
          <p>✅ Project initialized</p>
          <p>✅ Ready for deployment testing</p>
        </section>
      </main>
    </div>
  );
}

