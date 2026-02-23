export default async function handler(req, res) {
    const { q } = req.query;

    if (!q) {
        return res.status(400).json({ error: "No query provided" });
    }

    try {
        const response = await fetch(
            `https://games.roblox.com/v1/games/search?keyword=${q}&limit=20`
        );

        const data = await response.json();

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch Roblox data" });
    }
}