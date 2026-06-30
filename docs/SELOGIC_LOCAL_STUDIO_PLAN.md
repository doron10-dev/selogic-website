# Selogic Website Local Studio

Local-only planning document for the Hebrew RTL Next.js + Tailwind Selogic website.

This phase is for local website structure, content, design, mobile, and SEO approval only. It does not authorize publishing, deployment, domains, DNS, form delivery, production tracking, or production integrations.

## Local-Only Rules

### No Publish Rule

- Do not publish the site from this phase.
- Do not run deployment commands.
- Do not create production build artifacts for hosting handoff.
- `npm run build` is allowed only as a local quality check.

### No Domain Rule

- Do not connect a domain.
- Do not change DNS.
- Do not add canonical production URLs until the domain is explicitly approved.
- Keep public URLs as local paths unless a real approved external URL is provided.

### No Vercel Production Rule

- Do not connect Vercel.
- Do not create or modify Vercel project settings.
- Do not add `vercel.json` for deployment behavior.
- Do not add production environment variables.
- Do not configure preview or production domains.

### Forms And Integrations Rule

- Forms must stay non-operational locally unless explicitly approved for testing.
- Do not connect Resend, CRM, Zendesk, Atera, WhatsApp, analytics, tracking, chat, calendars, or automations.
- Keep WhatsApp hidden until an approved WhatsApp number exists.
- Keep client portal and remote support as safe local information pages unless approved external URLs are supplied.

## Current Local Status Check

- Deployment config: no `vercel.json`, no `netlify.toml`, and `next.config.js` only enables `reactStrictMode`.
- Production scripts: `package.json` has standard `dev`, `build`, and `start`; no deploy script was found.
- Forms: contact and technical support forms exist, but sending is gated by `FORMS_ENABLED === "true"` and mail env vars. `.env.example` sets `FORMS_ENABLED=false`.
- Mail integration: `resend` is installed and API routes exist, but they should remain disabled until a later approved production phase.
- WhatsApp: `contactDetails.whatsapp` is `null`, so WhatsApp links are hidden in header, footer, and contact method cards.
- External URLs: current visible external links are `tel:` and `mailto:` placeholders. No approved production web URLs are connected.
- Client portal: currently a local page at `/client-portal`; `clientPortalExternal` is `null`.
- Remote support: currently a local safety/instructions page at `/remote-support`.

## Local Review Process

1. Run locally with `npm run dev`.
2. Review pages at `http://localhost:3000`.
3. Approve sitemap before editing page content.
4. Approve homepage content before design refinements.
5. Approve homepage desktop design before mobile refinements.
6. Approve service page content before SEO drafting.
7. Run local QA only: build, responsive review, accessibility pass, link check.
8. Decide separately whether to start a publish phase.

## Approval Gates

- Gate 1: Sitemap approval.
- Gate 2: Homepage content approval.
- Gate 3: Homepage design approval.
- Gate 4: Service pages content approval.
- Gate 5: Mobile approval.
- Gate 6: SEO draft approval.
- Gate 7: Final local QA.
- Gate 8: Publish decision.

No gate implies deployment permission. Publishing requires a separate explicit decision after Gate 8.

## Current Sitemap

### Public Pages

- `/` - Homepage.
- `/managed-it-services` - Managed IT services.
- `/solutions` - Solutions hub.
- `/solutions/cybersecurity` - Cybersecurity.
- `/solutions/backup-and-recovery` - Backup and recovery.
- `/solutions/microsoft-365-and-cloud` - Microsoft 365 and cloud.
- `/solutions/networks-and-communication` - Networks and communication.
- `/information-systems-and-control` - Information systems and control.
- `/client-portal` - Client portal information page.
- `/remote-support` - Remote support safety/instructions page.
- `/about` - About Selogic.
- `/contact` - Contact and diagnosis request.
- `/technical-support` - Technical support ticket form.

### API Routes

- `/api/forms/status` - Local form operational status.
- `/api/contact` - Contact form submission route, gated.
- `/api/support` - Support form submission route, gated.

## Current Navigation

### Header

- בית
- שירותי מחשוב מנוהלים
- פתרונות
- מערכות ובקרה
- פורטל לקוחות
- תמיכה מרחוק
- אודות
- צרו קשר
- CTA: קבעו שיחת אבחון

### Footer

- Navigation: בית, שירותים, פתרונות, אודות.
- Solutions: סייבר, גיבוי, ענן, תקשורת.
- Contact: phone, email, contact, portal, remote support.

## What Should Stay

- RTL Hebrew foundation and design language.
- Boutique managed IT positioning.
- Strong service logic: ticket, owner, status, documentation, SLA, portal.
- No fabricated KPI numbers; current neutral SLA badges are correct for local review.
- WhatsApp hidden until approved.
- Local client portal and remote support pages as placeholders/information pages.
- Form gate that keeps sending disabled by default.
- Service page content model with hero, pain, what Selogic does, gains, workflow, SLA, related services, FAQ, CTA.

## What Should Be Simplified

- Main header navigation is too wide for a small-business IT website and should be reduced.
- `technical-support`, `client-portal`, and `remote-support` should not all compete in the primary menu before the business flow is approved.
- `information-systems-and-control` is valuable but may be too internal/tool-heavy for main navigation.
- Solutions hub can be cleaner if it groups services by buyer problem rather than listing every operational capability.
- Repeated SLA/portal wording across pages should become sharper and less repetitive.

## Pages That Feel Too Generic

- `/solutions/cybersecurity`: needs more Selogic-specific angle, examples, and practical scope.
- `/solutions/microsoft-365-and-cloud`: reads like a standard Microsoft 365 service page; needs clearer business outcomes and common Israeli SMB scenarios.
- `/solutions/networks-and-communication`: good foundation, but needs stronger proof, typical environments, and what "stable" means operationally.
- `/solutions/backup-and-recovery`: needs stronger recovery scenarios, RPO/RTO discussion as placeholders, and decision logic.
- `/about`: solid positioning, but needs founder/team/story credibility when real details are available.

## Homepage Sections Needing Stronger Sales Logic

- Hero: clarify the buyer, promise, and why Selogic now; make the first screen more decisive.
- Pain points: prioritize the top 3 pains for Israeli SMB decision makers instead of six similar cards.
- Process: convert from general "every request is a ticket" into a clear before/after operating model.
- Portal: needs a stronger visual demo and clearer manager/user value.
- Comparison: useful section; sharpen against alternatives without sounding generic.
- Tech stack: should be reframed as "how the service is controlled" and avoid sounding like tool advertising.
- Services: should guide the visitor to the right next page, not just list everything.
- Final CTA: should ask for a local review-approved action only, such as "request diagnosis" later; for now keep as placeholder flow.

## Pages Needing Stronger Content

- `/managed-it-services`: should become the flagship sales page.
- `/solutions`: should work as a chooser, not only a card grid.
- `/client-portal`: needs screenshots/mockups or a local visual concept before it can persuade.
- `/information-systems-and-control`: needs plain-language framing for business owners.
- `/contact`: needs final approved phone/email/business address before production.
- `/technical-support`: should probably stay for existing clients only and not be a primary lead-generation page.

## Sections Needing Visual Polish

- Homepage hero dispatch board: make it feel more like a credible live service dashboard without fake live data.
- Portal manager/user section: needs a stronger product-like visual.
- SLA tiles: good neutral approach, but could use clearer grouping and hierarchy.
- Service cards: improve scan rhythm and CTA affordance.
- Mobile menu: after sitemap approval, simplify and test touch hierarchy.
- Forms fallback: confirm local disabled state is clear and not frustrating.

## Content That Should Wait For Real Business Data

- Real phone number, WhatsApp number, email policy, and address approval.
- Client portal external login URL.
- Remote support tool URLs.
- Customer logos, testimonials, case studies, and industries served.
- SLA numbers, response times, availability windows, and service packages.
- Tool claims, certifications, partnerships, and security guarantees.
- Pricing, contract terms, onboarding timelines, and support hours.
- Canonical domain, social sharing image, structured data organization details.

## Recommended Final Sitemap

### Main Pages

- `/` - Homepage.
- `/managed-it-services` - Flagship service page.
- `/solutions` - Solutions overview.
- `/solutions/cybersecurity` - Cybersecurity.
- `/solutions/backup-and-recovery` - Backup and recovery.
- `/solutions/microsoft-365-and-cloud` - Microsoft 365 and cloud.
- `/solutions/networks-and-communication` - Networks and communication.
- `/client-portal` - Portal and transparency.
- `/about` - About.
- `/contact` - Contact and diagnosis request.

### Internal / Support Pages

- `/technical-support` - Existing client support ticket page only.
- `/remote-support` - Existing client remote support instructions only.
- `/information-systems-and-control` - Either internal service page, supporting portal page, or merged into `/client-portal` unless approved as a strategic differentiator.

## Recommended Navigation

### Primary Navigation

- בית
- שירותי מחשוב מנוהלים
- פתרונות
- פורטל לקוחות
- אודות
- צור קשר

Primary CTA:

- קבעו שיחת אבחון

### Secondary Navigation

- תמיכה טכנית
- תמיכה מרחוק
- Microsoft 365 וענן
- אבטחת מידע
- גיבוי והתאוששות
- רשתות ותקשורת

### Footer Navigation

- בית
- שירותי מחשוב מנוהלים
- פתרונות
- פורטל לקוחות
- אודות
- צור קשר
- תמיכה טכנית
- תמיכה מרחוק
- סייבר
- גיבוי
- Microsoft 365 וענן
- רשתות ותקשורת

### CTA Buttons

- Primary: קבעו שיחת אבחון.
- Secondary: ראו פתרונות.
- Existing client CTA: פתחו קריאת שירות.
- Safety CTA for remote support: התחברו רק לפי הנחיית נציג.

### Main Menu Pages

- `/`
- `/managed-it-services`
- `/solutions`
- `/client-portal`
- `/about`
- `/contact`

### Internal / Service Pages Only

- `/technical-support`
- `/remote-support`
- `/information-systems-and-control`
- Individual solution pages can appear under `/solutions` and in footer, but not all need primary menu placement.

## Recommended Service Page Template

Use this structure for every service page:

1. Hero
   - Who this is for.
   - The main business problem.
   - Selogic's specific promise.
   - Primary CTA and supporting CTA.

2. Pain
   - Concrete symptoms the buyer recognizes.
   - Avoid generic IT language.
   - Prefer 3 to 5 high-signal pains.

3. What Selogic Does
   - Operational scope.
   - What is included.
   - What is coordinated or documented.

4. What The Client Gains
   - Business outcomes.
   - Less downtime, clearer ownership, stronger continuity, better control.

5. How It Works
   - 4 to 5 steps.
   - From diagnosis to onboarding to ongoing service and review.

6. SLA / Transparency / Documentation
   - No fake KPI values.
   - Explain what will be tracked once service terms are approved.
   - Show status, owner, history, and management visibility.

7. Related Services
   - Link to the next logical services.
   - Keep cross-links useful, not exhaustive.

8. FAQ
   - Buyer objections.
   - Practical service questions.
   - Local-only placeholders where business data is missing.

9. CTA
   - Lead CTA: קבעו שיחת אבחון.
   - Existing client CTA: פתחו קריאת שירות.
   - For local review, do not connect submission delivery.

## Page-By-Page Review Checklist

- Homepage: approve positioning, section order, hero promise, CTAs, and mobile first screen.
- Managed IT: approve flagship story, service scope, onboarding flow, and support model.
- Solutions hub: approve grouping, cards, and next-step logic.
- Cybersecurity: approve practical scope and avoid unsupported guarantees.
- Backup: approve recovery language and placeholders for RPO/RTO.
- Microsoft 365: approve licensing, user lifecycle, permissions, and cloud management claims.
- Networks: approve scope for internet, Wi-Fi, firewalls, telephony, and vendor coordination.
- Portal: approve manager/user story and visual concept.
- About: approve story, credibility, and tone.
- Contact: approve contact details and form disabled behavior.
- Technical support: approve existing-client framing.
- Remote support: approve safety wording and no tool URL until approved.

## Mobile Review Checklist

- Header and mobile menu are short enough for one-handed use.
- Primary CTA is visible but not intrusive.
- Hero title and dashboard visual fit small screens.
- Cards collapse cleanly and keep enough spacing.
- Forms are readable and usable with Hebrew RTL input.
- Footer links remain scannable.
- Tap targets are large enough.
- No horizontal scrolling.
- Review at common widths: 360, 390, 430, 768, 1024.

## Content Approval Checklist

- Hebrew tone is professional, direct, and not too corporate.
- No unsupported claims, fake numbers, or fake client proof.
- Terminology is consistent: קריאה, סטטוס, בעל טיפול, תיעוד, SLA, פורטל.
- Each page has a clear buyer problem and Selogic answer.
- All placeholders are marked for approval or replacement.
- Contact channels are approved before production.
- WhatsApp remains hidden until approved.

## Design Approval Checklist

- RTL layout feels natural, not merely translated.
- Visual hierarchy supports quick scanning.
- Signal blue is used for action/status, not decoration everywhere.
- Dashboard and portal visuals feel credible without fake live data.
- Service cards have clear affordance and rhythm.
- Typography is comfortable on mobile.
- Accessibility basics: contrast, focus states, labels, semantic headings.

## SEO Prep Checklist

- Approve final sitemap first.
- Draft one Hebrew page title and meta description per approved page.
- Decide final domain before canonical URLs.
- Add structured data only after business details are approved.
- Prepare local keyword map without publishing.
- Avoid indexing directives until publish strategy is approved.
- Prepare Open Graph image direction locally.
- Keep sitemap/robots generation for a later publish phase.

## Final Publish Checklist

This checklist is intentionally blocked until Gate 8.

- Approve final sitemap, copy, design, mobile, and SEO draft.
- Approve real domain and DNS owner.
- Approve production host.
- Approve environment variables.
- Approve form destination and privacy/legal requirements.
- Approve WhatsApp number or keep hidden.
- Approve portal and remote support URLs.
- Approve analytics/tracking plan or explicitly skip.
- Run final build and QA.
- Publish only after explicit written approval.

## Recommended Next Phase

Gate 1: sitemap approval. After approval, update navigation and page priorities locally, then rewrite homepage content before touching deeper service pages.
