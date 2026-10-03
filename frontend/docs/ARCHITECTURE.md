## Frontend Architecture

```text
laptop-store-frontend/
├── app/
│   ├── cart/
│   │   └── page.tsx
│   ├── products/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroBanner.tsx
│   └── ProductCard.tsx
├── lib/
│   ├── cart-context.tsx
│   └── products.ts
├── docs/
│   └── ARCHITECTURE.md
├── next.config.ts
├── postcss.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```