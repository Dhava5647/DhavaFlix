// pages/api/search.js
export default async function handler(req, res) {
  const { query } = req.query; // Example: /api/search?query=batman

  if (!query) {
    return res.status(400).json({ error: "Missing search query" });
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${encodeURIComponent(
        query
      )}&page=1&include_adult=false`
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500
