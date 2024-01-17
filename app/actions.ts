'use server'

import { redirect } from "next/navigation";
import { VIDEOS, CHANNEL_STATS } from "./mock";

const MAX_VIDEO_PER_PAGE = 10 as const;
const CREDENTIALS = {
  USERNAME: 'CEO',
  PASSWORD: '123456',
};

export async function login(formData: FormData) {
  const username = formData.get('username');
  const password = formData.get('password');

  if (username === CREDENTIALS.USERNAME && password === CREDENTIALS.PASSWORD) {
    redirect('/?auth=true');
  }
}

function createVideoChunks(videos: (typeof VIDEOS)) {
  const result = [];
  for (let i = 0; i < videos.length; i += MAX_VIDEO_PER_PAGE) {
    const chunk = videos.slice(i, i + MAX_VIDEO_PER_PAGE);
    result.push(chunk);
  }
  return result;
}

const postprocessVideoInfo = (videos: (typeof VIDEOS)) => {
  return videos.map((video, index) => {
    return {
      ...video,
      image: video.image.replace('*', `${index}`),
    };
  });
};

export async function getVideos({ page }: any) {
  const chunks = createVideoChunks(VIDEOS);
  return {
    videos: postprocessVideoInfo(chunks[page-1]),
    channelStats: CHANNEL_STATS,
    page,
    maxItems: VIDEOS.length,
  };
}
