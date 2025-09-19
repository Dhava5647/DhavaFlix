// pages/api/search.js
export default async function handler(req, res) {
  const { query } = req.query;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=0627e9682f6c3eca80da4e2a6217ce57&language=en-US&query=${query}&page=1`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to search" });
  }
}
