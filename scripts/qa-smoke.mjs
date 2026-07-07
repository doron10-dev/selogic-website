#!/usr/bin/env node
/**
 * Automated smoke QA for Selogic site.
 * Usage: node scripts/qa-smoke.mjs
 * Env: QA_BASE_URL (default http://localhost:3000)
 */

const BASE = (process.env.QA_BASE_URL || "http://localhost:3000").replace(/\/+$/, "");

const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/managed-it-services",
  "/rmm",
  "/technical-support",
  "/client-portal",
  "/information-systems-and-control",
  "/solutions",
  "/solutions/cybersecurity",
  "/solutions/backup-and-recovery",
  "/solutions/microsoft-365-and-cloud",
  "/solutions/networks-and-communication",
  "/remote-support",
  "/contact",
  "/privacy",
  "/terms",
];

const checks = [];
let failed = 0;

function pass(name, detail = "") {
  checks.push({ status: "PASS", name, detail });
}

function fail(name, detail = "") {
  checks.push({ status: "FAIL", name, detail });
  failed += 1;
}

async function fetchText(path, expectStatus = 200) {
  const url = `${BASE}${path}`;
  const res = await fetch(url, { redirect: "follow" });
  const text = await res.text();
  return { url, res, text };
}

async function main() {
  console.log(`\nSelogic QA smoke — ${BASE}\n`);

  // 1. All public routes
  for (const route of PUBLIC_ROUTES) {
    try {
      const { res, text } = await fetchText(route);
      if (res.status !== 200) {
        fail(`Route ${route}`, `HTTP ${res.status}`);
        continue;
      }
      if (!text.includes("Selogic") && !text.includes("סלוג")) {
        fail(`Route ${route}`, "Missing brand marker in HTML");
        continue;
      }
      if (!text.includes("<main")) {
        fail(`Route ${route}`, "Missing <main> landmark");
        continue;
      }
      pass(`Route ${route}`, "200 OK");
    } catch (err) {
      fail(`Route ${route}`, err instanceof Error ? err.message : String(err));
    }
  }

  // 2. Homepage CSS asset
  try {
    const { text } = await fetchText("/");
    const cssMatch = text.match(/href="(\/_next\/static\/css\/[^"]+)"/);
    if (!cssMatch) {
      fail("Homepage CSS", "No CSS link in HTML");
    } else {
      const cssRes = await fetch(`${BASE}${cssMatch[1]}`);
      if (cssRes.status === 200) {
        pass("Homepage CSS", `${cssMatch[1]} (${cssRes.headers.get("content-length") || "?"} bytes)`);
      } else {
        fail("Homepage CSS", `HTTP ${cssRes.status} for ${cssMatch[1]}`);
      }
    }
  } catch (err) {
    fail("Homepage CSS", err instanceof Error ? err.message : String(err));
  }

  // 3. JSON-LD
  try {
    const { text } = await fetchText("/");
    if (text.includes('type="application/ld+json"') && text.includes("FAQPage")) {
      pass("JSON-LD homepage", "FAQPage present");
    } else {
      fail("JSON-LD homepage", "FAQPage script missing");
    }
    if (text.includes("ProfessionalService") || text.includes("LocalBusiness")) {
      pass("JSON-LD business", "Business schema present");
    } else {
      fail("JSON-LD business", "Business schema missing");
    }
  } catch (err) {
    fail("JSON-LD", err instanceof Error ? err.message : String(err));
  }

  // 4. SEO metadata on sample page
  try {
    const { text } = await fetchText("/about");
    if (text.includes('rel="canonical"') || text.includes("canonical")) {
      pass("Canonical /about", "canonical link present");
    } else {
      fail("Canonical /about", "canonical missing");
    }
    if (text.includes('property="og:title"') || text.includes("og:title")) {
      pass("Open Graph /about", "og:title present");
    } else {
      fail("Open Graph /about", "og:title missing");
    }
  } catch (err) {
    fail("SEO /about", err instanceof Error ? err.message : String(err));
  }

  // 5. Accessibility landmarks
  try {
    const { text } = await fetchText("/");
    if (text.includes('id="main-content"') && text.includes("דילוג לתוכן")) {
      pass("Skip link", "main-content + skip link");
    } else {
      fail("Skip link", "skip link or main id missing");
    }
  } catch (err) {
    fail("Skip link", err instanceof Error ? err.message : String(err));
  }

  // 6. Legal + 404
  try {
    const notFound = await fetch(`${BASE}/this-page-does-not-exist-qa`);
    if (notFound.status === 404) {
      const nfText = await notFound.text();
      if (nfText.includes("404") || nfText.includes("לא נמצא")) {
        pass("404 page", "HTTP 404 + branded content");
      } else {
        fail("404 page", "404 status but unexpected body");
      }
    } else {
      fail("404 page", `HTTP ${notFound.status} (expected 404)`);
    }
  } catch (err) {
    fail("404 page", err instanceof Error ? err.message : String(err));
  }

  // 7. Forms status API
  try {
    const res = await fetch(`${BASE}/api/forms/status`);
    const data = await res.json();
    if (res.status === 200 && typeof data.enabled === "boolean") {
      pass("Forms status API", `enabled=${data.enabled}`);
    } else {
      fail("Forms status API", `Unexpected response: ${res.status}`);
    }
  } catch (err) {
    fail("Forms status API", err instanceof Error ? err.message : String(err));
  }

  // 8. Contact diagnosis anchor
  try {
    const { text } = await fetchText("/contact");
    if (text.includes('id="diagnosis"')) {
      pass("Contact form anchor", "#diagnosis present");
    } else {
      fail("Contact form anchor", "#diagnosis missing");
    }
  } catch (err) {
    fail("Contact form anchor", err instanceof Error ? err.message : String(err));
  }

  // 9. Portal login section
  try {
    const { text } = await fetchText("/client-portal");
    if (text.includes('id="portal-login"')) {
      pass("Portal login section", "#portal-login present");
    } else {
      fail("Portal login section", "#portal-login missing");
    }
  } catch (err) {
    fail("Portal login section", err instanceof Error ? err.message : String(err));
  }

  // 10. Breadcrumbs on service page
  try {
    const { text } = await fetchText("/managed-it-services");
    if (text.includes('aria-label="מסלול ניווט"') && text.includes("BreadcrumbList")) {
      pass("Breadcrumbs /managed-it-services", "nav + JSON-LD");
    } else {
      fail("Breadcrumbs /managed-it-services", "breadcrumb nav or schema missing");
    }
  } catch (err) {
    fail("Breadcrumbs /managed-it-services", err instanceof Error ? err.message : String(err));
  }

  // 11. Section anchor nav
  try {
    const { text } = await fetchText("/managed-it-services");
    if (text.includes('aria-label="קפיצה לסקציות בעמוד"') && /href="#[^"]+"/.test(text)) {
      pass("Section nav /managed-it-services", "anchor links present");
    } else {
      fail("Section nav /managed-it-services", "section nav missing");
    }
  } catch (err) {
    fail("Section nav /managed-it-services", err instanceof Error ? err.message : String(err));
  }

  // 12. Chatbot widget
  try {
    const { text } = await fetchText("/");
    if (text.includes('aria-label="פתיחת עוזר ניווט"')) {
      pass("Chatbot widget", "launcher present");
    } else {
      fail("Chatbot widget", "chatbot missing from layout");
    }
  } catch (err) {
    fail("Chatbot widget", err instanceof Error ? err.message : String(err));
  }

  // 13. Dark mode toggle
  try {
    const { text } = await fetchText("/");
    if (
      text.includes('aria-label="החלפת מצב תצוגה"') ||
      text.includes("מצב בהיר פעיל") ||
      text.includes("מצב כהה פעיל")
    ) {
      pass("Dark mode toggle", "theme button present");
    } else {
      fail("Dark mode toggle", "theme toggle missing");
    }
  } catch (err) {
    fail("Dark mode toggle", err instanceof Error ? err.message : String(err));
  }

  // 14. Sitemap + robots
  for (const path of ["/sitemap.xml", "/robots.txt"]) {
    try {
      const res = await fetch(`${BASE}${path}`);
      if (res.status === 200) {
        pass(path, "200 OK");
      } else {
        fail(path, `HTTP ${res.status}`);
      }
    } catch (err) {
      fail(path, err instanceof Error ? err.message : String(err));
    }
  }

  // Report
  const passed = checks.filter((c) => c.status === "PASS").length;
  console.log("Results:");
  for (const c of checks) {
    const icon = c.status === "PASS" ? "✓" : "✗";
    console.log(`  ${icon} ${c.name}${c.detail ? ` — ${c.detail}` : ""}`);
  }
  console.log(`\n${passed}/${checks.length} passed, ${failed} failed\n`);

  process.exit(failed > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
