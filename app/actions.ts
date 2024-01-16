'use server'

import { MOCK } from "./mock";

export async function login(data: any) {
  console.log({ data });
}

function createChunks(array: any[], chunkSize: number) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}

export async function getVideos({ page }: any) {
  const chunks = createChunks(MOCK, 10);
  return {
    videos: chunks[page-1],
    page,
    maxItems: MOCK.length,
  };
}
