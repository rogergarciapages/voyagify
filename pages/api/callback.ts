// pages/api/callback.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: "Code is missing" });
  }

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code: code.toString(),
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const data = response.data;

    // Do something with the tokens

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Spotify tokens", error);
    return res.status(500).json({ error: "Failed to fetch tokens" });
  }
}
