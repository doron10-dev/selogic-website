// All Hebrew copy for the home page, centralized for easy editing.
// Refined homepage concept — clearer hierarchy, less card repetition,
// illustrative (not live) dispatch-board / portal motif.

import { siteUrls } from "@/data/contact";

/** Shared "all services" destination — used across the homepage. */
const solutionsHref = "/solutions";
const managedItHref = "/managed-it-services";

/* ── 1. Hero ─────────────────────────────────────────────── */
export const hero = {
  eyebrow: "IT מנוהל לעסקים",
  title: "IT מנוהל עם קריאות, סטטוס ושקיפות למנהל",
  body: "סלוג׳יק מנהלת לעסק את התמיכה, התשתיות, הענן, האבטחה והמעקב השוטף, כדי שהמחשוב יעבוד בצורה מסודרת וברורה.",
  primaryCta: { label: "קבעו שיחת אבחון", href: siteUrls.contactDiagnosis },
  secondaryCta: { label: "פתחו קריאת שירות", href: siteUrls.technicalSupport },
  servicesCta: { label: "כל השירותים", href: solutionsHref },
};

/** Compact dispatch board — illustrative status rows, not live data. */
export const heroBoard = {
  title: "לוח קריאות",
  note: "תצוגה להמחשה",
  rows: [
    { kind: "open", label: "פתוח", id: "SL-2041" },
    { kind: "progress", label: "בטיפול", id: "SL-2038" },
    { kind: "waiting", label: "בהמתנה", id: "SL-2035" },
    { kind: "closed", label: "נסגר", id: "SL-2029" },
  ] as const,
};

/* ── 2. Trust strip ──────────────────────────────────────── */
export const trustStrip = {
  items: [
    { title: "מי מטפל", sub: "בעל טיפול אחד לכל קריאה" },
    { title: "מה הסטטוס", sub: "פתוח · בטיפול · בהמתנה · נסגר" },
    { title: "מה תועד", sub: "תיעוד מסודר לכל פעולה" },
    { title: "מה ההמשך", sub: "צעד הבא ברור למנהל" },
  ],
};

/* ── 3. Pain points ──────────────────────────────────────── */
export const painPoints = {
  title: "מוכר לכם? ככה נראה IT בלי ניהול",
  body: "כשאין תהליך אחד וברור, כל תקלה קטנה הופכת לרעש ולחוסר ודאות.",
  items: [
    { title: "תקלות שחוזרות", body: "אותה בעיה מטופלת שוב ושוב בלי פתרון שורש." },
    { title: "עובדים בלי מענה ברור", body: "לא ידוע למי לפנות ומתי תגיע תשובה." },
    { title: "אין בעל טיפול אחד", body: "כל פנייה מתחילה מחדש, בלי אחריות ברורה." },
    { title: "הרשאות וגיבויים לא מסודרים", body: "אין ודאות מי ניגש למה ושאפשר לשחזר." },
    { title: "כמה ספקים בלי תמונת מצב", body: "ספקים לא מתואמים ואין גורם שמרכז." },
    { title: "מנהל שלא יודע מה פתוח", body: "אין שקיפות על מה בטיפול ומה ההמשך." },
  ],
};

/* ── 4. Flagship managed IT ──────────────────────────────── */
export const flagship = {
  eyebrow: "השירות המרכזי",
  title: "שירותי IT מנוהלים — מחלקת מחשוב חיצונית לעסק",
  body: "סלוג׳יק מנהלת את כל סביבת המחשוב של העסק: תמיכה שוטפת, תשתיות, ענן, אבטחה, גיבויים ומעקב. הכול דרך תהליך אחד עם קריאות, סטטוס ותיעוד — כדי שלמנהל תהיה שליטה ברורה.",
  points: [
    "בעל טיפול אחד שמרכז את המחשוב",
    "קריאות, סטטוס ותיעוד לכל פנייה",
    "מעקב שוטף ובקרה למנהל",
  ],
  primaryCta: { label: "שירותי IT מנוהלים", href: managedItHref },
  secondaryCta: { label: "כל השירותים", href: solutionsHref },
};

/* ── 5. How Selogic works ────────────────────────────────── */
export const workflow = {
  title: "איך סלוג׳יק עובדת",
  body: "תהליך אחד וברור לכל פנייה — מפתיחת הקריאה ועד הסיכום.",
  steps: [
    { n: 1, title: "פתיחת קריאה", body: "פנייה במייל, טלפון או כלי עזר הופכת לקריאה מסודרת." },
    { n: 2, title: "שיוך בעל טיפול", body: "לכל קריאה מוגדר בעל טיפול אחראי." },
    { n: 3, title: "טיפול ותיעוד", body: "הטיפול מבוצע ומתועד במקום אחד." },
    { n: 4, title: "עדכון סטטוס", body: "הסטטוס מתעדכן וגלוי ללקוח ולמנהל." },
    { n: 5, title: "סיכום והמשך", body: "סיכום ברור והגדרת הצעד הבא במידת הצורך." },
  ],
};

/* ── 6. Services hub ─────────────────────────────────────── */
export const servicesHub = {
  eyebrow: "מרכז השירותים",
  title: "בחרו את השירות שמתאים לעסק",
  body: "כל השירותים הנדרשים כדי שהמחשוב יעבוד בצורה יציבה, בטוחה ומתועדת.",
  primaryCta: { label: "כל השירותים", href: solutionsHref },
  hint: "לא בטוחים מה מתאים? התחילו מכל השירותים.",
  cards: [
    { title: "אבטחת מידע", body: "הגנה מעשית על משתמשים, ציוד וגישה.", href: "/solutions/cybersecurity" },
    { title: "גיבוי והתאוששות", body: "מדיניות גיבוי, בדיקות שחזור והמשכיות.", href: "/solutions/backup-and-recovery" },
    { title: "Microsoft 365 וענן", body: "ניהול משתמשים, דואר, טימס והרשאות.", href: "/solutions/microsoft-365-and-cloud" },
    { title: "רשתות ותקשורת", body: "אינטרנט, רשת אלחוטית, חומות אש וטלפוניה.", href: "/solutions/networks-and-communication" },
  ],
};

/* ── 7. Portal and transparency ──────────────────────────── */
export const portal = {
  title: "פורטל ושקיפות למנהל",
  body: "מנהל רואה את כל קריאות הארגון, ומשתמש רואה את הקריאות האישיות שלו.",
  note: "המחשה של תהליך שירות, לא נתונים חיים.",
  cta: { label: "פורטל לקוחות", href: siteUrls.clientPortal },
  manager: {
    title: "מנהל / בעלים",
    desc: "כל קריאות הארגון · סטטוסים · תיעוד · SLA · תקלות חוזרות",
    rows: [
      { kind: "open", label: "פתוח" },
      { kind: "progress", label: "בטיפול" },
      { kind: "waiting", label: "בהמתנה" },
      { kind: "closed", label: "נסגר" },
    ] as const,
  },
  user: {
    title: "משתמש",
    desc: "הקריאות שלי · סטטוס טיפול · עדכונים · היסטוריה אישית",
    rows: [
      { kind: "progress", label: "בטיפול" },
      { kind: "closed", label: "נסגר" },
    ] as const,
  },
};

/* ── 8. SLA and control ──────────────────────────────────── */
export const slaControl = {
  title: "SLA ובקרה — בלי מספרים מומצאים",
  body: "היעדים נקבעים יחד עם העסק ומוצגים בפורטל, בלי להציג באתר מספרים כלליים.",
  items: [
    { badge: "בפורטל", label: "סטטוס וקריאות גלויים ללקוח" },
    { badge: "מדיד", label: "זמני תגובה וטיפול נמדדים" },
    { badge: "מתועד", label: "כל פעולה נשמרת ומתועדת" },
    { badge: "לפי יעדים שהוגדרו יחד", label: "SLA מותאם לסוג השירות" },
  ],
};

/* ── 9. Trust comparison ─────────────────────────────────── */
export const comparison = {
  title: "מה מתאים לעסק שלכם",
  body: "השוואה עניינית, בלי לזלזל באף פתרון — כדי שתבחרו מה נכון לכם.",
  columns: [
    {
      title: "טכנאי לפי קריאה",
      body: "מגיע כשקוראים לו. מתאים לתקלה נקודתית, אך בלי תהליך, תיעוד או תמונת מצב שוטפת.",
      highlight: false,
    },
    {
      title: "חברת MSP גדולה",
      body: "מערך רחב ותהליכים, אך לעיתים פחות אישי ופחות מכיר את העסק הספציפי.",
      highlight: false,
    },
    {
      title: "סלוג׳יק",
      body: "צוות שמכיר את העסק · תהליך מסודר · שקיפות למנהל · כתובת אחת לכל המחשוב.",
      highlight: true,
    },
  ],
};

/* ── 10. Audience ────────────────────────────────────────── */
export const audience = {
  title: "למי השירות מתאים",
  body: "לעסקים שצריכים שקט תפעולי, שקיפות ובעלים אחד לניהול המחשוב.",
  items: [
    { title: "משרדים", body: "סביבת עבודה משרדית יציבה." },
    { title: "קליניקות ומרפאות", body: "רציפות שירות ורגישות גבוהה." },
    { title: "עסקים עם כמה סניפים", body: "שליטה בין סניפים ואתרים." },
    { title: "חברות שירות", body: "מענה מהיר למשתמשים וללקוחות." },
    { title: "עסקים בלי איש IT פנימי", body: "גורם אחד שמרכז אחריות ושירות." },
  ],
};

/* ── 11. FAQ ─────────────────────────────────────────────── */
export const faq = {
  title: "שאלות נפוצות",
  body: "תשובות קצרות לשאלות שעולות לפני שמתחילים לעבוד יחד.",
  items: [
    {
      q: "איך פותחים קריאת שירות?",
      a: "אפשר לפנות במייל, טלפון או כלי עזר ללקוח. כל פנייה הופכת לקריאה מסודרת עם סטטוס ובעל טיפול.",
    },
    {
      q: "מה רואה מנהל בפורטל?",
      a: "מנהל רואה את כל קריאות הארגון, סטטוסים, תיעוד ותקלות חוזרות — תמונת מצב ברורה של המחשוב.",
    },
    {
      q: "האם יש לכם SLA מספרי קבוע?",
      a: "היעדים מוגדרים לפי סוג השירות והצרכים של העסק, בלי להציג באתר מספרים כלליים שלא משקפים הסכם אמיתי.",
    },
    {
      q: "האם השירות מתאים לעסק קטן?",
      a: "כן, אם העסק צריך סדר, אחריות ושירות קבוע במקום טיפול נקודתי בלבד.",
    },
    {
      q: "מה כולל אבחון ראשוני?",
      a: "שיחת היכרות, מיפוי כאבים, בדיקת סביבת מחשוב ראשונית והמלצה לתהליך שירות.",
    },
  ],
};

/* ── 12. Final CTA ───────────────────────────────────────── */
export const finalCta = {
  title: "מוכנים להתחיל?",
  body: "בחרו את המסלול שמתאים לכם — לקוחות חדשים וקיימים.",
  prospect: {
    label: "קבעו שיחת אבחון",
    href: siteUrls.contactDiagnosis,
    heading: "לעסקים חדשים",
    sub: "נבין את המצב, נזהה סיכונים ונציע צעד ראשון.",
  },
  client: {
    label: "פתחו קריאת שירות",
    href: siteUrls.technicalSupport,
    heading: "ללקוחות קיימים",
    sub: "פתחו קריאה ונטפל בה לפי התהליך.",
  },
  servicesCta: { label: "כל השירותים", href: solutionsHref },
};
