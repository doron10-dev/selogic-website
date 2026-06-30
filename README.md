# Selogic — אתר שירותי IT מנוהלים

אתר Next.js (App Router) + Tailwind CSS, בעברית עם RTL מלא.
נבנה כבסיס נקי להמשך פיתוח ב-Cursor.

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

## מבנה הפרויקט

```
src/
├── app/
│   ├── layout.tsx                      # Root layout — RTL, פונט Heebo, Header+Footer
│   ├── globals.css                     # Tailwind + סגנונות בסיס + reduced-motion
│   ├── page.tsx                        # עמוד הבית (מרכיב את כל הסקשנים)
│   ├── managed-it-services/            # שלד עמוד
│   ├── solutions/                      # שלד עמוד
│   ├── information-systems-and-control/ # שלד עמוד
│   ├── client-portal/                  # שלד עמוד
│   ├── remote-support/                 # שלד עמוד
│   ├── about/                          # שלד עמוד
│   ├── contact/                        # עמוד מלא + טופס יצירת קשר
│   └── technical-support/              # עמוד מלא + טופס פתיחת קריאה
│
├── components/
│   ├── site-header.tsx                 # ניווט עליון + תפריט מובייל
│   ├── site-footer.tsx                 # פוטר 4 עמודות
│   ├── section.tsx                     # Section + SectionHeading (ריתמוס אחיד)
│   ├── button.tsx                      # כפתור (primary / secondary / ghost)
│   ├── status-dot.tsx                  # נקודת סטטוס — האלמנט החתימה
│   ├── feature-card.tsx                # FeatureCard + CardGrid (שימוש חוזר)
│   ├── page-stub.tsx                   # תבנית שלד לעמודים פנימיים
│   └── home/
│       ├── hero.tsx                    # Hero + לוח קריאות חי (Dispatch Board)
│       ├── portal-section.tsx          # סקשן פורטל עם טאבים (מנהל/משתמש)
│       ├── faq-section.tsx             # אקורדיון שאלות נפוצות
│       └── sections.tsx                # יתר הסקשנים הסטטיים
│
└── data/
    ├── nav.ts                          # פריטי ניווט + ערוצי יצירת קשר
    └── home.ts                         # כל התוכן של עמוד הבית (לעריכה קלה)
```

## הערות פיתוח

- **כל הטקסטים בעברית מרוכזים ב-`src/data/`** — אפשר לערוך תוכן בלי לגעת ב-JSX.
- **המספרים בלוח/מדדים הם placeholders** (`{כמות}`, `{אחוז}`, `—`). יש לחבר למקור נתונים אמיתי.
- **טפסים** (`contact`, `technical-support`) כרגע מדפיסים ל-console. יש לחבר ל-backend / Zendesk / CRM — חפשו `// TODO` בקוד.
- **ערוצי קשר** (טלפון/וואטסאפ/מייל) הם placeholders ב-`src/data/nav.ts` — עדכנו למספרים האמיתיים.
- **שלדי העמודים** הפנימיים מכילים outline של מה שצריך למלא בכל עמוד.

## מערכת העיצוב

- **בסיס:** slate/ink קריר (תחושת "בקרה תפעולית")
- **אקסנט יחיד:** signal blue (`#2563EB`) — "מנוטר / חי"
- **אלמנט חתימה:** נקודות סטטוס + שורות קריאות שמדמות לוח דיספאצ׳ אמיתי
- **פונט:** Heebo (עברית) + JetBrains Mono (מספרים/מזהי קריאות)
- כל הטוקנים מוגדרים ב-`tailwind.config.ts`
