# Next.js template

This is a Next.js template with shadcn/ui.

## Backend

The project includes a lightweight Express backend in `backend/`.

### Run it locally

- `npm run backend:dev` — starts the API server in watch mode
- `npm run backend:start` — starts the API server once

### Available endpoints

- `GET /health` — service health check
- `GET /api/v1/podcasts` — list all podcasts
- `GET /api/v1/podcasts?q=design` — search podcasts
- `GET /api/v1/podcasts/:id` — fetch one podcast
- `GET /api/v1/categories` — list podcast categories
- `GET /api/v1/categories/:category/podcasts` — podcasts for one category

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```
