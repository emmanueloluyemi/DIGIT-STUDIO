# Digit Studio — Creative & Digital Studio Website

A dark-first, crimson-and-off-white creative studio website built with Next.js App Router, TypeScript, Tailwind CSS v4, GSAP, Lenis and Three.js.

## Brand direction

- Brand: Digit Studio
- Founder: Emmanuel Oluyemi
- Palette: Obsidian `#0B0B0B`, Crimson `#8B0D1A`, Off-white `#F5F2ED`
- Typography: Syne, Instrument Serif and Manrope
- Default appearance: Dark, with a visitor-controlled light mode

## Technology

- Next.js App Router
- React and TypeScript
- Tailwind CSS v4
- GSAP and ScrollTrigger
- Lenis smooth scrolling
- Three.js interactive hero visual
- Lucide icons

## Local setup

1. Install Node.js (current LTS recommended).
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env.local` and configure the contact delivery provider when ready.
4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000`.

## Contact form delivery

The project enquiry form is a multi-step frontend flow. The API route supports Resend or Formspree. Configure either provider before production launch:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL` (optional)
- or `FORMSPREE_ENDPOINT`

Without a provider, local development returns a preview response. Production submissions are not reported as successful until a delivery provider is configured.

## Site configuration

Update `src/data/site.ts` to change brand contact details and external profile links. Set `NEXT_PUBLIC_SITE_URL` to the actual production domain before deployment.

## Services

The six primary service areas are maintained in `src/data/services.ts`:

1. Branding & Graphic Design
2. Web Design & Development
3. AI Video & Animation
4. Social Media & Digital Marketing
5. Content Creation
6. Something Else

## Portfolio

Portfolio data is maintained in `src/data/projects.ts`. Existing sample entries are labelled as studio concepts. Replace them with approved work only when client confidentiality permits. Do not publish private client details, invented testimonials or unverified outcomes.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

Before deployment, verify all profile links, review the project enquiry flow, connect a contact delivery provider, set the production site URL and test both theme modes on desktop and mobile.
