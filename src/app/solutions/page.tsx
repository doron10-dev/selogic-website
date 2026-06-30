import type { Metadata } from "next";
import { CardGrid } from "@/components/feature-card";
import { PageFinalCta } from "@/components/page-final-cta";
import { PageFaq } from "@/components/page-faq";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { defaultFinalCta } from "@/data/shared";
import { solutionsHubCards, solutionsHubFaq } from "@/data/pages/solutions-hub";

export const metadata: Metadata = {
  title: "פתרונות | Selogic",
  description:
    "פתרונות IT מקצה לקצה — תמיכה, אבטחה, גיבוי, Microsoft 365, רשתות, מערכות בקרה, פורטל לקוחות ו-SLA.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="פתרונות"
        title="פתרונות IT מקצה לקצה לעסק"
        intro="Selogic מספקת לעסקים את כל מה שצריך כדי שהמחשוב יעבוד — יציב, בטוח ומתועד. כל פנייה, בכל תחום, הופכת לקריאת שירות עם סטטוס, בעל טיפול ותיעוד בפורטל."
      />

      <Section tone="paper">
        <SectionHeading
          title="בחרו את הפתרון שמתאים לעסק"
          body="כל פתרון הוא חלק מתהליך שירות מסודר — עם פורטל, SLA ושקיפות. לא חייבים «הכל או כלום»."
        />
        <CardGrid items={solutionsHubCards} cols={3} />
      </Section>

      <Section tone="mute">
        <SectionHeading
          title="מה משותף לכל הפתרונות"
          body="שירות בוטיק אישי — עם מערכות, תיעוד ומדידה."
        />
        <CardGrid
          items={[
            { title: "קריאות מסודרות", body: "כל פנייה — במייל, בטלפון, בטופס פתיחת קריאה או בכלי עזר — הופכת לקריאה." },
            { title: "פורטל לקוחות", body: "מנהלים ומשתמשים רואים סטטוס, היסטוריה ו-SLA." },
            { title: "תיעוד מלא", body: "כל טיפול, החלטה ופעולה — נשמרים." },
            { title: "שירות מדיד", body: "מדדי SLA וביצועים — ברורים ונגישים בפורטל." },
            { title: "יחס אישי", body: "חברת בוטיק שמכירה את העסק." },
            { title: "בעלים אחד", body: "Selogic מרכזת אחריות — לא אתם." },
          ]}
          cols={3}
        />
      </Section>

      <PageFaq
        title={solutionsHubFaq.title}
        body={solutionsHubFaq.body}
        items={solutionsHubFaq.items}
      />

      <PageFinalCta
        title={defaultFinalCta.title}
        body={defaultFinalCta.body}
        primary={defaultFinalCta.primary}
        secondary={defaultFinalCta.secondary}
      />
    </>
  );
}
