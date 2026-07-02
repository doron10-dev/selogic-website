# Selogic — אתר שירותי IT מנוהלים

אתר שיווקי בעברית (RTL) ל-Selogic Technologies — **מצב pre-launch**: תוכן מלא, SEO בסיסי, טפסים מוכנים אך כבויים עד אישור פרודקשן.

## Stack

| שכבה | טכנולוגיה |
|------|-----------|
| Framework | Next.js 15 (App Router) |
| UI | React 19 |
| שפה | TypeScript |
| עיצוב | Tailwind CSS 3 |
| מייל (שרת) | Resend — מופעל רק כש-`FORMS_ENABLED=true` ו-env מוגדר |
| פונטים | Heebo (עברית) + JetBrains Mono |

## הרצה

```bash
npm install
npm run dev
```

האתר יעלה ב-http://localhost:3000

## בנייה לפרודקשן

```bash
npm run build
npm start
```

**הערה:** אם `npm run dev` רץ — עצרו אותו לפני `npm run build`, כדי למנוע שחית `.next`.

## מצב הפרויקט

- **13 עמודים ציבוריים** — דף בית, שירותים, פתרונות, אודות, צור קשר, תמיכה טכנית ועוד
- **תוכן מלא בעברית** — רוב העמודים מונעים מ-`src/data/` ו-`src/data/pages/`
- **תבנית `ServicePage`** — עמודי שירות חוזרים על אותו מבנה (hero, כאב, מה עושים, FAQ, CTA)
- **טפסים** — `/contact` (אבחון) ו-`/technical-support` (קריאת שירות); API ב-`/api/contact`, `/api/support`; **כרגע כבויים** (`FORMS_ENABLED=false` ב-`.env.example`)
- **ערוצי קשר** — מרוכזים ב-`src/data/contact.ts` (טלפון, מייל, וואטסאפ, כתובת)
- **SEO בסיסי** — `metadata` לכל עמוד, `sitemap.ts`, `robots.ts`, תמונת OG
- **לא מוכן לפרודקשן** — דומיין, `NEXT_PUBLIC_SITE_URL`, הפעלת טפסים ו-Vercel production — לפי gates נפרדים

## מבנה הפרויקט

```
src/
├── app/
│   ├── layout.tsx              # Root — lang=he, dir=rtl, Header+Footer, metadata
│   ├── globals.css
│   ├── page.tsx                # דף הבית
│   ├── sitemap.ts / robots.ts
│   ├── api/
│   │   ├── contact/            # POST — טופס אבחון (Resend, gated)
│   │   ├── support/            # POST — טופס קריאה (Resend, gated)
│   │   └── forms/status/       # GET — האם טפסים פעילים
│   ├── managed-it-services/
│   ├── solutions/              # hub + 4 תת-עמודים
│   ├── information-systems-and-control/
│   ├── client-portal/
│   ├── remote-support/
│   ├── about/
│   ├── contact/                # טופס + ערוצי קשר
│   └── technical-support/      # טופס + תוכן inline (מיגרציה ל-data — gate עתידי)
│
├── components/
│   ├── site-header.tsx / site-footer.tsx / site-logo.tsx
│   ├── service-page.tsx        # תבנית עמוד שירות
│   ├── page-hero.tsx / page-faq.tsx / page-final-cta.tsx
│   ├── section.tsx / button.tsx / feature-card.tsx
│   ├── form-notices.tsx
│   └── home/                   # סקשני דף הבית
│
├── data/
│   ├── contact.ts              # ערוצי קשר, URLs, הודעות טפסים
│   ├── nav.ts
│   ├── home.ts                 # תוכן דף הבית
│   ├── shared.ts
│   ├── brand-assets.ts
│   └── pages/                  # תוכן עמודי שירות (ServicePageContent)
│
├── lib/                        # site-url, form-gate, forms, mail
└── hooks/                      # use-forms-operational
```

## עריכת תוכן

- **דף הבית:** `src/data/home.ts`
- **עמודי שירות (רוב):** `src/data/pages/*.ts`
- **ניווט וקשר:** `src/data/contact.ts`, `src/data/nav.ts`
- **טפסים:** לא להפעיל בלי gate — ראו `.env.example`

## משתני סביבה (`.env.example`)

| משתנה | תיאור |
|--------|--------|
| `FORMS_ENABLED` | `false` עד אישור — חוסם שליחה |
| `RESEND_API_KEY` | מפתח Resend (שרת בלבד) |
| `MAIL_FROM` / `MAIL_TO` | שולח ונמען מאומתים |
| `NEXT_PUBLIC_SITE_URL` | בסיס URL ל-sitemap/OG — לא לקבע דומיין פרודקשן לפני אישור |

## מערכת העיצוב

- **בסיס:** slate/ink (תחושת בקרה תפעולית)
- **אקסנט:** signal blue (`#2563EB`)
- **חתימה:** נקודות סטטוס + לוח dispatch
- **טוקנים:** `tailwind.config.ts`, `globals.css`

## תיעוד נוסף

- `docs/SELOGIC_LOCAL_STUDIO_PLAN.md` — workflow ו-gates
- `docs/SELOGIC_MESSAGING_FOUNDATION.md` — messaging
