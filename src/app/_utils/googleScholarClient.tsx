import dotenv from 'dotenv';
import { getJson } from 'serpapi';
dotenv.config();

export async function getScholarResultsByAuthor(author: string, num: number) {
  const response = await getJson({
    engine: 'google_scholar',
    q: `author:${author}`,
    api_key: process.env.SERPAPI_KEY,
    num,
  });
  return response.organic_results as Array<any>;
}
