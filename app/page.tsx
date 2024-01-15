import { Search, VideoInfo } from "@/containers";
import { MOCK } from "./mock";

const Page = () => {
  return (
    <div>
      <Search />
      <br/>
      {MOCK.map(videoInfo => <VideoInfo key={videoInfo.name} {...videoInfo}/>)}      
    </div>
  )
};

export default Page;
