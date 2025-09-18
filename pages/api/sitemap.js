export default function handler(req, res) {
  res.setHeader("Content-Type", "application/xml");

  const baseUrl = "https://dhavaflix.vercel.app";

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}/</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${baseUrl}/movies</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${baseUrl}/tvshows</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  </urlset>`;

  res.status(200).send(sitemap);
}
