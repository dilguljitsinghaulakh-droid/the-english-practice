import type { APIRoute } from 'astro';
import { businessConfig } from '../data/businessConfig';

const pages = [
  "",
  "/english-for-teachers",
  "/corporate-english",
  "/our-approach",
  "/about",
  "/contact"
];

export const GET: APIRoute = async () => {
  const baseUrl = businessConfig.websiteUrl || "https://theenglishpractice.com";
  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
