'use server'

import "@/styles/globals.css";

import { Search, VideoInfo } from "@/containers";
import { getVideos } from "./actions";
import { Pagination, Tabs } from "@/components";

type PageParams = {
  searchParams: {
    page: string,
    channel: string,
  },
};

const Page = async (props: PageParams) => {
  const { searchParams: { page, channel } } = props;
  const { videos, maxItems } = await getVideos({ channel, page });

  return (
    <div>
      <Search />
      <div>{channel}</div>
      <Tabs centered items={[
        {
          key: '1',
          label: 'Videos',
          children: (
            <>
              {channel ? (
                <main className="container mx-auto py-32 px-8">
                  <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-6 ">
                    {videos.map((videoInfo) => (
                      <VideoInfo key={videoInfo.name} {...videoInfo} />
                    ))}
                  </div>
                  <Pagination simple total={maxItems} current={Number(page)}/>
                </main>
              ) : (
                <div>Busque canal</div>
              )}
            </>
          )
        },
        {
          key: '2',
          label: 'Channel Stats',
          children: <div>Channel stats</div>
        }
      ]} />
    </div>
  );
};

export default Page;
