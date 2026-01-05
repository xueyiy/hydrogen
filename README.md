# Hydrogen Test Project

A simple Hydrogen framework project for testing deployment processes.

## Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Shopify store credentials:
   - `PUBLIC_STORE_DOMAIN`: Your Shopify store domain
   - `PUBLIC_STOREFRONT_API_TOKEN`: Your Storefront API token
   - `PUBLIC_STOREFRONT_API_VERSION`: API version (default: 2024-10)

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Build

Build the project for production:
```bash
npm run build
```

## Preview

Preview the production build locally:
```bash
npm run preview
```

## Deployment

This project can be deployed to various platforms:

### Shopify Oxygen
The project is configured for Shopify Oxygen deployment by default.

### Other Platforms
- **Netlify**: Configure `netlify.toml` (if needed)
- **Vercel**: Configure `vercel.json` (if needed)
- **Cloudflare Pages**: Configure `wrangler.toml` (if needed)

## Project Structure

```
.
├── app/
│   ├── routes/          # Route components
│   ├── styles/          # Global styles
│   ├── entry.client.tsx # Client entry point
│   ├── entry.server.tsx # Server entry point
│   └── root.tsx         # Root component
├── public/              # Static assets
├── .env.example         # Environment variables template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## License

MIT

