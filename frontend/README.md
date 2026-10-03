# MCPCART FRONTEND

## Pages

- `/` — laptop product/catalog page
- `/products/[id]` — product details page
- `/cart` — shopping cart page

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- React Context for cart state
- `lucide-react` icons
- `localStorage` for temporary cart persistence

## Architecture

```text
Browser
  │
  ▼
Next.js Frontend
  ├── Catalog UI
  ├── Product Details UI
  ├── Cart UI
  └── Client-side Cart State
          │
          ▼
      localStorage
```