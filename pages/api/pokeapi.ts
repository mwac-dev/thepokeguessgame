import { NextApiRequest, NextApiResponse } from "next";

const baseUrl = process.env.POKE_API!;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await fetch(baseUrl);
  const data = await result.json();

  res.status(200).json(data);
}
