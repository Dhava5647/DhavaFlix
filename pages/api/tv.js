// pages/api/tv.js
export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=0627e9682f6c3eca80da4e2a6217ce57&language=en-US&page=1`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch TV shows" });
  }
}
