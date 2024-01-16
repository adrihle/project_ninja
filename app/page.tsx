import "@/styles/globals.css";

import { Search, VideoInfo } from "@/containers";
import { MOCK } from "./mock";

const Page = () => {
  return (
    <div className="bg-slate-900">
      <Search />
      <br />
      <main className="container mx-auto py-32 px-8">
        <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-6 ">
          {MOCK.map((videoInfo) => (
            <VideoInfo key={videoInfo.name} {...videoInfo} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
