// pages/api/search.js
export default async function handler(req, res) {
  const { query } = req.query; // user search query

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_KEY}&language=en-US&query=${encodeURIComponent(
        query
      )}&page=1`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to search" });
  }
}
