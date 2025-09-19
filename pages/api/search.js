export default async function handler(req, res) {
  try {
    const data = { message: "search works!" }; // temporary response
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
