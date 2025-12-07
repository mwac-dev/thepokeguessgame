import { NextApiRequest, NextApiResponse } from "next";

if (!process.env.POKE_API) {
  throw new Error("POKE_API environment variable is not defined");
}

const baseUrl = process.env.POKE_API;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await fetch(baseUrl);
  const data = await result.json();

  res.status(200).json(data);
}
