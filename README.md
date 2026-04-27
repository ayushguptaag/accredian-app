# Accredian Enterprise Landing Page

A responsive `Next.js` App Router rebuild of the Accredian Enterprise landing page, implemented as part of the Full Stack Developer Intern assignment. The project recreates the landing experience with reusable content-driven sections, a sticky responsive header, smooth section navigation, and a mock enquiry workflow backed by a `Next.js` API route.

## Live Assignment Goals Covered

- Full landing page with all major sections from the reference site
- Responsive mobile and desktop experience
- Reusable components and typed content model
- Mock API integration through `app/api/enquiry/route.ts`
- Vercel-ready deployment setup

## Tech Stack

- `Next.js 16` with App Router
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `react-hook-form`
- `zod`
- `lucide-react`

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For production verification:

```bash
npm run lint
npm run build
```

## Project Structure

- `app/page.tsx`: landing page entry
- `app/api/enquiry/route.ts`: mock enquiry submission endpoint
- `components/enterprise/*`: header, sections, FAQ, and modal UI
- `data/site-content.ts`: typed page content, logos, testimonials, FAQ data, and form options
- `lib/enquiry-schema.ts`: shared form validation schema and defaults
- `types/site.ts`: shared interfaces and payload contracts

## Approach

The page is built as a section-based marketing site with a single compositional entry point and reusable UI building blocks. Static content is kept inside a typed data module so the sections stay presentation-focused rather than copy-heavy.

The enquiry form uses shared validation on both the client and server. Client-side validation is handled with `react-hook-form` and `zod`, while the API route re-validates the payload before returning either:

- success: `{ ok: true, id, message }`
- failure: `{ ok: false, message, fieldErrors }`

The API is intentionally mock-only for the assignment. To test handled failure states locally, submit the form with `test-error` as the location value.

## AI Usage

AI was used during development for:

- scaffolding the implementation plan
- extracting section structure and content from the reference material
- accelerating component and schema setup
- reviewing for likely type, validation, and accessibility gaps

Manual work included:

- translating the plan into the final project structure
- refining layout, spacing, section hierarchy, and responsive behavior
- implementing the final validation flow and mock API contract
- resolving lint/type issues and verifying the production build

## Improvements With More Time

- add richer motion and scroll-triggered reveals with reduced-motion fallbacks
- persist enquiry submissions to a database or spreadsheet backend
- expand testimonials and FAQ content from a CMS or API source
- add automated component and API tests
- improve analytics and conversion tracking on CTA interactions

## Deployment

This project is ready to deploy on Vercel:

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Use the default Next.js build settings.
4. Deploy.

No external environment variables are required for the current mock API implementation.
