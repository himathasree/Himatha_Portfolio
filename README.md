# Himatha Portfolio (React + Vite + Tailwind CSS)

A dark modern portfolio template inspired by the provided reference, with editable placeholders.

## Sections included

- Hero
- About
- Projects
- Skills
- Achievements
- Contact
- Footer

## Tech stack

- React
- Vite
- Tailwind CSS
- lucide-react (icons)

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

## Where to edit content

Main placeholders are centralized in:

- `src/data/siteContent.js`

You can change text, links, skills, projects, and contact details there without touching layout components.

## Notes

- Smooth scrolling is enabled via CSS.
- Active navigation highlighting updates as you scroll through sections.
- Theme preference is persisted in localStorage via the navbar toggle.

## Contact form setup

The form supports two modes:

- Direct submit with Formspree (recommended)
- Mail app fallback when Formspree is not configured

To enable direct submit:

1. Copy `.env.example` to `.env`
2. Set `VITE_FORMSPREE_ENDPOINT` to your Formspree endpoint URL
3. Restart the dev server

If no endpoint is provided, clicking Send Message opens the default email client with prefilled content.
