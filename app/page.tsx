"use server";

import "@/styles/globals.css";

import { ChannelStats, Search, VideoInfo } from "@/containers";
import { getVideos } from "./actions";
import { Pagination, Tabs } from "@/components";
import { ConfigProvider } from "antd";
import { redirect } from "next/navigation";

type PageParams = {
  searchParams: {
    page: string;
    channel: string;
    auth: string;
  };
};

const Page = async (props: PageParams) => {
  // AQUI SACAMOS LOS PARAMETROS DE BUSQUEDA (QUERY PARAM) DE LA URL
  // Y LOS ASIGNAMOS A VARIABLES, PAGE, CHANNEL, AUTH
  const {
    searchParams: { page, channel, auth },
  } = props;

  // FORMA PROVISIONAL PARA CONTROLAR SI EL USUARIO ESTA AUNTENTICADO O NO
  // ESTO ES UN APAÑO PARA LA PRUEBA, SE HARIA DE OTRA FORMA EN SITUACIONES REALES
  // PORQUE NO LO HICIMOS ASI? PORQUE SIEMPRE ES UNA FUNCIONALIDAD QUE SOLO SE HACE UNA VEZ
  // EN LA APLICACION Y TENIA MAS SENTIDO CENTRARNOS EN OTRAS COSAS
  if (!JSON.parse(auth)) {
    // SI EL USUARIO NO ESTA AUNTENTICADO, REDIRIGIMOS AL LOGIN
    redirect('/login');
  }

  // LLAMAMOS AL ACTION
  const { videos, maxItems, channelStats } = await getVideos({ channel, page });

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
                      <Pagination
                        simple
                        total={maxItems}
                        current={Number(page)}
                      />
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
              children: (
                <>
                  <ChannelStats channelStats={channelStats}/>
                </>
              ),
            },
          ]}
        />
      </ConfigProvider>
    </div>
  );
};

export default Page;
