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

## Contact form delivery & security

The project enquiry form is a hardened multi-step intake flow backed by the Resend HTTP API and Cloudflare Turnstile.

### Required environment variables

Configure in `.env.local` for local development or `.dev.vars` for local OpenNext Cloudflare preview:

- `RESEND_API_KEY`: Your Resend API key (`re_...`).
- `CONTACT_TO_EMAIL`: Studio destination inbox where client enquiries arrive.
- `CONTACT_FROM_EMAIL`: Verified sender address in Resend (e.g. `Digit Studio <hello@your-domain.com>`).
- `TURNSTILE_SECRET_KEY`: Cloudflare Turnstile secret key for server-side verification.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: Cloudflare Turnstile public site key.

### Resend domain verification

1. Add your custom domain in the [Resend Domains Dashboard](https://resend.com/domains).
2. Configure the provided DKIM, SPF, and DMARC DNS records in your domain registrar or Cloudflare DNS.
3. Once verified, set `CONTACT_FROM_EMAIL` to an address using your verified domain.

### Production secrets on Cloudflare Workers

Store server-side secrets in Cloudflare Workers using Wrangler:

```bash
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put CONTACT_TO_EMAIL
npx wrangler secret put CONTACT_FROM_EMAIL
npx wrangler secret put TURNSTILE_SECRET_KEY
```

### Cloudflare WAF rate-limiting rule

To protect the endpoint at the edge before hitting the Worker:
1. In Cloudflare Dashboard, go to **Security > WAF > Rate limiting rules**.
2. Create a rule matching:
   - **URI Path** equals `/api/contact`
   - **Method** equals `POST`
3. Configure rate limit:
   - Requests: `5` requests per `10` minutes per IP address.
   - Action: `Block` (or `Managed Challenge`) for `15 minutes`.

### Local preview with OpenNext Cloudflare

To test the exact Cloudflare Workers bundle locally:

```bash
# 1. Copy dev secrets
cp .dev.vars.example .dev.vars

# 2. Run OpenNext local preview
npm run preview:cf
```

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
