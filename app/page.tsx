"use server";

import "@/styles/globals.css";

import { Search, VideoInfo } from "@/containers";
import { getVideos } from "./actions";
import { Pagination, Tabs } from "@/components";
import { ConfigProvider } from "antd";
import CenteredPagination from "@/components/centeredPagination";

type PageParams = {
  searchParams: {
    page: string;
    channel: string;
  };
};

const Page = async (props: PageParams) => {
  const {
    searchParams: { page, channel },
  } = props;
  const { videos, maxItems } = await getVideos({ channel, page });

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              /* here is your component tokens */
              colorText: "white",
              inkBarColor: "white",
              itemSelectedColor: "white",
              itemHoverColor: "white",
            },
          },
        }}
      >
        <Search />
        <div>{channel}</div>
        <Tabs
          centered
          items={[
            {
              key: "1",
              label: "Videos",
              children: (
                <>
                  {channel ? (
                    <main className="container mx-auto py-32 px-8">
                      <div className="grid lg:grid-cols-5  md:grid-cols-2 grid-cols-1 gap-6 ">
                        {videos &&
                          videos.map((videoInfo) => (
                            <VideoInfo key={videoInfo.name} {...videoInfo} />
                          ))}
                      </div>
                      <CenteredPagination>
                        <Pagination
                          simple
                          total={maxItems}
                          current={Number(page)}
                        />
                      </CenteredPagination>
                    </main>
                  ) : (
                    <div>Busque canal</div>
                  )}
                </>
              ),
            },
            {
              key: "2",
              label: "Channel Stats",
              children: <div>Channel stats</div>,
            },
          ]}
        />
      </ConfigProvider>
    </div>
  );
};

export default Page;
