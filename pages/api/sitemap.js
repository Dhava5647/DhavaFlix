export default function handler(req, res) {
  res.setHeader("Content-Type", "application/xml");

  // Example sitemap, you can add more URLs here
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://dhavaflix.vercel.app/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>1.0</priority>
    </url>
  </urlset>`;

  res.status(200).send(sitemap);
}
